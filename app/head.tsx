export default function Head() {
  const siteUrl = 'https://tehknesolutions.com.br';
  const logo = `${siteUrl}/images/logo-tehkne-solutions-header.png`;
  const title = 'Tehkné Solutions | Software sob medida, IA e produtos digitais';
  const description = 'Sites, sistemas, automações e produtos digitais para empresas que precisam vender mais, reduzir retrabalho e escalar com segurança.';

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tehkné Solutions',
    url: siteUrl,
    description,
    inLanguage: 'pt-BR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#050816" />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:site_name" content="Tehkné Solutions" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
