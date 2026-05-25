import type { Metadata } from 'next';
import { ArrowUpRight, FileCheck2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Termos de Uso | Tehkné Solutions',
  description: 'Termos de Uso do site da Tehkné Solutions, incluindo uso do conteúdo, formulários, portfólio, links e limitações.'
};

export default function TermosPage() {
  return (
    <main>
      <section className="section-frame service-detail-hero">
        <div className="service-detail-copy">
          <span className="eyebrow">Uso do site</span>
          <h1>Termos de Uso</h1>
          <p>Estes termos orientam o uso do site da Tehkné Solutions, seus conteúdos, formulários, páginas de portfólio, artigos e links de contato.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/privacidade">Ver privacidade <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="service-detail-panel">
          <div className="service-detail-icon"><FileCheck2 size={32} /></div>
          <strong>Conteúdo informativo e comercial.</strong>
          <p>O site apresenta soluções, método, portfólio, artigos e canais de contato para avaliação de projetos digitais.</p>
        </aside>
      </section>

      <section className="section-frame blog-reading-shell">
        <aside className="blog-toc">
          <span className="eyebrow">Resumo</span>
          <a href="#uso">Uso permitido</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#orcamentos">Orçamentos</a>
          <a href="#responsabilidade">Responsabilidade</a>
        </aside>
        <div className="blog-content">
          <h2 id="uso">Uso permitido</h2>
          <p>O visitante pode navegar, ler conteúdos, solicitar contato, compartilhar links e usar as informações para avaliar contratação, parceria ou estudo técnico.</p>
          <h2 id="portfolio">Portfólio e experiências</h2>
          <p>O portfólio pode incluir projetos próprios, participação técnica e ecossistemas parceiros. Quando necessário, a Tehkné diferencia autoria direta, apoio técnico, sustentação e participação em projetos.</p>
          <h2 id="orcamentos">Diagnósticos e orçamentos</h2>
          <p>Informações comerciais no site são orientativas. Valores, prazos, escopo e entregáveis dependem de diagnóstico, briefing, complexidade, integrações, conteúdo e necessidade de sustentação.</p>
          <h2 id="responsabilidade">Responsabilidade</h2>
          <p>A Tehkné busca manter informações claras e atualizadas, mas o site pode passar por ajustes, evolução visual, novas páginas e mudanças de conteúdo sem aviso prévio.</p>
          <h2>Links externos</h2>
          <p>O site pode apontar para WhatsApp, GitHub, LinkedIn, Vercel, projetos publicados e plataformas externas. A Tehkné não controla políticas ou disponibilidade desses serviços.</p>
          <h2>Contato</h2>
          <p>Dúvidas sobre estes termos podem ser enviadas pelo formulário de contato ou pelo WhatsApp oficial indicado no site.</p>
        </div>
      </section>
    </main>
  );
}
