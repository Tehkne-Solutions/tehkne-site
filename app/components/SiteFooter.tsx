import { ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsAppHref, whatsappMessages } from '../contact';

export default function SiteFooter() {
  const href = whatsAppHref(whatsappMessages.diagnostico);

  return (
    <footer className="footer section-frame">
      <div className="footer-brand">
        <a className="brand" href="/" aria-label="Tehkné Solutions">
          <img
            src="/images/tehkne-simbolo-isolado-logo.png"
            alt="Tehkné"
            style={{ height: 56, display: 'block', marginBottom: 8 }}
          />
          <div className="brand-wordmark">
            <strong>TEHKNÉ</strong>
            <small>SOLUTIONS</small>
          </div>
        </a>
        <p>Arquitetura, tecnologia e design para criar soluções digitais com clareza, performance e evolução contínua.</p>
      </div>
      <div>
        <h4>Serviços</h4>
        <a href="/servicos#site-institucional-alta-performance">Sites premium</a>
        <a href="/servicos#plataforma-web-sob-medida">Plataformas web</a>
        <a href="/servicos#integracoes-crm-erp-apis">Integrações</a>
        <a href="/servicos#white-label-tecnico-agencias">White label</a>
      </div>
      <div>
        <h4>Soluções</h4>
        <a href="/solucoes#diagnostico-arquitetura">Arquitetura</a>
        <a href="/solucoes#wordpress-avancado">WordPress</a>
        <a href="/solucoes#ia-automacoes">IA & Automações</a>
        <a href="/solucoes#sustentacao-evolucao">Sustentação</a>
      </div>
      <div>
        <h4>GIP Tehkné OS</h4>
        <a href="/metodo#visao">Visão do sistema</a>
        <a href="/metodo#fluxo-gip">Fluxo GIP</a>
        <a href="/metodo#modulos">Módulos do OS</a>
        <a href="/metodo#camadas">Camadas operacionais</a>
      </div>
      <div>
        <h4>Conteúdo</h4>
        <a href="/blog">Blog Tehkné</a>
        <a href="/blog/o-que-e-arquitetura-de-solucoes">Arquitetura de Soluções</a>
        <a href="/metodo#governanca">Governança</a>
        <a href="/portfolio#cases">Portfólio</a>
      </div>
      <div>
        <h4>Contato</h4>
        <a href={href} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a>
        <a href="/contato#contato-form">Formulário de diagnóstico</a>
        <a href="/contato#localizacao">Campinas, SP • Brasil</a>
        <a href="/sobre">Sobre a Tehkné <ArrowUpRight size={12} /></a>
      </div>
      <div>
        <h4>Legal</h4>
        <a href="/privacidade">Política de Privacidade</a>
        <a href="/termos-de-uso">Termos de Uso</a>
      </div>
    </footer>
  );
}
