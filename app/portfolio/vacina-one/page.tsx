import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getPortfolioMetadata } from '../portfolio-data';
import CaseScreens from '../CaseScreens';

const siteUrl = 'https://vacina-one-site.vercel.app/';
const heroShot = `https://s0.wp.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=1500`;

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Sharp'];

const cards = [
  {
    title: 'Contexto em saúde',
    text: 'VacinaOne precisava transmitir cuidado, proteção e confiança para famílias, crianças, adultos e empresas, com linguagem clara e visual acolhedor.'
  },
  {
    title: 'Arquitetura Next.js',
    text: 'O site foi desenvolvido em Next.js com React, TypeScript, Tailwind, Framer Motion, Lucide e Sharp, criando uma base moderna, performática e fácil de evoluir.'
  },
  {
    title: 'Jornada institucional',
    text: 'A experiência organiza hero, laboratórios, diferenciais, sobre a marca, vacinas procuradas, família, empresas, depoimentos, blog e dúvidas frequentes.'
  },
  {
    title: 'Resultado comercial',
    text: 'Case forte para demonstrar presença digital em saúde, conteúdo educativo, comunicação confiável, captação para agendamento e base de expansão.'
  }
];

const process = [
  ['01', 'Leitura do público', 'Entendimento das dores de saúde, confiança, linguagem, atendimento familiar, vacinação empresarial e tomada de decisão.'],
  ['02', 'Estrutura da experiência', 'Organização das seções da home para guiar o visitante de proteção e cuidado até agendamento e contato.'],
  ['03', 'Desenvolvimento Next.js', 'Construção com componentes, responsividade, motion, Tailwind e otimização de imagem para uma entrega moderna.'],
  ['04', 'Base de evolução', 'Preparação para blog, conteúdo educativo, campanhas, unidades, franquias, SEO e novas páginas comerciais.' ]
];

export const metadata = getPortfolioMetadata('vacina-one') ?? {
  title: 'Case: VacinaOne | Tehkné Solutions',
  description: 'Case VacinaOne: site institucional em Next.js para saúde, vacinação, conteúdo educativo, agendamento e expansão comercial.'
};

export default function VacinaOneCase() {
  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero portfolio-case-hero-rich">
        <div className="case-hero-copy">
          <span className="eyebrow">Projeto Tehkné • Saúde</span>
          <h1>VacinaOne: site em Next.js para vacinação, cuidado e expansão.</h1>
          <p>Presença digital moderna para clínica de vacinação, com comunicação clara, jornada de agendamento, conteúdo educativo, visual acolhedor e base preparada para crescimento.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="#contato-form">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href={siteUrl} target="_blank" rel="noreferrer">Abrir site <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="case-visual">
          <div className="portfolio-case-preview portfolio-real-hero-preview cyan">
            <div className="case-window-bar"><span /><span /><span /></div>
            <img src={heroShot} alt="Print da hero do site VacinaOne" loading="eager" />
            <div className="portfolio-real-hero-caption"><span>Print da hero</span><strong>VacinaOne</strong></div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>Next.js</strong><span>stack auditada</span></div>
        <div><strong>Saúde</strong><span>segmento</span></div>
        <div><strong>Agendamento</strong><span>foco comercial</span></div>
        <div><strong>Site publicado</strong><span>status</span></div>
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este projeto demonstra para um novo cliente.</h2>
          <p>VacinaOne demonstra como transformar uma operação de saúde em uma experiência digital clara, confiável e preparada para conteúdo, campanhas, agendamento e expansão.</p>
        </div>
        <div className="case-reading-grid case-reading-grid-balanced">
          {cards.map((card) => <article className="glass-card case-reading-card case-reading-card-balanced" key={card.title}><CheckCircle2 className="card-icon" size={30} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </section>

      <CaseScreens title="VacinaOne" url={siteUrl} />

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Um mapa de execução conectado ao contexto do projeto.</h2></div>
        <div className="case-method-map">{process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <ContactForm page="Case VacinaOne" context="site institucional em Next.js para saúde, vacinação, conteúdo educativo, agendamento, performance e expansão comercial" title="Quer criar uma presença digital confiável para saúde?" description="Use este bloco para iniciar um diagnóstico sobre site institucional, saúde, conteúdo, agendamento, performance e evolução digital." />
    </main>
  );
}
