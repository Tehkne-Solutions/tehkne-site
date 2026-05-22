import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LifeBuoy,
  MousePointer2,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  Zap
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

const solutions = [
  {
    icon: Layers3,
    title: 'Arquitetura de Soluções',
    slug: 'arquitetura',
    intro: 'Antes de codar, organizamos o que precisa existir, por que precisa existir e como isso deve ser construído sem virar dívida técnica.',
    text: 'Transformamos briefing, ideia ou gargalo operacional em mapa técnico claro: escopo, stack, integrações, dados, riscos, prioridades e plano de execução.',
    bullets: ['Diagnóstico de requisitos e stakeholders', 'Definição de stack, módulos e integrações', 'Modelagem de dados e fluxos críticos', 'Roadmap técnico com prioridades e riscos'],
    outcomes: ['clareza de escopo', 'menos retrabalho', 'decisões rastreáveis']
  },
  {
    icon: Code2,
    title: 'Desenvolvimento Web & Mobile',
    slug: 'desenvolvimento',
    intro: 'Criamos interfaces, aplicações e sistemas preparados para produção, manutenção e crescimento real.',
    text: 'Construímos sites, plataformas, apps, dashboards, áreas logadas e sistemas sob medida com foco em performance, manutenção e evolução contínua.',
    bullets: ['Next.js, React, APIs e integrações', 'Flutter e aplicações mobile', 'Dashboards, portais e áreas logadas', 'Deploy, versionamento e evolução por sprint'],
    outcomes: ['produto publicável', 'base escalável', 'experiência responsiva']
  },
  {
    icon: Wrench,
    title: 'WordPress Avançado',
    slug: 'wordpress',
    intro: 'WordPress como plataforma de operação, não apenas editor visual: conteúdo, catálogo, integrações, performance e manutenção.',
    text: 'Criamos e evoluímos WordPress além do visual: plugins, CPTs, integrações, performance, catálogos, landing pages e áreas administrativas enxutas.',
    bullets: ['Plugins e funcionalidades próprias', 'CPTs, JetEngine, Elementor e templates', 'Catálogos, filtros e áreas comerciais', 'Correções, performance e sustentação'],
    outcomes: ['painel editável', 'operação dinâmica', 'manutenção viável']
  },
  {
    icon: Bot,
    title: 'IA & Automações',
    slug: 'ia-automacoes',
    intro: 'Desenhamos fluxos para tirar tarefas repetitivas do manual e transformar conhecimento operacional em sistemas assistidos por IA.',
    text: 'Desenhamos agentes, fluxos e automações para reduzir tarefas manuais, conectar ferramentas e acelerar processos comerciais, técnicos e operacionais.',
    bullets: ['Agentes de IA e copilotos internos', 'n8n, webhooks, APIs e integrações', 'GitHub, Notion, CRM, ERP e pipelines', 'Documentação viva e automação de processos'],
    outcomes: ['menos operação manual', 'tempo de resposta menor', 'processo mais inteligente']
  },
  {
    icon: MousePointer2,
    title: 'Design & UX de Produto',
    slug: 'design-ux',
    intro: 'Estruturamos jornadas, telas e componentes para que o produto seja bonito, claro e utilizável antes de virar código.',
    text: 'Estruturamos interfaces, jornadas e componentes para que produtos digitais sejam claros, desejáveis, utilizáveis e preparados para desenvolvimento real.',
    bullets: ['Wireframes, protótipos e fluxos', 'UI premium, dark/light e design system', 'Jornadas de conversão e onboarding', 'Componentes prontos para desenvolvimento'],
    outcomes: ['decisão mais fácil', 'interface consistente', 'menos ajuste no dev']
  },
  {
    icon: ShieldCheck,
    title: 'Sustentação & Evolução',
    slug: 'sustentacao',
    intro: 'Depois do deploy, o projeto precisa continuar vivo: monitorado, melhorado, protegido e pronto para novas demandas.',
    text: 'Acompanhamos projetos depois do deploy com suporte, melhoria contínua, documentação, performance, segurança e novas features priorizadas.',
    bullets: ['Monitoramento, QA e correções', 'Backlog de evolução e novas features', 'Performance, segurança e atualizações', 'Documentação, suporte e governança'],
    outcomes: ['projeto vivo', 'menos risco', 'evolução contínua']
  }
];

const painPoints = [
  ['Ideia boa, execução confusa', 'A empresa sabe o que quer alcançar, mas não tem arquitetura, priorização ou caminho técnico claro.'],
  ['Site bonito, operação fraca', 'A interface existe, mas não conversa com CRM, dados, automações, SEO ou rotina comercial.'],
  ['WordPress travado', 'O painel ficou difícil, lento, cheio de improvisos e dependente de manutenção manual.'],
  ['Equipe sem braço técnico', 'Agências e operações precisam entregar tecnologia sem contratar um time inteiro de desenvolvimento.'],
  ['IA sem aplicação real', 'A empresa quer usar IA, mas precisa transformar hype em automação útil e mensurável.'],
  ['Projeto sem evolução', 'Depois do lançamento, ninguém documenta, acompanha, mede ou planeja os próximos ciclos.']
];

