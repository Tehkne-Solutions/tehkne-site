import { ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsAppHref, whatsappMessages } from '../contact';

export default function SiteFooter() {
  const href = whatsAppHref(whatsappMessages.diagnostico);

  return (
    <footer className="footer section-frame">
      <div className="footer-brand">
        <a className="brand footer-brand-logo" href="/" aria-label="Tehkné Solutions">
          <img
            src="/images/tehkne-simbolo-isolado-logo.png"
            alt="Tehkné"
            className="footer-logo-img"
          />
          <div className="brand-wordmark">
            <strong>TEHKNÉ</strong>
            <small>SOLUTIONS</small>
          </div>
        </a>
        <p>Produtos digitais, software sob medida e WordPress avançado para transformar sites, vendas e operações em sistemas evolutivos.</p>
      </div>
      <div>
        <h4>Produtos</h4>
        <a href="/produtos">Hub de Produtos</a>
        <a href="/produtos/wp-business-hub">WP Business Hub</a>
        <a href="/produtos/flow-wp">Tehkné Flow WP</a>
        <a href="/produtos/crm-wp">Tehkné CRM WP</a>
        <a href="/produtos/integracoes-wp">Integrações WP</a>
      </div>
      <div>
        <h4>Soluções</h4>
        <a href="/servicos/site-institucional-alta-performance">Site premium</a>
        <a href="/servicos/plataforma-web-sob-medida">Sistema sob medida</a>
        <a href="/servicos/integracoes-crm-erp-apis">CRM, ERP e APIs</a>
        <a href="/servicos/governanca-seguranca-sustentacao">Sustentação técnica</a>
        <a href="/servicos/white-label-tecnico-agencias">White label para agências</a>
      </div>
      <div>
        <h4>Decisão</h4>
        <a href="/portfolio#cases">Ver cases</a>
        <a href="/metodo#fluxo-gip">Como entregamos</a>
        <a href="/blog/o-que-e-arquitetura-de-solucoes">Arquitetura de Soluções</a>
        <a href="/blog">Blog Tehkné</a>
      </div>
      <div>
        <h4>Empresa</h4>
        <a href="/sobre">Sobre a Tehkné</a>
        <a href="/metodo">Método GIP Tehkné</a>
        <a href="/contato#localizacao">Campinas, SP • Brasil</a>
        <a href={href} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a>
      </div>
      <div>
        <h4>Começar</h4>
        <a href="/contato#contato-form">Solicitar diagnóstico</a>
        <a href="/produtos/wp-business-hub">Quero o WP Business Hub</a>
        <a href="/produtos/crm-wp">Quero organizar leads</a>
        <a href="/produtos/flow-wp">Quero organizar tarefas</a>
      </div>
      <div>
        <h4>Legal</h4>
        <a href="/privacidade">Política de Privacidade</a>
        <a href="/termos-de-uso">Termos de Uso</a>
      </div>
    </footer>
  );
}
