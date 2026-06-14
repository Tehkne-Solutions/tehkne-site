import { ArrowUpRight, Bot, CheckCircle2, Cpu } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const agents = [
  ['Agente Da Vinci', 'UX, arquitetura visual, design sistêmico, semântica, acessibilidade, performance e protótipos.'],
  ['Agente Tesla', 'simulação, stress run, infraestrutura, carga, limites de API, filas e contingência.'],
  ['Agente Disney', 'ideação, product discovery, sonhador, realista, crítico, MVP, campanhas e ofertas.'],
  ['Agente Aristóteles', 'modelagem de domínio, entidades, taxonomia, regras de negócio, glossário e critérios.'],
  ['Agente Sherlock', 'QA, logs, causa raiz, sintomas, hipótese, evidência e suporte técnico.'],
  ['Agente Freud', 'escuta profunda, objeções, feedbacks, NPS, linguagem emocional, CS e copy.'],
  ['Agente Einstein', 'hipóteses, cenários, abstração, pesquisa, dados, IA e decisões de fronteira.'],
  ['Agente Mozart', 'jornada, ritmo, onboarding, cadência, fluidez, UX writing e sequência de conteúdo.']
];

const governance = [
  'Todo agente precisa ter função clara e limite de uso.',
  'Todo output precisa passar por critério humano ou regra de validação.',
  'Todo prompt estratégico precisa ter contexto, objetivo, entradas, saída esperada e restrições.',
  'Toda automação crítica precisa de log, fallback e possibilidade de revisão.',
  'Toda IA aplicada deve apoiar processo existente, não substituir governança.'
];

const architecture = [
  ['Entrada', 'briefing, dados, logs, feedbacks, telas, escopo, documentos ou histórico operacional.'],
  ['Processamento', 'prompt, memória, ferramenta, regra, agente especialista e loop de validação.'],
  ['Saída', 'análise, hipótese, checklist, relatório, protótipo, copy, plano de ação ou documentação.'],
  ['Governança', 'critérios de aceite, revisão humana, histórico, auditoria, segurança e melhoria contínua.']
];

export const metadata = {
  title: 'Agentes GIP Tehkné | IA aplicada com método e governança',
  description: 'Conheça a arquitetura dos Agentes GIP Tehkné aplicados a produto, tecnologia, marketing, educação, suporte e gestão.'
};

export default function AgentesGipTehknePage() {
  return (
    <main className="methodos-page">
      <section className="section-frame gip-hero">
        <div className="gip-hero-copy">
          <span className="eyebrow">Agentes GIP Tehkné</span>
          <h1>IA aplicada como extensão de pensamento e processo, não como improviso.</h1>
          <p>Os Agentes GIP transformam as lentes dos gênios em funções operacionais: estruturar, simular, criar, criticar, revisar, documentar e apoiar decisões com contexto.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Desenhar agentes para minha operação <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo/manual-gip-tehkne">Entender o método <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="gip-os-core-card">
          <Cpu size={34} />
          <span>IA com processo</span>
          <strong>agentes + memória + governança</strong>
          <p>Antes do agente vem a modelagem. Antes da automação vem o processo. Antes do output vem o critério.</p>
        </aside>
      </section>

      <section className="section-frame gip-applications-section">
        <div className="section-heading">
          <span className="eyebrow">Catálogo inicial</span>
          <h2>Cada agente nasce de uma lente do Método GIP.</h2>
          <p>Os agentes são módulos especializados que podem apoiar produto, tecnologia, marketing, educação, suporte e gestão.</p>
        </div>
        <div className="gip-application-grid">
          {agents.map(([title, text]) => <article key={title}><Bot size={26} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-frame gip-layers-section">
        <div className="section-heading inline">
          <div><span className="eyebrow">Arquitetura</span><h2>Agente útil tem entrada, processo, saída e governança.</h2></div>
          <p>A Tehkné não trata agente como chat genérico. Cada agente precisa ter papel operacional e critérios de qualidade.</p>
        </div>
        <div className="gip-layer-stack">
          {architecture.map(([title, text]) => <article key={title}><span>AI</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="section-frame gip-os-dashboard-section">
        <div className="section-heading">
          <span className="eyebrow">Governança</span>
          <h2>O que impede a IA de virar bagunça.</h2>
        </div>
        <div className="gip-os-modules">
          {governance.map((item) => <article key={item}><CheckCircle2 size={24} /><p>{item}</p></article>)}
        </div>
      </section>

      <ContactForm
        page="Agentes GIP Tehkné"
        context="criação de agentes de IA com Método GIP Tehkné, governança, prompts, memória, automações e processos"
        title="Quer criar agentes com função real?"
        description="Conte quais processos você quer analisar, automatizar, documentar ou ampliar com IA para desenharmos uma arquitetura de agentes GIP."
      />
    </main>
  );
}
