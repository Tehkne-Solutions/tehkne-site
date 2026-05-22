import { ArrowUpRight, LayoutDashboard, Workflow } from 'lucide-react';

const project = {
  title: 'Tehkné Flow',
  type: 'Produto interno',
  category: 'Sistema / Produto',
  stack: ['Next.js', 'React', 'IA', 'Automação', 'Analytics'],
  description: 'Produto interno para gestão de projetos, tarefas, automações e visão operacional de times digitais.',
  heroImage: '/images/tehkne-flow-hero.png',
  fullScreenshots: ['/images/tehkne-flow-full-1.png', '/images/tehkne-flow-full-2.png']
};

export const metadata = {
  title: 'Case: Tehkné Flow | Tehkné Solutions',
  description: 'Case de produto interno Tehkné Flow, sistema de gestão, automação e análise operacional de times digitais.'
};

export default function TehknéFlowCase() {
  return (
    <main className="site-shell">
      <header className="nav-shell">
        <a className="brand" href="/" aria-label="Tehkné Solutions">
          <span className="brand-symbol" />
          <span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span>
        </a>
      </header>

      <section className="section-frame hero">
        <div className="hero-copy">
          <span className="eyebrow">Case interno</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/#portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Detalhes do projeto</span>
          <h2>{project.title} • {project.type}</h2>
        </div>
        <ul>
          {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="full-screenshots">
          {project.fullScreenshots.map((src, index) => <img key={index} src={src} alt={`${project.title} screenshot ${index+1}`} />)}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Quer algo parecido?</span>
          <h2>Vamos estruturar seu projeto de forma clara e escalável.</h2>
          <p>Entre em contato para diagnóstico técnico e planejamento do seu produto digital.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href="mailto:contato@tehkne.com.br">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
