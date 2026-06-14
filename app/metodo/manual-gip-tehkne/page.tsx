import { ArrowUpRight, Bot, BrainCircuit, Code2, Eye, GitBranch, Layers3, Microscope, Network, PenTool, ShieldCheck, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const trina = [
  {
    icon: BrainCircuit,
    title: 'O Humano',
    text: 'Modelagem de percepção, pensamento, decisão, foco, criatividade, escuta e estados de execução do profissional.'
  },
  {
    icon: Workflow,
    title: 'O Processo',
    text: 'Transformação da estratégia mental em rituais, fluxos, documentação, critérios de aceite e governança empresarial.'
  },
  {
    icon: Bot,
    title: 'A IA',
    text: 'Espelhamento da estratégia em agentes, prompts, memória, automações e rotinas de análise para ampliar a operação.'
  }
];

const geniuses = [
  {
    name: 'Leonardo da Vinci',
    axis: 'polimatia, visão sistêmica e design integrado',
    professional: 'Treina o profissional a observar padrões, desenhar antes de decidir e unir estética, engenharia, produto e operação.',
    process: 'Cria rituais de sandbox, desenho explodido, wireframes multi-perspectiva e escopo visual integrado.',
    ai: 'Agente de síntese visual que cruza UX, semântica, arquitetura, performance e conteúdo.'
  },
  {
    name: 'Nikola Tesla',
    axis: 'simulação mental, prototipagem e stress run',
    professional: 'Treina visualização interna de fluxos, infraestrutura, falhas e comportamento do sistema antes do custo real.',
    process: 'Cria matrizes preventivas, simulações de carga, plano de contingência e revisão de riscos antes do deploy.',
    ai: 'Agente de stress test que antecipa gargalos, exceções, limites de API e cenários de ruptura.'
  },
  {
    name: 'Walt Disney',
    axis: 'sonhador, realista e crítico',
    professional: 'Separa criação, viabilidade e crítica para evitar matar ideias cedo demais ou executar fantasias inviáveis.',
    process: 'Organiza discovery, product thinking, campanhas, ofertas e MVPs em ciclos de visão, plano e auditoria.',
    ai: 'Tríade de agentes que gera possibilidades, calcula execução e critica riscos antes da síntese final.'
  },
  {
    name: 'Aristóteles',
    axis: 'lógica, taxonomia e modelagem de domínio',
    professional: 'Refina clareza conceitual, categorias, causa e efeito, regra de negócio e definição precisa de entidades.',
    process: 'Apoia DDD, taxonomia de conteúdo, modelagem de dados, regras de negócio e documentação de escopo.',
    ai: 'Agente de estruturação que organiza domínios, entidades, glossários, relações e critérios de decisão.'
  },
  {
    name: 'Sherlock Holmes',
    axis: 'evidência, investigação e diagnóstico',
    professional: 'Treina observação, separação entre fato e hipótese, leitura de logs, comportamento do usuário e causa raiz.',
    process: 'Apoia QA, UX research, auditoria técnica, análise de incidentes, investigação de bugs e suporte avançado.',
    ai: 'Agente investigador que cruza logs, sintomas, alterações recentes, hipóteses e evidências.'
  },
  {
    name: 'Sigmund Freud',
    axis: 'escuta profunda, linguagem e motivação',
    professional: 'Aprimora escuta, leitura de objeções, análise de linguagem e compreensão de desejos declarados e não declarados.',
    process: 'Apoia entrevistas, copy, customer success, retenção, suporte, vendas consultivas e cultura de time.',
    ai: 'Agente de análise semântico-emocional para feedbacks, tickets, reviews, NPS e mensagens de clientes.'
  },
  {
    name: 'Albert Einstein',
    axis: 'experimento mental e abstração',
    professional: 'Treina pensamento por hipóteses, experimentos mentais, mudança de escala e visualização de sistemas abstratos.',
    process: 'Apoia pesquisa, arquitetura de IA, análise de dados, cenários preditivos e decisões de fronteira.',
    ai: 'Agente de hipóteses que testa cenários conceituais, premissas e consequências antes da implementação.'
  },
  {
    name: 'Mozart',
    axis: 'ritmo, harmonia e fluxo',
    professional: 'Treina cadência, percepção de jornada, ritmo de interface, clareza narrativa e fluidez de experiência.',
    process: 'Apoia UX writing, motion, onboarding, trilhas de aprendizado, lançamentos e sequências de comunicação.',
    ai: 'Agente de fluxo que revisa cadência, fricção, sequência, repetição e harmonia da jornada.'
  }
];

const sectors = [
  ['Tecnologia e SaaS', 'Arquitetura de soluções, modelagem de domínio, DevOps, QA, documentação, agentes técnicos e evolução de plataforma.'],
  ['Agências de marketing e publicidade', 'Discovery, campanhas, landing pages, copy, funis, CRM, automações, white label técnico e análise de conversão.'],
  ['Escolas e cursos digitais', 'Trilhas de aprendizagem, plataformas, retenção, gamificação, dashboards, IA pedagógica e sustentação de conteúdo.']
];

const curriculum = [
  ['Módulo 1', 'Fundações do Método GIP: modelagem de excelência, níveis neurológicos, percepção, critérios e decisão.'],
  ['Módulo 2', 'Da Vinci e Tesla: pensamento visual, arquitetura, prototipagem, simulação e desenho multi-perspectiva.'],
  ['Módulo 3', 'Disney, Aristóteles e Sherlock: discovery, lógica, diagnóstico, product thinking, QA e evidência.'],
  ['Módulo 4', 'Freud, Einstein e Mozart: linguagem, hipóteses, comportamento, jornada, fluidez e experiência.'],
  ['Módulo 5', 'Transformação em processos: rituais, fluxos, documentação, governança, backlog e operação por squads.'],
  ['Módulo 6', 'Transformação em agentes: prompts, memória, ferramentas, QA, automação, critérios e loops T.O.T.S.']
];

export const metadata = {
  title: 'Manual GIP Tehkné | Gênios, Processos e IA aplicada',
  description: 'Manual vivo do Método GIP Tehkné: modelagem de gênios, processos empresariais, formação profissional e agentes de IA para tecnologia, agências e educação.'
};

export default function ManualGipTehknePage() {
  return (
    <main className="methodos-page">
      <section className="section-frame gip-hero">
        <div className="gip-hero-copy">
          <span className="eyebrow">Manual vivo • Método GIP Tehkné</span>
          <h1>Gênios, Inteligência Profissional, Processos e IA aplicada.</h1>
          <p>
            O Método GIP Tehkné une modelagem de excelência, arquitetura de soluções, design de produto, engenharia de processos e agentes de IA. A proposta não é copiar biografias, mas transformar estratégias de pensamento em prática profissional, operação empresarial e tecnologia escalável.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Aplicar na minha operação <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/blog/metodo-gip-tehkne-modelagem-genios-processos-ia">Ler artigo pilar <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="gip-os-core-card">
          <BrainCircuit size={34} />
          <span>Simbiose Trina</span>
          <strong>Humano + Processo + IA</strong>
          <p>Primeiro elevamos a forma de pensar. Depois estruturamos a operação. Por fim, usamos IA para ampliar a execução com governança.</p>
        </aside>
      </section>

      <section className="section-frame gip-os-dashboard-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Arquitetura do método</span>
            <h2>A genialidade só vira vantagem quando passa por três camadas.</h2>
          </div>
          <p>O método não é somente IA. A IA é consequência de uma modelagem bem feita do profissional e de processos corporativos claros.</p>
        </div>
        <div className="gip-os-modules">
          {trina.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame gip-applications-section">
        <div className="section-heading">
          <span className="eyebrow">Gênios modelados</span>
          <h2>Cada gênio vira uma lente de pensamento, um ritual de processo e um agente operacional.</h2>
          <p>O mapeamento abaixo resume como a Tehkné traduz modelos cognitivos em prática para produto digital, marketing, educação, arquitetura, UX, engenharia, QA e automação.</p>
        </div>
        <div className="gip-application-grid">
          {geniuses.map((item) => (
            <article key={item.name}>
              <Microscope size={26} />
              <h3>{item.name}</h3>
              <strong>{item.axis}</strong>
              <p><b>Profissional:</b> {item.professional}</p>
              <p><b>Processo:</b> {item.process}</p>
              <p><b>IA:</b> {item.ai}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame gip-layers-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Aplicação setorial</span>
            <h2>O GIP Tehkné foi desenhado para operações modernas.</h2>
          </div>
          <p>O mesmo método se adapta a contextos diferentes porque trabalha primeiro com decisão, processo e evidência; depois com tecnologia.</p>
        </div>
        <div className="gip-layer-stack">
          {sectors.map(([title, text], index) => (
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

      <section className="section-frame gip-flow-section">
        <div className="section-heading">
          <span className="eyebrow">Livro e curso</span>
          <h2>Do manifesto ao treinamento de profissionais polímatas.</h2>
          <p>O conteúdo pode virar livro vivo no site, trilha de formação interna e curso corporativo para profissionais de tecnologia, produto, marketing e educação.</p>
        </div>
        <div className="gip-timeline">
          {curriculum.map(([module, text]) => (
            <article className="gip-timeline-card" key={module}>
              <span className="gip-step-number">{module}</span>
              <GitBranch size={24} />
              <h3>{text.split(':')[0]}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame blog-final-cta">
        <div>
          <span className="eyebrow">Próximo passo</span>
          <h2>Transforme o método em operação real.</h2>
          <p>A Tehkné pode aplicar o GIP no diagnóstico, arquitetura, produto, automações, formação de time e criação de agentes para sua empresa.</p>
        </div>
        <a className="btn btn-primary coin" href="/contato#contato-form">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
      </section>

      <ContactForm
        page="Manual GIP Tehkné"
        context="aplicar o Método GIP Tehkné em tecnologia, agência, escola de cursos, formação de profissionais, processos e agentes de IA"
        title="Quer aplicar o Método GIP na sua operação?"
        description="Envie o contexto da empresa para avaliarmos onde o GIP pode entrar: diagnóstico, arquitetura, processos, IA, automação ou formação de equipe."
      />
    </main>
  );
}
