import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import BackToTop from './components/BackToTop';
import ConditionalFaqSections from './components/ConditionalFaqSections';
import CookieConsent from './components/CookieConsent';
import CTAAnalytics from './components/CTAAnalytics';
import FloatingContactButton from './components/FloatingContactButton';
import RuntimeTextUpgrades from './components/RuntimeTextUpgrades';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import './globals.css';
import './contact.css';
import './cookies.css';
import './blog-generated-covers.css';
import './mobile-qa-fixes.css';

const siteUrl = 'https://tehknesolutions.com.br';
const logoPath = '/images/tehkne-simbolo-isolado-logo.png';
const absoluteLogoUrl = `${siteUrl}${logoPath}`;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-MB46DPYC6K';
const googleSiteVerificationToken = 'sVy4pW6HtkQHV0K6ATxm5VVVJd1LcKE_8fwJmJRNEWk';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tehkné Solutions',
  alternateName: 'Tehkne Solutions',
  url: siteUrl,
  logo: absoluteLogoUrl,
  image: absoluteLogoUrl,
  description:
    'Software house, estúdio de produto digital e braço técnico para empresas, agências e operações que precisam transformar ideias, processos e operações em sistemas digitais reais.',
  telephone: '+55 19 99893-0846',
  areaServed: ['Campinas', 'São Paulo', 'Brasil'],
  knowsAbout: [
    'Arquitetura de Soluções',
    'Desenvolvimento Web',
    'WordPress avançado',
    'Next.js',
    'Produto Digital',
    'UX/UI',
    'IA aplicada',
    'Automações',
    'Sistemas sob medida',
    'Sustentação digital'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+55 19 99893-0846',
    availableLanguage: ['Portuguese', 'English', 'Spanish']
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tehkné Solutions | Software sob medida, IA e produtos digitais',
    template: '%s | Tehkné Solutions'
  },
  description:
    'A Tehkné Solutions projeta, desenvolve e evolui sites, sistemas, automações, IA e produtos digitais para empresas que precisam vender mais, reduzir retrabalho e escalar com segurança.',
  keywords: [
    'software house Campinas',
    'desenvolvimento de sistemas sob medida',
    'desenvolvimento web',
    'Next.js',
    'WordPress avançado',
    'automação com IA',
    'produto digital',
    'arquitetura de soluções',
    'UX UI',
    'sites de alta performance',
    'white label técnico para agências',
    'integrações CRM ERP API',
    'Campinas'
  ],
  verification: {
    google: googleSiteVerificationToken
  },
  alternates: {
    canonical: '/'
  },
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
    title: 'Tehkné Solutions | Sistemas digitais reais para operações que precisam escalar',
    description:
      'Arquitetura, design, desenvolvimento, automações e IA para empresas, agências e operações digitais que precisam sair do improviso.',
    url: siteUrl,
    siteName: 'Tehkné Solutions',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: absoluteLogoUrl,
        width: 1200,
        height: 630,
        alt: 'Tehkné Solutions — software house, IA e produto digital'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tehkné Solutions | Software sob medida, IA e produtos digitais',
    description:
      'Sites, sistemas, automações e produtos digitais para empresas que precisam vender mais, reduzir retrabalho e escalar com segurança.',
    images: [absoluteLogoUrl]
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
        <Script
          id="organization-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CTAAnalytics />
        <RuntimeTextUpgrades />
        <div id="top" className="site-shell">
          <div className="background-grid" />
          <SiteHeader />
          {children}
          <ConditionalFaqSections />
          <SiteFooter />
          <FloatingContactButton />
          <BackToTop />
          <CookieConsent />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
