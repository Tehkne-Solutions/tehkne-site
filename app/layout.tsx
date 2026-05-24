import type { Metadata } from 'next';
import Script from 'next/script';
import BackToTop from './components/BackToTop';
import CTAAnalytics from './components/CTAAnalytics';
import FloatingContactButton from './components/FloatingContactButton';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import './globals.css';
import './contact.css';
import './blog-generated-covers.css';

const logoPath = '/images/logo-tehkne-solutions-header.png';
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-MB46DPYC6K';

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <CTAAnalytics />
        <div id="top" className="site-shell">
          <div className="background-grid" />
          <SiteHeader />
          {children}
          <SiteFooter />
          <FloatingContactButton />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
