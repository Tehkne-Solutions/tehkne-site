import { Sparkles } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsAppHref, whatsappMessages } from '../contact';

export default function Footer() {
  const diagnosticHref = whatsAppHref(whatsappMessages.diagnostico);

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
        <a href="/solucoes">Todas as soluções</a>
        <a href="/solucoes#solucoes-lista">Arquitetura e desenvolvimento</a>
        <a href="/solucoes#solucoes-lista">IA e automações</a>
        <a href="/solucoes#solucoes-lista">Sustentação</a>
      </div>
      <div>
        <h4>Portfólio</h4>
        <a href="/portfolio">Todos os projetos</a>
        <a href="/portfolio/tehkne-flow">Tehkné Flow</a>
        <a href="/portfolio/vacina-one">Vacina One</a>
        <a href="/portfolio/unti-digital">UNTI Digital</a>
      </div>
      <div>
        <h4>Tehkné OS</h4>
        <a href="/metodo">Método GIP</a>
        <a href="/tehkne-os">Tehkné OS</a>
        <a href="/tehkne-os#agentes">Agentes de IA</a>
        <a href="/tehkne-os#governanca">Governança</a>
      </div>
      <div>
        <h4>Contato</h4>
        <a href="/contato">Página de contato</a>
        <a href={diagnosticHref} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a>
        <a href="mailto:contato@tehkne.com.br">contato@tehkne.com.br</a>
        <a>Campinas, SP • Brasil</a>
      </div>
    </footer>
  );
}
