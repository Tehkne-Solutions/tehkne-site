import { ArrowUpRight, Sparkles } from 'lucide-react';

const navItems = [
  ['Soluções', '/solucoes'],
  ['Portfólio', '/portfolio'],
  ['Método', '/metodo'],
  ['Tehkné OS', '/tehkne-os'],
  ['Contato', '/contato']
];

export default function SiteHeader() {
  return (
    <header className="nav-shell nav-shell-premium">
      <a className="brand brand-official" href="/" aria-label="Tehkné Solutions">
        <span className="brand-symbol"><Sparkles size={18} /></span>
        <span className="brand-wordmark"><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span>
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map(([label, url]) => <a href={url} key={label}>{label}</a>)}
      </nav>
      <a className="btn btn-primary coin nav-cta" href="/contato">
        Solicitar diagnóstico <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
