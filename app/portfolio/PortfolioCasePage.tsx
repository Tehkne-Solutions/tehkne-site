import { notFound } from 'next/navigation';
import { ArrowUpRight, BarChart3, CheckCircle2, Layers3, LayoutDashboard, Network, Orbit, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref } from '../contact';
import { getPortfolioCase, portfolioCases } from './portfolio-data';

type Props = {
  slug: string;
};

export function PortfolioCasePage({ slug }: Props) {
  const project = getPortfolioCase(slug);

  if (!project) {
    notFound();
  }

  const pageWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pelo case ${project.title} no portfólio e quero conversar sobre um projeto parecido. Quero entender escopo, arquitetura, investimento e próximos passos.`);

  const metrics = [
    [project.level, 'nível editorial'],
    [project.category, 'tipo de entrega'],
    [project.sector, 'segmento'],
    [project.status, 'status no portfólio']
  ];

  const modules = [
    { icon: LayoutDashboard, title: 'Contexto', text: project.challenge },
    { icon: Layers3, title: 'Arquitetura', text: 'Organização de escopo, páginas, componentes, conteúdo, fluxos, integrações e pontos de evolução.' },
    { icon: Workflow, title: 'Execução', text: project.delivery },
    { icon: BarChart3, title: 'Resultado', text: project.outcome },
    { icon: ShieldCheck, title: 'Governança', text: 'Narrativa de portfólio tratada com separação entre projeto próprio, participação técnica e ecossistema parceiro.' },
    { icon: Network, title: 'Stack e operação', text: `Base técnica e operacional envolvendo ${project.stack.join(', ')}.` }
  ];

  const process = [
    ['01', 'Diagnóstico', 'Entendimento do objetivo, público, contexto técnico, restrições e oportunidade principal.'],
    ['02', 'Estrutura', 'Organização de arquitetura, layout, conteúdo, dados, integrações e critérios de entrega.'],
    ['03', 'Construção', 'Execução técnica e visual com foco em clareza, performance, manutenção e experiência.'],
    ['04', 'Evolução', 'Ajustes, sustentação, melhorias incrementais e novos ciclos conforme a operação amadurece.']
  ];

  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero">
        <div className="case-hero-copy">
          <span className="eyebrow">{project.level} • {project.sector}</span>
          <h1>{project.title}: {project.category.toLowerCase()} com participação técnica rastreável.</h1>
          <p>{project.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">
            {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>
        <div className="case-visual">
          <div className={`portfolio-case-preview ${project.tone}`}>
            <div className="case-window-bar"><span /><span /><span /></div>
            <div className="portfolio-preview-body">
              <Orbit size={54} />
              <strong>{project.imageLabel}</strong>
              <small>{project.title}</small>
              <div className="portfolio-preview-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        {metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este projeto demonstra para um novo cliente.</h2>
          <p>Esta página usa um modelo único de case para apresentar repertório técnico, tipo de participação, stack, contexto e resultado esperado sem criar confusão de autoria.</p>
        </div>
        <div className="service-grid solutions-grid">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article className="glass-card service-card solution-card" key={module.title}>
                <Icon className="card-icon" size={32} />
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Método aplicado</span>
          <h2>Da necessidade inicial à evolução contínua.</h2>
        </div>
        <div className="method-line solutions-process">
          {process.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <CheckCircle2 size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Stack e capacidade</span>
          <h2>Experiência apresentada como capital técnico institucional.</h2>
          <p>A Tehkné reúne experiência prática em desenvolvimento, design, WordPress, Next.js, automações, apps, jogos, conteúdo e sustentação. Este case entra como parte de um inventário maior de mais de 7 anos de atuação.</p>
          <div className="os-features">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Arquitetura', 'Design & UX', 'Desenvolvimento', 'Performance', 'Sustentação', 'Evolução'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <ContactForm
        page={`Case ${project.title}`}
        context={`case ${project.title}, ${project.category}, ${project.sector}, stack ${project.stack.join(', ')}`}
        title="Quer criar um projeto parecido?"
        description="Use este bloco para chamar a Tehkné no WhatsApp com o contexto deste case e iniciar um diagnóstico técnico."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Próximo passo</span>
          <h2>Vamos transformar sua demanda em um case novo.</h2>
          <p>Conte o que você precisa criar, melhorar ou automatizar. A Tehkné organiza o caminho técnico e comercial para tornar isso real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}

export function getAllPortfolioSlugs() {
  return portfolioCases.map((item) => ({ slug: item.slug }));
}
