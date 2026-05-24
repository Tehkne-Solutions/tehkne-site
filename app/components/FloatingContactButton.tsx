import { MessageCircle } from 'lucide-react';

export default function FloatingContactButton() {
  return (
    <a
      className="floating-contact-button coin"
      href="/contato#contato-form"
      aria-label="Abrir formulário de contato da Tehkné"
    >
      <MessageCircle size={22} />
      <span>Contato</span>
    </a>
  );
}
