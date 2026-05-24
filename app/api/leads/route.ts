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
};

function sanitize(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 4000) : '';
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadPayload | null;

  if (!body) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
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
    referer: request.headers.get('referer') ?? ''
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
