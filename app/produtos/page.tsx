import type { Metadata } from 'next';
import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  ClipboardList,
  DatabaseZap,
  GitBranch,
  Layers3,
  LineChart,
  PlugZap,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow
} from 'lucide-react';
import styles from './products.module.css';

export const metadata: Metadata = {
  title: 'Produtos Tehkné | WP Business Hub, CRM, Flow e Integrações',
  description:
    'Conheça a linha de produtos Tehkné para WordPress: Flow WP Lite, CRM WP Lite e Integrador WP. Um hub de vendas, gestão e automação com menor custo de entrada.',
  alternates: {
    canonical: '/produtos'
  },
  openGraph: {
    title: 'Produtos Tehkné | WordPress como hub de vendas e operação',
    description:
      'Flow WP Lite, CRM WP Lite e Integrador WP conectados para transformar captação em atendimento, tarefas e vendas.',
    url: '/produtos',
    type: 'website',
    images: [
      {
        url: '/images/products/tehkne-wp-business-hub-hero.svg',
        width: 1200,
        height: 675,
        alt: 'Tehkné WP Business Hub'
      }
    ]
  }
};

const products = [
  {
    eyebrow: 'Produto 01',
    title: 'Tehkné Flow WP Lite',
    subtitle: 'Gestão de projetos e tarefas para equipes que precisam operar com clareza.',
    description:
      'Organize projetos, tarefas, prioridades, responsáveis, prazos e histórico operacional em uma interface própria para WordPress.',
    image: '/images/products/tehkne-flow-wp-lite-product.svg',
    icon: ClipboardList,
    accent: 'blue',
    bullets: [
      'Projetos, tarefas, status e prioridades',
      'Kanban simples, filtros e rotina operacional',
      'CPTs, REST API e metadados reais no WordPress',
      'Base ideal para times pequenos e operações internas'
    ]
  },
  {
    eyebrow: 'Produto 02',
    title: 'Tehkné CRM WP Lite',
    subtitle: 'CRM leve e integrado para controlar leads, oportunidades e follow-ups.',
    description:
      'Centralize contatos, origem do lead, etapa do funil, responsável comercial e próximos passos sem depender de planilhas.',
    image: '/images/products/tehkne-crm-wp-lite-product.svg',
    icon: LineChart,
    accent: 'green',
    bullets: [
      'Cadastro e qualificação de leads',
      'Pipeline comercial por etapa',
      'Histórico de relacionamento e follow-up',
      'Integração natural com tarefas do Flow'
    ]
  },
  {
    eyebrow: 'Produto 03',
    title: 'Tehkné Integrador WP',
    subtitle: 'Hub de integração entre site, CRM, Flow e canais externos.',
    description:
      'Receba dados de formulários, normalize payloads, registre logs e entregue leads para CRM, Flow, webhooks ou APIs externas.',
    image: '/images/products/tehkne-integrador-wp-product.svg',
    icon: PlugZap,
    accent: 'purple',
    bullets: [
      'Endpoint REST para entrada de leads',
      'Chave de integração e logs operacionais',
      'Entrega para CRM, Flow e endpoints externos',
      'Base para automações e roteamento inteligente'
    ]
  }
];

const flow = [
  ['Captar', 'O visitante preenche formulário, landing page ou canal conectado.'],
  ['Integrar', 'O Integrador WP valida, normaliza e registra o evento com logs.'],
  ['Vender', 'O CRM WP Lite registra lead, origem, etapa e próximo follow-up.'],
  ['Executar', 'O Flow WP Lite transforma a demanda em tarefa, projeto ou rotina.']
];

const benefits = [
  {
    icon: DatabaseZap,
    title: 'Menos ferramentas soltas',
    text: 'Reduza a dependência de planilhas, plugins desconectados e plataformas que não conversam entre si.'
  },
  {
    icon: ShieldCheck,
    title: 'Menor custo de entrada',
    text: 'Aproveite a base WordPress para começar com uma estrutura comercial mais acessível e evolutiva.'
  },
  {
    icon: Workflow,
    title: 'Operação conectada',
    text: 'Leads, tarefas, projetos e integrações passam a alimentar o mesmo fluxo de atendimento e entrega.'
  },
  {
    icon: Radar,
    title: 'Mais rastreabilidade',
    text: 'Cada lead, entrega e integração pode gerar histórico, logs e próximos passos para o time.'
  }
];

