'use client';

import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const navItems = [
  ['Soluções', '/solucoes'],
  ['Portfólio', '/portfolio'],
  ['Método', '/metodo'],
  ['Blog', '/blog'],
  ['Sobre', '/sobre'],
  ['Contato', '/contato']
];

const productMenu = [
  ['Todos os produtos', '/produtos'],
  ['WP Business Hub', '/produtos/wp-business-hub'],
  ['Delivery WP', '/produtos/delivery-wp'],
  ['Flow WP', '/produtos/flow-wp'],
  ['CRM WP', '/produtos/crm-wp'],
  ['Integrações WP', '/produtos/integracoes-wp']
];

const serviceMenu = [
  ['Sites premium', '/servicos/site-institucional-alta-performance'],
  ['Plataformas web', '/servicos/plataforma-web-sob-medida'],
  ['Integrações', '/servicos/integracoes-crm-erp-apis'],
  ['Soluções IA', '/servicos/solucoes-ia'],
  ['Sustentação', '/servicos/governanca-seguranca-sustentacao'],
  ['White label', '/servicos/white-label-tecnico-agencias']
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const contactHref = '/contato#contato-form';

  return (
    <header className="nav-shell nav-shell-premium">
      <a className="brand brand-official" href="/" aria-label="Tehkné Solutions">
        <span className="brand-symbol">
          <img
            src="/images/tehkne-simbolo-isolado-logo.png"
            alt="Tehkné"
            className="brand-symbol-img"
          />
        </span>
        <span className="brand-wordmark">
          <strong>TEHKNÉ</strong>
          <small>SOLUTIONS</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        <div className="nav-dropdown">
          <a href="/servicos" className="nav-dropdown-trigger">Serviços <ChevronDown size={13} /></a>
          <div className="nav-dropdown-menu" aria-label="Submenu de serviços">
            {serviceMenu.map(([label, url]) => <a key={label} href={url}>{label}</a>)}
          </div>
        </div>
        <div className="nav-dropdown">
          <a href="/produtos" className="nav-dropdown-trigger">Produtos <ChevronDown size={13} /></a>
          <div className="nav-dropdown-menu" aria-label="Submenu de produtos">
            {productMenu.map(([label, url]) => <a key={label} href={url}>{label}</a>) }
          </div>
        </div>
        {navItems.map(([label, url]) => (
          <a key={label} href={url}>{label}</a>
        ))}
      </nav>

      <button
        type="button"
        className={`mobile-menu-toggle${mobileOpen ? ' open' : ''}`}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMobileOpen((current) => !current)}
      >
        <span className="hamburger-line" aria-hidden="true" />
        <span className="hamburger-line" aria-hidden="true" />
        <span className="hamburger-line" aria-hidden="true" />
      </button>

      <a className="btn btn-primary coin nav-cta" href={contactHref}>
        Solicitar diagnóstico <ArrowUpRight size={16} />
      </a>

      <div id="mobile-navigation" className={`mobile-nav${mobileOpen ? ' open' : ''}`} role="menu">
        <a href="/servicos" onClick={() => setMobileOpen(false)}>Serviços</a>
        {serviceMenu.map(([label, url]) => <a key={label} href={url} onClick={() => setMobileOpen(false)}>— {label}</a>)}
        <a href="/produtos" onClick={() => setMobileOpen(false)}>Produtos</a>
        {productMenu.slice(1).map(([label, url]) => <a key={label} href={url} onClick={() => setMobileOpen(false)}>— {label}</a>)}
        {navItems.map(([label, url]) => (
          <a key={label} href={url} onClick={() => setMobileOpen(false)}>{label}</a>
        ))}
        <a className="btn btn-primary coin nav-cta mobile-nav-cta" href={contactHref} onClick={() => setMobileOpen(false)}>
          Solicitar diagnóstico <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
