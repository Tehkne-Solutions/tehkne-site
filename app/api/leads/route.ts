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

type BuiltLead = ReturnType<typeof buildLead>;

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
  if (!value) return true;
  try {
    const url = new URL(value);
    return SITE_HOSTS.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
}

function safeResponseExcerpt(value: string) {
  return value.replace(/https?:\/\/[^\s]+/g, '[url]').replace(/[A-Za-z0-9_-]{24,}/g, '[token]').slice(0, 420);
}

function looksLikeEmptyPlaceholder(lead: BuiltLead) {
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

function buildMessage(lead: BuiltLead) {
  return lead.whatsappMessage || [
    `Olá, Tehkné! Vim pela página ${lead.page || 'site'}.`,
    `Contexto: ${lead.context || 'não informado'}.`,
    '',
    `Nome: ${lead.nome}`,
    `Empresa/projeto: ${lead.empresa || 'não informado'}`,
    `E-mail: ${lead.email || 'não informado'}`,
    `Telefone: ${lead.telefone || 'não informado'}`,
    `Serviço: ${lead.servico}`,
    `Perfil de investimento: ${lead.orcamento || 'não informado'}`,
    `Prazo/urgência: ${lead.prazo || 'não informado'}`,
    `Mensagem: ${lead.mensagem}`
  ].join('\n');
}

function mapToHubLead(lead: BuiltLead) {
  const pageUrl = lead.page || lead.referer;
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
      `Mensagem WhatsApp: ${buildMessage(lead)}`
    ].join('\n'),
    page_url: pageUrl,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    consent: true
  };
}

function mapToLegacyWebhookLead(lead: BuiltLead) {
  const normalized = mapToHubLead(lead);
  return {
    ...normalized,
    created_at: lead.createdAt,
    updated_at: lead.createdAt,
    status: 'Novo',
    user_agent: lead.userAgent,
    referer: lead.referer,
    context: lead.context,
    budget_profile: lead.orcamento,
    deadline: lead.prazo,
    whatsapp_message: buildMessage(lead),
    // Campos PT-BR preservados para compatibilidade com scripts antigos.
    nome: lead.nome,
    empresa: lead.empresa,
    telefone: lead.telefone,
    servico: lead.servico,
    orcamento: lead.orcamento,
    prazo: lead.prazo,
    mensagem: lead.mensagem,
    page: lead.page,
    message_full: buildMessage(lead),
    lead: {
      name: normalized.name,
      email: normalized.email,
      phone: normalized.phone,
      company: normalized.company,
      interest: normalized.interest,
      message: normalized.message,
      page_url: normalized.page_url,
      source: normalized.source,
      form: normalized.form,
      status: 'Novo'
    }
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

function validateLead(lead: BuiltLead) {
  if (looksLikeEmptyPlaceholder(lead)) return 'empty_placeholder';
  if (!isTrustedReferer(lead.referer)) return 'invalid_referer';
  if (!lead.formStartedAt) return 'missing_form_started_at';
  if (lead.elapsedMs > 0 && lead.elapsedMs < 2500) return 'submitted_too_fast';
  if (lead.interactionScore < 2) return 'low_interaction_score';
  if (!lead.nome || lead.nome.length < 2) return 'missing_name';
  if (!lead.servico) return 'missing_service';
  if (!lead.mensagem || lead.mensagem.length < 5) return 'missing_message';
  if (!lead.email && !lead.telefone) return 'missing_contact';
  if (!isValidEmail(lead.email)) return 'invalid_email';
  if (!isValidPhone(lead.telefone)) return 'invalid_phone';
  if (hasSpamPattern(`${lead.nome}\n${lead.empresa}\n${lead.email}\n${lead.telefone}\n${lead.mensagem}\n${lead.whatsappMessage}`)) return 'spam_pattern';
  return null;
}

async function deliverToHub(lead: BuiltLead) {
  const hubUrl = process.env.TEHKNE_HUB_LEADS_URL;
  const hubKey = process.env.TEHKNE_HUB_INTEGRATION_KEY;

  if (!hubUrl || !hubKey) {
    return { ok: false, skipped: true, reason: 'hub_not_configured' };
  }

  const response = await fetch(hubUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Tehkne-Integration-Key': hubKey
    },
    body: JSON.stringify(mapToHubLead(lead))
  });

  const text = await response.text().catch(() => '');
  const data = text ? JSON.parse(text).catch?.(() => null) : null;

  if (!response.ok) {
    return { ok: false, status: response.status, error: 'hub_failed', response: safeResponseExcerpt(text) };
  }

  return { ok: true, status: response.status, data };
}

async function deliverToLegacyWebhook(lead: BuiltLead) {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  const webhookKey = process.env.LEADS_WEBHOOK_KEY;

  if (!webhookUrl) {
    return { ok: false, skipped: true, reason: 'legacy_webhook_not_configured' };
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (webhookKey) headers['X-Tehkne-Lead-Key'] = webhookKey;

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(mapToLegacyWebhookLead(lead))
  });

  const text = await response.text().catch(() => '');
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  if (!response.ok) {
    return { ok: false, status: response.status, error: 'legacy_webhook_failed', response: safeResponseExcerpt(text) };
  }

  if (data && typeof data === 'object' && 'ok' in data && (data as { ok?: unknown }).ok === false) {
    return { ok: false, status: response.status, error: 'legacy_webhook_rejected', response: data };
  }

  return { ok: true, status: response.status, data: data ?? safeResponseExcerpt(text) };
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

  const deliveries = {
    hub: await deliverToHub(lead),
    legacyWebhook: await deliverToLegacyWebhook(lead)
  };

  const delivered = Object.values(deliveries).some((delivery) => delivery.ok === true);

  if (!delivered) {
    const allSkipped = Object.values(deliveries).every((delivery) => delivery.skipped === true);
    return NextResponse.json({
      ok: false,
      error: allSkipped ? 'lead_delivery_not_configured' : 'lead_delivery_failed',
      deliveries
    }, { status: allSkipped ? 500 : 502 });
  }

  return NextResponse.json({ ok: true, deliveries });
}
