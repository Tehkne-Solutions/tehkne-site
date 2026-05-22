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
        <a href="/solucoes#cases-solucoes">Todas as soluções</a>
        <a href="/solucoes#diagnostico-arquitetura">Diagnóstico e arquitetura</a>
        <a href="/solucoes#sites-plataformas">Sites e plataformas</a>
        <a href="/solucoes#wordpress-avancado">WordPress avançado</a>
        <a href="/solucoes#ia-automacoes">IA e automações</a>
        <a href="/solucoes#sustentacao-evolucao">Sustentação</a>
      </div>
      <div>
        <h4>Portfólio</h4>
        <a href="/portfolio#cases">Todos os projetos</a>
        <a href="/portfolio/tehkne-flow">Tehkné Flow</a>
        <a href="/portfolio/vacina-one">Vacina One</a>
        <a href="/portfolio/unti-digital">UNTI Digital</a>
        <a href="/portfolio#contato-form">Quero um case parecido</a>
      </div>
      <div>
        <h4>Tehkné OS</h4>
        <a href="/metodo#fluxo-gip">Método GIP</a>
        <a href="/tehkne-os#modulos">Módulos do OS</a>
        <a href="/tehkne-os#camadas">Camadas operacionais</a>
        <a href="/tehkne-os#aplicacoes">Para quem serve</a>
        <a href="/tehkne-os#inteligencia">Inteligência operacional</a>
      </div>
      <div>
        <h4>Contato</h4>
        <a href="/contato#contato-form">Página de contato</a>
        <a href={diagnosticHref} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a>
        <a href="mailto:contato@tehkne.com.br">contato@tehkne.com.br</a>
        <a href="/contato#localizacao">Campinas, SP • Brasil</a>
      </div>
    </footer>
  );
}
