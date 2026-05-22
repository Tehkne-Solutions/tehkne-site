'use client';

import { ArrowUpRight, CheckCircle2, Filter, Orbit, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { whatsAppHref } from '../contact';

type PortfolioTone = 'violet' | 'cyan' | 'blue' | 'orange' | 'amber' | 'pink';

type PortfolioCase = {
  title: string;
  type: string;
  category: string;
  stack: string;
  text: string;
  tone: PortfolioTone;
  status: string;
  href?: string;
  featured?: boolean;
  year?: string;
  role: string;
  origin: 'Projeto Tehkné' | 'Parceria técnica' | 'Participação técnica' | 'Ecossistema parceiro' | 'Ecossistema UNTI';
  filters: string[];
  deliverables: string[];
  impact: string;
};

const portfolioCases: PortfolioCase[] = [
  {
    title: 'Tehkné Flow',
    type: 'Produto próprio',
    category: 'Sistema / Produto',
    stack: 'Next.js • Gestão • Analytics • Operação',
    text: 'Produto interno para gestão de projetos, tarefas, automações e visão operacional de times digitais.',
    tone: 'violet',
    status: 'Laboratório Tehkné',
    href: '/portfolio/tehkne-flow',
    featured: true,
    year: '2026',
    role: 'Produto, arquitetura, design, desenvolvimento e governança técnica.',
    origin: 'Projeto Tehkné',
    filters: ['Projetos Tehkné', 'Sistemas', 'Next.js', 'IA'],
    deliverables: ['Dashboard operacional', 'Módulos de projetos e tarefas', 'Visão de produto e evolução'],
    impact: 'Mostra a capacidade da Tehkné de transformar processo interno em produto digital escalável.'
  },
  {
    title: 'Vacina One',
    type: 'Projeto direto',
    category: 'Site institucional',
    stack: 'Next.js • Saúde • Conteúdo • Franquias',
    text: 'Estrutura institucional moderna para clínica de vacinação, com comunicação clara, navegação objetiva e base preparada para expansão.',
    tone: 'cyan',
    status: 'Projeto Tehkné / staging',
    href: '/portfolio/vacina-one',
    featured: true,
    year: '2026',
    role: 'Arquitetura web, interface, implementação e estrutura de conteúdo.',
    origin: 'Projeto Tehkné',
    filters: ['Projetos Tehkné', 'Sites', 'Next.js', 'Saúde'],
    deliverables: ['Home institucional', 'Arquitetura de conteúdo', 'Base para expansão e franquias'],
    impact: 'Demonstra criação de site institucional moderno em Next.js para operação de saúde.'
  },
  {
    title: 'UNTI Digital',
    type: 'Cliente fixo / ecossistema',
    category: 'Site / Plataforma',
    stack: 'Next.js • Integrações • Operação digital',
    text: 'Atuação como braço técnico em operação digital com foco em sites, plataformas, integrações, APIs e sustentação.',
    tone: 'blue',
    status: 'Parceria técnica contínua',
    href: '/portfolio/unti-digital',
    featured: true,
    year: '2026',
    role: 'Braço técnico, arquitetura, desenvolvimento, manutenção e evolução de projetos digitais.',
    origin: 'Parceria técnica',
    filters: ['Participação Técnica', 'Ecossistemas', 'Sites', 'Sistemas', 'Next.js', 'UNTI'],
    deliverables: ['Site institucional', 'Apoio em projetos de clientes', 'Integrações e sustentação'],
    impact: 'Reforça atuação da Tehkné como parceiro técnico para operações digitais e agências.'
  },
  {
    title: 'Savol Seminovos',
    type: 'Participação técnica',
    category: 'Catálogo dinâmico',
    stack: 'WordPress • Elementor • Filtros • Catálogo',
    text: 'Portal automotivo com listagem de veículos, filtros comerciais, cards dinâmicos e estrutura de manutenção contínua.',
    tone: 'orange',
    status: 'Ecossistema UNTI',
    href: '/portfolio/savol-seminovos',
    featured: true,
    year: '2026',
    role: 'Participação técnica em WordPress, layout, ajustes, manutenção e estrutura dinâmica.',
    origin: 'Participação técnica',
    filters: ['Participação Técnica', 'UNTI', 'Automotivo', 'WordPress', 'Sites'],
    deliverables: ['Catálogo de veículos', 'Filtros comerciais', 'Estrutura editável em WordPress'],
    impact: 'Evidencia WordPress avançado com catálogo, dados e navegação comercial.'
  },
  {
    title: 'Beggin',
    type: 'Participação técnica',
    category: 'Marca / Produto',
    stack: 'WordPress • Elementor • Produto • Performance',
    text: 'Site de marca e produto com narrativa visual, experiência editorial, páginas comerciais e ajustes técnicos de performance.',
    tone: 'amber',
    status: 'Ecossistema UNTI',
    href: '/portfolio/beggin',
    featured: true,
    year: '2026',
    role: 'Participação em implementação, ajustes visuais, assets, performance e sustentação técnica.',
    origin: 'Participação técnica',
    filters: ['Participação Técnica', 'UNTI', 'WordPress', 'Sites'],
    deliverables: ['Site de produto', 'Ajustes visuais', 'Organização de assets e performance'],
    impact: 'Mostra capacidade de unir experiência visual, marca e sustentação técnica em WordPress.'
  },
  {
    title: 'HNK Agent',
    type: 'Produto interno',
    category: 'IA / Sistema operacional',
    stack: 'GIP • Agentes • Prompts • Automação',
    text: 'Sistema conceitual e operacional para arquitetura de soluções, agentes, documentação viva e governança de criação digital.',
    tone: 'cyan',
    status: 'Produto interno',
    year: '2026',
    role: 'Arquitetura de agentes, metodologia GIP, prompts, documentação e visão de sistema operacional.',
    origin: 'Projeto Tehkné',
    filters: ['Projetos Tehkné', 'IA', 'Sistemas'],
    deliverables: ['Framework GIP', 'Agentes especialistas', 'Documentação operacional'],
    impact: 'Base metodológica para transformar intenção em produto com rastreabilidade e governança.'
  },
  {
    title: 'Meme Digital',
    type: 'Ecossistema parceiro',
    category: 'Martech / Web',
    stack: 'WordPress • Sites • Marketing • Suporte',
    text: 'Experiência técnica em ecossistema martech, com sites institucionais, suporte a operações digitais e projetos web.',
    tone: 'pink',
    status: 'Histórico profissional',
    year: 'Histórico',
    role: 'Experiência técnica convertida em capital institucional da Tehkné.',
    origin: 'Ecossistema parceiro',
    filters: ['Ecossistemas', 'WordPress', 'Sites'],
    deliverables: ['Sites institucionais', 'Suporte técnico', 'Projetos de marketing digital'],
    impact: 'Compõe a base prática da Tehkné em operações digitais com demanda recorrente.'
  },
  {
    title: 'Savana Publicidade',
    type: 'Ecossistema parceiro',
    category: 'Agência / Web',
    stack: 'WordPress • Elementor • Branding • Campanhas',
    text: 'Experiência em ecossistema de agência com sites, campanhas, comunicação visual e sustentação técnica para projetos digitais.',
    tone: 'violet',
    status: 'Histórico profissional',
    year: 'Histórico',
    role: 'Experiência técnica e criativa em projetos digitais dentro de ecossistema de agência.',
    origin: 'Ecossistema parceiro',
    filters: ['Ecossistemas', 'WordPress', 'Sites'],
    deliverables: ['Sites e landing pages', 'Apoio técnico para campanhas', 'Sustentação visual e web'],
    impact: 'Amplia o lastro da Tehkné em comunicação, web e operação com parceiros.'
  },
  ...[
    ['Grupo Savol', 'Automotivo / Ecossistema', 'Next.js • Tailwind CSS • CRM', 'Case UNTI com atuação técnica em marcas, operação e captação regional para ecossistema automotivo.', 'blue', 'Automotivo'],
    ['Toriba', 'Automotivo / Leads', 'Next.js • Framer Motion • CRM', 'Plataforma de leads com foco em velocidade comercial, captação e experiência digital objetiva.', 'cyan', 'Automotivo'],
    ['Auto Shopping Tiquatira', 'Automotivo / Catálogo', 'API • Catálogo web • SEO', 'Catálogo conectado ao estoque real, com organização comercial e estrutura preparada para busca e conversão.', 'orange', 'Automotivo'],
    ['Dr. Eduardo Ursolino', 'Saúde / Odontologia', 'Next.js • SEO • Framer Motion', 'Case de autoridade clínica e agendamento premium, com foco em confiança, clareza e posicionamento profissional.', 'cyan', 'Saúde'],
    ['Dr. Alessandro Linder', 'Saúde / Estética', 'Next.js • SEO local • UX', 'Experiência digital para saúde e estética, com foco em confiança clínica e geração de consultas qualificadas.', 'violet', 'Saúde'],
    ['Uroclínica de Joinville', 'Saúde / Clínica especializada', 'Next.js • Tailwind CSS • SEO local', 'Clareza institucional, contato qualificado e navegação objetiva para clínica especializada.', 'blue', 'Saúde'],
    ['Hospital Thereza Mussi', 'Saúde / Hospital', 'Next.js • Conteúdo • SEO local', 'Organização de serviços e confiança digital para instituição hospitalar, com base de conteúdo escalável.', 'cyan', 'Saúde'],
    ['Human Clinic', 'Saúde / Clínica premium', 'Next.js • UX premium • Tailwind CSS', 'Refinamento visual e fluxo de contato mais objetivo para experiência clínica premium.', 'violet', 'Saúde'],
    ['Dra. Isabel Borelli', 'Saúde / Estética', 'Next.js • SEO local • UX', 'Posicionamento profissional, proximidade e jornada de contato clara para marca médica pessoal.', 'pink', 'Saúde'],
    ['Dra. Gionvana Bombonatto', 'Saúde / Estética', 'Next.js • UX premium • SEO local', 'Autoridade médica com experiência premium, visual refinado e arquitetura voltada para conversão.', 'violet', 'Saúde'],
    ['Dr. Thiago Azuaga', 'Saúde especializada', 'Next.js • Tailwind CSS • SEO local', 'Confiança e jornada de contato enxuta para atuação médica especializada.', 'blue', 'Saúde'],
    ['Grupo ALJR', 'Corporativo / Grupo empresarial', 'Next.js • SEO • UX B2B', 'Marca corporativa e relacionamento comercial com foco em clareza institucional e presença B2B.', 'violet', 'Corporativo'],
    ['Conect 7G', 'Tecnologia & Serviços', 'Next.js • Performance web • Tailwind CSS', 'Autoridade técnica e geração de demanda para empresa de tecnologia e serviços.', 'cyan', 'Corporativo'],
    ['Landing Page Conect 7G', 'Landing page / CRO', 'Next.js • Framer Motion • CRO', 'Landing page com foco em captação de leads, resposta rápida e comunicação objetiva.', 'cyan', 'Sites'],
    ['Clube Recreativo de Sumaré', 'Institucional & Serviços', 'Next.js • Conteúdo • Performance web', 'Agenda, serviços e relacionamento institucional organizados em uma experiência digital clara.', 'blue', 'Sites'],
    ['Odete Design', 'Marca criativa', 'Next.js • UX premium • SEO', 'Posicionamento premium e percepção de valor para marca criativa com presença digital refinada.', 'pink', 'Corporativo'],
    ['Renata Pimentel', 'Marca pessoal', 'Next.js • SEO local • UX', 'Autoridade, oferta e proximidade em uma presença digital orientada a contato qualificado.', 'violet', 'Sites'],
    ['Plataforma Wiki das Celebridades', 'Plataforma web / Conteúdo', 'Next.js • SEO técnico • Conteúdo', 'Estrutura editorial, navegação e escala para plataforma web orientada a conteúdo.', 'blue', 'Sistemas'],
    ['Nerd ao Máximo', 'Mídia & Conteúdo', 'Next.js • Conteúdo • Performance web', 'Comunidade, conteúdo e experiência editorial para ecossistema de mídia digital.', 'cyan', 'Sites'],
    ['Catálogo Grupo Niks', 'Indústria / Catálogo digital', 'Next.js • Catálogo digital • Tailwind CSS', 'Organização comercial da oferta em catálogo digital estruturado para apresentação e venda.', 'orange', 'Indústria'],
    ['E-commerce Onile Alimentos', 'E-commerce', 'Next.js • E-commerce • UX', 'Jornada de compra mais clara para operação de alimentos, com foco em navegação e conversão.', 'amber', 'Sistemas'],
    ['Website SuporteShop', 'E-commerce & Suporte', 'Next.js • SEO técnico • UX', 'Serviços e operação de suporte digital organizados em presença web comercial.', 'orange', 'Sites'],
    ['SOS Pistolas', 'Indústria & Varejo', 'Next.js • SEO local • Performance web', 'Nicho técnico com clareza comercial, arquitetura de conteúdo e navegação objetiva.', 'amber', 'Indústria']
  ].map(([title, category, stack, text, tone, vertical]) => ({
    title,
    type: 'Participação técnica autorizada',
    category,
    stack,
    text,
    tone: tone as PortfolioTone,
    status: 'Ecossistema UNTI',
    year: 'Ecossistema',
    role: 'Participação técnica autorizada no ecossistema UNTI, apresentada com curadoria editorial e contexto seguro.',
    origin: 'Ecossistema UNTI' as const,
    filters: ['Participação Técnica', 'Ecossistemas', 'UNTI', vertical as string, stack.includes('Next.js') ? 'Next.js' : 'Sites'],
    deliverables: ['Experiência digital', 'Arquitetura de presença web', 'Apoio técnico e evolução'],
    impact: 'Amplia o inventário de experiências aplicáveis em projetos semelhantes da Tehkné.'
  }))
];

const filters = ['Todos', 'Projetos Tehkné', 'Participação Técnica', 'Ecossistemas', 'UNTI', 'Automotivo', 'Saúde', 'Corporativo', 'Indústria', 'Sites', 'Sistemas', 'WordPress', 'Next.js', 'IA'];

const filterDescriptions: Record<string, string> = {
  Todos: 'Visão completa do inventário editorial.',
  'Projetos Tehkné': 'Produtos próprios, laboratórios e projetos diretos.',
  'Participação Técnica': 'Atuação técnica em projetos e ecossistemas parceiros.',
  Ecossistemas: 'Experiências acumuladas em operações parceiras.',
  UNTI: 'Cases autorizados do ecossistema UNTI Digital.',
  Automotivo: 'Projetos com foco em captação, catálogo e operação automotiva.',
  Saúde: 'Sites e experiências digitais para saúde, clínicas e autoridade profissional.',
  Corporativo: 'Presença digital, serviços, grupos empresariais e B2B.',
  Indústria: 'Catálogos, nichos técnicos e organização comercial.',
  Sites: 'Sites institucionais, landing pages e experiências editoriais.',
  Sistemas: 'Produtos, dashboards, catálogos e plataformas.',
  WordPress: 'Projetos com WordPress, Elementor, CPTs e manutenção.',
  'Next.js': 'Projetos com stack moderna em React/Next.js.',
  IA: 'Produtos, automações, agentes e sistemas inteligentes.'
};

export default function PortfolioExplorer() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [query, setQuery] = useState('');

  const filteredCases = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return portfolioCases.filter((item) => {
      const matchesFilter = activeFilter === 'Todos' || item.filters.includes(activeFilter) || item.origin === activeFilter || item.type.includes(activeFilter);
      const searchable = `${item.title} ${item.type} ${item.category} ${item.stack} ${item.text} ${item.status} ${item.role}`.toLowerCase();
      return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeFilter, query]);

  const diagnosticHref = whatsAppHref(`Olá, Tehkné! Vim pelo portfólio e quero conversar sobre um projeto parecido com ${activeFilter === 'Todos' ? 'os cases apresentados' : `a categoria ${activeFilter}`}.`);

  return (
    <section id="cases" className="section-frame">
      <div className="section-heading inline">
        <div>
          <span className="eyebrow">Inventário Tehkné Site v1</span>
          <h2>Uma vitrine organizada por autoria, participação e contexto.</h2>
          <p>Os cases abaixo incluem projetos próprios, participações técnicas e cases autorizados do ecossistema UNTI Digital. Os cards com página individual publicada levam para o case; os demais levam ao diagnóstico.</p>
        </div>
      </div>

      <div className="filters" aria-label="Filtros de portfólio">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? 'active' : ''}
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            <Filter size={13} /> {filter}
          </button>
        ))}
      </div>

      <div className="glass-card" style={{ marginTop: 18, display: 'grid', gap: 12 }}>
        <label className="eyebrow" htmlFor="portfolio-search"><Search size={14} /> Buscar no portfólio</label>
        <input
          id="portfolio-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busque por projeto, stack, segmento, WordPress, Next.js, saúde, automotivo..."
          style={{
            width: '100%',
            minHeight: 52,
            borderRadius: 12,
            border: '1px solid rgba(148,163,184,.2)',
            background: 'rgba(15,23,42,.58)',
            color: 'white',
            padding: '0 16px',
            outline: 'none'
          }}
        />
        <p style={{ margin: 0, color: 'var(--muted)' }}>{filterDescriptions[activeFilter]} Exibindo {filteredCases.length} de {portfolioCases.length} experiências catalogadas.</p>
      </div>

      <div className="project-grid" style={{ marginTop: 28 }}>
        {filteredCases.map((item) => (
          <article className="project-card" key={item.title}>
            <div className={`project-thumb ${item.tone}`}>
              <Orbit size={46} />
              <span />
            </div>
            <small>{item.type} • {item.year}</small>
            <h3>{item.title}</h3>
            <p><strong>{item.category}</strong></p>
            <p>{item.text}</p>
            <div className="case-stack">
              {item.stack.split(' • ').slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <p><strong>Papel:</strong> {item.role}</p>
            <ul>
              {item.deliverables.map((deliverable) => <li key={deliverable}><CheckCircle2 size={14} /> {deliverable}</li>)}
            </ul>
            <p>{item.impact}</p>
            <a href={item.href ?? diagnosticHref} target={item.href ? undefined : '_blank'} rel={item.href ? undefined : 'noreferrer'}>
              {item.href ? 'Ver case' : 'Solicitar diagnóstico'} <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <div className="glass-card" style={{ marginTop: 28 }}>
          <h3>Nenhum case encontrado com esse filtro.</h3>
          <p>Experimente buscar por segmento, tecnologia ou tipo de atuação. Também podemos mapear um projeto parecido sob demanda.</p>
          <a className="btn btn-primary coin" href={diagnosticHref} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
        </div>
      )}
    </section>
  );
}
