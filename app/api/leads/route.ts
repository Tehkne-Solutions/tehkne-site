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

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadPayload | null;

  if (!body) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  if (sanitize(body.website)) {
    return NextResponse.json({ ok: true, skipped: 'honeypot' });
  }

  const lead = {
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

  if (!lead.nome || !lead.servico || !lead.mensagem) {
    return NextResponse.json({ ok: false, error: 'missing_required_fields' }, { status: 400 });
  }

  if (hasSpamPattern(`${lead.nome}\n${lead.empresa}\n${lead.email}\n${lead.mensagem}`)) {
    return NextResponse.json({ ok: false, error: 'spam_pattern' }, { status: 422 });
  }

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: 'webhook_failed' }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, lead });
}