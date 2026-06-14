import { ArrowUpRight, Bot, BrainCircuit, CheckCircle2, Code2, DatabaseZap, ShieldCheck } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const lenses = [
  ['Tesla', 'antecipa gargalos, limites de infraestrutura, falhas de API, carga, filas e riscos antes do custo real.'],
  ['Aristóteles', 'organiza domínio, entidades, taxonomias, regras de negócio, permissões e limites de contexto.'],
  ['Sherlock', 'investiga bugs, logs, incidentes, sintomas e causa raiz sem confundir hipótese com evidência.'],
  ['Einstein', 'apoia hipóteses, arquitetura de IA, cenários abstratos, dados e decisões de fronteira.']
];

const processes = [
  'Discovery técnico e mapeamento de domínio.',
  'Arquitetura de dados, integrações, APIs e ambientes.',
  'Matriz de risco, stress run e critérios de rollback.',
  'QA com evidência, logs, cenários e checklist de aceite.',
  'Documentação viva para onboarding, manutenção e evolução.',
  'Backlog técnico priorizado por impacto, risco e dependência.'
];

const agents = [
  ['Agente Tesla', 'simula cenários de carga, falhas, integrações e limites operacionais.'],
  ['Agente Aristóteles', 'estrutura entidades, regras, glossários e fronteiras de domínio.'],
  ['Agente Sherlock', 'investiga sintomas, logs, histórico e hipóteses técnicas.'],
  ['Agente Einstein', 'gera cenários, hipóteses e perguntas de validação para decisões complexas.']
];

export const metadata = {
  title: 'GIP Tehkné para Empresas de Tecnologia | Arquitetura, QA e IA',
  description: 'Como o Método GIP Tehkné ajuda empresas de tecnologia e SaaS com arquitetura, modelagem de domínio, QA, documentação, agentes e evolução de plataforma.'
};

export default function GipParaTecnologiaPage() {
  return (
    <main className="methodos-page">
      <section className="section-frame gip-hero">
        <div className="gip-hero-copy">
          <span className="eyebrow">GIP para tecnologia e SaaS</span>
          <h1>Arquitetura, QA, domínio e IA para plataformas que precisam evoluir.</h1>
          <p>Empresas de tecnologia precisam reduzir improviso em decisões técnicas, integrações, dados, infraestrutura, documentação e sustentação. O GIP Tehkné organiza esse ciclo antes, durante e depois do deploy.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Auditar arquitetura <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo/agentes-gip-tehkne">Ver agentes GIP <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="gip-os-core-card">
          <Code2 size={34} />
          <span>Tecnologia</span>
          <strong>arquitetura + QA + evolução</strong>
          <p>O método conecta domínio, código, dados, infra, testes, documentação, agentes e roadmap técnico.</p>
        </aside>
      </section>

      <section className="section-frame gip-applications-section">
        <div className="section-heading">
          <span className="eyebrow">Lentes principais</span>
          <h2>Os gênios mais úteis para produto, software e SaaS.</h2>
          <p>A base técnica melhora quando decisão, domínio, evidência e hipótese são tratados como parte da arquitetura.</p>
        </div>
        <div className="gip-application-grid">
          {lenses.map(([title, text]) => <article key={title}><BrainCircuit size={26} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-frame gip-layers-section">
        <div className="section-heading inline">
          <div><span className="eyebrow">Processo aplicado</span><h2>Do domínio ao deploy com menos surpresa.</h2></div>
          <p>O GIP reduz retrabalho técnico por clareza de escopo, decisão e evidência.</p>
        </div>
        <div className="gip-os-modules">
          {processes.map((item) => <article key={item}><CheckCircle2 size={24} /><p>{item}</p></article>)}
        </div>
      </section>

      <section className="section-frame gip-os-dashboard-section">
        <div className="section-heading">
          <span className="eyebrow">Agentes possíveis</span>
          <h2>IA técnica para apoiar arquitetura, QA e documentação.</h2>
        </div>
        <div className="gip-application-grid">
          {agents.map(([title, text]) => <article key={title}><Bot size={26} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <ContactForm
        page="GIP para Empresas de Tecnologia"
        context="aplicar Método GIP Tehkné em empresa de tecnologia, SaaS, arquitetura, QA, domínio, integrações, documentação e agentes"
        title="Quer reduzir improviso técnico?"
        description="Envie o contexto da plataforma, stack, integrações, dores técnicas e objetivos de evolução para avaliarmos uma aplicação GIP."
      />
    </main>
  );
}
