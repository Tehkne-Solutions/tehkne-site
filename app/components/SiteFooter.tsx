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
        <a href="/solucoes#diagnostico-arquitetura">Arquitetura</a>
        <a href="/solucoes#sites-plataformas">Web & Mobile</a>
        <a href="/solucoes#wordpress-avancado">WordPress</a>
        <a href="/solucoes#ia-automacoes">IA & Automações</a>
      </div>
      <div>
        <h4>Portfólio</h4>
        <a href="/portfolio#cases">Todos os projetos</a>
        <a href="/portfolio?filtro=tehkne">Projetos Tehkné</a>
        <a href="/portfolio?filtro=participacao">Participação Técnica</a>
        <a href="/portfolio?filtro=ecossistemas">Ecossistemas</a>
      </div>
      <div>
        <h4>Tehkné OS</h4>
        <a href="/metodo#fluxo-gip">Método GIP</a>
        <a href="/tehkne-os#modulos">Módulos</a>
        <a href="/tehkne-os#camadas">Camadas</a>
        <a href="/tehkne-os#inteligencia">Governança</a>
      </div>
      <div>
        <h4>Contato</h4>
        <a href={href} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a>
        <a href="mailto:contato@tehkne.com.br">contato@tehkne.com.br</a>
        <a href="/contato#localizacao">Campinas, SP • Brasil</a>
        <a href="/sobre">Sobre a Tehkné <ArrowUpRight size={12} /></a>
      </div>
    </footer>
  );
}
