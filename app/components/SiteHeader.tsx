import { ArrowUpRight } from 'lucide-react';

const navItems = [
  ['Serviços', '/servicos'],
  ['Solu\u00e7\u00f5es', '/solucoes'],
  ['Portf\u00f3lio', '/portfolio'],
  ['M\u00e9todo', '/metodo'],
  ['Tehkn\u00e9 OS', '/tehkne-os'],
  ['Sobre', '/sobre'],
  ['Contato', '/contato']
];

export default function SiteHeader() {
  return (
    <header className="nav-shell nav-shell-premium">
      <a className="brand brand-official" href="/" aria-label="Tehkn\u00e9 Solutions">
        <span className="brand-symbol">
          <img
            src="/images/tehkne-simbolo-isolado-logo.png"
            alt="Tehkn\u00e9"
            className="brand-symbol-img"
          />
        </span>
        <span className="brand-wordmark">
          <strong>{'TEHKN\u00c9'}</strong>
          <small>SOLUTIONS</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Navega\u00e7\u00e3o principal">
        {navItems.map(([label, url]) => <a href={url} key={label}>{label}</a>)}
      </nav>

      <a className="btn btn-primary coin nav-cta" href="/contato#contato-form">
        <span>Solicitar diagn\u00f3stico</span> <ArrowUpRight size={16} />
      </a>

      <details className="mobile-nav-panel">
        <summary className="hamburger-button" aria-label="Abrir menu" title="Abrir menu">
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
        </summary>
        <div className="mobile-nav-links">
          {navItems.map(([label, url]) => <a href={url} key={label}>{label}</a>)}
          <a className="mobile-nav-diagnosis" href="/contato#contato-form">Solicitar diagn\u00f3stico <ArrowUpRight size={14} /></a>
        </div>
      </details>
    </header>
  );
}
