import type { Metadata } from 'next';
import type { PortfolioCase } from './portfolio-data';
import { portfolioCases, portfolioStats } from './portfolio-data';
import { savanaProjectCases } from './savana-project-cases';

const siteUrl = 'https://tehkne.com';

export const extraPortfolioCases: PortfolioCase[] = [
  {
    slug: 'chilli-drinks-tabs',
    title: 'Chilli Drinks TABS',
    level: 'Projeto Tehkné',
    category: 'Promoção / Sistema web',
    sector: 'Bebidas, varejo e campanha promocional',
    stack: ['Next.js', 'React', 'Backend integrado', 'Lógica promocional', 'Vercel'],
    summary: 'Aplicação promocional para Chilli Drinks com cadastro de códigos TABS, lógica backend integrada, páginas de campanha, regulamento, FAQ e jornada de resgate.',
    challenge: 'Transformar uma mecânica promocional em uma experiência web clara, rápida e confiável para cadastro de códigos, acúmulo de saldo e orientação do consumidor.',
    delivery: 'Front-end em Next.js, estrutura visual responsiva, seções de bebidas funcionais, fluxo de cadastro, regra promocional, CTA para loja oficial e lógica backend integrada ao projeto.',
    outcome: 'Case forte para demonstrar criação de campanha promocional completa com marca, produto, interface, regra de negócio e lógica técnica em um único produto digital.',
    imageLabel: 'Promoção Chilli TABS',
    status: 'Projeto Tehkné / repo thales-da-vinci/chilli-drinks-app',
    tone: 'pink',
    featured: true,
    source: 'Tehkné Solutions'
  },
  {
    slug: 'meme-servicos',
    title: 'Meme Serviços',
    level: 'Ecossistema parceiro',
    category: 'Site / Serviços',
    sector: 'Serviços, marketing e tecnologia',
    stack: ['Next.js', 'React', 'Vercel', 'Serviços digitais', 'Marketing'],
    summary: 'Site oficial de serviços conectado ao ecossistema Meme, estruturando oferta, comunicação comercial, presença digital e caminho de conversão.',
    challenge: 'Apresentar serviços de forma mais clara, rápida e comercial, mantendo a ligação com o ecossistema de marketing, tecnologia e atendimento da Meme.',
    delivery: 'Atualização de narrativa do case, vínculo com o site oficial, imagem do projeto no portfólio, stack alinhada e página individual com leitura institucional segura.',
    outcome: 'Reforça a experiência da Tehkné em sites de serviços, agências, comunicação comercial e execução técnica para parceiros históricos.',
    imageLabel: 'Site oficial de serviços',
    status: 'Ecossistema parceiro / Meme Digital',
    tone: 'pink',
    featured: true,
    source: 'Meme Digital'
  },
  {
    slug: 'meme-digital',
    title: 'Meme Digital',
    level: 'Ecossistema parceiro',
    category: 'Martech / Agência / Web',
    sector: 'Marketing, tecnologia e comunicação',
    stack: ['WordPress', 'Web', 'Marketing digital', 'Suporte técnico', 'Agência'],
    summary: 'Ecossistema parceiro histórico da Tehkné, reunindo anos de atuação em sites, marketing, suporte técnico, demandas web e operação digital em ambiente de agência martech.',
    challenge: 'Apoiar uma agência martech com demandas recorrentes de presença digital, manutenção, páginas comerciais, suporte técnico e organização de cases.',
    delivery: 'Atualização do case principal, vínculo com o site oficial da Meme Digital, padronização editorial e integração dos cases públicos da página de portfólio da agência.',
    outcome: 'Entra como terceiro grande parceiro histórico da Tehkné, ao lado de UNTI e Savana, demonstrando repertório prolongado em agência, marketing e tecnologia.',
    imageLabel: 'Parceiro martech histórico',
    status: 'Histórico profissional / parceiro estratégico',
    tone: 'pink',
    featured: true,
    source: 'Meme Digital'
  },
  ...[
    ['meme-aloia-aerospace','Aloia Aerospace - Marketing','Marketing / B2B','Indústria aeroespacial',['Marketing digital','Branding','B2B','Estratégia'],'Case público da Meme Digital voltado a marketing para Aloia Aerospace, incorporado ao portfólio Tehkné como repertório de parceiro histórico.','Apresentar atuação de marketing em um segmento técnico e B2B, com necessidade de autoridade, clareza e comunicação especializada.','Curadoria editorial do case, categorização no portfólio Tehkné e apresentação como experiência de ecossistema parceiro.','Amplia a vitrine para marketing B2B, indústria, tecnologia e comunicação estratégica.','Marketing aeroespacial','blue'],
    ['meme-voluta-medical-baralho','Voluta Medical - Baralho','Design / Material de divulgação','Saúde e materiais gráficos',['Design','Material promocional','Saúde','Branding'],'Case público da Meme Digital para material de divulgação da Voluta Medical em formato de baralho.','Transformar uma peça de divulgação em material tangível, memorável e adequado à comunicação da marca.','Categorização como case de design e comunicação visual dentro do inventário Tehkné.','Mostra repertório de marca, saúde, material gráfico e comunicação aplicada.','Material de divulgação','violet'],
    ['meme-bronte-imoveis','Bronte Imóveis - Marketing','Marketing / Imobiliário','Imobiliário',['Marketing digital','Conteúdo','Campanhas','Imobiliário'],'Projeto de marketing para Bronte Imóveis, capturado da página pública de cases da Meme Digital.','Apoiar comunicação e geração de demanda em mercado imobiliário competitivo.','Organização do case no portfólio Tehkné como experiência de ecossistema parceiro.','Expande repertório em marketing imobiliário, conteúdo e comunicação comercial.','Marketing imobiliário','orange'],
    ['meme-cafe-cophi','Café Cophi - Branding','Branding / Marca','Alimentos e cafeteria',['Branding','Identidade visual','Marca','Produto'],'Projeto de branding para Café Cophi, integrado como case de identidade de marca do ecossistema Meme.','Construir percepção de marca para produto/negócio de alimentos com apelo visual e posicionamento.','Curadoria editorial, categorização e inclusão no portfólio como case de branding.','Reforça repertório em marca, varejo, alimentos e comunicação visual.','Branding cafeteria','amber'],
    ['meme-concept-lar','Concept Lar - Branding','Branding / Casa e decoração','Casa, decoração e varejo',['Branding','Identidade visual','Design','Posicionamento'],'Projeto de branding para Concept Lar listado nos cases públicos da Meme Digital.','Organizar identidade e percepção de valor para marca do segmento casa/decoração.','Inclusão como case de branding e posicionamento visual em ecossistema parceiro.','Mostra experiência em marca, estética e comunicação para varejo/decor.','Branding decor','violet'],
    ['meme-icaro-rocks','Icaro Rocks - Website','Website / Institucional','Educação, evento ou marca',['Website','WordPress','Web design','Conteúdo'],'Projeto de desenvolvimento de website para Icaro Rocks, capturado da página de cases da Meme Digital.','Criar presença web funcional e coerente para projeto/marca com necessidade de apresentação digital.','Categorização como website e inclusão no inventário Tehkné/Meme.','Reforça experiência em sites institucionais e presença digital em ambiente de agência.','Website institucional','cyan'],
    ['meme-neto-ensina','Neto Ensina - Website','Website / Startup','Educação e startup',['Website','Startup','Educação','UX'],'Projeto de desenvolvimento de website para a startup Neto Ensina.','Apresentar produto educacional/startup com clareza, confiança e caminho de conversão.','Curadoria editorial e entrada como case de website/startup do ecossistema Meme.','Amplia repertório em educação, startups e páginas institucionais.','Website startup','blue'],
    ['meme-nur-eventos','NUR Eventos - Branding','Branding / Eventos','Eventos e experiências',['Branding','Design','Eventos','Identidade visual'],'Projeto de branding para NUR Eventos listado como destaque da Meme Digital.','Criar identidade e comunicação para marca de eventos com apelo visual e experiência.','Inclusão como case de branding/eventos no portfólio Tehkné.','Reforça repertório em identidade visual e experiências presenciais/digitais.','Branding eventos','pink'],
    ['meme-oticas-ipanema','Óticas Ipanema - Website','Website / Franqueadora','Varejo e franquias',['Website','Varejo','Franquias','SEO'],'Projeto de desenvolvimento de website para a franqueadora Óticas Ipanema.','Apresentar uma operação de varejo/franquia com clareza institucional, unidades, marca e contato.','Categorização como website de varejo/franquia e integração ao portfólio.','Mostra repertório em varejo, franquias e presença digital institucional.','Website varejo','orange'],
    ['meme-voluta-medical-marketing','Voluta Medical - Marketing','Website e Marketing','Saúde e tecnologia médica',['Website','Marketing digital','Saúde','Conteúdo'],'Projeto de desenvolvimento de Website e Marketing para Voluta Medical, listado nos cases públicos da Meme Digital.','Unir presença web, comunicação de saúde e estratégia de marketing para uma marca médica/técnica.','Curadoria do case, categorização no portfólio e narrativa segura como ecossistema parceiro.','Fortalece repertório em saúde, marketing e presença digital com contexto técnico.','Website e marketing saúde','cyan']
  ].map(([slug, title, category, sector, stack, summary, challenge, delivery, outcome, imageLabel, tone]) => ({
    slug: slug as string,
    title: title as string,
    level: 'Ecossistema parceiro' as const,
    category: category as string,
    sector: sector as string,
    stack: stack as string[],
    summary: summary as string,
    challenge: challenge as string,
    delivery: delivery as string,
    outcome: outcome as string,
    imageLabel: imageLabel as string,
    status: 'Cases públicos Meme Digital',
    tone: tone as PortfolioCase['tone'],
    source: 'Meme Digital'
  }))
];