const engagementModels = [
  {
    title: 'Projeto fechado',
    text: 'Para sites, landing pages, sistemas ou módulos com escopo definido, entregáveis claros e prazo objetivo.',
    items: ['escopo fechado', 'cronograma por etapa', 'deploy final', 'documentação essencial']
  },
  {
    title: 'Sprint evolutiva',
    text: 'Para operações que já têm produto/site e precisam evoluir continuamente com backlog priorizado.',
    items: ['sprints recorrentes', 'melhorias incrementais', 'QA e suporte', 'roadmap vivo']
  },
  {
    title: 'Braço técnico',
    text: 'Para empresas e agências que precisam de uma estrutura confiável para arquitetura, dev, automação e sustentação.',
    items: ['parceria contínua', 'governança técnica', 'priorização conjunta', 'atuação white label quando necessário']
  }
];

const process = [
  ['01', 'Diagnóstico', 'Entendemos negócio, objetivos, cenário técnico, restrições, oportunidades e urgências reais.'],
  ['02', 'Mapa técnico', 'Organizamos arquitetura, páginas, módulos, dados, integrações, riscos e dependências.'],
  ['03', 'Proposta e priorização', 'Definimos escopo, fases, investimento, critérios de aceite e plano de entrega.'],
  ['04', 'Design e prototipação', 'Quando necessário, estruturamos wireframes, UI, jornadas e componentes antes do desenvolvimento.'],
  ['05', 'Desenvolvimento e validação', 'Construímos em ciclos, testamos, ajustamos, documentamos e mantemos rastreabilidade.'],
  ['06', 'Deploy e evolução', 'Publicamos, medimos, corrigimos, planejamos melhorias e seguimos evoluindo a operação.']
];

const stacks = ['Next.js', 'React', 'WordPress', 'Elementor', 'JetEngine', 'PHP', 'Python', 'Flutter', 'APIs', 'n8n', 'GitHub', 'Vercel', 'CRM', 'ERP', 'Analytics', 'IA'];

const faqs = [
  ['A Tehkné faz apenas sites?', 'Não. Sites são uma das entregas. A Tehkné atua também com sistemas, plataformas, WordPress avançado, automações, IA, integrações, UX de produto e sustentação técnica.'],
  ['Vocês trabalham com agências?', 'Sim. A Tehkné pode atuar como braço técnico de agências e operações digitais, inclusive em modelos white label ou parceria técnica, quando fizer sentido.'],
  ['Dá para começar sem escopo fechado?', 'Sim. Nesse caso, começamos pelo diagnóstico e pelo mapa técnico para transformar a ideia em fases, prioridades, riscos e próximos passos claros.'],
  ['Vocês mantêm o projeto depois do deploy?', 'Sim. A sustentação e evolução contínua fazem parte da proposta: correções, melhorias, performance, segurança, automações e novas features.']
];

export const metadata = {
  title: 'Soluções | Tehkné Solutions',
  description:
    'Soluções completas em arquitetura, desenvolvimento web e mobile, WordPress avançado, IA, automações, UX de produto e sustentação técnica para operações digitais.'
};

