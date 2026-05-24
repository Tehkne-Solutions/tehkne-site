import { notFound } from 'next/navigation';
import { ArrowUpRight, CheckCircle2, Megaphone, Palette, Workflow, BarChart3 } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref } from '../contact';
import { getSavanaProjectCase } from './savana-project-cases';

export function SavanaClientCasePage({ slug }: { slug: string }) {
  const project = getSavanaProjectCase(slug);
  if (!project) notFound();

  const pageWhatsApp = whatsAppHref(`Olá, Tehkné! Quero conversar sobre um projeto parecido com o case ${project.title}.`);
  const icons = [Megaphone, Workflow, Palette, BarChart3];
  const modules = [
    { title: 'Contexto do cliente', text: project.challenge },
    { title: 'Execução em agência', text: project.delivery },
    { title: 'Stack e repertório', text: `Entrega conectada a ${project.stack.join(', ')}.` },
    { title: 'Resultado demonstrado', text: project.outcome }
  ];
  const process: Array<[string, string, string]> = [
    ['01', 'Briefing e leitura da marca', 'Entendimento do setor, proposta, público, peças necessárias e contexto comercial do cliente.'],
    ['02', 'Organização da narrativa', 'Estruturação da mensagem, hierarquia visual, campanha, materiais e presença digital de apoio.'],
    ['03', 'Execução visual e técnica', 'Apoio em WordPress, landing pages, materiais digitais, comunicação visual, ajustes e sustentação.'],
    ['04', 'Curadoria para portfólio', 'Apresentação do case como repertório técnico real da Tehkné, com contexto, stack, entrega e resultado.' ]
  ];

  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero portfolio-case-hero-rich">
        <div className="case-hero-copy">
          <span className="eyebrow">Case Tehkné • Savana Publicidade • {project.sector}</span>
          <h1>{project.title}: {project.category.toLowerCase()} com estratégia, comunicação visual e execução digital.</h1>
          <p>{project.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="https://savanapublicidade.com.br/" target="_blank" rel="noreferrer">Ver ecossistema Savana <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
        <div className="case-visual">
          <div className={`portfolio-case-preview ${project.tone}`}>
            <div className="case-window-bar"><span /><span /><span /></div>
            <div className="portfolio-preview-body">
              <Megaphone size={54} />
              <strong>{project.imageLabel}</strong>
              <small>{project.title}</small>
              <div className="portfolio-preview-grid"><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>{project.sector}</strong><span>segmento</span></div>
        <div><strong>{project.caseType}</strong><span>tipo de entrega</span></div>
        <div><strong>Savana</strong><span>ecossistema</span></div>
        <div><strong>Case Tehkné</strong><span>vitrine</span></div>
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este projeto demonstra para um novo cliente.</h2>
          <p>Este case mostra repertório real em ambiente de agência: comunicação, campanha, design aplicado, WordPress, landing pages, conteúdo e sustentação para marcas de diferentes setores.</p>
        </div>
        <div className="case-reading-grid case-reading-grid-balanced">
          {modules.map((module, index) => {
            const Icon = icons[index] ?? CheckCircle2;
            return <article className="glass-card case-reading-card case-reading-card-balanced" key={module.title}><Icon className="card-icon" size={30} /><h3>{module.title}</h3><p>{module.text}</p></article>;
          })}
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Do briefing ao material vendável.</h2></div>
        <div className="case-method-map">{process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Stack e capacidade</span>
          <h2>Experiência de agência convertida em capital técnico.</h2>
          <p>O valor desse case está na soma entre leitura comercial, execução visual, WordPress, comunicação de campanha e capacidade de adaptar entregas para diferentes setores.</p>
          <div className="os-features">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="stack-cloud">{['Campanha', 'WordPress', 'Landing page', 'Branding', 'Comunicação visual', 'Conteúdo', 'CRO', 'Sustentação'].map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <ContactForm page={`Case ${project.title}`} context={`case ${project.title}, Savana Publicidade, ${project.category}, ${project.sector}, stack ${project.stack.join(', ')}`} title="Quer criar um case com esse padrão?" description="Use este bloco para chamar a Tehkné no WhatsApp com contexto de campanha, site, WordPress, branding ou presença digital." />
    </main>
  );
}
