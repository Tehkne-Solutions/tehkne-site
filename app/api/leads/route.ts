import { NextResponse } from 'next/server';

type LeadPayload = {
  nome?: string;
  empresa?: string;
  email?: string;
  telefone?: string;
  servico?: string;
  orcamento?: string;
  prazo?: string;
  mensagem?: string;
  website?: string;
  page?: string;
  context?: string;
  source?: string;
  createdAt?: string;
  message?: string;
  formStartedAt?: string;
  elapsedMs?: number;
  interactionScore?: number;
};

const SITE_HOSTS = ['tehknesolutions.com.br', 'www.tehknesolutions.com.br', 'tehkne-site.vercel.app', 'localhost'];

function sanitize(value: unknown, maxLength = 4000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function normalize(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
}

function hasSpamPattern(text: string) {
  const normalized = text.toLowerCase();
  const linkCount = (normalized.match(/https?:\/\//g) ?? []).length;
  const repeatedChars = /(.)\1{18,}/.test(normalized);
  const tooManyEmails = (normalized.match(/[\w.-]+@[\w.-]+\.[a-z]{2,}/g) ?? []).length > 3;
  return linkCount > 3 || repeatedChars || tooManyEmails;
}

function isValidEmail(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '');
  return !value || digits.length >= 10;
}

function isTrustedReferer(value: string) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return SITE_HOSTS.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
}

function looksLikeEmptyPlaceholder(lead: ReturnType<typeof buildLead>) {
  const combined = normalize([
    lead.nome,
    lead.empresa,
    lead.email,
    lead.telefone,
    lead.servico,
    lead.orcamento,
    lead.prazo,
    lead.page,
    lead.mensagem,
    lead.whatsappMessage
  ].join('\n'));

  const oldPlaceholder = combined.includes('ola, vim pelo site da tehkne solutions')
    && combined.includes('nome: -')
    && combined.includes('email: -')
    && combined.includes('mensagem: -');

  const currentPlaceholder = combined.includes('nome: nao informado')
    && combined.includes('servico: nao selecionado')
    && combined.includes('mensagem: nao informada');

  const allBusinessFieldsEmpty = !lead.nome && !lead.email && !lead.telefone && !lead.servico && !lead.mensagem;

  return oldPlaceholder || currentPlaceholder || allBusinessFieldsEmpty;
}

function mapToHubLead(lead: ReturnType<typeof buildLead>) {
  return {
    source: lead.source || 'tehkne-site',
    form: 'next-contact-form',
    name: lead.nome,
    email: lead.email,
    phone: lead.telefone,
    company: lead.empresa,
    interest: lead.servico,
    message: [
      lead.mensagem,
      '',
      `Contexto: ${lead.context || 'não informado'}`,
      `Perfil de investimento: ${lead.orcamento || 'não informado'}`,
      `Prazo/urgência: ${lead.prazo || 'não informado'}`,
      `Mensagem WhatsApp: ${lead.whatsappMessage || 'não informada'}`
    ].join('\n'),
    page_url: lead.referer || lead.page,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    consent: true
  };
}

function buildLead(body: LeadPayload, request: Request) {
  return {
    createdAt: sanitize(body.createdAt) || new Date().toISOString(),
    source: sanitize(body.source, 120) || 'site-tehkne',
    page: sanitize(body.page, 180),
    context: sanitize(body.context, 600),
    nome: sanitize(body.nome, 120),
    empresa: sanitize(body.empresa, 160),
    email: sanitize(body.email, 180),
    telefone: sanitize(body.telefone, 80),
    servico: sanitize(body.servico, 220),
    orcamento: sanitize(body.orcamento, 160),
    prazo: sanitize(body.prazo, 120),
    mensagem: sanitize(body.mensagem),
    whatsappMessage: sanitize(body.message),
    formStartedAt: sanitize(body.formStartedAt, 80),
    elapsedMs: typeof body.elapsedMs === 'number' ? body.elapsedMs : 0,
    interactionScore: typeof body.interactionScore === 'number' ? body.interactionScore : 0,
    userAgent: request.headers.get('user-agent') ?? '',
    referer: request.headers.get('referer') ?? '',
    ipHint: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
  };
}

function validateLead(lead: ReturnType<typeof buildLead>) {
  if (looksLikeEmptyPlaceholder(lead)) return 'empty_placeholder';
  if (!isTrustedReferer(lead.referer)) return 'invalid_referer';
  if (!lead.formStartedAt) return 'missing_form_started_at';
  if (lead.elapsedMs > 0 && lead.elapsedMs < 2500) return 'submitted_too_fast';
  if (lead.interactionScore < 2) return 'low_interaction_score';
  if (!lead.nome || lead.nome.length < 2) return 'missing_name';
  if (!lead.servico) return 'missing_service';
  if (!lead.mensagem || lead.mensagem.length < 10) return 'missing_message';
  if (!lead.email && !lead.telefone) return 'missing_contact';
  if (!isValidEmail(lead.email)) return 'invalid_email';
  if (!isValidPhone(lead.telefone)) return 'invalid_phone';
  if (hasSpamPattern(`${lead.nome}\n${lead.empresa}\n${lead.email}\n${lead.telefone}\n${lead.mensagem}\n${lead.whatsappMessage}`)) return 'spam_pattern';
  return null;
}

async function deliverToHub(lead: ReturnType<typeof buildLead>) {
  const hubUrl = process.env.TEHKNE_HUB_LEADS_URL;
  const hubKey = process.env.TEHKNE_HUB_INTEGRATION_KEY;

  if (!hubUrl || !hubKey) {
    return { skipped: true, reason: 'hub_not_configured' };
  }

  const response = await fetch(hubUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Tehkne-Integration-Key': hubKey
    },
    body: JSON.stringify(mapToHubLead(lead))
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(`hub_failed:${response.status}`);
  }

  return { ok: true, data };
}

async function deliverToLegacyWebhook(lead: ReturnType<typeof buildLead>) {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  const webhookKey = process.env.LEADS_WEBHOOK_KEY;

  if (!webhookUrl) {
    return { skipped: true, reason: 'legacy_webhook_not_configured' };
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (webhookKey) headers['X-Tehkne-Lead-Key'] = webhookKey;

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(lead)
  });

  if (!response.ok) {
    throw new Error(`legacy_webhook_failed:${response.status}`);
  }

  return { ok: true };
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadPayload | null;

  if (!body) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  if (sanitize(body.website)) {
    return NextResponse.json({ ok: true, skipped: 'honeypot' });
  }

  const lead = buildLead(body, request);
  const validationError = validateLead(lead);

  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 422 });
  }

  const deliveries: Record<string, unknown> = {};
  const warnings: string[] = [];

  try {
    deliveries.hub = await deliverToHub(lead);
  } catch (error) {
    warnings.push(error instanceof Error ? error.message : 'hub_failed');
    deliveries.hub = { ok: false };
  }

  try {
    deliveries.legacyWebhook = await deliverToLegacyWebhook(lead);
  } catch (error) {
    warnings.push(error instanceof Error ? error.message : 'legacy_webhook_failed');
    deliveries.legacyWebhook = { ok: false };
  }

  if (warnings.length > 0 && !process.env.TEHKNE_HUB_LEADS_URL && !process.env.LEADS_WEBHOOK_URL) {
    return NextResponse.json({ ok: false, error: 'no_delivery_configured' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, deliveries, warnings });
}