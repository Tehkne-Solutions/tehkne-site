import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  DatabaseZap,
  FileText,
  GitBranch,
  Layers3,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const methodStats = [
  ['06 etapas', 'da descoberta à evolução contínua'],
  ['360°', 'estratégia, design, código, IA e operação'],
  ['1 sistema', 'para decisões, execução, documentação e suporte'],
  ['∞ evolução', 'produto vivo depois do deploy']
];

const steps = [
  {
    number: '01',
    title: 'Descoberta estratégica',
    text: 'Antes de propor tecnologia, entendemos o problema real: objetivo, público, urgência, gargalos, restrições e oportunidades.',
    deliverables: ['Briefing qualificado', 'Mapa de dores', 'Objetivos comerciais', 'Critérios de sucesso']
  },
  {
    number: '02',
    title: 'Arquitetura da solução',
    text: 'Transformamos a intenção em mapa técnico: escopo, stack, dados, integrações, prioridades, riscos e plano de execução.',
    deliverables: ['Escopo funcional', 'Stack recomendada', 'Mapa de integrações', 'Roadmap técnico']
  },
  {
    number: '03',
    title: 'Design e produto',
    text: 'Criamos a experiência que conecta usuário, negócio e operação: jornada, wireframe, interface, conteúdo e conversão.',
    deliverables: ['Jornada do usuário', 'Wireframe', 'UI premium', 'Copy e CTAs']
  },
  {
    number: '04',
    title: 'Engenharia e desenvolvimento',
    text: 'Construímos com código versionado, componentes reutilizáveis, documentação, revisão e entregas incrementais.',
    deliverables: ['Código versionado', 'Componentes', 'Ambientes', 'Critérios de aceite']
  },
  {
    number: '05',
    title: 'Validação e deploy',
    text: 'Testamos, refinamos, publicamos e garantimos que a solução esteja pronta para uso real, performance, SEO e operação.',
    deliverables: ['QA funcional', 'Performance', 'SEO técnico', 'Deploy controlado']
  },
  {
    number: '06',
    title: 'Evolução contínua',
    text: 'Depois do lançamento, organizamos melhorias, suporte, automações, métricas, backlog e novas features.',
    deliverables: ['Backlog vivo', 'Analytics', 'Suporte', 'Novas features']
  }
];

const osModules = [
  {
    icon: Layers3,
    title: 'Arquitetura viva',
    problem: 'Evita que decisões técnicas fiquem perdidas em conversas soltas.',
    text: 'Escopo, módulos, integrações, regras, riscos e roadmap ficam organizados como base operacional do projeto.'
  },
  {
    icon: Workflow,
    title: 'Operação por método',
    problem: 'Tira a entrega do improviso e coloca cada etapa em fluxo claro.',
    text: 'Descoberta, arquitetura, design, engenharia, validação e evolução caminham como uma sequência rastreável.'
  },
  {
    icon: Bot,
    title: 'Agentes e IA aplicada',
    problem: 'Reduz repetição sem transformar automação em gambiarra.',
    text: 'Prompts, agentes e rotinas apoiam análise, documentação, conteúdo, atendimento e execução técnica.'
  },
  {
    icon: GitBranch,
    title: 'Governança Git',
    problem: 'Cada alteração deixa rastro e reduz risco em produção.',
    text: 'Versionamento, commits processuais, revisão, branches e histórico técnico limpo facilitam manutenção e evolução.'
  },
  {
    icon: DatabaseZap,
    title: 'Dados e integrações',
    problem: 'Conecta site, CRM, ERP, automações, formulários e operações.',
    text: 'APIs, bancos, webhooks, CRMs e conectores entram no fluxo com clareza de dados, permissões e exceções.'
  },
  {
    icon: ShieldCheck,
    title: 'Sustentação e evolução',
    problem: 'O projeto não morre depois do deploy.',
    text: 'Suporte, monitoramento, performance, segurança, backlog e melhorias contínuas mantêm o produto vivo.'
  }
];

const layers = [
  ['Base estratégica', 'Objetivos, público, posicionamento, proposta de valor, riscos, prioridades e critérios comerciais.'],
  ['Base de produto', 'Jornadas, UX, interface, conteúdo, design system, hipóteses, validações e experiência de uso.'],
  ['Base técnica', 'Stack, arquitetura, integrações, dados, componentes, ambientes, versionamento e qualidade.'],
  ['Base operacional', 'Processos, rotinas, automações, documentação, responsáveis, handoff e critérios de validação.'],
  ['Base inteligente', 'Prompts, agentes, IA aplicada, automações, base de conhecimento e apoio à decisão.'],
  ['Base evolutiva', 'Backlog, métricas, suporte, melhorias, novas features e ciclos de crescimento contínuo.']
];

