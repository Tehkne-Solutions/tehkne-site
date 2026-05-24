import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getPortfolioMetadata } from '../portfolio-data';
import CaseScreens from '../CaseScreens';

const siteUrl = 'https://beggin.vercel.app/';
const heroShot = `https://s0.wp.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=1500`;

const stack = ['Next.js', 'React', 'TypeScript', 'UI/UX', 'Motion', 'Performance', 'Produto digital'];

const cards = [
  {
    title: 'Contexto de marca',
    text: 'Beg Gin precisava de uma presença digital premium, visualmente autoral e fiel à estética do produto: clássico brasileiro, artesanal, sofisticado e memorável.'
  },
  {
    title: 'Arquitetura Next.js',
    text: 'O site foi desenvolvido em Next.js com foco em performance, componentização, responsividade e liberdade visual para construir uma experiência muito além de um template comum.'
  },
  {
    title: 'Experiência visual',
    text: 'A interface trabalha produto, narrativa, imagens, tipografia, seções editoriais, prêmios, sustentabilidade e atmosfera de marca para gerar percepção de valor.'
  },
  {
    title: 'Resultado comercial',
    text: 'Case forte para demonstrar design premium, front-end refinado, produto, landing page institucional, direção visual e construção de marca digital.'
  }
];

const process = [
  ['01', 'Leitura estética', 'Mapeamento da identidade visual, produto, narrativa, atmosfera, referências gráficas e tom premium da marca.'],
  ['02', 'Estrutura da landing', 'Organização das seções: hero, história, experiência, coquetéis, prêmios, sustentabilidade e fechamento institucional.'],
  ['03', 'Desenvolvimento Next.js', 'Construção em front-end moderno com componentes, responsividade, performance e ajustes finos de interface.'],
  ['04', 'Refinamento visual', 'Ajuste de espaçamentos, imagens, tipografia, composição, hierarquia e experiência final para apresentação comercial.' ]
];

export const metadata = getPortfolioMetadata('beggin') ?? {
  title: 'Case: Beg Gin | Tehkné Solutions',
  description: 'Case Beg Gin: site premium em Next.js com experiência de marca, produto, narrativa visual e performance.'
};

export default function BegGinCase() {
  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero portfolio-case-hero-rich">
        <div className="case-hero-copy">
          <span className="eyebrow">Projeto Tehkné • Produto e varejo</span>
          <h1>Beg Gin: site premium em Next.js para marca, produto e experiência visual.</h1>
          <p>Site desenvolvido com front-end autoral para comunicar sofisticação, origem, produto, coquetéis, prêmios e sustentabilidade em uma experiência institucional refinada.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="#contato-form">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href={siteUrl} target="_blank" rel="noreferrer">Abrir site <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="case-visual">
          <div className="portfolio-case-preview portfolio-real-hero-preview amber">
            <div className="case-window-bar"><span /><span /><span /></div>
            <img src={heroShot} alt="Print da hero do site Beg Gin" loading="eager" />
            <div className="portfolio-real-hero-caption"><span>Print da hero</span><strong>Beg Gin</strong></div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>Next.js</strong><span>stack auditada</span></div>
        <div><strong>Marca premium</strong><span>tipo de entrega</span></div>
        <div><strong>Produto</strong><span>segmento</span></div>
        <div><strong>Site publicado</strong><span>status</span></div>
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este projeto demonstra para um novo cliente.</h2>
          <p>Beg Gin demonstra capacidade de transformar uma marca de produto em uma experiência digital premium, com front-end moderno, estética forte, narrativa comercial e execução visual cuidadosa.</p>
        </div>
        <div className="case-reading-grid case-reading-grid-balanced">
          {cards.map((card) => <article className="glass-card case-reading-card case-reading-card-balanced" key={card.title}><CheckCircle2 className="card-icon" size={30} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </section>

      <CaseScreens title="Beg Gin" url={siteUrl} />

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Um mapa de execução conectado ao contexto do projeto.</h2></div>
        <div className="case-method-map">{process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <ContactForm page="Case Beg Gin" context="site premium em Next.js para marca de produto, design visual, landing page, performance e experiência institucional" title="Quer um site com esse nível de presença visual?" description="Use este bloco para iniciar um diagnóstico sobre marca, produto, landing page premium, front-end e evolução digital." />
    </main>
  );
}
