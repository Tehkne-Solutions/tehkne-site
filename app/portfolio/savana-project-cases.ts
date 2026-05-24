import type { Metadata } from 'next';
import type { PortfolioCase } from './portfolio-data';

export type SavanaProjectCase = PortfolioCase & {
  origin: 'Savana Publicidade';
  caseType: 'Campanha offline' | 'Cliente atendido' | 'Site e presença digital';
  officialUrl?: string;
};

const baseStack = ['WordPress', 'Elementor', 'Campanhas', 'Comunicação visual', 'Branding'];

export const savanaProjectCases: SavanaProjectCase[] = [
  {
    slug: 'savana-sinfonia-residencial',
    title: 'Sinfonia Residencial',
    level: 'Projeto Tehkné',
    category: 'Campanha / Imobiliário',
    sector: 'Imobiliário',
    stack: baseStack,
    summary: 'Case de campanha e comunicação imobiliária dentro do ecossistema Savana, com repertório de branding, material comercial e presença digital.',
    challenge: 'Traduzir uma oferta imobiliária em comunicação clara, visual forte e peças capazes de apoiar venda e percepção de valor.',
    delivery: 'Apoio em presença digital, comunicação visual, materiais, organização de narrativa e sustentação técnica em ambiente de agência.',
    outcome: 'Reforça experiência em mercado imobiliário, campanha, design aplicado e jornada comercial.',
    imageLabel: 'Campanha imobiliária',
    status: 'Case Savana / Tehkné',
    tone: 'violet',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  },
  {
    slug: 'savana-dafra-motos',
    title: 'Dafra Motos',
    level: 'Projeto Tehkné',
    category: 'Campanha / Automotivo',
    sector: 'Automotivo',
    stack: ['WordPress', 'Elementor', 'Landing pages', 'Campanhas', 'Performance'],
    summary: 'Experiência em comunicação automotiva, campanhas, páginas e materiais comerciais para marca de motos em ambiente de agência.',
    challenge: 'Apoiar ações digitais e comerciais com clareza de produto, impacto visual e consistência de marca.',
    delivery: 'Ajustes web, landing pages, comunicação visual, suporte técnico e materiais para campanha.',
    outcome: 'Mostra repertório em automotivo, produto, campanhas e execução rápida para operação comercial.',
    imageLabel: 'Automotivo e campanha',
    status: 'Case Savana / Tehkné',
    tone: 'orange',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  },
  {
    slug: 'savana-eurofarma',
    title: 'Eurofarma',
    level: 'Projeto Tehkné',
    category: 'Campanha / Farmacêutico',
    sector: 'Farmacêutico',
    stack: ['Campanhas', 'Comunicação visual', 'Branding', 'Materiais digitais', 'WordPress'],
    summary: 'Case de comunicação para setor farmacêutico, com foco em material visual, organização de campanha e consistência editorial.',
    challenge: 'Trabalhar comunicação sensível e institucional para um setor que exige clareza, confiança e rigor visual.',
    delivery: 'Materiais de campanha, suporte digital, organização visual e adaptação de comunicação para canais comerciais.',
    outcome: 'Amplia o portfólio para saúde/farmacêutico, comunicação institucional e campanhas de marca.',
    imageLabel: 'Farmacêutico',
    status: 'Case Savana / Tehkné',
    tone: 'cyan',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  },
  {
    slug: 'savana-stine-sementes',
    title: 'Stine Sementes',
    level: 'Projeto Tehkné',
    category: 'Campanha / Agro',
    sector: 'Agro',
    stack: ['Campanhas', 'Branding', 'Comunicação visual', 'WordPress', 'Design'],
    summary: 'Case de comunicação agro com foco em marca, produto, campanha e organização de materiais para mercado técnico.',
    challenge: 'Transformar atributos técnicos de produto agro em mensagem visual e comercial compreensível.',
    delivery: 'Apoio visual, conteúdo, peças, páginas e sustentação digital em rotina de agência.',
    outcome: 'Demonstra capacidade de comunicar produtos técnicos e setores B2B/B2C de nicho.',
    imageLabel: 'Agro e produto',
    status: 'Case Savana / Tehkné',
    tone: 'amber',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  },
  {
    slug: 'savana-massas-de',
    title: 'Massas De',
    level: 'Projeto Tehkné',
    category: 'Campanha / Alimentos',
    sector: 'Alimentos e varejo',
    stack: ['Branding', 'Comunicação visual', 'Campanhas', 'Design', 'WordPress'],
    summary: 'Case de marca alimentícia com comunicação visual, materiais de campanha e presença digital de apoio.',
    challenge: 'Apresentar produto de consumo com apelo visual, clareza de marca e capacidade de venda.',
    delivery: 'Design aplicado, organização de campanha, ajustes web e materiais comerciais.',
    outcome: 'Adiciona repertório em alimentos, varejo, produto e comunicação de marca.',
    imageLabel: 'Alimentos e marca',
    status: 'Case Savana / Tehkné',
    tone: 'pink',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  },
  {
    slug: 'savana-nutralle',
    title: 'Nutralle',
    level: 'Projeto Tehkné',
    category: 'Campanha / Saúde e nutrição',
    sector: 'Saúde e nutrição',
    stack: ['Branding', 'Campanhas', 'Comunicação visual', 'Materiais digitais', 'WordPress'],
    summary: 'Comunicação para marca de saúde/nutrição com foco em clareza de proposta, produto e materiais visuais.',
    challenge: 'Unir percepção de cuidado, produto e comunicação comercial sem perder credibilidade.',
    delivery: 'Peças, materiais, ajustes digitais e suporte de comunicação em ambiente de agência.',
    outcome: 'Reforça atuação em saúde, bem-estar, produto e comunicação de confiança.',
    imageLabel: 'Nutrição e produto',
    status: 'Case Savana / Tehkné',
    tone: 'cyan',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  },
  {
    slug: 'savana-ecobrisa-energia',
    title: 'Ecobrisa Energia',
    level: 'Projeto Tehkné',
    category: 'Campanha / Energia',
    sector: 'Energia e sustentabilidade',
    stack: ['Campanhas', 'Design', 'Landing pages', 'WordPress', 'Comunicação visual'],
    summary: 'Case de comunicação para energia e sustentabilidade, com foco em valor ambiental, campanha e clareza comercial.',
    challenge: 'Comunicar solução sustentável de forma visual, direta e comercialmente convincente.',
    delivery: 'Materiais, presença digital, organização de campanha e suporte técnico visual.',
    outcome: 'Mostra repertório em energia, sustentabilidade e comunicação comercial de impacto.',
    imageLabel: 'Energia sustentável',
    status: 'Case Savana / Tehkné',
    tone: 'blue',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  },
  {
    slug: 'savana-oficina-do-estudante',
    title: 'Oficina do Estudante',
    level: 'Projeto Tehkné',
    category: 'Campanha / Educação',
    sector: 'Educação',
    stack: ['Campanhas', 'Conteúdo', 'Comunicação visual', 'WordPress', 'Landing pages'],
    summary: 'Comunicação educacional com foco em campanha, conteúdo, clareza de oferta e presença digital de apoio.',
    challenge: 'Apresentar valor educacional com linguagem acessível, visual forte e orientação à conversão.',
    delivery: 'Apoio em peças, comunicação digital, ajustes web e materiais de campanha.',
    outcome: 'Demonstra experiência em educação, campanha, conteúdo e comunicação para decisão familiar/estudantil.',
    imageLabel: 'Educação e campanha',
    status: 'Case Savana / Tehkné',
    tone: 'violet',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  },
  {
    slug: 'savana-bob-imoveis',
    title: 'BOB Imóveis',
    level: 'Projeto Tehkné',
    category: 'Campanha / Imobiliário',
    sector: 'Imobiliário',
    stack: ['Campanhas', 'WordPress', 'Comunicação visual', 'Landing pages', 'CRO'],
    summary: 'Case imobiliário com comunicação comercial, materiais visuais e apoio digital para captação e venda.',
    challenge: 'Organizar oferta imobiliária de forma clara e atrativa para gerar interesse e contato qualificado.',
    delivery: 'Peças, páginas de apoio, materiais digitais e suporte visual para campanha.',
    outcome: 'Reforça experiência em imóveis, campanhas e comunicação orientada a lead.',
    imageLabel: 'Imobiliário e leads',
    status: 'Case Savana / Tehkné',
    tone: 'orange',
    source: 'Savana Publicidade',
    origin: 'Savana Publicidade',
    caseType: 'Campanha offline'
  }
];

export function getSavanaProjectCase(slug: string) {
  return savanaProjectCases.find((item) => item.slug === slug);
}

export function getSavanaPortfolioMetadata(slug: string): Metadata | null {
  const project = getSavanaProjectCase(slug);
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

export function getAllSavanaPortfolioSlugs() {
  return savanaProjectCases.map((item) => ({ slug: item.slug }));
}
