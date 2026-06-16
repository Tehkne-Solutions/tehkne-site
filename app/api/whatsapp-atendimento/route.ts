import { NextResponse } from 'next/server';

type Department = {
  id: string;
  label: string;
  subtitle: string;
  phone: string;
};

export const dynamic = 'force-dynamic';

function normalizePhone(value: string | undefined): string {
  const digits = (value ?? '').replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('55')) return digits;
  return `55${digits}`;
}

function buildDepartments(): Department[] {
  const defaultPhone =
    normalizePhone(process.env.TEHKNE_WHATSAPP_PHONE) ||
    normalizePhone(process.env.NEXT_PUBLIC_TEHKNE_WHATSAPP_PHONE) ||
    '5519998930846';

  return [
    {
      id: 'sistemas-produto-digital',
      label: 'Sistemas e produto digital',
      subtitle: 'Sistemas sob medida, SaaS, portais, dashboards e arquitetura de soluções',
      phone: normalizePhone(process.env.TEHKNE_WHATSAPP_SISTEMAS_PHONE) || defaultPhone
    },
    {
      id: 'sites-wordpress-lps',
      label: 'Sites, WordPress e landing pages',
      subtitle: 'Sites institucionais, WordPress avançado, landing pages e performance',
      phone: normalizePhone(process.env.TEHKNE_WHATSAPP_WEB_PHONE) || defaultPhone
    },
    {
      id: 'ia-automacoes',
      label: 'IA, automações e integrações',
      subtitle: 'Agentes, n8n, APIs, CRM, WhatsApp, automações internas e redução de retrabalho',
      phone: normalizePhone(process.env.TEHKNE_WHATSAPP_IA_PHONE) || defaultPhone
    },
    {
      id: 'suporte-manutencao',
      label: 'Suporte, manutenção e segurança',
      subtitle: 'Sustentação técnica, correções, WordPress, backups, restore e hardening',
      phone: normalizePhone(process.env.TEHKNE_WHATSAPP_SUPORTE_PHONE) || defaultPhone
    },
    {
      id: 'parcerias-agencias',
      label: 'Parcerias e agências',
      subtitle: 'White label técnico, squad sob demanda e braço de tecnologia para agências',
      phone: normalizePhone(process.env.TEHKNE_WHATSAPP_PARCEIROS_PHONE) || defaultPhone
    },
    {
      id: 'geral',
      label: 'Atendimento geral',
      subtitle: 'Dúvidas gerais e direcionamento para o especialista certo',
      phone: defaultPhone
    }
  ];
}

export async function GET() {
  return NextResponse.json({ items: buildDepartments() });
}
