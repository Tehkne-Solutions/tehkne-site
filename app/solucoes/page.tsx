import { ArrowUpRight, Bot, Code2, Layers3, MousePointer2, ShieldCheck, Sparkles, Workflow, Wrench } from 'lucide-react';

const solutions = [
  {
    icon: Layers3,
    title: 'Arquitetura de Soluções',
    text: 'Transformamos briefing, ideia ou gargalo operacional em mapa técnico claro: escopo, stack, integrações, dados, riscos, prioridades e plano de execução.',
    bullets: ['Mapeamento de requisitos', 'Definição de stack', 'Arquitetura de dados', 'Roadmap técnico']
  },
  {
    icon: Code2,
    title: 'Desenvolvimento Web & Mobile',
    text: 'Construímos sites, plataformas, apps, dashboards, áreas logadas e sistemas sob medida com foco em performance, manutenção e evolução contínua.',
    bullets: ['Next.js e React', 'Flutter e apps', 'Dashboards e sistemas', 'APIs e integrações']
  },
  {
    icon: Wrench,
    title: 'WordPress Avançado',
    text: 'Criamos e evoluímos WordPress além do visual: plugins, CPTs, integrações, performance, catálogos, landing pages e áreas administrativas enxutas.',
    bullets: ['Plugins próprios', 'CPTs e JetEngine', 'Elementor técnico', 'Performance e manutenção']
  },
  {
    icon: Bot,
    title: 'IA & Automações',
    text: 'Desenhamos agentes, fluxos e automações para reduzir tarefas manuais, conectar ferramentas e acelerar processos comerciais, técnicos e operacionais.',
    bullets: ['Agentes de IA', 'n8n e APIs', 'GitHub e Notion', 'CRM, ERP e pipelines']
  },
  {
    icon: MousePointer2,
    title: 'Design & UX de Produto',
    text: 'Estruturamos interfaces, jornadas e componentes para que produtos digitais sejam claros, desejáveis, utilizáveis e preparados para desenvolvimento real.',
    bullets: ['Wireframes e protótipos', 'UI premium', 'Design system', 'Jornada e conversão']
  },
  {
    icon: ShieldCheck,
    title: 'Sustentação & Evolução',
    text: 'Acompanhamos projetos depois do deploy com suporte, melhoria contínua, documentação, performance, segurança e novas features priorizadas.',
    bullets: ['Monitoramento', 'Correções e melhorias', 'Documentação viva', 'Evolução por sprints']
  }
];

const process = [
  ['01', 'Diagnóstico', 'Entendemos negócio, objetivos, cenário técnico e oportunidades.'],
  ['02', 'Mapa técnico', 'Organizamos arquitetura, páginas, módulos, dados e integrações.'],
  ['03', 'Proposta', 'Definimos escopo, prioridades, investimento e plano de entrega.'],
  ['04', 'Sprint inicial', 'Construímos a primeira versão validável com foco em resultado.'],
  ['05', 'Deploy e evolução', 'Publicamos, medimos, documentamos e seguimos evoluindo.']
];

export const metadata = {
  title: 'Soluções | Tehkné Solutions',
  description: 'Soluções em arquitetura, desenvolvimento web, WordPress avançado, IA, automações, UX de produto e sustentação técnica para operações digitais.'
};

export default function SolucoesPage() {
  return (
    <main className="site-shell">
      <div className="background-grid" />
      <header className="nav-shell">
        <a className="brand" href="/" aria-label="Tehkné Solutions">
          <span className="brand-symbol"><Sparkles size={18} /></span>
          <span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span>
        </a>
        <nav>
          <a href="/solucoes">Soluções</a>
          <a href="/#portfolio">Portfólio</a>
          <a href="/#metodo">Método</a>
          <a href="/#os">Tehkné OS</a>
          <a href="/#contato">Contato</a>
        </nav>
        <a className="btn btn-primary coin" href="/#contato">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
      </header>

      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">Soluções digitais sob medida</span>
          <h1>Da ideia solta à operação digital estruturada.</h1>
          <p>A Tehkné combina arquitetura, design, desenvolvimento, automações e IA para criar sites, sistemas e produtos digitais com clareza técnica, experiência premium e evolução contínua.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/#contato">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#solucoes-lista">Ver soluções <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="solucoes-lista" className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">O que entregamos</span>
          <h2>Soluções para criar, lançar, manter e escalar produtos digitais reais.</h2>
          <p>Atuamos como braço técnico para empresas, agências e operações que precisam de execução confiável — do diagnóstico ao deploy, do MVP à evolução.</p>
        </div>
        <div className="service-grid solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <article className="glass-card service-card solution-card" key={solution.title}>
                <Icon className="card-icon" size={34} />
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <ul>
                  {solution.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <a href="/#contato">Planejar esta solução <ArrowUpRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Como começamos</span>
          <h2>Um fluxo simples para sair do improviso e entrar em execução.</h2>
        </div>
        <div className="method-line solutions-process">
          {process.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <Workflow size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Diagnóstico técnico</span>
          <h2>Vamos transformar sua demanda em um plano claro de execução?</h2>
          <p>Conte o que você precisa criar, melhorar ou automatizar. A Tehkné organiza o caminho técnico e comercial para tornar isso real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href="mailto:contato@tehkne.com.br">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/">Voltar para Home <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
