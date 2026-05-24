import type { Metadata } from 'next';
import type { PortfolioCase } from './portfolio-data';

export type MemeProjectCase = PortfolioCase & {
  origin: 'Tehkné Solutions' | 'Meme Digital';
  caseType: 'Projeto Tehkné' | 'Site oficial' | 'Website' | 'Marketing' | 'Branding' | 'Material gráfico';
  externalOfficialUrl?: string;
  repoUrl?: string;
};

export const memeProjectCases: MemeProjectCase[] = [
  {
    slug: 'chilli-drinks-tabs',
    title: 'Chilli Drinks — Promoção TABS',
    level: 'Projeto Tehkné',
    category: 'Next.js / Sistema promocional',
    sector: 'Bebidas, varejo e fidelização',
    stack: ['Next.js 16', 'React 19', 'MUI', 'React Query', 'Zod', 'Backend logic'],
    summary: 'Aplicação promocional para cadastro de códigos TABS, acúmulo de saldo e jornada de resgate em gift card, com interface pública e lógica integrada.',
    challenge: 'Transformar uma promoção visual de bebidas funcionais em uma experiência digital responsiva, com regras claras de cadastro, acúmulo, resgate e comunicação de regulamento.',
    delivery: 'Front-end em Next.js, páginas promocionais, navegação, layout responsivo, componentes MUI, validações, organização de regras e base lógica para fluxo de cadastro/resgate.',
    outcome: 'Case forte para demonstrar capacidade da Tehkné em campanhas promocionais com experiência visual, regras de negócio e lógica backend integrada.',
    imageLabel: 'Promoção TABS',
    status: 'Projeto Tehkné / aplicação Next.js',
    tone: 'pink',
    featured: true,
    source: 'Tehkné Solutions',
    origin: 'Tehkné Solutions',
    caseType: 'Projeto Tehkné',
    externalOfficialUrl: 'https://chilli-drinks-app.vercel.app/',
    repoUrl: 'https://github.com/thales-da-vinci/chilli-drinks-app'
  },
  {
    slug: 'meme-servicos',
    title: 'Meme Serviços',
    level: 'Ecossistema parceiro',
    category: 'Site de serviços / Martech',
    sector: 'Marketing, tecnologia e vendas',
    stack: ['Web', 'Serviços digitais', 'Marketing', 'Performance', 'Conteúdo'],
    summary: 'Site oficial de serviços da Meme, organizado para apresentar ofertas digitais, comunicação comercial e pontos de conversão para empresas.',
    challenge: 'Atualizar a leitura do case para refletir a URL oficial atual e posicionar a entrega como presença comercial de serviços dentro do ecossistema Meme.',
    delivery: 'Curadoria de case, organização editorial, link oficial, card no portfólio, card na home e rota individual seguindo o padrão Tehkné.',
    outcome: 'O case passa a conectar a experiência com serviços digitais, marketing e tecnologia ao repertório institucional da Tehkné.',
    imageLabel: 'Serviços digitais',
    status: 'Ecossistema Meme Digital',
    tone: 'pink',
    featured: true,
    source: 'Meme Digital',
    origin: 'Meme Digital',
    caseType: 'Site oficial',
    externalOfficialUrl: 'https://meme-servicos-delta.vercel.app/'
  },
  {
    slug: 'meme-digital',
    title: 'Meme Digital',
    level: 'Ecossistema parceiro',
    category: 'Martech / Agência digital',
    sector: 'Marketing e tecnologia',
    stack: ['Martech', 'WordPress', 'Marketing', 'Tech & Web', 'Performance Ads'],
    summary: 'Experiência em ecossistema martech com serviços de agência, tecnologia, design, performance, produtos digitais e presença digital B2B/B2C.',
    challenge: 'Reposicionar o case para o domínio oficial da Meme Digital e mostrar a relação histórica como repertório institucional da Tehkné, sem confundir autoria comercial.',
    delivery: 'Atualização do case, link oficial, imagem de card, narrativa editorial segura e conexão com os demais cases capturados da página de portfólio da Meme.',
    outcome: 'O case fortalece a vitrine de parceria histórica e repertório em agência, marketing digital, tecnologia e sustentação web.',
    imageLabel: 'Martech e agência',
    status: 'Ecossistema parceiro / histórico profissional',
    tone: 'violet',
    featured: true,
    source: 'Meme Digital',
    origin: 'Meme Digital',
    caseType: 'Site oficial',
    externalOfficialUrl: 'https://memedigital.com.br/'
  },
  ...[
    ['meme-aloia-aerospace', 'Aloia Aerospace', 'Marketing / Aviação', 'Aviação e tecnologia', ['Marketing', 'Website', 'UX/UI', 'SEO', 'Performance Ads'], 'Projeto de marketing e presença digital para marca de tecnologia aeroespacial, com foco em impacto visual, SEO, campanhas e experiência digital.', 'Refletir sofisticação e inovação aeroespacial em experiências digitais e comunicação de alto impacto.', 'Apoio em website, UX/UI, feed, conteúdo, campanhas, SEO e performance.', 'Case de alto valor para comunicar tecnologia, aviação, marketing e web premium.', 'Aeroespacial e marketing', 'blue', 'Marketing', 'https://memedigital.com.br/aloia-aerospace/'],
    ['meme-voluta-medical-baralho', 'Voluta Medical — Baralho', 'Material gráfico / Saúde', 'Saúde e comunicação', ['Design', 'Branding', 'Material gráfico', 'Comunicação visual'], 'Projeto de material de divulgação para Voluta Medical, com foco em comunicação visual, clareza e reforço de marca na área da saúde.', 'Transformar informação institucional em material tangível, útil e visualmente consistente.', 'Conceito visual, material gráfico, organização editorial e entrega de peça de apoio comercial.', 'Mostra repertório em design aplicado, saúde e comunicação offline/digital.', 'Baralho institucional', 'cyan', 'Material gráfico', 'https://memedigital.com.br/baralho-voluta-medical/'],
    ['meme-bronte-imoveis', 'Bronte Imóveis', 'Marketing / Imobiliário', 'Imobiliário', ['Marketing', 'Campanhas', 'Branding', 'Conteúdo'], 'Projeto de marketing para operação imobiliária, com foco em posicionamento, comunicação e geração de demanda.', 'Criar comunicação comercial clara para um segmento competitivo e altamente visual.', 'Estratégia de marketing, peças, narrativa e apoio de presença digital.', 'Reforça repertório em imóveis, campanhas e comunicação orientada a lead.', 'Marketing imobiliário', 'orange', 'Marketing', 'https://memedigital.com.br/bronte-imoveis/'],
    ['meme-cafe-cophi', 'Café Cophi', 'Branding / Alimentos', 'Alimentos e varejo', ['Branding', 'Identidade visual', 'Design', 'Comunicação'], 'Projeto de branding para Café Cophi, com foco em identidade de marca, experiência visual e percepção de valor para produto de consumo.', 'Criar uma marca memorável e coerente para um produto sensorial e competitivo.', 'Identidade visual, direção criativa, peças e organização de marca.', 'Case relevante para branding, produto, alimentos e varejo.', 'Branding de café', 'amber', 'Branding', 'https://memedigital.com.br/cafe-cophi/'],
    ['meme-concept-lar', 'Concept Lar', 'Branding / Arquitetura e casa', 'Casa, decoração e serviços', ['Branding', 'Identidade visual', 'Design', 'Estratégia'], 'Projeto de branding para Concept Lar, estruturando percepção de marca, linguagem visual e apresentação de valor.', 'Traduzir uma proposta de casa/lar em identidade consistente e comercialmente aplicável.', 'Branding, narrativa visual, peças e direção de comunicação.', 'Amplia repertório em marcas de serviço e lifestyle.', 'Branding de lar', 'violet', 'Branding', 'https://memedigital.com.br/concept-lar/'],
    ['meme-icaro-rocks', 'Icaro Rocks', 'Website / Educação e conteúdo', 'Educação e comunidade', ['Website', 'UX/UI', 'Conteúdo', 'SEO'], 'Projeto de desenvolvimento de website para Icaro Rocks, com organização de conteúdo, presença digital e navegação objetiva.', 'Construir uma presença web capaz de apresentar conteúdo, comunidade e proposta de valor com clareza.', 'Website, arquitetura de informação, páginas e experiência responsiva.', 'Demonstra atuação em conteúdo, educação e comunidade digital.', 'Website educacional', 'pink', 'Website', 'https://memedigital.com.br/icaro-rocks/'],
    ['meme-neto-ensina', 'Neto Ensina', 'Website / Startup', 'Educação e startup', ['Website', 'Startup', 'UX/UI', 'Conteúdo'], 'Projeto de desenvolvimento de website para a startup Neto Ensina, com foco em apresentação de produto, clareza e confiança.', 'Comunicar uma proposta educacional/startup de forma direta e estruturada.', 'Website, organização de conteúdo, seções comerciais e base de presença digital.', 'Mostra experiência em startups, educação e lançamento de novas ideias.', 'Startup educacional', 'blue', 'Website', 'https://memedigital.com.br/neto-ensina/'],
    ['meme-nur-eventos', 'NUR Eventos', 'Branding / Eventos', 'Eventos e experiência', ['Branding', 'Design', 'Comunicação visual', 'Eventos'], 'Projeto de branding para NUR Eventos, com foco em identidade, experiência visual e comunicação de marca.', 'Criar uma identidade capaz de transmitir experiência, organização e valor para eventos.', 'Branding, direção visual, peças e organização narrativa.', 'Case útil para eventos, experiência e marcas de serviço.', 'Branding de eventos', 'cyan', 'Branding', 'https://memedigital.com.br/nur-eventos/'],
    ['meme-oticas-ipanema', 'Óticas Ipanema', 'Website / Franqueadora', 'Varejo e franquias', ['Website', 'UX/UI', 'SEO', 'Varejo'], 'Projeto de desenvolvimento de website para a franqueadora Óticas Ipanema, com foco em presença institucional, unidades e clareza comercial.', 'Organizar uma marca de varejo/franquia em uma experiência digital objetiva e confiável.', 'Website institucional, estrutura de conteúdo, navegação e apoio à presença de marca.', 'Reforça repertório em varejo, franquias e presença institucional.', 'Website franqueadora', 'orange', 'Website', 'https://memedigital.com.br/oticas-ipanema/'],
    ['meme-voluta-medical-marketing', 'Voluta Medical — Marketing', 'Website e Marketing / Saúde', 'Saúde e marketing', ['Website', 'Marketing', 'Design', 'Performance'], 'Projeto de desenvolvimento de website e marketing para Voluta Medical, unindo presença digital, comunicação e experiência visual.', 'Criar uma jornada digital de saúde com clareza, confiança e apoio de marketing.', 'Website, marketing, organização de conteúdo e materiais visuais.', 'Case forte para saúde, website e marketing integrado.', 'Website e marketing médico', 'cyan', 'Marketing', 'https://memedigital.com.br/voluta-medical/']
  ].map(([slug, title, category, sector, stack, summary, challenge, delivery, outcome, imageLabel, tone, caseType, externalOfficialUrl]) => ({
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
    status: 'Case capturado da página de cases da Meme Digital',
    tone: tone as PortfolioCase['tone'],
    source: 'Meme Digital',
    origin: 'Meme Digital' as const,
    caseType: caseType as MemeProjectCase['caseType'],
    externalOfficialUrl: externalOfficialUrl as string
  }))
];

export function getMemeProjectCase(slug: string) {
  return memeProjectCases.find((item) => item.slug === slug);
}

export function getMemePortfolioMetadata(slug: string): Metadata | null {
  const project = getMemeProjectCase(slug);
  if (!project) return null;

  const pageUrl = `https://tehkne.com/portfolio/${project.slug}`;
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
      images: [{ url: 'https://tehkne.com/images/logo-tehkne-solutions-header.png', alt: project.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Case: ${project.title} | Tehkné Solutions`,
      description,
      images: ['https://tehkne.com/images/logo-tehkne-solutions-header.png']
    },
    alternates: { canonical: pageUrl }
  };
}

export function getAllMemePortfolioSlugs() {
  return memeProjectCases.map((item) => ({ slug: item.slug }));
}