export default function SolucoesPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.solucoes);

  return (
    <main>
      <section className="section-frame solutions-hero solutions-hero-pro">
        <div className="section-heading solutions-hero-content">
          <span className="eyebrow">Soluções digitais sob medida</span>
          <h1>Da ideia solta à operação digital estruturada.</h1>
          <p>
            A Tehkné combina arquitetura, design, desenvolvimento, automações e IA para criar sites, sistemas e produtos digitais com clareza técnica, experiência premium e evolução contínua.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#solucoes-lista">Explorar soluções <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack solutions-hero-stack">
            {['Arquitetura', 'Desenvolvimento', 'WordPress', 'IA', 'UX', 'Sustentação'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="solutions-hero-panel" aria-hidden="true">
          <div className="solutions-map-card primary"><Sparkles size={24} /><strong>Intenção</strong><span>briefing, problema e oportunidade</span></div>
          <div className="solutions-map-card"><Layers3 size={22} /><strong>Arquitetura</strong><span>escopo, dados, stack e fluxos</span></div>
          <div className="solutions-map-card"><Code2 size={22} /><strong>Produto</strong><span>design, código, validação e deploy</span></div>
          <div className="solutions-map-card"><Workflow size={22} /><strong>Evolução</strong><span>sustentação, automação e crescimento</span></div>
        </div>
      </section>

      <section className="section-frame compact solutions-index">
        <a href="#arquitetura">Arquitetura</a>
        <a href="#desenvolvimento">Dev Web & Mobile</a>
        <a href="#wordpress">WordPress</a>
        <a href="#ia-automacoes">IA & Automações</a>
        <a href="#design-ux">UX & Produto</a>
        <a href="#sustentacao">Sustentação</a>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">O que resolvemos</span>
          <h2>O problema raramente é “falta de site”. É falta de sistema, clareza e operação.</h2>
          <p>
            A Tehkné entra quando o projeto precisa deixar de ser uma soma de tarefas soltas e virar uma estrutura digital com direção, arquitetura, código, dados, automação e evolução.
          </p>
        </div>
        <div className="pain-grid solutions-pain-grid">
          {painPoints.map(([title, text]) => (
            <article className="pain-card solution-pain-card" key={title}>
              <SearchCheck size={18} />
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="solucoes-lista" className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">O que entregamos</span>
          <h2>Soluções para criar, lançar, manter e escalar produtos digitais reais.</h2>
          <p>
            Cada frente pode ser contratada isoladamente ou combinada em uma entrega completa. A diferença está no método: antes de vender execução, organizamos o problema e desenhamos o caminho.
          </p>
        </div>
        <div className="solutions-detail-list">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const solutionWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pela página de Soluções e quero planejar a solução ${solution.title}. Quero entender escopo, arquitetura, investimento e próximos passos.`);
            return (
              <article className="solution-detail-card" id={solution.slug} key={solution.title}>
                <div className="solution-detail-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="solution-detail-icon"><Icon size={34} /></div>
                <div className="solution-detail-content">
                  <span className="eyebrow">{solution.title}</span>
                  <h3>{solution.intro}</h3>
                  <p>{solution.text}</p>
                  <div className="solution-detail-columns">
                    <div>
                      <strong>Inclui</strong>
                      <ul>
                        {solution.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={15} /> {bullet}</li>)}
                      </ul>
                    </div>
                    <div>
                      <strong>Resultado esperado</strong>
                      <div className="os-features solution-outcomes">
                        {solution.outcomes.map((item) => <span key={item}>{item}</span>)}
                      </div>
                    </div>
                  </div>
                  <a className="text-link" href={solutionWhatsApp} target="_blank" rel="noreferrer">Planejar esta solução <ArrowUpRight size={15} /></a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame os-section solutions-models-section">
        <div className="os-panel">
          <span className="eyebrow">Modelos de contratação</span>
          <h2>Nem todo projeto precisa do mesmo formato. A arquitetura vem antes do contrato.</h2>
          <p>
            Podemos atuar em escopo fechado, sprint evolutiva ou como braço técnico contínuo. O modelo ideal depende da maturidade da ideia, urgência, equipe disponível e criticidade da operação.
          </p>
          <div className="os-features">
            {['Projeto fechado', 'Sprint evolutiva', 'Braço técnico', 'White label técnico', 'Sustentação', 'Diagnóstico'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="solutions-models-grid">
          {engagementModels.map((model) => (
            <article className="glass-card solution-model-card" key={model.title}>
              <h3>{model.title}</h3>
              <p>{model.text}</p>
              <ul>
                {model.items.map((item) => <li key={item}><ArrowRight size={14} /> {item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Como começamos</span>
          <h2>Um fluxo simples para sair do improviso e entrar em execução.</h2>
          <p>
            A Tehkné trabalha com um fluxo inspirado no GIP: precisão iterativa, clareza progressiva e validação por etapas. Isso evita começar pelo código antes de entender o que precisa ser construído.
          </p>
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

      <section className="section-frame solutions-proof-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Stack e operação</span>
            <h2>Tecnologia escolhida por contexto, não por moda.</h2>
            <p>Usamos stacks modernas, mas a decisão depende do tipo de projeto, equipe, manutenção, orçamento, integrações e velocidade necessária.</p>
          </div>
        </div>
        <div className="stack-cloud solutions-stack-cloud">
          {stacks.map((stack) => <span key={stack}>{stack}</span>)}
        </div>
        <div className="solutions-proof-grid">
          <article><Gauge size={24} /><h3>Performance</h3><p>O projeto precisa carregar bem, ser encontrável, responsivo e pronto para produção.</p></article>
          <article><Database size={24} /><h3>Dados e integrações</h3><p>Formulários, CRM, ERP, APIs e automações devem ser pensados desde a arquitetura.</p></article>
          <article><GitBranch size={24} /><h3>Governança</h3><p>Versionamento, documentação, etapas e critérios de aceite reduzem ruído e retrabalho.</p></article>
          <article><LifeBuoy size={24} /><h3>Sustentação</h3><p>Depois do deploy, o produto precisa de suporte, medição, ajustes e evolução contínua.</p></article>
        </div>
      </section>

      <section className="section-frame solutions-faq-section">
        <div className="section-heading">
          <span className="eyebrow">Perguntas comuns</span>
          <h2>Antes de contratar tecnologia, entenda o tipo de problema que você quer resolver.</h2>
        </div>
        <div className="solutions-faq-grid">
          {faqs.map(([question, answer]) => (
            <article className="glass-card solution-faq-card" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
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
