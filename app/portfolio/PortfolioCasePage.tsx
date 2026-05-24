import { notFound } from 'next/navigation';
import { ArrowUpRight, CheckCircle2, LayoutDashboard, Layers3, Sparkles, Workflow, BarChart3, ShieldCheck, Network } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref } from '../contact';
import { getPortfolioCase } from './portfolio-data';
import { getMemeProjectCase } from './meme-project-cases';
import { getUntiCaseAsset } from './unti-case-assets';
import { getCaseStackOverride } from './case-stack-overrides';

type Props = { slug: string };

type CaseModule = { title: string; text: string };

const defaultProcess: Array<[string, string, string]> = [
  ['01', 'Diagnóstico', 'Entendimento do objetivo, público, contexto técnico, restrições e oportunidade principal.'],
  ['02', 'Estrutura', 'Organização de arquitetura, layout, conteúdo, dados, integrações e critérios de entrega.'],
  ['03', 'Construção', 'Execução técnica e visual com foco em clareza, performance, manutenção e experiência.'],
  ['04', 'Evolução', 'Ajustes, sustentação, melhorias incrementais e novos ciclos conforme a operação amadurece.']
];

function screenshotUrl(url?: string) {
  return url ? `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1400` : undefined;
}

export function PortfolioCasePage({ slug }: Props) {
  const memeProject = getMemeProjectCase(slug);
  const project = memeProject ?? getPortfolioCase(slug);

  if (!project) notFound();

  const asset = getUntiCaseAsset(project.slug);
  const memeScreenshot = screenshotUrl(memeProject?.externalOfficialUrl);
  const stackOverride = getCaseStackOverride(project.slug);
  const effectiveStack = stackOverride?.stack ?? project.stack;
  const pageWhatsApp = whatsAppHref(`Olá, Tehkné! Quero conversar sobre um projeto parecido com o case ${project.title}.`);
  const icons = [LayoutDashboard, Layers3, Workflow, BarChart3, ShieldCheck, Network];

  const modules: CaseModule[] = [
    { title: 'Contexto', text: project.challenge },
    { title: 'Arquitetura', text: 'Organização de escopo, páginas, componentes, conteúdo, fluxos, integrações e pontos de evolução.' },
    { title: 'Execução', text: project.delivery },
    { title: 'Resultado', text: project.outcome }
  ];

  const metrics = [
    [project.level, 'nível editorial'],
    [project.category, 'tipo de entrega'],
    [project.sector, 'segmento'],
    [project.status, 'status no portfólio']
  ];

  const siteUrl = 'https://tehknesolutions.com.br';
  const pageUrl = `${siteUrl}/portfolio/${project.slug}`;
  const structuredImage = asset?.image ?? memeScreenshot ?? `${siteUrl}/images/logo-tehkne-solutions-header.png`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Portfólio', item: `${siteUrl}/portfolio` },
          { '@type': 'ListItem', position: 3, name: project.title, item: pageUrl }
        ]
      },
      {
        '@type': 'WebPage',
        url: pageUrl,
        name: project.title,
        description: project.summary,
        image: structuredImage,
        inLanguage: 'pt-BR',
        isPartOf: { '@type': 'WebSite', name: 'Tehkné Solutions', url: siteUrl }
      }
    ]
  };

  return (
    <main className="case-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="section-frame case-hero portfolio-case-hero portfolio-case-hero-rich">
        <div className="case-hero-copy">
          <span className="eyebrow">{project.level} • {project.sector}</span>
          <h1>{project.title}: {project.category.toLowerCase()} apresentado como repertório técnico e criativo.</h1>
          <p>{project.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">
            {effectiveStack.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>

        <div className="case-visual">
          {asset ? (
            <div className={`portfolio-case-preview portfolio-real-hero-preview ${project.tone}`}>
              <div className="case-window-bar"><span /><span /><span /></div>
              <img src={asset.image} alt={`Imagem do case ${project.title}`} loading="eager" />
              <div className="portfolio-real-hero-caption"><span>Imagem do case</span><strong>{project.imageLabel}</strong></div>
            </div>
          ) : memeScreenshot ? (
            <div className={`portfolio-case-preview portfolio-real-hero-preview ${project.tone}`}>
              <div className="case-window-bar"><span /><span /><span /></div>
              <img src={memeScreenshot} alt={`Imagem do case ${project.title}`} loading="eager" />
              <div className="portfolio-real-hero-caption"><span>Imagem do projeto</span><strong>{project.imageLabel}</strong></div>
            </div>
          ) : (
            <div className={`portfolio-case-preview ${project.tone}`}>
              <div className="case-window-bar"><span /><span /><span /></div>
              <div className="portfolio-preview-body">
                <Sparkles size={54} />
                <strong>{project.imageLabel}</strong>
                <small>{project.title}</small>
                <div className="portfolio-preview-grid"><span /><span /><span /><span /></div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="metrics section-frame compact">
        {metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este projeto demonstra para um novo cliente.</h2>
          <p>Cada case apresenta repertório técnico, tipo de participação, stack, contexto e resultado esperado sem criar confusão de autoria.</p>
        </div>
        <div className="case-reading-grid case-reading-grid-balanced">
          {modules.map((module, index) => {
            const Icon = icons[index] ?? Sparkles;
            return <article className="glass-card case-reading-card case-reading-card-balanced" key={module.title}><Icon className="card-icon" size={30} /><h3>{module.title}</h3><p>{module.text}</p></article>;
          })}
        </div>
      </section>

      {asset?.fullImage ? (
        <section className="section-frame case-full-showcase-section">
          <div className="section-heading"><span className="eyebrow">Print completo do projeto</span><h2>Visual real do case.</h2><p>Imagem completa do projeto usada como evidência visual do trabalho apresentado.</p></div>
          <div className="case-full-showcase"><div className="case-window-bar"><span /><span /><span /></div><img src={asset.fullImage} alt={`Print completo do site ${project.title}`} loading="lazy" /></div>
        </section>
      ) : null}

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Um mapa de execução conectado ao contexto do projeto.</h2></div>
        <div className="case-method-map">
          {defaultProcess.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Stack e capacidade</span>
          <h2>Experiência apresentada como capital técnico institucional.</h2>
          <p>A combinação de tecnologias, design, processo e sustentação mostra o tipo de solução que pode ser planejada, construída e evoluída em novos projetos.</p>
          <div className="os-features">{effectiveStack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="stack-cloud">{['Arquitetura', 'Design & UX', 'Desenvolvimento', 'Performance', 'Sustentação', 'Evolução'].map((stack) => <span key={stack}>{stack}</span>)}</div>
      </section>

      <ContactForm page={`Case ${project.title}`} context={`case ${project.title}, ${project.category}, ${project.sector}, stack ${effectiveStack.join(', ')}`} title="Quer criar um projeto parecido?" description="Use este bloco para chamar a Tehkné no WhatsApp com o contexto deste case e iniciar um diagnóstico técnico." />

      <section className="final-cta">
        <div><span className="eyebrow">Próximo passo</span><h2>Vamos transformar sua demanda em um case novo.</h2><p>Conte o que você precisa criar, melhorar ou automatizar. A Tehkné organiza o caminho técnico e comercial para tornar isso real.</p></div>
        <div className="hero-actions"><a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a></div>
      </section>
    </main>
  );
}
