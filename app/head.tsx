export default function Head() {
  const siteUrl = 'https://www.tehknesolutions.com.br';
  const siteName = 'Tehkné Solutions';
  const slogan = 'Software house, IA, automações e sistemas sob medida.';
  const description = 'Sites, sistemas, automações, integrações e produtos digitais para empresas que precisam vender mais, reduzir retrabalho e escalar com segurança.';
  const author = 'Thales Wallison';
  const phone = '+55 19 99893-0846';
  const logo = `${siteUrl}/images/tehkne-simbolo-isolado-logo.png?v=linkedin-logo-v4`;

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description,
    inLanguage: 'pt-BR',
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    slogan,
    url: siteUrl,
    logo,
    image: logo,
    description,
    telephone: phone,
    founder: {
      '@type': 'Person',
      name: author
    }
  };

  return (
    <>
      <title>{siteName}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="publisher" content={siteName} />
      <meta name="creator" content={author} />
      <meta name="telephone" content={phone} />
      <meta name="slogan" content={slogan} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#050816" />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={`${slogan} ${description}`} />
      <meta property="og:image" content={logo} />
      <meta property="og:image:secure_url" content={logo} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:image:alt" content="Logo oficial da Tehkné Solutions" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:phone_number" content={phone} />
      <meta property="og:author" content={author} />
      <meta property="article:author" content={author} />
      <meta property="business:contact_data:phone_number" content={phone} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={`${slogan} ${description}`} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:image:alt" content="Logo oficial da Tehkné Solutions" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
