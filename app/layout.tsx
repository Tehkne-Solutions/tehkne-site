import type { Metadata } from 'next';
import BackToTop from './components/BackToTop';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import './globals.css';
import './contact.css';

const logoPath = '/images/logo-tehkne-solutions-header.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://tehkne.com'),
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      {
        url: logoPath,
        type: 'image/png'
      }
    ],
    shortcut: [logoPath],
    apple: [
      {
        url: logoPath,
        type: 'image/png'
      }
    ]
  },
  openGraph: {
    title: 'Tehkné Solutions | Sistemas digitais reais e escaláveis',
    description:
      'Arquitetura, design, desenvolvimento, automações e IA para empresas, agências e operações digitais.',
    type: 'website',
    locale: 'pt_BR',
    images: [logoPath]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tehkné Solutions | Software House, Produto Digital, IA e Automações',
    description:
      'A Tehkné Solutions transforma ideias, processos e operações em sistemas digitais reais com arquitetura, design, desenvolvimento, automações, IA e evolução contínua.',
    images: [logoPath]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <div id="top" className="site-shell">
          <div className="background-grid" />
          <SiteHeader />
          {children}
          <SiteFooter />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
