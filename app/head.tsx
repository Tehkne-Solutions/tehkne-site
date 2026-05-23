export default function Head() {
  const siteUrl = 'https://tehkne.com';
  const logo = `${siteUrl}/images/logo-tehkne-solutions-header.png`;
  const title = 'Tehkné Solutions | Software House, Produto Digital, IA e Automações';
  const description = 'A Tehkné Solutions transforma ideias, processos e operações em sistemas digitais reais com arquitetura, design, desenvolvimento, automações, IA e evolução contínua.';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tehkné Solutions",
    "url": siteUrl,
    "logo": logo,
    "sameAs": [
      // add social URLs when available
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tehkné Solutions",
    "url": siteUrl,
    "description": description
  };

  return (
    <>
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Tehkné Solutions" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
