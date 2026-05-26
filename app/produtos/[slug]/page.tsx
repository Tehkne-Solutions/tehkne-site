import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Home, Layers3, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import styles from '../products.module.css';
import { getProductPage, productPages } from '../product-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = 'https://tehknesolutions.com.br';

const productFaq = [
  ['Posso contratar apenas um produto ou preciso do Hub completo?', 'Pode contratar separadamente. Flow WP, CRM WP e Integrações WP funcionam como produtos individuais, mas também podem evoluir para o WP Business Hub completo.'],
  ['O produto exige muita manutenção?', 'A linha WP foi pensada para baixa manutenção, arquitetura modular e evolução por fases. Sustentação recorrente pode ser recomendada para operação, segurança e melhorias.'],
  ['Dá para integrar formulários, WhatsApp, planilhas e APIs?', 'Sim. A camada de integrações pode receber dados, registrar logs, normalizar payloads e enviar informações para CRM, Flow, planilhas, webhooks ou APIs.']
];

export function generateStaticParams() {
  return productPages.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductPage(slug);

  if (!product) return { title: 'Produto não encontrado | Tehkné Solutions' };

  return {
    title: `${product.title} | Produtos Tehkné`,
    description: product.summary,
    alternates: { canonical: `/produtos/${product.slug}` },
    openGraph: {
      title: `${product.title} | Tehkné Solutions`,
      description: product.summary,
      url: `/produtos/${product.slug}`,
      type: 'website',
      images: [{ url: product.image, width: 1200, height: 675, alt: product.title }]
    }
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductPage(slug);
  if (!product) notFound();

  const otherProducts = productPages.filter((item) => item.slug !== product.slug).slice(0, 3);
  const pageUrl = `${siteUrl}/produtos/${product.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: product.title,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WordPress',
        description: product.summary,
        url: pageUrl,
        image: `${siteUrl}${product.image}`,
        publisher: {
          '@type': 'Organization',
          name: 'Tehkné Solutions',
          url: siteUrl
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'BRL',
            description: 'Sob diagnóstico e escopo personalizado'
          }
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Produtos', item: `${siteUrl}/produtos` },
          { '@type': 'ListItem', position: 3, name: product.title, item: pageUrl }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: productFaq.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer
          }
        }))
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className={`${styles.hero} section-frame`}>
        <div className={styles.heroCopy}>
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <a href="/"><Home size={14} /> Home</a>
            <ChevronRight size={14} />
            <a href="/produtos">Produtos</a>
            <ChevronRight size={14} />
            <span aria-current="page">{product.title}</span>
          </nav>
          <a className="blog-back" href="/produtos"><ArrowLeft size={15} /> Voltar para produtos</a>
          <span className="eyebrow">{product.eyebrow}</span>
          <h1>{product.title}: <span>{product.subtitle}</span></h1>
          <p>{product.microcopy} {product.summary}</p>
          <div className={styles.heroActions}>
            <a className="btn btn-primary coin" href="/contato#contato-form">{product.cta} <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#comparativo">{product.secondaryCta} <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src={product.image} alt={`${product.title} - visual do produto`} />
        </div>
      </section>

      <section className={`${styles.intro} section-frame compact`}>
        <div>
          <span className="eyebrow">Visão geral</span>
          <h2>{product.hubNote}</h2>
        </div>
        <p>
          A proposta é entregar uma solução prática, rastreável e com baixa manutenção, usando WordPress como base operacional quando isso reduz custo, acelera implantação e facilita evolução por módulos.
        </p>
      </section>

      <section className={`${styles.benefits} section-frame`}>
        <div className={styles.benefitsHeader}>
          <span className="eyebrow">Benefícios</span>
          <h2>O que muda na operação.</h2>
        </div>
        <div className={styles.benefitGrid}>
          {product.benefits.map((benefit) => (
            <article className={styles.benefitCard} key={benefit}>
              <CheckCircle2 size={26} />
              <h3>{benefit}</h3>
              <p>Benefício pensado para reduzir retrabalho, aumentar clareza operacional e manter a solução evolutiva.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="comparativo" className={`${styles.machine} section-frame`}>
        <div className={styles.machineHeader}>
          <span className="eyebrow">Funcionalidades</span>
          <h2>Recursos para sair do improviso.</h2>
          <p>As funcionalidades podem ser implantadas por fases, conforme prioridade comercial, maturidade da equipe e necessidade de integração.</p>
        </div>
        <div className={styles.comparisonGrid}>
          {product.features.map((feature, index) => (
            <article className={styles.flowStep} key={feature}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <h3>{feature}</h3>
              <p>Recurso modular para compor a operação sem prender o cliente em uma solução engessada.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.machine} section-frame`}>
        <div className={styles.machineHeader}>
          <span className="eyebrow">Casos de uso</span>
          <h2>Quando faz sentido contratar {product.title}.</h2>
        </div>
        <div className={styles.comparisonGrid}>
          {product.useCases.map((useCase) => (
            <article className={styles.flowStep} key={useCase}>
              <Workflow size={22} />
              <h3>{useCase}</h3>
              <p>Esse cenário ganha velocidade quando informação, processo e próxima ação ficam no mesmo fluxo.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.architecture} section-frame`}>
        <div className={styles.architectureCopy}>
          <span className="eyebrow">Parte do ecossistema</span>
          <h2>Produtos independentes, conectados pela visão do WP Business Hub.</h2>
          <p>
            Cada produto pode ser vendido sozinho, mas todos foram pensados para se conectar em uma operação maior. O cliente pode começar por uma dor específica e evoluir para o Hub completo.
          </p>
          <div className={styles.heroActions}>
            <a className="btn btn-primary coin" href="/produtos/wp-business-hub">Conhecer WP Business Hub <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/produtos">Ver todos os produtos <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className={styles.architectureCards}>
          {otherProducts.map((item) => {
            const RelatedIcon = item.icon;
            return (
              <a href={`/produtos/${item.slug}`} key={item.slug}>
                <RelatedIcon size={24} />
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </a>
            );
          })}
          <a href="/contato#contato-form">
            <Layers3 size={24} />
            <strong>Diagnóstico Tehkné</strong>
            <span>Entenda se o melhor caminho é Hub completo, produto individual ou implementação em fases.</span>
          </a>
        </div>
      </section>

      <ContactForm
        page={`Produto: ${product.title}`}
        context={`interesse no produto ${product.title}: ${product.summary}`}
        title={`Quer entender se ${product.title} serve para sua operação?`}
        description="Envie o contexto da sua empresa. A Tehkné retorna com diagnóstico, escopo e melhor caminho de implementação."
      />
    </main>
  );
}
