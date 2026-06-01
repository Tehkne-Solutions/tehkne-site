import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import BackToTop from './components/BackToTop';
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
import './mobile-first-hardening.css';
import './mobile-overflow-kill.css';
import './metodo-mobile-repair.css';

const siteUrl = 'https://tehknesolutions.com.br';
const logoPath = '/images/tehkne-simbolo-isolado-logo.png';
const socialImagePath = '/images/tehkne-simbolo-isolado-logo.png?v=linkedin-logo-v2';
const absoluteLogoUrl = `${siteUrl}${logoPath}`;
const absoluteSocialImageUrl = `${siteUrl}${socialImagePath}`;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-MB46DPYC6K';
const googleSiteVerificationToken = 'sVy4pW6HtkQHV0K6ATxm5VVVJd1LcKE_8fwJmJRNEWk';

const socialTitle = 'Tehkné Solutions | Software house, IA, automações e sistemas sob medida';
const socialDescription =
  'A Tehkné Solutions cria sites, sistemas, automações, IA, integrações e produtos digitais para empresas que precisam vender mais, reduzir retrabalho e escalar com segurança.';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tehkné Solutions',
  alternateName: 'Tehkne Solutions',
  url: siteUrl,
  logo: absoluteLogoUrl,
  image: absoluteLogoUrl,
  description: socialDescription,
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
    'Manutenção e gestão de sites',
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
  applicationName: 'Tehkné Solutions',
  title: {
    default: socialTitle,
    template: '%s | Tehkné Solutions'
  },
  description: socialDescription,
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
    'manutenção de sites',
    'gestão técnica de sites',
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
    title: socialTitle,
    description: socialDescription,
    url: siteUrl,
    siteName: 'Tehkné Solutions',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: absoluteSocialImageUrl,
        width: 1200,
        height: 1200,
        alt: 'Logo oficial da Tehkné Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: socialTitle,
    description: socialDescription,
    images: [absoluteSocialImageUrl]
  },
  other: {
    'og:image:secure_url': absoluteSocialImageUrl,
    'og:image:type': 'image/png',
    'og:image:alt': 'Logo oficial da Tehkné Solutions'
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
