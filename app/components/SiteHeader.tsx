import { ArrowUpRight } from 'lucide-react';

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
          <strong>{'TEHKNÉ'}</strong>
          <small>SOLUTIONS</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map(([label, url]) => <a href={url} key={label}>{label}</a>)}
      </nav>

      <a className="btn btn-primary coin nav-cta" href="/contato#contato-form">
        <span>Solicitar diagnóstico</span> <ArrowUpRight size={16} />
      </a>

      <details className="mobile-nav-panel">
        <summary className="hamburger-button" aria-label="Abrir menu" title="Abrir menu">
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
        </summary>
        <div className="mobile-nav-links">
          {navItems.map(([label, url]) => <a href={url} key={label}>{label}</a>)}
          <a className="mobile-nav-diagnosis" href="/contato#contato-form">Solicitar diagnóstico <ArrowUpRight size={14} /></a>
        </div>
      </details>
    </header>
  );
}