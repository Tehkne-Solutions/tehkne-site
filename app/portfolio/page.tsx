import { ArrowUpRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';
import PortfolioGrid from './PortfolioGrid';
import { portfolioCases, portfolioStats } from './portfolio-data';
import { savanaProjectCases } from './savana-project-cases';
import { memeProjectCases } from './meme-project-cases';

const allPortfolioCases = [...portfolioCases, ...savanaProjectCases, ...memeProjectCases];
const allPortfolioStats = [
  portfolioStats[0],
  portfolioStats[1],
  [`${allPortfolioCases.length}+`, 'cases e experiências catalogadas'],
  portfolioStats[3]
];

export const metadata = {
  title: 'Portfólio | Tehkné Solutions',
  description: 'Mais de 7 anos de experiência em desenvolvimento, design, WordPress, Next.js, apps, jogos, IA, automações, conteúdo e sustentação técnica.'
};

export default function PortfolioPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.portfolio);

  return (
    <main>
      <section className="section-frame solutions-hero portfolio-hero-pro">
        <div className="section-heading">
          <span className="eyebrow">Portfólio e experiências</span>
          <h1>Mais de 7 anos transformando sites, sistemas, apps, conteúdos e operações digitais.</h1>
          <p>
            A Tehkné reúne experiência prática em mais de 70 sites WordPress criados ou melhorados, projetos próprios, cases de agência, plugins, temas, apps, jogos, automações, IA e conteúdos didáticos/comerciais.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#cases">Ver cases <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact portfolio-stats">
        {allPortfolioStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame portfolio-proof-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Prova de repertório</span>
            <h2>O que um cliente precisa saber antes de contratar.</h2>
            <p>O portfólio não mostra apenas telas bonitas. Ele organiza volume, tipo de entrega, stack, segmento, contexto, execução e capacidade técnica acumulada.</p>
          </div>
        </div>
        <div className="solutions-proof-grid portfolio-proof-grid">
          <article><h3>70+ sites WordPress</h3><p>Criação, melhoria, manutenção, performance, Elementor, JetEngine, temas, plugins, filtros, catálogos e páginas comerciais.</p></article>
          <article><h3>Produto e código</h3><p>Projetos em Next.js, React, PHP, APIs, automações, repositórios próprios, dashboards e produtos internos.</p></article>
          <article><h3>Apps e jogos</h3><p>Experiências com React Native, Flutter, educação digital, game design, lore, sistemas vivos e produtos interativos.</p></article>
          <article><h3>Conteúdo e estratégia</h3><p>Criação de materiais didáticos, comerciais, documentação, apresentações, copy, arquitetura de informação e vendas.</p></article>
        </div>
      </section>

      <section id="cases" className="section-frame">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Inventário Tehkné Site</span>
            <h2>Uma vitrine organizada por entrega, stack e contexto.</h2>
            <p>Os cards abaixo incluem produtos próprios, sites, sistemas, campanhas, clientes atendidos em agência, ecossistemas digitais, cases UNTI, projetos Savana, cases Meme Digital e laboratórios Tehkné. Cada card entra como case navegável com a mesma estrutura de apresentação.</p>
          </div>
        </div>
        <PortfolioGrid cases={allPortfolioCases} />
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Regra editorial</span>
          <h2>Experiência real, apresentada como repertório técnico da Tehkné.</h2>
          <p>A Tehkné apresenta os cases pelo valor técnico, visual e estratégico entregue: sites, campanhas, sistemas, produtos, conteúdo, automações, WordPress, Next.js e sustentação.</p>
          <div className="os-features">
            {['Projetos Tehkné', 'Sites e sistemas', 'Agências e ecossistemas', 'Cases UNTI', 'Cases Savana', 'Cases Meme Digital', 'Produtos internos'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['WordPress', 'Elementor', 'JetEngine', 'Next.js', 'React', 'PHP', 'Python', 'Flutter', 'React Native', 'IA', 'n8n', 'GitHub', 'Vercel', 'Game Design'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <ContactForm
        page="Portfólio"
        context="mais de 70 sites WordPress, projetos próprios, cases de agência, apps, jogos, IA, automações e cases semelhantes aos apresentados no portfólio"
        title="Quer criar algo parecido com os cases da Tehkné?"
        description="Use este bloco para organizar seu interesse e chamar a Tehkné no WhatsApp com contexto de portfólio."
      />
    </main>
  );
}
