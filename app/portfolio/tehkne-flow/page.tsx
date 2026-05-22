import { ArrowUpRight, BarChart3, Bot, CheckCircle2, GitBranch, LayoutDashboard, Layers3, Network, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react';

const project = {
  title: 'Tehkné Flow',
  eyebrow: 'Case interno • Produto Tehkné',
  type: 'Produto interno',
  category: 'Sistema / Produto',
  stack: ['Next.js', 'React', 'IA', 'Automação', 'Analytics', 'Gestão de Operações'],
  description:
    'Produto interno para organizar projetos, tarefas, automações, indicadores e visão operacional de times digitais com método, governança e evolução contínua.'
};

const highlights = [
  ['Produto Tehkné', 'Laboratório próprio para transformar método, operação e tecnologia em plataforma.'],
  ['Gestão operacional', 'Visão para projetos, tarefas, sprints, responsáveis, prioridades e evolução.'],
  ['IA aplicada', 'Base preparada para agentes, automações, documentação viva e assistência operacional.'],
  ['Analytics', 'Camada de indicadores para leitura de produtividade, gargalos e progresso.']
];

const modules = [
  { icon: LayoutDashboard, title: 'Dashboard executivo', text: 'Painel central para visualizar status, indicadores, prioridades e próximos movimentos da operação.' },
  { icon: Workflow, title: 'Projetos e tarefas', text: 'Estrutura para organizar demandas, responsáveis, etapas, subtarefas e evolução por sprint.' },
  { icon: Bot, title: 'IA e automações', text: 'Fundação para agentes, notificações, geração de documentação e conexão com ferramentas externas.' },
  { icon: ShieldCheck, title: 'Governança GIP', text: 'Fluxo alinhado ao método Tehkné: descoberta, arquitetura, desenvolvimento, validação e evolução.' },
  { icon: BarChart3, title: 'Indicadores e operação', text: 'Métricas para transformar execução em leitura clara de performance e previsibilidade.' },
  { icon: GitBranch, title: 'Rastreabilidade', text: 'Pensado para conectar decisões, commits, entregas, documentação e histórico de evolução.' }
];

const process = [
  ['01', 'Problema', 'Operações digitais acumulam tarefas, decisões e contexto em canais dispersos.'],
  ['02', 'Arquitetura', 'A Tehkné estruturou um produto interno para centralizar fluxo, método e governança.'],
  ['03', 'Produto', 'A interface prioriza clareza, dashboards, módulos e leitura rápida do estado da operação.'],
  ['04', 'Evolução', 'O roadmap prevê agentes, automações, integrações e visão cada vez mais inteligente.']
];

export const metadata = {
  title: 'Case: Tehkné Flow | Tehkné Solutions',
  description: 'Case Tehkné Flow: produto interno de gestão, automação, analytics, IA e operação digital da Tehkné Solutions.'
};

export default function TehkneFlowCase() {
  return (
    <main className="site-shell case-page">
      <div className="background-grid" />
      <header className="nav-shell">
        <a className="brand" href="/" aria-label="Tehkné Solutions">
          <span className="brand-symbol"><Sparkles size={18} /></span>
          <span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span>
        </a>
        <nav>
          <a href="/solucoes">Soluções</a>
          <a href="/portfolio">Portfólio</a>
          <a href="/#metodo">Método</a>
          <a href="/#os">Tehkné OS</a>
          <a href="/#contato">Contato</a>
        </nav>
        <a className="btn btn-primary coin" href="/#contato">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
      </header>

      <section className="section-frame case-hero">
        <div className="case-hero-copy">
          <span className="eyebrow">{project.eyebrow}</span>
          <h1>{project.title}: sistema interno para transformar operação em produto.</h1>
          <p>{project.description}</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/#contato">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">
            {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>
        <div className="case-visual">
          <div className="case-window">
            <div className="case-window-bar"><span /><span /><span /></div>
            <div className="case-dashboard-grid">
              <div className="case-panel large"><LayoutDashboard size={28} /><strong>Operação</strong><small>Projetos ativos • Sprints • Indicadores</small></div>
              <div className="case-panel"><Network size={24} /><strong>Fluxos</strong></div>
              <div className="case-panel"><Bot size={24} /><strong>Agentes</strong></div>
              <div className="case-panel wide"><Zap size={24} /><strong>Automações conectadas</strong><small>GitHub • Notion • CRM • APIs</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        {highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Entregáveis e módulos</span>
          <h2>Um produto interno desenhado para organizar método, time e execução.</h2>
          <p>O Tehkné Flow nasce como laboratório próprio da Tehkné para validar o que também entregamos aos clientes: arquitetura, produto, automação e sustentação.</p>
        </div>
        <div className="service-grid solutions-grid">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article className="glass-card service-card solution-card" key={module.title}>
                <Icon className="card-icon" size={32} />
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Como pensamos o case</span>
          <h2>Da dor operacional ao sistema vivo de gestão.</h2>
        </div>
        <div className="method-line solutions-process">
          {process.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <CheckCircle2 size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Stack e estratégia</span>
          <h2>Base técnica preparada para produto, automação e IA operacional.</h2>
          <p>O case demonstra como a Tehkné transforma necessidade interna em produto escalável: primeiro organiza o fluxo, depois conecta dados, agentes e automações.</p>
          <div className="os-features">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Produto interno', 'GIP Framework', 'Governança', 'Documentação viva', 'Roadmap', 'Sustentação'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Quer algo parecido?</span>
          <h2>Vamos estruturar seu projeto de forma clara e escalável.</h2>
          <p>Entre em contato para diagnóstico técnico e planejamento do seu produto digital, sistema interno ou operação automatizada.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href="mailto:contato@tehkne.com.br">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
