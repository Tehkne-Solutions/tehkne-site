import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getPortfolioMetadata } from '../portfolio-data';
import CaseScreens from '../CaseScreens';

const siteUrl = 'https://www.untidigital.com.br/';
const heroShot = `https://s0.wp.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=1500`;

const stack = ['Next.js', 'React', 'UX/UI', 'Integrações', 'APIs', 'Performance', 'Operação digital'];

const cards = [
  {
    title: 'Contexto institucional',
    text: 'A UNTI Digital apresenta soluções em tecnologia para negócios que precisam escalar com segurança, previsibilidade, sites, plataformas web e integrações.'
  },
  {
    title: 'Arquitetura e UX',
    text: 'A estrutura do site comunica proposta de valor, serviços, soluções, operação técnica, navegação institucional e direcionamento comercial com clareza.'
  },
  {
    title: 'Operação digital',
    text: 'O projeto demonstra atuação em sites, plataformas web, integrações com APIs, automações, CRM, ERP e sustentação para negócios digitais.'
  },
  {
    title: 'Ecossistema parceiro',
    text: 'A Tehkné atua como braço técnico parceiro da UNTI em projetos, manutenção, arquitetura, desenvolvimento, otimização e evolução contínua.'
  }
];

const process = [
  ['01', 'Leitura da operação', 'Entendimento da UNTI como operação digital focada em tecnologia, previsibilidade, performance e soluções sob medida.'],
  ['02', 'Organização institucional', 'Estruturação da mensagem para apresentar serviços, soluções, diferenciais, integrações e pontos comerciais principais.'],
  ['03', 'Experiência visual', 'Composição de uma presença digital clara, moderna e confiável, alinhada ao posicionamento de tecnologia para negócios.'],
  ['04', 'Parceria técnica', 'Registro da UNTI como ecossistema parceiro, com atuação recorrente em arquitetura, desenvolvimento e sustentação.' ]
];

export const metadata = getPortfolioMetadata('unti-digital') ?? {
  title: 'Case: UNTI Digital | Tehkné Solutions',
  description: 'Case UNTI Digital: site institucional de tecnologia para negócios, plataformas web, integrações, APIs e operação digital.'
};

export default function UntiDigitalCase() {
  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero portfolio-case-hero-rich">
        <div className="case-hero-copy">
          <span className="eyebrow">Ecossistema parceiro • Tecnologia para negócios</span>
          <h1>UNTI Digital: soluções em tecnologia para negócios que precisam escalar com segurança.</h1>
          <p>Site institucional oficial da UNTI Digital, com posicionamento voltado a sites, plataformas web, integrações com APIs, performance, experiência e operação digital sem gargalos.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="#contato-form">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href={siteUrl} target="_blank" rel="noreferrer">Abrir site oficial <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="case-visual">
          <div className="portfolio-case-preview portfolio-real-hero-preview cyan">
            <div className="case-window-bar"><span /><span /><span /></div>
            <img src={heroShot} alt="Print da hero do site oficial da UNTI Digital" loading="eager" />
            <div className="portfolio-real-hero-caption"><span>Print do site oficial</span><strong>UNTI Digital</strong></div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>Site oficial</strong><span>fonte visual</span></div>
        <div><strong>Institucional</strong><span>tipo de entrega</span></div>
        <div><strong>Tecnologia</strong><span>segmento</span></div>
        <div><strong>Parceiro</strong><span>ecossistema</span></div>
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este projeto demonstra para um novo cliente.</h2>
          <p>Este case representa o ecossistema UNTI Digital corretamente, usando o site oficial como referência visual e posicionando a Tehkné como braço técnico parceiro em tecnologia, desenvolvimento e sustentação.</p>
        </div>
        <div className="case-reading-grid case-reading-grid-balanced">
          {cards.map((card) => <article className="glass-card case-reading-card case-reading-card-balanced" key={card.title}><CheckCircle2 className="card-icon" size={30} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </section>

      <CaseScreens title="UNTI Digital" url={siteUrl} />

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Um mapa de execução conectado ao contexto do projeto.</h2></div>
        <div className="case-method-map">{process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <ContactForm page="Case UNTI Digital" context="site institucional de tecnologia para negócios, integrações, APIs, plataformas web, operação digital e parceria técnica" title="Quer estruturar uma operação digital com clareza?" description="Use este bloco para iniciar um diagnóstico sobre site institucional, plataformas web, integrações, performance e evolução técnica." />
    </main>
  );
}
