import type { Metadata } from 'next';
import BackToTop from './components/BackToTop';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import './globals.css';
import './contact.css';

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
  icons: {
    icon: [
      {
        url: '/images/logo-tehkne-solutions-header.png',
        type: 'image/png'
      }
    ],
    shortcut: ['/images/logo-tehkne-solutions-header.png'],
    apple: [
      {
        url: '/images/logo-tehkne-solutions-header.png',
        type: 'image/png'
      }
    ]
  },
  openGraph: {
    title: 'Tehkné Solutions | Sistemas digitais reais e escaláveis',
    description:
      'Arquitetura, design, desenvolvimento, automações e IA para empresas, agências e operações digitais.',
    type: 'website',
    locale: 'pt_BR'
  }
};

// Base URL used for canonical links and sitemap references. Update if you have a custom domain.
export const metadataBase = new URL('https://tehkne.com');

// Add robots and twitter defaults
metadata.robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1
  }
};

metadata.twitter = {
  card: 'summary_large_image',
  title: metadata.title as string,
  description: metadata.description as string,
  images: ['/images/logo-tehkne-solutions-header.png']
};

// Add a default openGraph image
if (!metadata.openGraph?.images) {
  metadata.openGraph = {
    ...(metadata.openGraph || {}),
    images: ['/images/logo-tehkne-solutions-header.png']
  };
}

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
