import type { Metadata } from 'next';
import { ArrowUpRight, Bell, CheckCircle2, GitBranch, Sparkles } from 'lucide-react';
import styles from './products.module.css';
import { productPages } from './product-data';

export const metadata: Metadata = {
  title: 'Produtos Tehkné | Hub de produtos digitais próprios',
  description:
    'Conheça os produtos próprios da Tehkné: WP Business Hub, Flow WP, CRM WP e Integrações WP para gestão, vendas, automação e operação em WordPress.',
  alternates: { canonical: '/produtos' },
  openGraph: {
    title: 'Produtos Tehkné | Soluções próprias para operação digital',
    description:
      'Use o Hub completo ou escolha produtos individuais: WP Business Hub, Flow WP, CRM WP e Integrações WP.',
    url: '/produtos',
    type: 'website',
    images: [{ url: '/images/products/tehkne-wp-business-hub-hero.svg', width: 1200, height: 675, alt: 'Produtos Tehkné' }]
  }
};

const comparison = [
  ['WP Business Hub', 'Ecossistema completo', 'Flow + CRM + Integrações em um ambiente único.'],
  ['Flow WP', 'Gestão operacional', 'Processos, tarefas, responsáveis, prazos e rotinas.'],
  ['CRM WP', 'Vendas e relacionamento', 'Leads, pipeline, histórico, follow-up e conversão.'],
  ['Integrações WP', 'Conectividade', 'Formulários, webhooks, logs, APIs e roteamento de dados.']
];

export default function ProdutosPage() {
  return (
    <main>
      <section className={`${styles.hero} section-frame`}>
        <div className={styles.heroCopy}>
          <span className="eyebrow">Produtos Tehkné • Ecossistema próprio</span>
          <h1>Nossos produtos para simplificar <span>operação, vendas e integrações.</span></h1>
          <p>
            A Tehkné cria soluções próprias para WordPress que reduzem custo operacional, aumentam rastreabilidade e ajudam empresas a organizar processos, leads e automações com baixa manutenção.
          </p>
          <div className={styles.heroActions}>
            <a className="btn btn-primary coin" href="#produtos">Conhecer produtos <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/contato#contato-form">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src="/images/products/tehkne-wp-business-hub-hero.svg" alt="Ecossistema de produtos Tehkné" />
        </div>
      </section>

      <section className={`${styles.intro} section-frame compact`}>
        <div>
          <span className="eyebrow">Escolha flexível</span>
          <h2>Use o Hub completo ou escolha apenas o produto que sua equipe precisa.</h2>
        </div>
        <p>
          O WP Business Hub também é um produto próprio. Ele representa a visão integrada da linha, enquanto Flow WP, CRM WP e Integrações WP podem ser vendidos e implementados separadamente.
        </p>
      </section>

      <section id="produtos" className={`${styles.productHubGrid} section-frame`}>
        {productPages.map((product) => {
          const Icon = product.icon;
          return (
            <article className={`${styles.productHubCard} ${styles[product.accent]}`} key={product.slug}>
              <div className={styles.productText}>
                <span className={styles.productEyebrow}>{product.eyebrow}</span>
                <div className={styles.productTitle}>
                  <Icon size={28} />
                  <h2>{product.title}</h2>
                </div>
                <h3>{product.subtitle}</h3>
                <p>{product.summary}</p>
                <ul>
                  {product.benefits.slice(0, 3).map((item) => (
                    <li key={item}><CheckCircle2 size={17} />{item}</li>
                  ))}
                </ul>
                <div className={styles.cardActions}>
                  <a className="btn btn-primary coin" href={`/produtos/${product.slug}`}>{product.cta} <ArrowUpRight size={16} /></a>
                  <a className="btn btn-secondary" href={`/produtos/${product.slug}#comparativo`}>Ver detalhes <ArrowUpRight size={16} /></a>
                </div>
              </div>
              <div className={styles.productImage}>
                <img src={product.image} alt={`${product.title} - visual do produto`} />
              </div>
            </article>
          );
        })}
      </section>

      <section id="comparativo" className={`${styles.machine} section-frame`}>
        <div className={styles.machineHeader}>
          <span className="eyebrow">Comparativo simples</span>
          <h2>O Hub é a soma estratégica. Os produtos individuais resolvem dores específicas.</h2>
          <p>
            Essa estrutura facilita decisão comercial: o cliente pode começar por uma necessidade clara e evoluir para o ecossistema completo quando fizer sentido.
          </p>
        </div>
        <div className={styles.comparisonGrid}>
          {comparison.map(([name, focus, text]) => (
            <article className={styles.flowStep} key={name}>
              <GitBranch size={22} />
              <h3>{name}</h3>
              <strong>{focus}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.comingSoon} section-frame`}>
        <div>
          <span className="eyebrow">O que vem por aí</span>
          <h2>Novos produtos estão em desenvolvimento.</h2>
          <p>
            A missão da Tehkné é ampliar continuamente seu ecossistema de produtos próprios para WordPress, automações, IA, governança e operação digital.
          </p>
        </div>
        <div className={styles.soonCard}>
          <Sparkles size={28} />
          <strong>Novos módulos e integrações</strong>
          <span>Produtos futuros serão conectados ao mesmo ecossistema, mantendo evolução modular e baixa manutenção.</span>
          <a className="btn btn-secondary" href="/contato#contato-form">Receber novidades <Bell size={15} /></a>
        </div>
      </section>

      <section className={`${styles.cta} section-frame`}>
        <span className="eyebrow">Comece pelo diagnóstico</span>
        <h2>Escolha o produto ideal ou comece com o Hub completo.</h2>
        <p>
          A Tehkné avalia seu cenário atual, identifica gargalos de gestão, CRM, captação e integrações, e recomenda o melhor caminho de implementação.
        </p>
        <div className={styles.heroActions}>
          <a className="btn btn-primary coin" href="/produtos/wp-business-hub">Quero o WP Business Hub <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/contato#contato-form">Falar com especialista <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
