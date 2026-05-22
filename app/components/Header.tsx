import { ArrowUpRight, Sparkles } from 'lucide-react';
import { whatsAppHref, whatsappMessages } from '../contact';

export default function Header() {
  const diagnosticHref = whatsAppHref(whatsappMessages.diagnostico);

  return (
    <header className="nav-shell">
      <a className="brand" href="/" aria-label="Tehkné Solutions">
        <span className="brand-symbol"><Sparkles size={18} /></span>
        <span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span>
      </a>
      <nav>
        <a href="/solucoes">Soluções</a>
        <a href="/portfolio">Portfólio</a>
        <a href="/metodo">Método</a>
        <a href="/tehkne-os">Tehkné OS</a>
        <a href="/contato">Contato</a>
      </nav>
      <a className="btn btn-primary coin" href={diagnosticHref} target="_blank" rel="noreferrer">
        Solicitar diagnóstico <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
