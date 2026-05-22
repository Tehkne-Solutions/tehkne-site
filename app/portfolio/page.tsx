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
  }
];

const filters = ['Todos', 'Projetos Tehkné', 'Participação Técnica', 'Ecossistemas', 'Sites', 'Sistemas', 'WordPress', 'Next.js', 'IA'];
const stats = [
  ['67+', 'repositórios mapeados'],
  ['33+', 'cases em curadoria'],
  ['6+', 'sites com prints capturados'],
  ['3', 'níveis editoriais de portfólio']
];

export const metadata = {
  title: 'Portfólio | Tehkné Solutions',
  description: 'Projetos Tehkné, participação técnica e ecossistemas digitais onde atuamos com arquitetura, desenvolvimento, WordPress, Next.js, IA e sustentação.'
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
          <p>A curadoria da Tehkné separa projetos próprios, participação técnica e experiências em ecossistemas parceiros para apresentar o portfólio com clareza, responsabilidade e lastro técnico.</p>
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
            <p>Os cases abaixo são apresentados como base inicial de portfólio. A linguagem evita confundir projeto direto, parceria técnica, white label ou histórico profissional.</p>
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
          <p>A Tehkné trata experiência acumulada como capital técnico institucional, mas separa claramente projetos próprios, participação técnica e ecossistemas onde houve atuação.</p>
          <div className="os-features">
            {['Projetos Tehkné', 'Participação técnica', 'Ecossistemas parceiros', 'Laboratórios internos', 'Produtos próprios', 'Cases em curadoria'].map((item) => <span key={item}>{item}</span>)}
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
