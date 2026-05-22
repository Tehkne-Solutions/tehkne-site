'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  ['Serviços', '/servicos'],
  ['Soluções', '/solucoes'],
  ['Portfólio', '/portfolio'],
  ['Método', '/metodo'],
  ['Tehkné OS', '/tehkne-os'],
  ['Sobre', '/sobre'],
  ['Contato', '/contato']
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
        {navItems.map(([label, url]) => (
          <a key={label} href={url}>{label}</a>
        ))}
      </nav>

      <button
        type="button"
        className="mobile-menu-toggle"
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMobileOpen((current) => !current)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <a className="btn btn-primary coin nav-cta" href={contactHref}>
        Solicitar diagnóstico <ArrowUpRight size={16} />
      </a>

      <div id="mobile-navigation" className={`mobile-nav${mobileOpen ? ' open' : ''}`} role="menu">
        {navItems.map(([label, url]) => (
          <a key={label} href={url} onClick={() => setMobileOpen(false)}>{label}</a>
        ))}
        <a className="btn btn-primary coin nav-cta" href={contactHref} onClick={() => setMobileOpen(false)}>
          Solicitar diagnóstico <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}