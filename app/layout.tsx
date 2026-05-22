import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tehkné Solutions | Software House, Produto Digital, IA e Automações',
  description:
    'A Tehkné Solutions transforma ideias, processos e operações em sistemas digitais reais com arquitetura, design, desenvolvimento, automações, IA e evolução contínua.',
  keywords: [
    'software house',
    'desenvolvimento web',
    'Next.js',
    'WordPress avançado',
    'automação com IA',
    'produto digital',
    'arquitetura de soluções',
    'UX UI',
    'sistemas sob medida',
    'Campinas'
  ],
  openGraph: {
    title: 'Tehkné Solutions | Sistemas digitais reais e escaláveis',
    description:
      'Arquitetura, design, desenvolvimento, automações e IA para empresas, agências e operações digitais.',
    type: 'website',
    locale: 'pt_BR'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
