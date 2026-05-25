import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, CheckCircle2, ChevronRight, GitBranch, HelpCircle, Layers3, SearchCheck, ShieldCheck, Sparkles, Target, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import ShareButtons from '../../components/ShareButtons';
import { whatsAppHref } from '../../contact';
import { getServicePage, servicePages } from '../service-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = 'https://tehknesolutions.com.br';

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

  const url = `${siteUrl}/servicos/${service.slug}`;

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
          <nav className="service-breadcrumbs" aria-label="Breadcrumb">
            <a href="/"><span>Home</span></a>
            <ChevronRight size={14} />
            <a href="/servicos"><span>Serviços</span></a>
            <ChevronRight size={14} />
            <span aria-current="page">{service.title}</span>
          </nav>
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
        <div className="service-detail-grid mosaic-grid">
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
        <div className="case-method-map service-detail-process mosaic-grid">
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
        <div className="services-audience-grid mosaic-grid">
          {service.bestFor.map((item) => <article key={item}><Workflow size={22} /><h3>{item}</h3><p>Este perfil tende a ganhar velocidade, clareza e previsibilidade com uma entrega bem arquitetada.</p></article>)}
        </div>
      </section>

      <section className="section-frame service-detail-section">
        <div className="section-heading">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Dúvidas comuns antes de iniciar.</h2>
        </div>
        <div className="service-faq-grid mosaic-grid">
          <article><HelpCircle size={22} /><h3>O investimento é fixo?</h3><p>Alguns serviços possuem faixa inicial, mas o valor final depende de escopo, integrações, urgência, conteúdo, animações e sustentação.</p></article>
          <article><SearchCheck size={22} /><h3>Vocês fazem diagnóstico antes?</h3><p>Sim. A Tehkné evita começar pelo código quando o problema ainda não está claro. O diagnóstico reduz retrabalho.</p></article>
          <article><ShieldCheck size={22} /><h3>Há suporte depois da entrega?</h3><p>Sim. O projeto pode seguir com sustentação, melhorias, performance, automações e evolução contínua.</p></article>
          <article><Sparkles size={22} /><h3>Podemos integrar IA?</h3><p>Sim, quando fizer sentido operacional. IA entra como ferramenta para ganho real, não como enfeite comercial.</p></article>
        </div>
      </section>

      <ContactForm page={service.title} context={`serviço ${service.title}; ${service.description}; stack ${service.stack.join(', ')}`} title={`Quer contratar ${service.title.toLowerCase()}?`} description="Envie seu contexto para a Tehkné avaliar escopo, urgência, stack e próximos passos com mais precisão." />

      <section className="final-cta">
        <div><span className="eyebrow">Próximo passo</span><h2>Vamos transformar essa demanda em plano de execução.</h2><p>Conte o que você precisa criar, melhorar ou automatizar. A Tehkné organiza o caminho técnico e comercial.</p></div>
        <div className="hero-actions"><a className="btn btn-primary coin" href={serviceWhatsApp} target="_blank" rel="noreferrer">Conversar sobre este serviço <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/servicos">Ver todos os serviços <ArrowUpRight size={16} /></a></div>
      </section>
    </main>
  );
}
