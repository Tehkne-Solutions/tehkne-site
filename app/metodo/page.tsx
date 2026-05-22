import { ArrowUpRight, CheckCircle2, GitBranch, Sparkles, Workflow } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

const steps = [
  ['01', 'Descoberta', 'Mapeamos contexto, objetivos, público, dores, riscos e oportunidades reais do projeto.'],
  ['02', 'Arquitetura', 'Definimos escopo, stack, integrações, dados, módulos, roadmap e plano de execução.'],
  ['03', 'Design / Produto', 'Organizamos jornadas, wireframes, interface, experiência e componentes para uso real.'],
  ['04', 'Desenvolvimento', 'Construímos com versionamento, entregas incrementais, qualidade técnica e rastreabilidade.'],
  ['05', 'Validação / Deploy', 'Testamos, corrigimos, publicamos e deixamos o projeto pronto para operação.'],
  ['06', 'Evolução', 'Monitoramos, sustentamos e melhoramos continuamente com novas features e automações.']
];

const principles = [
  'Clareza antes de execução',
  'Arquitetura antes de improviso',
  'Entrega incremental e validável',
  'Documentação viva',
  'Rastreabilidade técnica',
  'Evolução contínua após o deploy'
];

export const metadata = {
  title: 'Método GIP | Tehkné Solutions',
  description: 'Conheça o método GIP da Tehkné: descoberta, arquitetura, design, desenvolvimento, validação, deploy e evolução contínua.'
};

export default function MetodoPage() {
  const href = whatsAppHref('Olá, Tehkné! Vim pela página Método GIP e quero entender como aplicar esse processo ao meu projeto.');

  return (
    <main className="site-shell">
      <div className="background-grid" />
      <Header />

      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">Método GIP</span>
          <h1>O processo que transforma intenção em produto digital real.</h1>
          <p>O Guided Iterative Precision organiza descoberta, arquitetura, design, desenvolvimento, validação e evolução para reduzir retrabalho e aumentar previsibilidade.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={href} target="_blank" rel="noreferrer">Aplicar método ao meu projeto <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#etapas">Ver etapas <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="etapas" className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Etapas do GIP</span>
          <h2>Da descoberta ao deploy, cada decisão tem lugar no processo.</h2>
          <p>O método evita começar pelo código antes de entender o problema, a estratégia e a arquitetura necessária.</p>
        </div>
        <div className="method-line">
          {steps.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <GitBranch size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Governança de entrega</span>
          <h2>O GIP une produto, técnica, marketing, IA e sustentação.</h2>
          <p>Ele funciona como uma camada operacional para tirar demandas do improviso e organizar decisões em um caminho de execução claro.</p>
          <div className="os-features">
            {principles.map((item) => <span key={item}><CheckCircle2 size={14} /> {item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Briefing', 'MoSCoW', 'Roadmap', 'UX', 'Git', 'Deploy', 'QA', 'Sprints', 'Documentação', 'IA'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <ContactForm
        page="Método GIP"
        context="diagnóstico, arquitetura, roadmap, validação, deploy e evolução contínua"
        title="Quer aplicar o GIP no seu projeto?"
        description="Organize a intenção do seu projeto e chame a Tehkné para transformar isso em plano técnico de execução."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Próximo passo</span>
          <h2>Vamos mapear sua demanda com método antes de executar?</h2>
          <p>Um bom projeto começa com clareza: objetivos, escopo, riscos, stack, roadmap e critérios de validação.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={href} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
