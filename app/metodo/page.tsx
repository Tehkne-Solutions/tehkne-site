import { ArrowUpRight, CheckCircle2, GitBranch, Rocket } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

const steps = [
  ['01', 'Descoberta', 'Mapeamos contexto, objetivos, personas, dores, riscos, restrições e oportunidades reais do projeto.'],
  ['02', 'Arquitetura', 'Transformamos intenção em escopo, stack, fluxos, dados, integrações, prioridades e plano técnico.'],
  ['03', 'Design/Produto', 'Criamos jornadas, wireframes, interfaces, componentes e decisões de experiência antes do desenvolvimento.'],
  ['04', 'Desenvolvimento', 'Construímos com código versionado, documentação, rastreabilidade e ciclos curtos de entrega validável.'],
  ['05', 'Validação/Deploy', 'Testamos, revisamos, publicamos, medimos e garantimos que a entrega esteja pronta para uso real.'],
  ['06', 'Evolução', 'Organizamos suporte, melhorias contínuas, novas features, automações e governança pós-lançamento.']
];

const principles = [
  'Clareza antes de código',
  'Arquitetura antes de pressa',
  'Validação antes de escalar',
  'Documentação viva',
  'Evolução por ciclos',
  'Governança técnica'
];

export const metadata = {
  title: 'Método GIP | Tehkné Solutions',
  description: 'Método de trabalho da Tehkné: descoberta, arquitetura, design de produto, desenvolvimento, validação, deploy e evolução contínua.'
};

export default function MetodoPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.metodo);

  return (
    <main>
      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">Método GIP</span>
          <h1>Precisão iterativa para transformar intenção em entrega real.</h1>
          <p>O Guided Iterative Precision organiza descoberta, arquitetura, produto, desenvolvimento, validação e evolução para reduzir ruído, evitar retrabalho e aumentar previsibilidade.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Aplicar o método no meu projeto <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/tehkne-os">Ver Tehkné OS <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>06</strong><span>etapas de execução rastreável</span></div>
        <div><strong>GIP</strong><span>Guided Iterative Precision</span></div>
        <div><strong>0→4</strong><span>descoberta, arquitetura, dev, validação e deploy</span></div>
        <div><strong>∞</strong><span>evolução contínua depois do lançamento</span></div>
      </section>

      <section className="section-frame method-section">
        <div className="section-heading">
          <span className="eyebrow">Fluxo operacional</span>
          <h2>Da descoberta à evolução, cada etapa tem função clara.</h2>
          <p>O método evita começar pelo código sem entender negócio, produto, experiência, integrações e operação.</p>
        </div>
        <div className="method-line">
          {steps.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <GitBranch size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Por que funciona</span>
          <h2>O método organiza decisão, execução e validação no mesmo fluxo.</h2>
          <p>Cada entrega nasce de um mapa técnico e comercial, passa por validação visual e funcional, e continua evoluindo com documentação e governança.</p>
          <div className="os-features">
            {principles.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Briefing', 'MoSCoW', 'Roadmap', 'UX/UI', 'Git', 'Deploy', 'QA', 'Docs', 'Sprint', 'Backlog', 'SEO', 'Analytics'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Aplicação prática</span>
            <h2>O GIP pode orientar sites, sistemas, automações, IA, WordPress e produtos internos.</h2>
            <p>A Tehkné usa o método para tirar projetos do improviso e criar uma linha de execução com escopo, prioridade, rastreabilidade e melhoria contínua.</p>
          </div>
        </div>
        <div className="pain-grid">
          {['Site institucional premium', 'Sistema sob medida', 'WordPress avançado', 'Automação operacional', 'Agentes de IA', 'Sustentação evolutiva'].map((item) => (
            <div className="pain-card" key={item}><CheckCircle2 size={17} />{item}</div>
          ))}
        </div>
      </section>

      <ContactForm
        page="Método GIP"
        context="aplicar o método GIP em um projeto digital com descoberta, arquitetura, design, desenvolvimento, validação, deploy e evolução"
        title="Vamos estruturar seu projeto com método antes de partir para o código?"
        description="O contato já abre uma conversa contextualizada sobre o Método GIP e o melhor caminho de execução para sua demanda."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Execução com clareza</span>
          <h2>O próximo projeto pode começar com um mapa, não com improviso.</h2>
          <p>Vamos transformar intenção em arquitetura, arquitetura em produto e produto em operação digital real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <Rocket size={16} /></a>
        </div>
      </section>
    </main>
  );
}
