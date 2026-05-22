import { ArrowUpRight, Bot, BrainCircuit, Code2, DatabaseZap, GitBranch, Layers3, ShieldCheck, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

const modules = [
  {
    icon: Layers3,
    title: 'Arquitetura viva',
    text: 'Documentação, decisões técnicas, escopo, módulos, integrações e roadmap organizados como base operacional do projeto.'
  },
  {
    icon: Workflow,
    title: 'Operação por método',
    text: 'Fluxos baseados no GIP para transformar demanda em descoberta, arquitetura, design, desenvolvimento, validação e evolução.'
  },
  {
    icon: Bot,
    title: 'Agentes e IA aplicada',
    text: 'Prompts, agentes, automações e rotinas de apoio para reduzir repetição, acelerar análise e apoiar execução técnica.'
  },
  {
    icon: GitBranch,
    title: 'Governança Git',
    text: 'Versionamento, commits processuais, rastreabilidade de alterações, branches e histórico técnico limpo.'
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
  ['01', 'Base estratégica', 'Objetivos, público, posicionamento, proposta de valor e prioridades comerciais.'],
  ['02', 'Base técnica', 'Stack, arquitetura, integrações, dados, componentes, ambientes e versionamento.'],
  ['03', 'Base operacional', 'Processos, rotinas, automações, documentação, responsáveis e critérios de validação.'],
  ['04', 'Base evolutiva', 'Backlog, métricas, suporte, melhorias, novas features e ciclos de crescimento.']
];

const stack = ['Next.js', 'React', 'WordPress', 'PHP', 'Python', 'Flutter', 'n8n', 'GitHub', 'Vercel', 'APIs', 'CRM', 'ERP', 'Analytics', 'IA', 'Design System', 'Documentação'];

export const metadata = {
  title: 'Tehkné OS | Tehkné Solutions',
  description: 'Tehkné OS é a camada operacional da Tehkné para conectar estratégia, produto, código, IA, automações, documentação e sustentação.'
};

export default function TehkneOsPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.tehkneOs);

  return (
    <main>
      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">Tehkné OS</span>
          <h1>Uma camada operacional para transformar tecnologia em sistema vivo.</h1>
          <p>O Tehkné OS conecta estratégia, produto, design, código, IA, automações, documentação, governança e sustentação em uma operação digital clara e evolutiva.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Estruturar minha operação <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo">Ver método GIP <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>OS</strong><span>operação técnica para produtos digitais</span></div>
        <div><strong>GIP</strong><span>método de execução rastreável</span></div>
        <div><strong>IA</strong><span>agentes e automações aplicadas</span></div>
        <div><strong>∞</strong><span>sustentação e evolução contínua</span></div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Módulos do sistema</span>
          <h2>O Tehkné OS organiza o que normalmente fica espalhado.</h2>
          <p>Em vez de cada projeto viver em conversas soltas, arquivos perdidos e decisões invisíveis, o OS transforma operação em estrutura, documentação e fluxo.</p>
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

      <section className="section-frame method-section">
        <div className="section-heading">
          <span className="eyebrow">Camadas operacionais</span>
          <h2>Da estratégia à evolução, cada camada sustenta a próxima.</h2>
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

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Para quem serve</span>
          <h2>Empresas, agências e operações que precisam de braço técnico com processo.</h2>
          <p>O Tehkné OS serve para projetos próprios, produtos internos, sites complexos, WordPress avançado, plataformas, automações, IA e sustentação de operações digitais.</p>
          <div className="os-features">
            {['Empresas em crescimento', 'Agências sem time técnico', 'Produtos internos', 'Sistemas sob medida', 'Operações com IA', 'Sustentação contínua'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Inteligência operacional</span>
            <h2>O objetivo não é só entregar projeto, é criar continuidade.</h2>
            <p>O OS transforma a Tehkné em um braço de tecnologia: documenta, organiza, executa, mede e evolui.</p>
          </div>
        </div>
        <div className="pain-grid">
          {['Menos retrabalho', 'Mais previsibilidade', 'Histórico técnico claro', 'Melhor handoff', 'Automação aplicada', 'Evolução planejada'].map((item) => (
            <div className="pain-card" key={item}><BrainCircuit size={17} />{item}</div>
          ))}
        </div>
      </section>

      <ContactForm
        page="Tehkné OS"
        context="estruturação de operação técnica com processos, documentação, automações, IA, governança e sustentação"
        title="Vamos estruturar sua operação digital como um sistema?"
        description="Use este bloco para iniciar uma conversa sobre Tehkné OS, organização técnica, automações e evolução contínua."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Operação como produto</span>
          <h2>Seu projeto pode deixar de depender de improviso.</h2>
          <p>Vamos mapear como organizar tecnologia, IA, documentação e sustentação para sua operação digital evoluir com clareza.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Falar sobre Tehkné OS <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/portfolio">Ver portfólio <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
