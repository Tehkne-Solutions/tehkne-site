import { ArrowUpRight, Award, BottleWine, Brush, Globe2, Leaf, ShoppingBag, Sparkles, Zap } from 'lucide-react';

const project = {
  title: 'Beggin',
  eyebrow: 'Case • Participação técnica',
  type: 'Participação técnica',
  category: 'Site de marca / Produto',
  stack: ['WordPress', 'Elementor', 'Front-end', 'Performance', 'Marca e produto'],
  description:
    'Site de marca e produto com narrativa visual, experiência editorial, páginas comerciais, destaque para produtos, sustentabilidade e ajustes técnicos de front-end.'
};

const highlights = [
  ['Marca e produto', 'Página com narrativa visual forte para destacar linha de produtos, história e diferenciais.'],
  ['Experiência editorial', 'Layout com ritmo visual, imagens grandes, seções alternadas e leitura de produto.'],
  ['WordPress técnico', 'Ajustes de front-end, estrutura visual, componentes e manutenção em ambiente WordPress.'],
  ['Performance', 'Evolução técnica para melhorar carregamento, experiência e sustentação do site.']
];

const modules = [
  { icon: BottleWine, title: 'Vitrine de produtos', text: 'Organização visual para apresentar linhas, diferenciais, categorias e narrativa comercial.' },
  { icon: Brush, title: 'Direção visual', text: 'Ajustes de composição, seções, espaçamentos e experiência premium para marca.' },
  { icon: Award, title: 'Prova de valor', text: 'Espaços para prêmios, diferenciais, origem, sustentabilidade e autoridade de produto.' },
  { icon: ShoppingBag, title: 'Jornada de compra', text: 'CTA e navegação pensados para levar o usuário a conhecer e comprar.' },
  { icon: Leaf, title: 'Sustentabilidade', text: 'Seções institucionais para reforçar compromisso, reciclagem e atributos de marca.' },
  { icon: Zap, title: 'Ajustes técnicos', text: 'Front-end, performance, manutenção e refinamento da experiência em produção.' }
];

export const metadata = {
  title: 'Case: Beggin | Tehkné Solutions',
  description: 'Case Beggin: participação técnica em site de marca e produto com WordPress, Elementor, front-end, performance e experiência editorial.'
};

export default function BegginCase() {
  return (
    <main className="site-shell case-page">
      <div className="background-grid" />
      <header className="nav-shell">
        <a className="brand" href="/" aria-label="Tehkné Solutions"><span className="brand-symbol"><Sparkles size={18} /></span><span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span></a>
        <nav><a href="/solucoes">Soluções</a><a href="/portfolio">Portfólio</a><a href="/#metodo">Método</a><a href="/#os">Tehkné OS</a><a href="/#contato">Contato</a></nav>
        <a className="btn btn-primary coin" href="/#contato">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
      </header>
      <section className="section-frame case-hero">
        <div className="case-hero-copy"><span className="eyebrow">{project.eyebrow}</span><h1>{project.title}: site de marca com narrativa visual e experiência de produto.</h1><p>{project.description}</p><div className="hero-actions"><a className="btn btn-primary coin" href="/#contato">Quero algo parecido <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a></div><div className="case-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        <div className="case-visual"><div className="case-window"><div className="case-window-bar"><span /><span /><span /></div><div className="case-dashboard-grid"><div className="case-panel large"><BottleWine size={28} /><strong>Produto</strong><small>Marca • História • Prêmios • Compra</small></div><div className="case-panel"><Award size={24} /><strong>Prêmios</strong></div><div className="case-panel"><Leaf size={24} /><strong>Sustentável</strong></div><div className="case-panel wide"><Globe2 size={24} /><strong>WordPress com direção visual</strong><small>Elementor • Front-end • Performance • Produto</small></div></div></div></div>
      </section>
      <section className="metrics section-frame compact">{highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section className="section-frame"><div className="section-heading"><span className="eyebrow">Entregáveis</span><h2>Uma presença digital para transformar produto em experiência.</h2><p>O case demonstra atuação técnica em site visual de marca, com foco em produto, estética, narrativa, performance e sustentação.</p></div><div className="service-grid solutions-grid">{modules.map((module) => { const Icon = module.icon; return <article className="glass-card service-card solution-card" key={module.title}><Icon className="card-icon" size={32} /><h3>{module.title}</h3><p>{module.text}</p></article>; })}</div></section>
      <section className="final-cta"><div><span className="eyebrow">Marca e produto</span><h2>Quer transformar seu produto em uma experiência digital premium?</h2><p>A Tehkné estrutura páginas de produto, sites de marca, front-end, performance e evolução para operações comerciais.</p></div><div className="hero-actions"><a className="btn btn-primary coin" href="mailto:contato@tehkne.com.br">Solicitar diagnóstico <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a></div></section>
    </main>
  );
}