export default function ProdutosPage() {
  return (
    <main>
      <section className={`${styles.hero} section-frame`}>
        <div className={styles.heroCopy}>
          <span className="eyebrow">Produtos Tehkné • WordPress Business Hub</span>
          <h1>
            Transforme seu WordPress em uma <span>máquina de vendas, gestão e operação.</span>
          </h1>
          <p>
            A linha Tehkné WP Business Hub conecta CRM, gestão de tarefas e integrações para empresas que
            precisam captar melhor, atender mais rápido e organizar a execução sem depender de ferramentas
            fragmentadas.
          </p>
          <div className={styles.heroActions}>
            <a className="btn btn-primary coin" href="/contato#contato-form">
              Solicitar diagnóstico <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-secondary" href="#produtos">
              Ver produtos <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src="/images/products/tehkne-wp-business-hub-hero.svg" alt="Tehkné WP Business Hub" />
        </div>
      </section>

      <section className={`${styles.intro} section-frame compact`}>
        <div>
          <span className="eyebrow">A lógica do hub</span>
          <h2>Não são plugins isolados. É um fluxo comercial e operacional.</h2>
        </div>
        <p>
          O cliente não compra três ferramentas. Ele compra um caminho conectado: captar lead, registrar no CRM,
          gerar tarefa, acompanhar atendimento e transformar interesse em venda com muito menos retrabalho.
        </p>
      </section>

      <section id="produtos" className={`${styles.products} section-frame`}>
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <article className={`${styles.productCard} ${styles[product.accent]}`} key={product.title}>
              <div className={styles.productText}>
                <span className={styles.productEyebrow}>{product.eyebrow}</span>
                <div className={styles.productTitle}>
                  <Icon size={28} />
                  <h2>{product.title}</h2>
                </div>
                <h3>{product.subtitle}</h3>
                <p>{product.description}</p>
                <ul>
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={17} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.productImage}>
                <img src={product.image} alt={`${product.title} - visual do produto`} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
            </article>
          );
        })}
      </section>

      <section className={`${styles.machine} section-frame`}>
        <div className={styles.machineHeader}>
          <span className="eyebrow">Máquina de vendas</span>
          <h2>Da captação à execução, tudo em um fluxo rastreável.</h2>
          <p>
            A linha de produtos foi pensada para empresas que recebem leads pelo site, precisam responder rápido,
            organizar follow-ups e transformar oportunidades em tarefas reais para o time.
          </p>
        </div>
        <div className={styles.flowGrid}>
          {flow.map(([title, text], index) => (
            <div className={styles.flowStep} key={title}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.benefits} section-frame`}>
        <div className={styles.benefitsHeader}>
          <span className="eyebrow">Utilidade comercial</span>
          <h2>Uma oferta acessível, modular e com percepção de sistema completo.</h2>
        </div>
        <div className={styles.benefitGrid}>
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article className={styles.benefitCard} key={benefit.title}>
                <Icon size={26} />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${styles.architecture} section-frame`}>
        <div className={styles.architectureCopy}>
          <span className="eyebrow">Desenvolvimento modular</span>
          <h2>Produtos próprios, versionáveis e preparados para evolução.</h2>
          <p>
            A Tehkné separa interface, regra de negócio e integrações para evitar soluções improvisadas dentro do
            WordPress. A base pode evoluir por sprints, com plugins, APIs, logs e módulos independentes.
          </p>
        </div>
        <div className={styles.architectureCards}>
          <div>
            <Layers3 size={24} />
            <strong>Plugin como sistema</strong>
            <span>CPTs, serviços, REST API, permissões, logs e dados estruturados.</span>
          </div>
          <div>
            <Boxes size={24} />
            <strong>Módulos conectados</strong>
            <span>Flow, CRM e Integrador funcionando juntos ou separadamente.</span>
          </div>
          <div>
            <GitBranch size={24} />
            <strong>Evolução por sprints</strong>
            <span>Roadmap claro para Kanban, automações, dashboards e integrações avançadas.</span>
          </div>
          <div>
            <Sparkles size={24} />
            <strong>Pronto para IA futura</strong>
            <span>Base preparada para agentes, classificação de leads e geração de tarefas assistida.</span>
          </div>
        </div>
      </section>

      <section className={`${styles.cta} section-frame`}>
        <span className="eyebrow">Comece pelo diagnóstico</span>
        <h2>Quer transformar seu WordPress em um hub de vendas e operação?</h2>
        <p>
          A Tehkné avalia seu cenário atual, identifica gargalos de captação, CRM, tarefas e integrações, e propõe
          o melhor pacote para começar com segurança.
        </p>
        <a className="btn btn-primary coin" href="/contato#contato-form">
          Montar meu WP Business Hub <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}
