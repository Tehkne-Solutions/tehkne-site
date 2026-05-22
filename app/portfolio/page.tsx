import { ArrowUpRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';
import PortfolioGrid from './PortfolioGrid';
import { portfolioCases, portfolioStats } from './portfolio-data';

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
            A Tehkné reúne experiência prática em mais de 70 sites WordPress criados ou melhorados, projetos próprios, participação técnica autorizada, plugins, temas, apps, jogos, automações, IA e conteúdos didáticos/comerciais.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#cases">Ver cases <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact portfolio-stats">
        {portfolioStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame portfolio-proof-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Prova de repertório</span>
            <h2>O que um cliente precisa saber antes de contratar.</h2>
            <p>O portfólio não mostra apenas telas bonitas. Ele organiza volume, tipo de entrega, stack, segmento, contexto, participação e capacidade técnica acumulada.</p>
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
            <h2>Uma vitrine organizada por autoria, participação e contexto.</h2>
            <p>Os cards abaixo incluem projetos próprios, produtos internos, laboratórios, participação técnica, histórico profissional e cases autorizados do ecossistema UNTI Digital. Cada card tem uma página individual usando o mesmo template de case.</p>
          </div>
        </div>
        <PortfolioGrid cases={portfolioCases} />
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Regra editorial</span>
          <h2>Experiência real, apresentada com clareza e responsabilidade.</h2>
          <p>A Tehkné trata experiência acumulada como capital técnico institucional, mas separa claramente projetos próprios, participação técnica autorizada, laboratórios internos e ecossistemas onde houve atuação.</p>
          <div className="os-features">
            {['Projetos Tehkné', 'Participação técnica', 'Ecossistemas parceiros', 'Cases UNTI', 'Produtos internos', 'Histórico profissional'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['WordPress', 'Elementor', 'JetEngine', 'Next.js', 'React', 'PHP', 'Python', 'Flutter', 'React Native', 'IA', 'n8n', 'GitHub', 'Vercel', 'Game Design'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <ContactForm
        page="Portfólio"
        context="mais de 70 sites WordPress, projetos próprios, participação técnica, apps, jogos, IA, automações e cases semelhantes aos apresentados no portfólio"
        title="Quer criar algo parecido com os cases da Tehkné?"
        description="Use este bloco para organizar seu interesse e chamar a Tehkné no WhatsApp com contexto de portfólio."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Quer algo parecido?</span>
          <h2>Vamos mapear o tipo de projeto que sua operação precisa.</h2>
          <p>Conte sua demanda e a Tehkné estrutura o caminho: arquitetura, design, desenvolvimento, automação, publicação e evolução.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
