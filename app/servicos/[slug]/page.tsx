import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch, HelpCircle, Layers3, SearchCheck, ShieldCheck, Sparkles, Target, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import ShareButtons from '../../components/ShareButtons';
import { whatsAppHref } from '../../contact';
import { getServicePage, servicePages } from '../service-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {
      title: 'Serviço não encontrado | Tehkné Solutions'
    };
  }

  const url = `https://tehkne.com/servicos/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      type: 'website',
      locale: 'pt_BR',
      url,
      images: ['/images/logo-tehkne-solutions-header.png']
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.description,
      images: ['/images/logo-tehkne-solutions-header.png']
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) notFound();

  const Icon = service.icon;
  const serviceWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pela página ${service.title} e quero entender escopo, investimento, prazo e próximos passos.`);
  const siteUrl = 'https://tehkne.com';
  const pageUrl = `${siteUrl}/servicos/${service.slug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'Tehkné Solutions',
          url: siteUrl
        },
        areaServed: 'Brasil',
        serviceType: service.title,
        url: pageUrl
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `Para quem é indicado o serviço ${service.title}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: service.bestFor.join(', ')
            }
          },
          {
            '@type': 'Question',
            name: 'Quais entregáveis fazem parte do serviço?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: service.deliverables.join(', ')
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteUrl}/servicos` },
          { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl }
        ]
      }
    ]
  };

  return (
    <main className="service-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="section-frame service-detail-hero">
        <div className="service-detail-copy">
          <a className="blog-back" href="/servicos"><ArrowLeft size={15} /> Voltar para serviços</a>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1>{service.promise}</h1>
          <p>{service.description}</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={serviceWhatsApp} target="_blank" rel="noreferrer">{service.cta} <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Ver cases <ArrowUpRight size={16} /></a>
          </div>
          <ShareButtons title={service.title} text={service.description} />
        </div>
        <aside className="service-detail-panel">
          <div className="service-detail-icon"><Icon size={42} /></div>
          <strong>{service.title}</strong>
          <p>{service.authority}</p>
          <div className="case-stack service-stack">
            {service.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </aside>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>GIP</strong><span>diagnóstico, arquitetura, execução e evolução</span></div>
        <div><strong>SEO</strong><span>copy, estrutura e dados técnicos por página</span></div>
        <div><strong>Stack</strong><span>tecnologia definida pelo problema real</span></div>
        <div><strong>ROI</strong><span>foco em clareza, conversão e operação</span></div>
      </section>

      <section className="section-frame service-detail-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Dor que resolve</span>
            <h2>Por que este serviço existe.</h2>
          </div>
        </div>
        <div className="service-detail-editorial">
          <article className="glass-card service-detail-main-card">
            <Target className="card-icon" size={32} />
            <h3>O problema</h3>
            <p>{service.pain}</p>
          </article>
          <article className="glass-card service-detail-main-card">
            <Sparkles className="card-icon" size={32} />
            <h3>A autoridade Tehkné</h3>
            <p>{service.authority}</p>
          </article>
        </div>
      </section>

      <section className="section-frame service-detail-section">
        <div className="section-heading">
          <span className="eyebrow">Resultados esperados</span>
          <h2>O que muda quando o serviço é bem executado.</h2>
        </div>
        <div className="service-detail-grid">
          {service.outcomes.map((item) => (
            <article key={item}><CheckCircle2 size={20} /><h3>{item}</h3></article>
          ))}
        </div>
      </section>

      <section className="section-frame service-detail-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Entregáveis</span>
            <h2>Escopo vendido com clareza, não com promessa genérica.</h2>
          </div>
        </div>
        <div className="service-detail-deliverables">
          {service.deliverables.map((item) => <span key={item}><Layers3 size={16} />{item}</span>)}
        </div>
      </section>

      <section className="section-frame service-detail-section">
        <div className="section-heading">
          <span className="eyebrow">Processo</span>
          <h2>Como a Tehkné conduz este serviço.</h2>
        </div>
        <div className="case-method-map service-detail-process">
          {service.process.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <GitBranch size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame service-detail-section">
        <div className="section-heading">
          <span className="eyebrow">Indicado para</span>
          <h2>Quando contratar {service.title.toLowerCase()}.</h2>
        </div>
        <div className="services-audience-grid">
          {service.bestFor.map((item) => <article key={item}><Workflow size={22} /><h3>{item}</h3><p>Este perfil tende a ganhar velocidade, clareza e previsibilidade com uma entrega bem arquitetada.</p></article>)}
        </div>
      </section>

      <section className="section-frame service-detail-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Prova e contexto</span>
            <h2>Cases e repertório relacionados.</h2>
          </div>
          <a className="btn btn-secondary" href="/portfolio">Abrir portfólio <ArrowUpRight size={15} /></a>
        </div>
        <div className="service-detail-deliverables related-cases-large">
          {service.relatedCases.map((item) => <span key={item}><SearchCheck size={16} />{item}</span>)}
        </div>
      </section>

      <section className="section-frame service-detail-section">
        <div className="section-heading">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Dúvidas comuns antes de contratar.</h2>
        </div>
        <div className="service-faq-grid">
          <article>
            <HelpCircle size={22} />
            <h3>Este serviço tem preço fechado?</h3>
            <p>O investimento depende de escopo, urgência, stack, integrações e nível de sustentação. A Tehkné começa por diagnóstico para evitar proposta artificial.</p>
          </article>
          <article>
            <ShieldCheck size={22} />
            <h3>O serviço inclui sustentação?</h3>
            <p>Pode incluir. Algumas entregas são projeto fechado; outras evoluem por sprint, manutenção ou braço técnico recorrente.</p>
          </article>
        </div>
      </section>

      <ContactForm page={`Serviço: ${service.title}`} context={`interesse no serviço ${service.title}: ${service.description}`} title={`Quer contratar ${service.title}?`} description="Envie o contexto da sua demanda para transformarmos a conversa em diagnóstico, escopo e próximo passo." />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Próximo passo</span>
          <h2>Vamos transformar essa demanda em plano de execução?</h2>
          <p>Começamos entendendo contexto, objetivo, urgência, stack e o que precisa ser entregue para gerar valor real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={serviceWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/servicos">Ver outros serviços <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
