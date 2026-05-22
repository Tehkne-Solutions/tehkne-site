import { ArrowUpRight, Bot, Code2, Layers3, MousePointer2, ShieldCheck, Workflow, Wrench } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

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
  const pageWhatsApp = whatsAppHref(whatsappMessages.solucoes);

  return (
    <main>
      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">Soluções digitais sob medida</span>
          <h1>Da ideia solta à operação digital estruturada.</h1>
          <p>A Tehkné combina arquitetura, design, desenvolvimento, automações e IA para criar sites, sistemas e produtos digitais com clareza técnica, experiência premium e evolução contínua.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
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
            const solutionWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pela página de Soluções e quero planejar a solução ${solution.title}. Quero entender escopo, arquitetura, investimento e próximos passos.`);
            return (
              <article className="glass-card service-card solution-card" key={solution.title}>
                <Icon className="card-icon" size={34} />
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <ul>
                  {solution.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <a href={solutionWhatsApp} target="_blank" rel="noreferrer">Planejar esta solução <ArrowUpRight size={15} /></a>
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

      <ContactForm
        page="Soluções"
        context="arquitetura, desenvolvimento, WordPress avançado, IA, automações, UX de produto e sustentação técnica"
        title="Vamos transformar sua demanda em um plano claro de execução?"
        description="Use o formulário para organizar a intenção do projeto e chame a Tehkné pelo WhatsApp com uma mensagem contextualizada para a página de Soluções."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Diagnóstico técnico</span>
          <h2>Vamos transformar sua demanda em um plano claro de execução?</h2>
          <p>Conte o que você precisa criar, melhorar ou automatizar. A Tehkné organiza o caminho técnico e comercial para tornar isso real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/portfolio">Ver portfólio <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
