import { ArrowUpRight, Braces, Building2, Code2, Globe2, Network, ShieldCheck, Sparkles } from 'lucide-react';

const project = {
  title: 'UNTI Digital',
  eyebrow: 'Case • Parceria técnica contínua',
  type: 'Parceria técnica',
  category: 'Site / Plataforma / Operação digital',
  stack: ['Next.js', 'Integrações', 'APIs', 'Operação digital', 'White label técnico'],
  description:
    'Atuação como braço técnico para operação digital, com foco em sites, plataformas, integrações, governança, performance e sustentação contínua.'
};

const highlights = [
  ['Braço técnico', 'Apoio contínuo para transformar demandas digitais em arquitetura, design e código.'],
  ['Operação digital', 'Base para sites, plataformas, integrações, APIs e sustentação técnica.'],
  ['Governança', 'Processo com documentação, versionamento, manutenção e evolução planejada.'],
  ['Escalabilidade', 'Estrutura orientada para atender clientes, projetos e novos produtos digitais.']
];

const modules = [
  { icon: Globe2, title: 'Sites e plataformas', text: 'Criação e evolução de interfaces digitais para apresentação, vendas, conteúdo e operação.' },
  { icon: Braces, title: 'APIs e integrações', text: 'Conexões com CRM, ERP, formulários, automações e ferramentas externas.' },
  { icon: Code2, title: 'Desenvolvimento sob demanda', text: 'Execução técnica para projetos web, front-end, back-end, landing pages e sistemas.' },
  { icon: Network, title: 'Arquitetura operacional', text: 'Organização técnica para reduzir improviso, padronizar entregas e dar previsibilidade.' },
  { icon: ShieldCheck, title: 'Sustentação contínua', text: 'Manutenção, ajustes, performance, correções e melhorias constantes.' },
  { icon: Building2, title: 'Ecossistema parceiro', text: 'Atuação integrada com uma operação de tecnologia e marketing para negócios.' }
];

export const metadata = {
  title: 'Case: UNTI Digital | Tehkné Solutions',
  description: 'Case UNTI Digital: parceria técnica, operação digital, sites, plataformas, integrações, APIs e sustentação.'
};

export default function UntiDigitalCase() {
  return (
    <main className="site-shell case-page">
      <div className="background-grid" />
      <header className="nav-shell">
        <a className="brand" href="/" aria-label="Tehkné Solutions"><span className="brand-symbol"><Sparkles size={18} /></span><span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span></a>
        <nav><a href="/solucoes">Soluções</a><a href="/portfolio">Portfólio</a><a href="/#metodo">Método</a><a href="/#os">Tehkné OS</a><a href="/#contato">Contato</a></nav>
        <a className="btn btn-primary coin" href="/#contato">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
      </header>
      <section className="section-frame case-hero">
        <div className="case-hero-copy"><span className="eyebrow">{project.eyebrow}</span><h1>{project.title}: tecnologia como braço operacional para negócios digitais.</h1><p>{project.description}</p><div className="hero-actions"><a className="btn btn-primary coin" href="/#contato">Quero algo parecido <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a></div><div className="case-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        <div className="case-visual"><div className="case-window"><div className="case-window-bar"><span /><span /><span /></div><div className="case-dashboard-grid"><div className="case-panel large"><Network size={28} /><strong>Operação</strong><small>Sites • Plataformas • Integrações • Sustentação</small></div><div className="case-panel"><Braces size={24} /><strong>APIs</strong></div><div className="case-panel"><ShieldCheck size={24} /><strong>Governança</strong></div><div className="case-panel wide"><Code2 size={24} /><strong>Execução técnica contínua</strong><small>Next.js • Front-end • Automações • Deploy</small></div></div></div></div>
      </section>
      <section className="metrics section-frame compact">{highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section className="section-frame"><div className="section-heading"><span className="eyebrow">Atuação</span><h2>Uma parceria técnica para transformar demanda em entrega digital.</h2><p>Este case representa a Tehkné como estrutura de apoio para empresas e operações que precisam de tecnologia confiável, documentação e evolução.</p></div><div className="service-grid solutions-grid">{modules.map((module) => { const Icon = module.icon; return <article className="glass-card service-card solution-card" key={module.title}><Icon className="card-icon" size={32} /><h3>{module.title}</h3><p>{module.text}</p></article>; })}</div></section>
      <section className="final-cta"><div><span className="eyebrow">Parceria técnica</span><h2>Sua empresa precisa de um braço técnico para executar com segurança?</h2><p>A Tehkné apoia negócios, agências e operações digitais com arquitetura, desenvolvimento, integrações e sustentação.</p></div><div className="hero-actions"><a className="btn btn-primary coin" href="mailto:contato@tehkne.com.br">Solicitar diagnóstico <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a></div></section>
    </main>
  );
}