const comparison = [
  {
    title: 'Sem método',
    tone: 'negative',
    items: ['Briefing solto', 'Escopo confuso', 'Decisões em WhatsApp', 'Deploy sem sustentação', 'Retrabalho constante']
  },
  {
    title: 'Com GIP Tehkné OS',
    tone: 'positive',
    items: ['Mapa de decisão', 'Arquitetura clara', 'Backlog organizado', 'Documentação viva', 'Evolução planejada']
  }
];

const applications = [
  {
    icon: Rocket,
    title: 'Site institucional premium',
    text: 'Quando o site precisa vender, explicar, ranquear e captar oportunidades com clareza.'
  },
  {
    icon: Code2,
    title: 'Sistema sob medida',
    text: 'Quando processos internos precisam virar produto, dashboard, área logada ou plataforma operacional.'
  },
  {
    icon: Layers3,
    title: 'WordPress avançado',
    text: 'Quando o WordPress deixou de ser página simples e virou catálogo, operação, integração ou sistema editável.'
  },
  {
    icon: Workflow,
    title: 'Automação operacional',
    text: 'Quando tarefas repetitivas precisam virar fluxo, webhook, CRM, IA ou rotina monitorável.'
  },
  {
    icon: BrainCircuit,
    title: 'Agentes de IA',
    text: 'Quando a empresa precisa usar IA com contexto, governança, prompts, base de conhecimento e objetivos claros.'
  },
  {
    icon: ShieldCheck,
    title: 'Sustentação evolutiva',
    text: 'Quando o projeto precisa continuar melhorando depois do deploy, com backlog, métricas e suporte técnico.'
  }
];

const continuity = ['Deploy', 'Monitoramento', 'Ajustes', 'Automação', 'Novas features', 'Evolução'];
const stack = ['Briefing', 'MoSCoW', 'Roadmap', 'UX/UI', 'Git', 'Deploy', 'QA', 'Docs', 'Sprint', 'Backlog', 'SEO', 'Analytics', 'n8n', 'APIs', 'CRM', 'IA'];

export const metadata = {
  title: 'GIP Tehkné OS | Método para transformar intenção em produto digital real',
  description:
    'Conheça o GIP Tehkné OS: método da Tehkné para organizar estratégia, arquitetura, design, código, IA, documentação, sustentação e evolução contínua.'
};

function GipOrbitalVisual() {
  const nodes = ['Descoberta', 'Arquitetura', 'Produto', 'Engenharia', 'Deploy', 'Evolução'];
  const chips = ['Docs', 'Git', 'IA', 'SEO', 'Analytics', 'APIs'];

  return (
    <aside className="gip-orbital-visual" aria-label="Diagrama visual do GIP Tehkné OS">
      <div className="gip-grid-bg" />
      <div className="gip-orbit orbit-a" />
      <div className="gip-orbit orbit-b" />
      <div className="gip-orbit orbit-c" />
      <div className="gip-core">
        <span>GIP</span>
        <strong>OS</strong>
      </div>
      {nodes.map((node, index) => (
        <span className={`gip-node gip-node-${index + 1}`} key={node}>{node}</span>
      ))}
      {chips.map((chip, index) => (
        <span className={`gip-chip gip-chip-${index + 1}`} key={chip}>{chip}</span>
      ))}
      <span className="gip-particle particle-a" />
      <span className="gip-particle particle-b" />
      <span className="gip-particle particle-c" />
      <span className="gip-particle particle-d" />
    </aside>
  );
}

