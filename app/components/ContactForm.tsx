import { ArrowUpRight, Send } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsAppHref } from '../contact';

type ContactFormProps = {
  page: string;
  context: string;
  title?: string;
  description?: string;
};

export default function ContactForm({ page, context, title = 'Vamos transformar sua demanda em plano de execução?', description = 'Use este bloco para organizar sua mensagem antes de chamar a Tehkné no WhatsApp. O botão já abre uma conversa contextualizada para esta página.' }: ContactFormProps) {
  const href = whatsAppHref(`Olá, Tehkné! Vim pela página ${page}. Contexto: ${context}. Quero conversar para entender o melhor caminho técnico e comercial.`);

  return (
    <section className="contact-form-section section-frame" id="contato-form">
      <div className="contact-form-copy">
        <span className="eyebrow">Contato direto</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="contact-phone-card">
          <span>WhatsApp principal</span>
          <strong>{WHATSAPP_DISPLAY}</strong>
        </div>
      </div>

      <form className="contact-form-card" action={href}>
        <label>
          Nome
          <input name="nome" placeholder="Seu nome" />
        </label>
        <label>
          Empresa ou projeto
          <input name="empresa" placeholder="Nome da empresa/projeto" />
        </label>
        <label>
          Serviço de interesse
          <select name="servico" defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            <option>Arquitetura de Soluções</option>
            <option>Desenvolvimento Web & Mobile</option>
            <option>WordPress Avançado</option>
            <option>Design & UX de Produto</option>
            <option>IA & Automações</option>
            <option>Sustentação & Evolução</option>
            <option>Projeto semelhante ao portfólio</option>
          </select>
        </label>
        <label>
          Mensagem
          <textarea name="mensagem" placeholder="Conte rapidamente o que você precisa criar, melhorar ou automatizar." rows={5} />
        </label>
        <a className="btn btn-primary coin" href={href} target="_blank" rel="noreferrer">
          Enviar pelo WhatsApp <Send size={16} />
        </a>
        <a className="contact-direct-link" href={href} target="_blank" rel="noreferrer">
          Chamar direto no WhatsApp <ArrowUpRight size={14} />
        </a>
      </form>
    </section>
  );
}
