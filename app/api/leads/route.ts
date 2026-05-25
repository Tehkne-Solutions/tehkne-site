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
};

function sanitize(value: unknown, maxLength = 4000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function hasSpamPattern(text: string) {
  const normalized = text.toLowerCase();
  const linkCount = (normalized.match(/https?:\/\//g) ?? []).length;
  const repeatedChars = /(.)\1{18,}/.test(normalized);
  const tooManyEmails = (normalized.match(/[\w.-]+@[\w.-]+\.[a-z]{2,}/g) ?? []).length > 3;
  return linkCount > 3 || repeatedChars || tooManyEmails;
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
    userAgent: request.headers.get('user-agent') ?? '',
    referer: request.headers.get('referer') ?? '',
    ipHint: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
  };
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

  if (!webhookUrl) {
    return { skipped: true, reason: 'legacy_webhook_not_configured' };
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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

  if (!lead.nome || !lead.servico || !lead.mensagem) {
    return NextResponse.json({ ok: false, error: 'missing_required_fields' }, { status: 400 });
  }

  if (!lead.email && !lead.telefone) {
    return NextResponse.json({ ok: false, error: 'missing_contact' }, { status: 400 });
  }

  if (hasSpamPattern(`${lead.nome}\n${lead.empresa}\n${lead.email}\n${lead.mensagem}`)) {
    return NextResponse.json({ ok: false, error: 'spam_pattern' }, { status: 422 });
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
    return NextResponse.json({ ok: false, error: 'no_delivery_configured', lead }, { status: 500 });
  }

  return NextResponse.json({ ok: true, lead, deliveries, warnings });
}
