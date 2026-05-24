import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getPortfolioMetadata } from '../portfolio-data';
import CaseScreens from '../CaseScreens';

const siteUrl = 'https://liugongla.com/';
const heroShot = `https://s0.wp.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=1500`;

const stack = ['WordPress', 'Multilíngue', 'PT / EN / ES', 'Catálogo técnico', 'UX/UI', 'SEO', 'Performance'];

const cards = [
  {
    title: 'Contexto multinacional',
    text: 'LiuGong é um case de presença regional para uma marca global de máquinas, com operação em português, inglês e espanhol para atender diferentes mercados da América Latina.'
  },
  {
    title: 'Catálogo técnico',
    text: 'A arquitetura precisa organizar linhas de produtos como pás carregadeiras, escavadeiras, motoniveladoras, rolos, mini escavadeiras, tratores, empilhadeiras e soluções por segmento.'
  },
  {
    title: 'Experiência multilíngue',
    text: 'O case reúne três bases editoriais em um só portfólio, deixando claro que a entrega envolve consistência visual, conteúdo localizado, navegação técnica e padronização institucional.'
  },
  {
    title: 'Operação e pós-venda',
    text: 'Além da presença institucional, o site oficial organiza produtos, soluções, pós-vendas, serviços, treinamento, telemetria, peças, acessórios, notícias e canais de contato.'
  }
];

const process = [
  ['01', 'Mapa de conteúdo', 'Leitura da operação regional, idiomas, linhas de produtos, soluções, pós-venda e canais institucionais.'],
  ['02', 'Arquitetura multilíngue', 'Organização das bases PT, EN e ES com navegação coerente, hierarquia técnica e consistência visual.'],
  ['03', 'Catálogo e segmentos', 'Estrutura para produtos, máquinas, aplicações por mercado, peças, acessórios, telemetria, serviços e treinamento.'],
  ['04', 'Evolução institucional', 'Base preparada para atualização de produtos, campanhas, notícias, SEO regional e comunicação com distribuidores.' ]
];

export const metadata = getPortfolioMetadata('liugong-br') ?? {
  title: 'Case: LiuGong América Latina | Tehkné Solutions',
  description: 'Case LiuGong: presença digital multinacional e multilíngue para catálogo técnico, produtos, soluções e operação regional.'
};

export default function LiugongCase() {
  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero portfolio-case-hero-rich">
        <div className="case-hero-copy">
          <span className="eyebrow">Multinacional • PT / EN / ES</span>
          <h1>LiuGong América Latina: presença digital multilíngue para catálogo técnico e operação regional.</h1>
          <p>Case multinacional consolidado em uma única página de portfólio, contemplando bases em português, inglês e espanhol, catálogo de máquinas, soluções por segmento, pós-venda e comunicação institucional.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="#contato-form">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href={siteUrl} target="_blank" rel="noreferrer">Abrir site oficial <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="case-visual">
          <div className="portfolio-case-preview portfolio-real-hero-preview amber">
            <div className="case-window-bar"><span /><span /><span /></div>
            <img src={heroShot} alt="Print da hero do site oficial LiuGong América Latina" loading="eager" />
            <div className="portfolio-real-hero-caption"><span>Print do site oficial</span><strong>LiuGong América Latina</strong></div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>PT / EN / ES</strong><span>operação multilíngue</span></div>
        <div><strong>Catálogo técnico</strong><span>tipo de entrega</span></div>
        <div><strong>Máquinas</strong><span>segmento</span></div>
        <div><strong>Site oficial</strong><span>fonte visual</span></div>
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este projeto demonstra para um novo cliente.</h2>
          <p>Este case demonstra capacidade de organizar uma presença digital robusta para operação multinacional, com múltiplos idiomas, grande volume de produtos, soluções por mercado e comunicação técnica consistente.</p>
        </div>
        <div className="case-reading-grid case-reading-grid-balanced">
          {cards.map((card) => <article className="glass-card case-reading-card case-reading-card-balanced" key={card.title}><CheckCircle2 className="card-icon" size={30} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </section>

      <CaseScreens title="LiuGong América Latina" url={siteUrl} />

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Um mapa de execução conectado ao contexto do projeto.</h2></div>
        <div className="case-method-map">{process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <ContactForm page="Case LiuGong América Latina" context="site multinacional multilíngue, catálogo técnico, WordPress, produtos, soluções, pós-venda e operação regional" title="Quer organizar um site multinacional ou catálogo técnico?" description="Use este bloco para iniciar um diagnóstico sobre arquitetura multilíngue, catálogo técnico, WordPress, SEO e evolução digital." />
    </main>
  );
}