export default function MetodoPage() {
  return (
    <main className="methodos-page">
      <section className="section-frame gip-hero">
        <div className="gip-hero-copy">
          <span className="eyebrow">GIP Tehkné OS • método operacional</span>
          <h1>Método para transformar intenção em produto digital real.</h1>
          <p>
            O GIP Tehkné OS organiza estratégia, arquitetura, design, código, IA, documentação e sustentação em um fluxo único de execução — para tirar projetos do improviso e levar sua operação digital para um próximo nível.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Aplicar o método no meu projeto <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#fluxo-gip">Ver como funciona o fluxo <ArrowUpRight size={16} /></a>
          </div>
          <div className="gip-hero-points">
            <span><ShieldCheck size={15} /> menos retrabalho</span>
            <span><FileText size={15} /> decisões documentadas</span>
            <span><BrainCircuit size={15} /> IA com contexto</span>
          </div>
        </div>
        <GipOrbitalVisual />
      </section>

      <section className="section-frame compact gip-stats-grid">
        {methodStats.map(([value, label]) => (
          <article key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section id="visao" className="section-frame gip-comparison-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Por que existe</span>
            <h2>Um sistema para não perder contexto entre ideia, execução e evolução.</h2>
          </div>
          <p>
            Projetos digitais não falham apenas por falta de código. Eles falham quando briefing, estratégia, design, tecnologia, conteúdo, dados e suporte caminham separados.
            O GIP Tehkné OS conecta essas camadas em uma operação única: cada decisão gera insumo, cada etapa deixa rastro e cada entrega já nasce preparada para evoluir.
          </p>
        </div>
        <div className="gip-comparison-grid">
          {comparison.map((column) => (
            <article className={`gip-comparison-card ${column.tone}`} key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="fluxo-gip" className="section-frame gip-flow-section">
        <div className="section-heading">
          <span className="eyebrow">Fluxo GIP</span>
          <h2>Da descoberta ao deploy, cada etapa reduz uma incerteza.</h2>
          <p>O método evita começar pelo código antes de entender negócio, público, jornada, stack, integrações, riscos e critérios de sucesso.</p>
        </div>
        <div className="gip-timeline">
          {steps.map((step) => (
            <article className="gip-timeline-card" key={step.title}>
              <span className="gip-step-number">{step.number}</span>
              <GitBranch size={24} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className="gip-deliverables">
                {step.deliverables.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="modulos" className="section-frame gip-os-dashboard-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Tehkné OS</span>
            <h2>O sistema organiza o que normalmente fica espalhado.</h2>
          </div>
          <p>Em vez de cada projeto viver em conversas soltas, arquivos perdidos, decisões invisíveis e automações isoladas, o GIP Tehkné OS transforma operação em estrutura, documentação e fluxo.</p>
        </div>
        <div className="gip-os-dashboard">
          <div className="gip-os-core-card">
            <Sparkles size={28} />
            <span>Sistema operacional técnico</span>
            <strong>produto + código + IA + operação</strong>
            <p>Uma camada de governança para a entrega nascer clara, rastreável e preparada para evoluir.</p>
          </div>
          <div className="gip-os-modules">
            {osModules.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title}>
                  <Icon size={24} />
                  <h3>{module.title}</h3>
                  <strong>{module.problem}</strong>
                  <p>{module.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="camadas" className="section-frame gip-layers-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Camadas operacionais</span>
            <h2>Cada camada sustenta a próxima.</h2>
          </div>
          <p>Isso permite que uma solução digital seja criada com clareza, entregue com qualidade e mantida como sistema vivo.</p>
        </div>
        <div className="gip-layer-stack">
          {layers.map(([title, text], index) => (
            <article key={title} style={{ '--layer-index': index + 1 } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="aplicacoes" className="section-frame gip-applications-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Onde se aplica</span>
            <h2>O GIP Tehkné OS serve quando tecnologia precisa virar operação.</h2>
          </div>
          <p>Sites, sistemas, WordPress avançado, automações, IA e sustentação deixam de ser demandas soltas e passam a seguir um fluxo de decisão, execução e evolução.</p>
        </div>
        <div className="gip-application-grid">
          {applications.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={26} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="governanca" className="section-frame gip-continuity-section">
        <div className="section-heading">
          <span className="eyebrow">Governança e continuidade</span>
          <h2>O projeto não termina no deploy. Ele começa a operar.</h2>
          <p>
            Depois que uma solução vai ao ar, surgem ajustes, novas integrações, campanhas, bugs, métricas, melhorias e oportunidades.
            Por isso o GIP Tehkné OS já nasce pensando em sustentação: documentação, backlog, versionamento, analytics, suporte e evolução contínua.
          </p>
        </div>
        <div className="gip-continuity-rail">
          {continuity.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
        <div className="gip-stack-strip">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <ContactForm
        page="GIP Tehkné OS"
        context="aplicar o GIP Tehkné OS em um projeto digital com método, arquitetura, design, engenharia, automações, IA, documentação, governança e evolução"
        title="Vamos estruturar seu projeto como um sistema, não como improviso?"
        description="Preencha o briefing para a Tehkné mapear seu contexto, identificar riscos, organizar prioridades e indicar o melhor caminho de execução."
      />

      <section className="final-cta gip-final-cta">
        <div>
          <span className="eyebrow">Execução com clareza</span>
          <h2>O próximo projeto pode começar com um mapa, não com improviso.</h2>
          <p>Vamos transformar intenção em arquitetura, arquitetura em produto e produto em operação digital real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href="/contato#contato-form">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/portfolio">Ver portfólio <LineChart size={16} /></a>
        </div>
      </section>
    </main>
  );
}
