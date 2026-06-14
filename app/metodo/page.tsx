import { ArrowUpRight, Bot, BrainCircuit, CheckCircle2, Code2, DatabaseZap, FileText, GitBranch, Layers3, LineChart, Rocket, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const methodStats = [
  ['03 camadas', 'humano, processo e IA aplicada'],
  ['06 etapas', 'da descoberta à evolução contínua'],
  ['08 lentes', 'gênios modelados para decisão e execução'],
  ['∞ evolução', 'produto vivo depois do deploy']
];

const trina = [
  ['O Humano', 'Modelagem de percepção, foco, escuta, criatividade, raciocínio, decisão e execução do profissional.'],
  ['O Processo', 'Rituais, fluxos, documentação, governança, QA, backlog e critérios para transformar pensamento em operação.'],
  ['A IA', 'Agentes, prompts, memória, automações e análises como extensão de processos claros, não como improviso.']
];

const geniusCards = [
  ['Da Vinci', 'design sistêmico, visão multidisciplinar e integração entre arte, engenharia, produto e operação.'],
  ['Tesla', 'simulação, stress run, infraestrutura, falhas, carga e antecipação de risco antes do custo real.'],
  ['Disney', 'sonhador, realista e crítico para discovery, MVP, campanha, oferta e produto.'],
  ['Aristóteles', 'lógica, taxonomia, modelagem de domínio, regras de negócio e clareza estrutural.'],
  ['Sherlock', 'evidência, QA, leitura de logs, causa raiz, investigação e diagnóstico técnico.'],
  ['Freud', 'escuta profunda, linguagem, objeções, comportamento, CS, copy e motivação.'],
  ['Einstein', 'hipóteses, abstração, cenários e experimentos mentais para decisões complexas.'],
  ['Mozart', 'ritmo, cadência, UX writing, onboarding, fluidez e harmonia de jornada.']
];

const steps = [
  ['01', 'Descoberta estratégica', 'Entendemos objetivo, público, urgência, gargalos, contexto humano, processo atual e oportunidades reais.'],
  ['02', 'Arquitetura da solução', 'Transformamos intenção em escopo, stack, dados, integrações, riscos, prioridades e critérios de sucesso.'],
  ['03', 'Design e produto', 'Criamos jornada, wireframe, interface, conteúdo, CTAs, experiência e operação editável.'],
  ['04', 'Engenharia e desenvolvimento', 'Construímos com versionamento, componentes, documentação, revisão e entregas incrementais.'],
  ['05', 'Validação e deploy', 'Testamos, refinamos, publicamos e validamos performance, SEO, segurança, tracking e operação.'],
  ['06', 'Evolução contínua', 'Organizamos suporte, backlog, analytics, automações, agentes, novas features e melhorias contínuas.']
];

const osModules = [
  ['Arquitetura viva', 'Escopo, módulos, integrações, regras, riscos e roadmap como base operacional do projeto.'],
  ['Operação por método', 'Cada etapa deixa rastro: briefing, discovery, decisão, execução, validação e evolução.'],
  ['Agentes e IA aplicada', 'Prompts, agentes e rotinas apoiam análise, documentação, conteúdo, suporte e execução técnica.'],
  ['Governança Git', 'Versionamento, commits, revisão, branches e histórico técnico limpo reduzem risco em produção.'],
  ['Dados e integrações', 'APIs, bancos, webhooks, CRMs e conectores entram com clareza de dados, permissões e exceções.'],
  ['Sustentação e evolução', 'Monitoramento, performance, segurança, backlog e melhorias mantêm o produto vivo.']
];

const sectorLinks = [
  ['Agências', '/metodo/gip-para-agencias', 'Campanhas, landing pages, funis, CRM, automações e white label técnico.'],
  ['Escolas e cursos', '/metodo/gip-para-escolas-e-cursos', 'Trilhas, plataformas, retenção, gamificação, dashboards e IA pedagógica.'],
  ['Tecnologia e SaaS', '/metodo/gip-para-empresas-de-tecnologia', 'Arquitetura, domínio, QA, documentação, agentes técnicos e evolução de plataforma.']
];

const stack = ['Briefing', 'Discovery', 'Roadmap', 'UX/UI', 'Git', 'Deploy', 'QA', 'Docs', 'Sprint', 'Backlog', 'SEO', 'Analytics', 'n8n', 'APIs', 'CRM', 'IA'];

export const metadata = {
  title: 'Método GIP Tehkné | Humano, Processo e IA para produto digital real',
  description: 'Conheça o Método GIP Tehkné: modelagem de excelência, processos empresariais, arquitetura de soluções, agentes de IA e operação digital evolutiva.'
};

export default function MetodoPage() {
  return (
    <main className="methodos-page">
      <section className="section-frame gip-hero">
        <div className="gip-hero-copy">
          <span className="eyebrow">Método GIP Tehkné • sistema proprietário</span>
          <h1>Não começamos pelo código. Começamos pela forma correta de pensar o problema.</h1>
          <p>O GIP Tehkné une modelagem de excelência, arquitetura de soluções, design de produto, engenharia, processos e IA aplicada para transformar ideias soltas em sistemas digitais reais, rastreáveis e evolutivos.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Aplicar o método no meu projeto <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo/manual-gip-tehkne">Ler Manual GIP <ArrowUpRight size={16} /></a>
          </div>
          <div className="gip-hero-points">
            <span><ShieldCheck size={15} /> menos retrabalho</span>
            <span><FileText size={15} /> decisões documentadas</span>
            <span><BrainCircuit size={15} /> IA com contexto</span>
          </div>
        </div>
        <aside className="gip-os-core-card">
          <Sparkles size={34} />
          <span>GIP Tehkné OS</span>
          <strong>Humano + Processo + IA</strong>
          <p>Uma camada de governança para transformar estratégia, produto, código, automação e sustentação em operação real.</p>
        </aside>
      </section>

      <section className="section-frame compact gip-stats-grid">
        {methodStats.map(([value, label]) => <article key={value}><strong>{value}</strong><span>{label}</span></article>)}
      </section>

      <section className="section-frame gip-os-dashboard-section">
        <div className="section-heading inline">
          <div><span className="eyebrow">Simbiose Trina</span><h2>A genialidade só vira vantagem quando passa por três camadas.</h2></div>
          <p>O método não é somente IA. A IA é consequência de profissionais melhores e processos mais claros.</p>
        </div>
        <div className="gip-os-modules">
          {trina.map(([title, text]) => <article key={title}><BrainCircuit size={24} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="genios" className="section-frame gip-applications-section">
        <div className="section-heading">
          <span className="eyebrow">Gênios modelados</span>
          <h2>Cada gênio vira uma lente de pensamento, um ritual de processo e um agente operacional.</h2>
          <p>A Tehkné traduz essas lentes para tecnologia, agências, escolas, UX, arquitetura, QA, marketing, documentação e automação.</p>
        </div>
        <div className="gip-application-grid">
          {geniusCards.map(([title, text]) => <article key={title}><BrainCircuit size={26} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="fluxo-gip" className="section-frame gip-flow-section">
        <div className="section-heading"><span className="eyebrow">Fluxo GIP</span><h2>Da descoberta ao deploy, cada etapa reduz uma incerteza.</h2><p>O método evita começar pelo código antes de entender negócio, público, jornada, stack, integrações, riscos e critérios de sucesso.</p></div>
        <div className="gip-timeline">
          {steps.map(([number, title, text]) => <article className="gip-timeline-card" key={title}><span className="gip-step-number">{number}</span><GitBranch size={24} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="modulos" className="section-frame gip-os-dashboard-section">
        <div className="section-heading inline">
          <div><span className="eyebrow">Tehkné OS</span><h2>O sistema organiza o que normalmente fica espalhado.</h2></div>
          <p>Em vez de cada projeto viver em conversas soltas, arquivos perdidos, decisões invisíveis e automações isoladas, o GIP transforma operação em estrutura, documentação e fluxo.</p>
        </div>
        <div className="gip-os-modules">
          {osModules.map(([title, text]) => <article key={title}><Layers3 size={24} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="setores" className="section-frame gip-layers-section">
        <div className="section-heading inline">
          <div><span className="eyebrow">Aplicação setorial</span><h2>O GIP Tehkné foi desenhado para operações modernas.</h2></div>
          <p>O mesmo método se adapta a contextos diferentes porque trabalha primeiro com decisão, processo e evidência; depois com tecnologia.</p>
        </div>
        <div className="gip-application-grid">
          {sectorLinks.map(([title, href, text]) => <article key={title}><Workflow size={26} /><h3>{title}</h3><p>{text}</p><a className="text-link" href={href}>Ver aplicação <ArrowUpRight size={14} /></a></article>)}
        </div>
      </section>

      <section className="section-frame gip-continuity-section">
        <div className="section-heading"><span className="eyebrow">Livro, curso e agentes</span><h2>O método também vira conteúdo, formação e sistema de IA.</h2><p>A Tehkné pode transformar o GIP em livro vivo, treinamento corporativo, formação profissional e arquitetura de agentes para processos reais.</p></div>
        <div className="hero-actions"><a className="btn btn-secondary" href="/metodo/formacao-gip-tehkne">Formação GIP <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/metodo/agentes-gip-tehkne">Agentes GIP <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/blog/metodo-gip-tehkne-modelagem-genios-processos-ia">Artigo pilar <LineChart size={16} /></a></div>
        <div className="gip-stack-strip">{stack.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <ContactForm
        page="Método GIP Tehkné"
        context="aplicar o Método GIP Tehkné em projeto digital com humano, processo, IA, arquitetura, design, engenharia, automações, documentação, governança e evolução"
        title="Vamos estruturar seu projeto como um sistema, não como improviso?"
        description="Preencha o briefing para a Tehkné mapear seu contexto, identificar riscos, organizar prioridades e indicar o melhor caminho de execução."
      />

      <section className="final-cta gip-final-cta">
        <div><span className="eyebrow">Execução com clareza</span><h2>O próximo projeto pode começar com um mapa, não com improviso.</h2><p>Vamos transformar intenção em arquitetura, arquitetura em produto e produto em operação digital real.</p></div>
        <div className="hero-actions"><a className="btn btn-primary coin" href="/contato#contato-form">Solicitar diagnóstico <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="/portfolio">Ver portfólio <LineChart size={16} /></a></div>
      </section>
    </main>
  );
}
