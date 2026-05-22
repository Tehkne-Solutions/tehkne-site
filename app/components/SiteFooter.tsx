import { ArrowUpRight, Sparkles } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsAppHref, whatsappMessages } from '../contact';

export default function SiteFooter() {
  const href = whatsAppHref(whatsappMessages.diagnostico);

  return (
    <footer className="footer section-frame">
      <div className="footer-brand">
        <a className="brand" href="/" aria-label="Tehkné Solutions">
          <span className="brand-symbol"><Sparkles size={18} /></span>
          <span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span>
        </a>
        <p>Arquitetura, tecnologia e design para criar soluções digitais com clareza, performance e evolução contínua.</p>
      </div>
      <div>
        <h4>Soluções</h4>
        <a href="/solucoes">Arquitetura</a>
        <a href="/solucoes">Web & Mobile</a>
        <a href="/solucoes">UX & Produto</a>
        <a href="/solucoes">IA & Automações</a>
      </div>
      <div>
        <h4>Portfólio</h4>
        <a href="/portfolio">Todos os projetos</a>
        <a href="/portfolio">Projetos Tehkné</a>
        <a href="/portfolio">Participação Técnica</a>
        <a href="/portfolio">Ecossistemas</a>
      </div>
      <div>
        <h4>Tehkné OS</h4>
        <a href="/metodo">Método GIP</a>
        <a href="/tehkne-os">Automação</a>
        <a href="/tehkne-os">Agentes de IA</a>
        <a href="/tehkne-os">Governança</a>
      </div>
      <div>
        <h4>Contato</h4>
        <a href={href} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a>
        <a href="mailto:contato@tehkne.com.br">contato@tehkne.com.br</a>
        <a href="/contato">Campinas, SP • Brasil</a>
        <a href="/sobre">Sobre a Tehkné <ArrowUpRight size={12} /></a>
      </div>
    </footer>
  );
}
