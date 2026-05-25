'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingContactButton() {
  function handleClick() {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: 'tehkne_floating_contact_click',
      cta_text: 'Contato flutuante',
      cta_href: '/contato#contato-form',
      page_path: window.location.pathname
    });
    window.gtag?.('event', 'floating_contact_click', {
      event_category: 'engagement',
      event_label: 'Contato flutuante',
      page_path: window.location.pathname
    });
  }

  return (
    <a className="floating-contact-button coin" href="/contato#contato-form" aria-label="Abrir formulário de contato Tehkné" onClick={handleClick}>
      <MessageCircle size={22} />
      <span>Briefing</span>
    </a>
  );
}
