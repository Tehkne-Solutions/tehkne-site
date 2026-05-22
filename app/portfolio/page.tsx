import { ArrowUpRight, Braces, Code2, Globe2, LayoutDashboard, Orbit, Sparkles, Workflow } from 'lucide-react';

const cases = [
  {
    title: 'Tehkné Flow',
    type: 'Projeto Tehkné',
    category: 'Sistema / Produto',
    stack: 'Next.js • Gestão • Analytics • Operação',
    text: 'Produto interno para gestão de projetos, tarefas, automações e visão operacional de times digitais.',
    tone: 'violet',
    icon: LayoutDashboard,
    status: 'Laboratório Tehkné'
  },
  {
    title: 'Vacina One',
    type: 'Projeto Tehkné',
    category: 'Site institucional',
    stack: 'Next.js • Saúde • Conteúdo • Franquias',
    text: 'Estrutura institucional moderna para clínica de vacinação, com comunicação clara, navegação objetiva e base preparada para expansão.',
    tone: 'cyan',
    icon: Globe2,
    status: 'Projeto direto / staging'
  },
  {
    title: 'UNTI Digital',
    type: 'Parceria técnica',
    category: 'Site / Plataforma',
    stack: 'Next.js • Integrações • Operação digital',
    text: 'Atuação como braço técnico em operação digital com foco em sites, plataformas, integrações, APIs e sustentação.',
    tone: 'blue',
    icon: Code2,
    status: 'Cliente fixo / ecossistema'
  },
  {
    title: 'Savol Seminovos',
    type: 'Participação técnica',
    category: 'Catálogo dinâmico',
    stack: 'WordPress • Elementor • Filtros • Catálogo',
    text: 'Portal automotivo com listagem de veículos, filtros comerciais, cards dinâmicos e estrutura de manutenção contínua.',
    tone: 'orange',
    icon: Braces,
    status: 'Participação técnica'
  },
  {
    title: 'Beggin',
    type: 'Participação técnica',
    category: 'Marca / Produto',
    stack: 'WordPress • Elementor • Produto • Performance',
    text: 'Site de marca e produto com narrativa visual, experiência editorial, páginas comerciais e ajustes técnicos de performance.',
    tone: 'amber',
    icon: Globe2,
    status: 'Participação técnica'
  },
  {
    title: 'HNK Agent',
    type: 'Projeto Tehkné',
    category: 'IA / Sistema operacional',
    stack: 'GIP • Agentes • Prompts • Automação',
    text: 'Sistema conceitual e operacional para arquitetura de soluções, agentes, documentação viva e governança de criação digital.',
    tone: 'cyan',
    icon: Orbit,
    status: 'Produto interno'
  },
  {
    title: 'Meme Digital',
    type: 'Ecossistema parceiro',
    category: 'Martech / Web',
    stack: 'WordPress • Sites • Marketing • Suporte',
    text: 'Experiência técnica em ecossistema martech, com sites institucionais, suporte a operações digitais e projetos web.',
    tone: 'pink',
    icon: Workflow,
    status: 'Histórico profissional'
  },
  {
    title: 'Savana Publicidade',
    type: 'Ecossistema parceiro',
    category: 'Agência / Web',
    stack: 'WordPress • Elementor • Branding • Campanhas',
    text: 'Experiência em ecossistema de agência com sites, campanhas, comunicação visual e sustentação técnica para projetos digitais.',
    tone: 'violet',
    icon: Sparkles,
    status: 'Histórico profissional'
  },
  {
    title: 'Grupo Savol',
    type: 'Participação técnica autorizada',
    category: 'Automotivo / Ecossistema',
    stack: 'Next.js • Tailwind CSS • CRM',
    text: 'Case UNTI com atuação técnica em marcas, operação e captação regional para ecossistema automotivo.',
    tone: 'blue',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Toriba',
    type: 'Participação técnica autorizada',
    category: 'Automotivo / Leads',
    stack: 'Next.js • Framer Motion • CRM',
    text: 'Plataforma de leads com foco em velocidade comercial, captação e experiência digital objetiva.',
    tone: 'cyan',
    icon: Workflow,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Auto Shopping Tiquatira',
    type: 'Participação técnica autorizada',
    category: 'Automotivo / Catálogo',
    stack: 'API • Catálogo web • SEO',
    text: 'Catálogo conectado ao estoque real, com organização comercial e estrutura preparada para busca e conversão.',
    tone: 'orange',
    icon: Braces,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Dr. Eduardo Ursolino',
    type: 'Participação técnica autorizada',
    category: 'Saúde / Odontologia',
    stack: 'Next.js • SEO • Framer Motion',
    text: 'Case de autoridade clínica e agendamento premium, com foco em confiança, clareza e posicionamento profissional.',
    tone: 'cyan',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Dr. Alessandro Linder',
    type: 'Participação técnica autorizada',
    category: 'Saúde / Estética',
    stack: 'Next.js • SEO local • UX',
    text: 'Experiência digital para saúde e estética, com foco em confiança clínica e geração de consultas qualificadas.',
    tone: 'violet',
    icon: Sparkles,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Uroclínica de Joinville',
    type: 'Participação técnica autorizada',
    category: 'Saúde / Clínica especializada',
    stack: 'Next.js • Tailwind CSS • SEO local',
    text: 'Clareza institucional, contato qualificado e navegação objetiva para clínica especializada.',
    tone: 'blue',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Hospital Thereza Mussi',
    type: 'Participação técnica autorizada',
    category: 'Saúde / Hospital',
    stack: 'Next.js • Conteúdo • SEO local',
    text: 'Organização de serviços e confiança digital para instituição hospitalar, com base de conteúdo escalável.',
    tone: 'cyan',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Human Clinic',
    type: 'Participação técnica autorizada',
    category: 'Saúde / Clínica premium',
    stack: 'Next.js • UX premium • Tailwind CSS',
    text: 'Refinamento visual e fluxo de contato mais objetivo para experiência clínica premium.',
    tone: 'violet',
    icon: Sparkles,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Dra. Isabel Borelli',
    type: 'Participação técnica autorizada',
    category: 'Saúde / Estética',
    stack: 'Next.js • SEO local • UX',
    text: 'Posicionamento profissional, proximidade e jornada de contato clara para marca médica pessoal.',
    tone: 'pink',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Dra. Gionvana Bombonatto',
    type: 'Participação técnica autorizada',
    category: 'Saúde / Estética',
    stack: 'Next.js • UX premium • SEO local',
    text: 'Autoridade médica com experiência premium, visual refinado e arquitetura voltada para conversão.',
    tone: 'violet',
    icon: Sparkles,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Dr. Thiago Azuaga',
    type: 'Participação técnica autorizada',
    category: 'Saúde especializada',
    stack: 'Next.js • Tailwind CSS • SEO local',
    text: 'Confiança e jornada de contato enxuta para atuação médica especializada.',
    tone: 'blue',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Grupo ALJR',
    type: 'Participação técnica autorizada',
    category: 'Corporativo / Grupo empresarial',
    stack: 'Next.js • SEO • UX B2B',
    text: 'Marca corporativa e relacionamento comercial com foco em clareza institucional e presença B2B.',
    tone: 'violet',
    icon: LayoutDashboard,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Conect 7G',
    type: 'Participação técnica autorizada',
    category: 'Tecnologia & Serviços',
    stack: 'Next.js • Performance web • Tailwind CSS',
    text: 'Autoridade técnica e geração de demanda para empresa de tecnologia e serviços.',
    tone: 'cyan',
    icon: Code2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Landing Page Conect 7G',
    type: 'Participação técnica autorizada',
    category: 'Landing page / CRO',
    stack: 'Next.js • Framer Motion • CRO',
    text: 'Landing page com foco em captação de leads, resposta rápida e comunicação objetiva.',
    tone: 'cyan',
    icon: Workflow,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Clube Recreativo de Sumaré',
    type: 'Participação técnica autorizada',
    category: 'Institucional & Serviços',
    stack: 'Next.js • Conteúdo • Performance web',
    text: 'Agenda, serviços e relacionamento institucional organizados em uma experiência digital clara.',
    tone: 'blue',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Odete Design',
    type: 'Participação técnica autorizada',
    category: 'Marca criativa',
    stack: 'Next.js • UX premium • SEO',
    text: 'Posicionamento premium e percepção de valor para marca criativa com presença digital refinada.',
    tone: 'pink',
    icon: Sparkles,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Renata Pimentel',
    type: 'Participação técnica autorizada',
    category: 'Marca pessoal',
    stack: 'Next.js • SEO local • UX',
    text: 'Autoridade, oferta e proximidade em uma presença digital orientada a contato qualificado.',
    tone: 'violet',
    icon: Sparkles,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Plataforma Wiki das Celebridades',
    type: 'Participação técnica autorizada',
    category: 'Plataforma web / Conteúdo',
    stack: 'Next.js • SEO técnico • Conteúdo',
    text: 'Estrutura editorial, navegação e escala para plataforma web orientada a conteúdo.',
    tone: 'blue',
    icon: LayoutDashboard,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Nerd ao Máximo',
    type: 'Participação técnica autorizada',
    category: 'Mídia & Conteúdo',
    stack: 'Next.js • Conteúdo • Performance web',
    text: 'Comunidade, conteúdo e experiência editorial para ecossistema de mídia digital.',
    tone: 'cyan',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'Catálogo Grupo Niks',
    type: 'Participação técnica autorizada',
    category: 'Indústria / Catálogo digital',
    stack: 'Next.js • Catálogo digital • Tailwind CSS',
    text: 'Organização comercial da oferta em catálogo digital estruturado para apresentação e venda.',
    tone: 'orange',
    icon: Braces,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'E-commerce Onile Alimentos',
    type: 'Participação técnica autorizada',
    category: 'E-commerce',
    stack: 'Next.js • E-commerce • UX',
    text: 'Jornada de compra mais clara para operação de alimentos, com foco em navegação e conversão.',
    tone: 'amber',
    icon: Workflow,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'SWebsite SuporteShop',
    type: 'Participação técnica autorizada',
    category: 'E-commerce & Suporte',
    stack: 'Next.js • SEO técnico • UX',
    text: 'Serviços e operação de suporte digital organizados em presença web comercial.',
    tone: 'orange',
    icon: Globe2,
    status: 'Ecossistema UNTI'
  },
  {
    title: 'SOS Pistolas',
    type: 'Participação técnica autorizada',
    category: 'Indústria & Varejo',
    stack: 'Next.js • SEO local • Performance web',
    text: 'Nicho técnico com clareza comercial, arquitetura de conteúdo e navegação objetiva.',
    tone: 'amber',
    icon: Braces,
    status: 'Ecossistema UNTI'
  }
];

