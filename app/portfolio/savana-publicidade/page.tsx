import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getPortfolioMetadata } from '../portfolio-data';
import CaseScreens from '../CaseScreens';

const siteUrl = 'https://savanapublicidade.com.br/';
const heroShot = `https://s0.wp.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=1500`;

const stack = ['WordPress', 'Elementor', 'Publicidade', 'Campanhas', 'Sites', 'Branding'];

const services = [
  'Planejamento Estratégico',
  'Planejamento de Campanhas',
  'Planejamento de Branding',
  'Comunicação Visual',
  'Mídias Sociais',
  'Design de Embalagens',
  'Eventos',
  'Mídia e Tráfego Pago',
  'Criação de Sites'
];

const portfolio = [
  'Sinfonia Residencial',
  'Dafra Motos',
  'Eurofarma',
  'Stine Sementes',
  'Massas De',
  'Nutralle',
  'Ecobrisa Energia',
  'Oficina do Estudante'
];

const cards = [
  { title: 'Ecossistema de agência', text: 'A Savana representa experiência em publicidade online e offline, com estratégia, criação, campanhas, comunicação visual e presença digital.' },
  { title: 'Atuação técnica recorrente', text: 'O case reúne anos de vivência em ambiente de agência, apoiando sites, páginas, manutenção, design aplicado e comunicação para clientes diversos.' },
  { title: 'Portfólio e clientes', text: 'A página oficial apresenta projetos como Sinfonia Residencial, Dafra Motos, Eurofarma, Stine Sementes, Nutralle, Ecobrisa Energia e Oficina do Estudante.' },
  { title: 'Valor para a Tehkné', text: 'No portfólio da Tehkné, este case comprova repertório em comunicação, campanhas, WordPress, criação de sites, marcas e operação digital para agência.' }
];

const process = [
  ['01', 'Vivência de agência', 'Participação em operação criativa e técnica com publicidade, campanhas, sites, comunicação visual e suporte a clientes.'],
  ['02', 'Sites e presença digital', 'Construção e sustentação de páginas, sites, ajustes visuais, conteúdos e experiências digitais conectadas à comunicação das marcas.'],
  ['03', 'Portfólio setorial', 'Atuação em projetos de diferentes mercados: indústria, varejo, serviços, farmacêutico, tecnologia, agro, educação e energia.'],
  ['04', 'Curadoria institucional', 'Organização desta experiência como capital técnico da Tehkné, respeitando o contexto de ecossistema parceiro e histórico profissional.']
];

export const metadata = getPortfolioMetadata('savana-publicidade') ?? {
  title: 'Case: Savana Publicidade | Tehkné Solutions',
  description: 'Case Savana Publicidade: experiência em agência, WordPress, campanhas, criação de sites, branding e comunicação.'
};

export default function SavanaCase() {
  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero portfolio-case-hero-rich">
        <div className="case-hero-copy">
          <span className="eyebrow">Ecossistema parceiro • Agência e publicidade</span>
          <h1>Savana Publicidade: estratégia, criatividade, campanhas e criação de sites em ambiente de agência.</h1>
          <p>Case de histórico profissional e ecossistema parceiro, reunindo atuação em projetos de publicidade, WordPress, comunicação visual, campanhas e presença digital para marcas de múltiplos setores.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="#contato-form">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href={siteUrl} target="_blank" rel="noreferrer">Abrir site oficial <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="case-visual">
          <div className="portfolio-case-preview portfolio-real-hero-preview violet">
            <div className="case-window-bar"><span /><span /><span /></div>
            <img src={heroShot} alt="Print da hero do site oficial Savana Publicidade" loading="eager" />
            <div className="portfolio-real-hero-caption"><span>Print do site oficial</span><strong>Savana Publicidade</strong></div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>Agência</strong><span>ecossistema</span></div>
        <div><strong>360º</strong><span>serviços estratégicos</span></div>
        <div><strong>Campinas</strong><span>base regional</span></div>
        <div><strong>Multi-setor</strong><span>clientes e projetos</span></div>
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading"><span className="eyebrow">Leitura do case</span><h2>O que este projeto demonstra para um novo cliente.</h2><p>A Savana demonstra repertório acumulado em agência: marcas, campanhas, sites, comunicação visual, estratégia, mídia e atendimento a clientes de setores variados.</p></div>
        <div className="case-reading-grid case-reading-grid-balanced">
          {cards.map((card) => <article className="glass-card case-reading-card case-reading-card-balanced" key={card.title}><CheckCircle2 className="card-icon" size={30} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel"><span className="eyebrow">Serviços identificados</span><h2>Da estratégia à execução visual e digital.</h2><p>O site oficial apresenta uma operação com serviços estratégicos, criativos, mídia, eventos e criação de sites.</p><div className="os-features">{services.map((item) => <span key={item}>{item}</span>)}</div></div>
        <div className="stack-cloud">{portfolio.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <CaseScreens title="Savana Publicidade" url={siteUrl} />

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Um mapa de execução conectado ao contexto do projeto.</h2></div>
        <div className="case-method-map">{process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <ContactForm page="Case Savana Publicidade" context="agência, WordPress, campanhas, criação de sites, branding, comunicação visual e portfólio" title="Quer transformar repertório de agência em presença digital vendável?" description="Use este bloco para iniciar um diagnóstico sobre sites, campanhas, WordPress, portfólio, branding e operação digital." />
    </main>
  );
}
