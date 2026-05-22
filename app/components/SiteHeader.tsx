import { ArrowUpRight, Sparkles } from 'lucide-react';

const navItems = [
  ['Solucoes', '/solucoes'],
  ['Portfolio', '/portfolio'],
  ['Metodo', '/metodo'],
  ['Tehkne OS', '/tehkne-os'],
  ['Sobre', '/sobre'],
  ['Contato', '/contato']
];

export default function SiteHeader() {
  return (
    <header className="nav-shell nav-shell-premium">
      <a className="brand brand-official" href="/" aria-label="Tehkne Solutions">
        <span className="brand-symbol"><Sparkles size={18} /></span>
        <span className="brand-wordmark"><strong>TEHKNE</strong><small>SOLUTIONS</small></span>
      </a>
      <nav className="main-nav" aria-label="Navegacao principal">
        {navItems.map(([label, url]) => <a href={url} key={label}>{label}</a>)}
      </nav>
      <a className="btn btn-primary coin nav-cta" href="/contato">
        Solicitar diagnostico <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
