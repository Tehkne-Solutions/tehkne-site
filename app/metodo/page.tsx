import { ArrowUpRight, Bot, BrainCircuit, CheckCircle2, Code2, DatabaseZap, GitBranch, Layers3, Rocket, ShieldCheck, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

const steps = [
  ['01', 'Descoberta estratégica', 'Mapeamos contexto, objetivos, personas, dores, riscos, restrições e oportunidades reais antes de qualquer decisão de tela ou código.'],
  ['02', 'Arquitetura da solução', 'Transformamos intenção em escopo, stack, fluxos, dados, integrações, prioridades, roadmap e critérios técnicos de sucesso.'],
  ['03', 'Design e produto', 'Criamos jornadas, wireframes, interfaces, componentes, conteúdo e decisões de experiência orientadas a conversão e operação.'],
  ['04', 'Engenharia e desenvolvimento', 'Construímos com código versionado, componentes reutilizáveis, documentação, padrões de qualidade e ciclos curtos de entrega validável.'],
  ['05', 'Validação e deploy', 'Testamos, revisamos, publicamos, medimos e garantimos que a solução esteja pronta para uso real, SEO, performance e operação.'],
  ['06', 'Evolução contínua', 'Organizamos suporte, melhorias, novas features, automações, dados, governança e sustentação depois do lançamento.']
];

const modules = [
  {
    icon: Layers3,
    title: 'Arquitetura viva',
    text: 'Documentação, decisões técnicas, escopo, módulos, integrações e roadmap organizados como base operacional do projeto.'
  },
  {
    icon: Workflow,
    title: 'Operação por método',
    text: 'Fluxos baseados no GIP para transformar demanda em descoberta, arquitetura, design, engenharia, validação e evolução.'
  },
  {
    icon: Bot,
    title: 'Agentes e IA aplicada',
    text: 'Prompts, agentes, automações e rotinas de apoio para reduzir repetição, acelerar análise e apoiar execução técnica.'
  },
  {
    icon: GitBranch,
    title: 'Governança Git',
    text: 'Versionamento, commits processuais, rastreabilidade de alterações, branches, revisão e histórico técnico limpo.'
  },
  {
    icon: DatabaseZap,
    title: 'Dados e integrações',
    text: 'APIs, CRMs, ERPs, bancos de dados, automações e conectores organizados para sustentar a operação digital.'
  },
  {
    icon: ShieldCheck,
    title: 'Sustentação e evolução',
    text: 'Suporte, monitoramento, performance, segurança, melhorias contínuas e priorização de novas features.'
  }
];

const layers = [
  ['01', 'Base estratégica', 'Objetivos, público, posicionamento, proposta de valor, riscos, prioridades e critérios comerciais.'],
  ['02', 'Base de produto', 'Jornadas, UX, interface, conteúdo, design system, hipóteses, validações e experiência de uso.'],
  ['03', 'Base técnica', 'Stack, arquitetura, integrações, dados, componentes, ambientes, versionamento e qualidade de código.'],
  ['04', 'Base operacional', 'Processos, rotinas, automações, documentação, responsáveis, handoff e critérios de validação.'],
  ['05', 'Base inteligente', 'Prompts, agentes, IA aplicada, automações, base de conhecimento e apoio à tomada de decisão.'],
  ['06', 'Base evolutiva', 'Backlog, métricas, suporte, melhorias, novas features e ciclos de crescimento contínuo.']
];

const principles = [
  'Clareza antes de código',
  'Arquitetura antes de pressa',
  'Design antes de improviso',
  'Validação antes de escalar',
  'Documentação viva',
  'Governança técnica',
  'IA aplicada com propósito',
  'Evolução por ciclos'
];

const stack = ['Next.js', 'React', 'WordPress', 'PHP', 'Python', 'Flutter', 'n8n', 'GitHub', 'Vercel', 'APIs', 'CRM', 'ERP', 'Analytics', 'IA', 'Design System', 'Documentação'];

export const metadata = {
  title: 'GIP Tehkné OS | Método, Arquitetura e Engenharia | Tehkné Solutions',
  description: 'GIP Tehkné OS é o sistema completo de design, arquitetura, engenharia, IA, automações, documentação, governança e evolução da Tehkné Solutions.'
};

export default function MetodoPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.metodo);

  return (
    <main>
      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">GIP Tehkné OS</span>
          <h1>O sistema completo de design, arquitetura e engenharia da Tehkné.</h1>
          <p>GIP Tehkné OS une método de execução, arquitetura viva, design de produto, engenharia, IA aplicada, automações, documentação, governança e sustentação em um único sistema operacional para criar soluções digitais reais.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Aplicar o GIP Tehkné OS no meu projeto <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>GIP</strong><span>Guided Iterative Precision como método de execução</span></div>
        <div><strong>OS</strong><span>sistema operacional interno para produtos digitais</span></div>
        <div><strong>0→6</strong><span>da descoberta estratégica à evolução contínua</span></div>
        <div><strong>IA</strong><span>agentes, automações e documentação viva no fluxo</span></div>
      </section>

      <section id="visao" className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Visão do sistema</span>
          <h2>GIP é o método. Tehkné OS é o ambiente completo onde o método opera.</h2>
          <p>Antes, Método GIP e Tehkné OS estavam separados em duas páginas. Agora eles formam uma única narrativa: um sistema que organiza como a Tehkné pensa, desenha, arquiteta, desenvolve, valida, documenta e evolui soluções digitais.</p>
          <p>Na prática, ele transforma tecnologia em processo empresarial: menos improviso, mais rastreabilidade, melhor handoff, decisões documentadas e uma linha clara entre estratégia, produto, código, IA e sustentação.</p>
          <div className="os-features">
            {principles.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="fluxo-gip" className="section-frame method-section method-wheel-section">
        <div className="section-heading">
          <span className="eyebrow">Fluxo GIP</span>
          <h2>Da intenção à operação real, cada etapa ocupa um ponto do sistema.</h2>
          <p>O fluxo evita começar pelo código sem entender negócio, produto, experiência, integrações e operação. Cada etapa gera insumo para a próxima e reduz retrabalho.</p>
        </div>
        <div className="method-line method-wheel-grid">
          {steps.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <GitBranch size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modulos" className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Módulos do OS</span>
          <h2>O sistema organiza o que normalmente fica espalhado.</h2>
          <p>Em vez de cada projeto viver em conversas soltas, arquivos perdidos, decisões invisíveis e automações isoladas, o GIP Tehkné OS transforma operação em estrutura, documentação e fluxo.</p>
        </div>
        <div className="service-grid solutions-grid">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article className="glass-card service-card solution-card" key={module.title}>
                <Icon className="card-icon" size={34} />
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="camadas" className="section-frame method-section">
        <div className="section-heading">
          <span className="eyebrow">Camadas operacionais</span>
          <h2>Estratégia, produto, engenharia, operação, inteligência e evolução conectadas.</h2>
          <p>Cada camada sustenta a próxima. Isso permite que uma solução digital seja criada com clareza, entregue com qualidade e mantida como sistema vivo.</p>
        </div>
        <div className="method-line">
          {layers.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <Code2 size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="aplicacoes" className="section-frame">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Aplicação prática</span>
            <h2>Serve para sites, sistemas, automações, IA, WordPress avançado e produtos internos.</h2>
            <p>A Tehkné usa o GIP Tehkné OS para tirar projetos do improviso e criar uma linha de execução com escopo, prioridade, rastreabilidade e melhoria contínua.</p>
          </div>
        </div>
        <div className="pain-grid">
          {['Site institucional premium', 'Sistema sob medida', 'WordPress avançado', 'Automação operacional', 'Agentes de IA', 'Sustentação evolutiva'].map((item) => (
            <div className="pain-card" key={item}><CheckCircle2 size={17} />{item}</div>
          ))}
        </div>
      </section>

      <section id="governanca" className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Governança e continuidade</span>
          <h2>O objetivo não é só entregar projeto, é criar continuidade operacional.</h2>
          <p>O GIP Tehkné OS transforma a Tehkné em um braço de tecnologia: documenta, organiza, executa, mede e evolui. Cada entrega nasce de um mapa técnico e comercial, passa por validação visual e funcional, e continua viva com backlog, suporte e governança.</p>
          <div className="os-features">
            {['Menos retrabalho', 'Mais previsibilidade', 'Histórico técnico claro', 'Melhor handoff', 'Automação aplicada', 'Evolução planejada'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Briefing', 'MoSCoW', 'Roadmap', 'UX/UI', 'Git', 'Deploy', 'QA', 'Docs', 'Sprint', 'Backlog', 'SEO', 'Analytics'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <ContactForm
        page="GIP Tehkné OS"
        context="aplicar o GIP Tehkné OS em um projeto digital com método, arquitetura, design, engenharia, automações, IA, documentação, governança e evolução"
        title="Vamos estruturar seu projeto como um sistema, não como improviso?"
        description="O contato já abre uma conversa contextualizada sobre o GIP Tehkné OS e o melhor caminho de execução para sua demanda."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Execução com clareza</span>
          <h2>O próximo projeto pode começar com um mapa, não com improviso.</h2>
          <p>Vamos transformar intenção em arquitetura, arquitetura em produto e produto em operação digital real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/portfolio">Ver portfólio <Rocket size={16} /></a>
        </div>
      </section>
    </main>
  );
}