export function mergePortfolioCases(...groups: PortfolioCase[][]) {
  const merged = new Map<string, PortfolioCase>();

  groups.flat().forEach((item) => {
    merged.set(item.slug, {
      ...(merged.get(item.slug) ?? {}),
      ...item
    });
  });

  return Array.from(merged.values());
}

export const portfolioCasesWithExtras = mergePortfolioCases(portfolioCases, extraPortfolioCases);
export const displayPortfolioCases = mergePortfolioCases(portfolioCases, extraPortfolioCases, savanaProjectCases as PortfolioCase[]);

export const homeFeaturedPortfolioCases = [
  'chilli-drinks-tabs',
  'meme-servicos',
  'meme-digital',
  'tehkne-flow',
  'vacina-one',
  'unti-digital',
  'savol-seminovos',
  'beggin'
]
  .map((slug) => portfolioCasesWithExtras.find((item) => item.slug === slug))
  .filter(Boolean) as PortfolioCase[];

export const portfolioStatsWithExtras = [
  portfolioStats[0],
  portfolioStats[1],
  [`${displayPortfolioCases.length}+`, 'cases e experiências catalogadas'],
  portfolioStats[3]
];

export function getPortfolioCaseWithExtras(slug: string) {
  return portfolioCasesWithExtras.find((item) => item.slug === slug);
}

export function getAllPortfolioSlugsWithExtras() {
  return portfolioCasesWithExtras.map((item) => ({ slug: item.slug }));
}

export function getPortfolioMetadataWithExtras(slug: string): Metadata | null {
  const project = getPortfolioCaseWithExtras(slug);
  if (!project) return null;

  const pageUrl = `${siteUrl}/portfolio/${project.slug}`;
  const description = `${project.summary} Stack: ${project.stack.join(', ')}.`;

  return {
    title: `Case: ${project.title} | Tehkné Solutions`,
    description,
    openGraph: {
      title: `Case: ${project.title} | Tehkné Solutions`,
      description,
      type: 'website',
      locale: 'pt_BR',
      url: pageUrl,
      images: [
        {
          url: `${siteUrl}/images/logo-tehkne-solutions-header.png`,
          alt: project.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Case: ${project.title} | Tehkné Solutions`,
      description,
      images: [`${siteUrl}/images/logo-tehkne-solutions-header.png`]
    },
    alternates: {
      canonical: pageUrl
    }
  };
}