const filters = ['Todos', 'Projetos Tehkné', 'Participação Técnica', 'Ecossistemas', 'UNTI', 'Automotivo', 'Saúde', 'Corporativo', 'Indústria', 'Sites', 'Sistemas', 'WordPress', 'Next.js', 'IA'];
const stats = [
  ['31+', 'experiências listadas'],
  ['23', 'cases UNTI autorizados'],
  ['67+', 'repositórios mapeados'],
  ['3', 'níveis editoriais de portfólio']
];

export const metadata = {
  title: 'Portfólio | Tehkné Solutions',
  description: 'Projetos Tehkné, participação técnica autorizada e ecossistemas digitais onde atuamos com arquitetura, desenvolvimento, WordPress, Next.js, IA e sustentação.'
};

export default function PortfolioPage() {
  return (
    <main className="site-shell">
      <div className="background-grid" />
      <header className="nav-shell">
        <a className="brand" href="/" aria-label="Tehkné Solutions">
          <span className="brand-symbol"><Sparkles size={18} /></span>
          <span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span>
        </a>
        <nav>
          <a href="/solucoes">Soluções</a>
          <a href="/portfolio">Portfólio</a>
          <a href="/#metodo">Método</a>
          <a href="/#os">Tehkné OS</a>
          <a href="/#contato">Contato</a>
        </nav>
        <a className="btn btn-primary coin" href="/#contato">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
      </header>

      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">Portfólio e experiências</span>
          <h1>Projetos, produtos e ecossistemas digitais com participação técnica real.</h1>
          <p>A curadoria da Tehkné separa projetos próprios, participação técnica autorizada e experiências em ecossistemas parceiros para apresentar o portfólio com clareza, responsabilidade e lastro técnico.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/#contato">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#cases">Ver cases <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section id="cases" className="section-frame">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Inventário Tehkné Site v1</span>
            <h2>Uma vitrine organizada por autoria, participação e contexto.</h2>
            <p>Os cases abaixo incluem os projetos próprios da Tehkné, participações técnicas e os cases autorizados do ecossistema UNTI Digital, mantendo clareza editorial sobre autoria e contexto.</p>
          </div>
        </div>
        <div className="filters" aria-label="Filtros de portfólio">
          {filters.map((filter, index) => <button className={index === 0 ? 'active' : ''} key={filter}>{filter}</button>)}
        </div>
        <div className="project-grid">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <article className="project-card" key={item.title}>
                <div className={`project-thumb ${item.tone}`}><Icon size={46} /><span /></div>
                <small>{item.type}</small>
                <h3>{item.title}</h3>
                <p><strong>{item.category}</strong></p>
                <p>{item.text}</p>
                <p>{item.stack}</p>
                <a href="/#contato">Conversar sobre este tipo de projeto <ArrowUpRight size={14} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Regra editorial</span>
          <h2>Portfólio com narrativa segura e profissional.</h2>
          <p>A Tehkné trata experiência acumulada como capital técnico institucional, mas separa claramente projetos próprios, participação técnica autorizada e ecossistemas onde houve atuação.</p>
          <div className="os-features">
            {['Projetos Tehkné', 'Participação técnica autorizada', 'Ecossistemas parceiros', 'Cases UNTI', 'Laboratórios internos', 'Produtos próprios'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Next.js', 'React', 'WordPress', 'Elementor', 'PHP', 'Python', 'Flutter', 'APIs', 'IA', 'n8n', 'GitHub', 'Vercel'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Quer algo parecido?</span>
          <h2>Vamos mapear o tipo de projeto que sua operação precisa.</h2>
          <p>Conte sua demanda e a Tehkné estrutura o caminho: arquitetura, design, desenvolvimento, automação, publicação e evolução.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href="mailto:contato@tehkne.com.br">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
