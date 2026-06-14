import { ArrowUpRight, Bot, BrainCircuit, CheckCircle2, FileText, Layers3, MousePointer2, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const lenses = [
  ['Disney', 'separa sonho criativo, viabilidade e crítica para campanhas, landing pages e ofertas não nascerem confusas.'],
  ['Freud', 'ajuda a ouvir objeções, linguagem emocional, desejo do público e dores reais por trás do briefing.'],
  ['Da Vinci', 'integra copy, design, mídia, desenvolvimento, CRM, automação e sustentação em uma única arquitetura.'],
  ['Sherlock', 'investiga queda de conversão, tracking quebrado, formulário ruim, funil com ruído e gargalos de campanha.']
];

const processes = [
  'Discovery comercial antes da peça visual.',
  'Mapa de promessa, prova, objeção e CTA.',
  'Landing pages com arquitetura de conversão e SEO técnico.',
  'Integração com CRM, WhatsApp, planilhas, webhooks e automações.',
  'Backlog de evolução por campanha, canal e resultado.',
  'Relatórios de hipótese, métrica, ajuste e próxima ação.'
];

const agents = [
  ['Agente Disney', 'gera rotas criativas, depois traduz em escopo e crítica de conversão.'],
  ['Agente Freud', 'analisa feedbacks, comentários, chamadas e mensagens para encontrar linguagem de venda.'],
  ['Agente Sherlock', 'audita campanhas, formulários, tags, UTMs e eventos que quebram mensuração.'],
  ['Agente Da Vinci', 'cruza estética, UX, copy, performance e viabilidade técnica.']
];

export const metadata = {
  title: 'GIP Tehkné para Agências | Braço técnico com método',
  description: 'Como o Método GIP Tehkné ajuda agências de marketing e publicidade a transformar campanhas, landing pages, funis, CRM e automações em operação rastreável.'
};

export default function GipParaAgenciasPage() {
  return (
    <main className="methodos-page">
      <section className="section-frame gip-hero">
        <div className="gip-hero-copy">
          <span className="eyebrow">GIP para agências</span>
          <h1>Um braço técnico para transformar campanha em operação rastreável.</h1>
          <p>Agências não precisam apenas de alguém para desenvolver páginas. Precisam de um parceiro que entenda promessa, tráfego, copy, conversão, integração, CRM, WhatsApp, automação, prazo e sustentação depois da publicação.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Mapear parceria técnica <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo/manual-gip-tehkne">Ver Manual GIP <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="gip-os-core-card">
          <Workflow size={34} />
          <span>Agência + Tehkné</span>
          <strong>estratégia + execução técnica</strong>
          <p>O GIP organiza briefing, campanha, landing, CRM, automação, métricas e evolução em um fluxo único.</p>
        </aside>
      </section>

      <section className="section-frame gip-applications-section">
        <div className="section-heading">
          <span className="eyebrow">Lentes principais</span>
          <h2>Os gênios mais úteis para agências.</h2>
          <p>O método traduz criatividade, escuta, investigação e design sistêmico em decisões práticas de campanha e produto digital.</p>
        </div>
        <div className="gip-application-grid">
          {lenses.map(([title, text]) => (
            <article key={title}><BrainCircuit size={26} /><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section-frame gip-layers-section">
        <div className="section-heading inline">
          <div><span className="eyebrow">Processo aplicado</span><h2>Do briefing ao follow-up comercial.</h2></div>
          <p>O GIP reduz ruído entre criação, mídia, atendimento, tecnologia e cliente final.</p>
        </div>
        <div className="gip-os-modules">
          {processes.map((item) => <article key={item}><CheckCircle2 size={24} /><p>{item}</p></article>)}
        </div>
      </section>

      <section className="section-frame gip-os-dashboard-section">
        <div className="section-heading">
          <span className="eyebrow">Agentes possíveis</span>
          <h2>IA como extensão do processo da agência.</h2>
        </div>
        <div className="gip-application-grid">
          {agents.map(([title, text]) => <article key={title}><Bot size={26} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <ContactForm
        page="GIP para Agências"
        context="parceria técnica com Método GIP Tehkné para agência de marketing, landing pages, CRM, automações, campanhas e white label"
        title="Quer uma camada técnica para sua agência?"
        description="Envie o contexto da agência, tipos de clientes, demandas recorrentes e gargalos técnicos para estruturarmos uma parceria GIP."
      />
    </main>
  );
}
