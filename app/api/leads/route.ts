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
  page?: string;
  context?: string;
  source?: string;
  createdAt?: string;
  message?: string;
  website?: string;
};

const submissions = new Map<string, number[]>();

function sanitize(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 4000) : '';
}

function getClientKey(request: Request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;
  const recent = (submissions.get(key) ?? []).filter((time) => now - time < windowMs);

  if (recent.length >= maxRequests) {
    submissions.set(key, recent);
    return true;
  }

  submissions.set(key, [...recent, now]);
  return false;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadPayload | null;

  if (!body) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  if (sanitize(body.website)) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json({ ok: false, error: 'too_many_requests' }, { status: 429 });
  }

  const lead = {
    createdAt: sanitize(body.createdAt) || new Date().toISOString(),
    source: sanitize(body.source) || 'site-tehkne',
    page: sanitize(body.page),
    context: sanitize(body.context),
    nome: sanitize(body.nome),
    empresa: sanitize(body.empresa),
    email: sanitize(body.email),
    telefone: sanitize(body.telefone),
    servico: sanitize(body.servico),
    orcamento: sanitize(body.orcamento),
    prazo: sanitize(body.prazo),
    mensagem: sanitize(body.mensagem),
    whatsappMessage: sanitize(body.message),
    userAgent: request.headers.get('user-agent') ?? '',
    referer: request.headers.get('referer') ?? '',
    ipHashKey: clientKey === 'unknown' ? 'unknown' : 'captured'
  };

  if (!lead.nome || !lead.servico || !lead.mensagem) {
    return NextResponse.json({ ok: false, error: 'missing_required_fields' }, { status: 400 });
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
