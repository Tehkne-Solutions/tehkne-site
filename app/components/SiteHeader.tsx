import { ArrowUpRight, Sparkles } from 'lucide-react';

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
        <span className="brand-symbol"><Sparkles size={18} /></span>
        <span className="brand-wordmark"><strong>{'TEHKN\u00c9'}</strong><small>SOLUTIONS</small></span>
      </a>
      <nav className="main-nav" aria-label="Navega\u00e7\u00e3o principal">
        {navItems.map(([label, url]) => <a href={url} key={label}>{label}</a>)}
      </nav>
      <a className="btn btn-primary coin nav-cta" href="/contato#contato-form">
        {'Solicitar diagn\u00f3stico'} <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
