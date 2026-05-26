'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Send, X } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsAppHref } from '../contact';

type ContactFormProps = {
  page: string;
  context: string;
  title?: string;
  description?: string;
};

type LeadFormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  servico: string;
  orcamento: string;
  prazo: string;
  mensagem: string;
  website: string;
};

const initialForm: LeadFormState = {
  nome: '',
  empresa: '',
  email: '',
  telefone: '',
  servico: '',
  orcamento: '',
  prazo: '',
  mensagem: '',
  website: ''
};

export default function ContactForm({ page, context, title = 'Vamos transformar sua demanda em plano de execução?', description = 'Preencha o formulário para a Tehkné receber um briefing mais completo. Os dados podem alimentar planilha, CRM e uma proposta mais precisa.' }: ContactFormProps) {
  const [form, setForm] = useState<LeadFormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'saved' | 'error'>('idle');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formStartedAt, setFormStartedAt] = useState('');
  const interactionScoreRef = useRef(0);

  useEffect(() => {
    setFormStartedAt(new Date().toISOString());
  }, []);

  const message = useMemo(() => {
    return [
      `Olá, Tehkné! Vim pela página ${page}.`,
      `Contexto: ${context}.`,
      '',
      `Nome: ${form.nome || 'não informado'}`,
      `Empresa/projeto: ${form.empresa || 'não informado'}`,
      `E-mail: ${form.email || 'não informado'}`,
      `Telefone: ${form.telefone || 'não informado'}`,
      `Serviço: ${form.servico || 'não selecionado'}`,
      `Perfil de investimento: ${form.orcamento || 'não informado'}`,
      `Prazo/urgência: ${form.prazo || 'não informado'}`,
      `Mensagem: ${form.mensagem || 'não informada'}`
    ].join('\n');
  }, [context, form, page]);

  const href = whatsAppHref(message);

  function registerInteraction() {
    interactionScoreRef.current = Math.min(interactionScoreRef.current + 1, 20);
  }

  function updateField(field: keyof LeadFormState, value: string) {
    registerInteraction();
    setForm((current) => ({ ...current, [field]: value }));
  }

  function trackLeadForm(eventName: string) {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: eventName,
      page,
      context,
      service: form.servico,
      investment_profile: form.orcamento,
      deadline: form.prazo,
      page_path: window.location.pathname
    });
    window.gtag?.('event', eventName, {
      event_category: 'lead',
      event_label: form.servico || page,
      page,
      service: form.servico,
      investment_profile: form.orcamento,
      deadline: form.prazo
    });
  }

  function openWhatsApp() {
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.website) {
      setStatus('saved');
      return;
    }

    const startedAt = formStartedAt ? new Date(formStartedAt).getTime() : Date.now();
    const elapsedMs = Math.max(Date.now() - startedAt, 0);

    setStatus('sending');
    setShowConfirmation(false);
    trackLeadForm('lead_form_submit');

    const payload = {
      ...form,
      page,
      context,
      source: 'site-tehkne',
      createdAt: new Date().toISOString(),
      message,
      formStartedAt,
      elapsedMs,
      interactionScore: interactionScoreRef.current
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Lead not saved');
      setStatus('saved');
      setShowConfirmation(true);
      trackLeadForm('lead_form_saved');
      openWhatsApp();
    } catch {
      setStatus('error');
      setShowConfirmation(true);
      trackLeadForm('lead_form_fallback_whatsapp');
      openWhatsApp();
    }
  }

  return (
    <section className="contact-form-section section-frame" id="contato-form">
      <div className="contact-form-copy">
        <span className="eyebrow">Diagnóstico qualificado</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="contact-phone-card">
          <span>WhatsApp principal</span>
          <strong>{WHATSAPP_DISPLAY}</strong>
        </div>
      </div>

      <form className="contact-form-card" onSubmit={handleSubmit} onPointerDown={registerInteraction} onFocus={registerInteraction}>
        <label className="form-honeypot" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => updateField('website', event.target.value)} />
        </label>
        <label>
          Nome
          <input name="nome" value={form.nome} onChange={(event) => updateField('nome', event.target.value)} placeholder="Seu nome" required />
        </label>
        <label>
          Empresa ou projeto
          <input name="empresa" value={form.empresa} onChange={(event) => updateField('empresa', event.target.value)} placeholder="Nome da empresa/projeto" />
        </label>
        <div className="contact-form-row">
          <label>
            E-mail
            <input name="email" type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="email@empresa.com" />
          </label>
          <label>
            WhatsApp
            <input name="telefone" value={form.telefone} onChange={(event) => updateField('telefone', event.target.value)} placeholder="(00) 00000-0000" />
          </label>
        </div>
        <label>
          Serviço de interesse
          <select name="servico" value={form.servico} onChange={(event) => updateField('servico', event.target.value)} required>
            <option value="" disabled>Selecione uma opção</option>
            <option>Landing page estratégica — sob orçamento</option>
            <option>Site institucional premium — sob orçamento</option>
            <option>Plataforma web sob medida</option>
            <option>Integrações CRM, ERP e APIs</option>
            <option>Governança, segurança e sustentação</option>
            <option>White label técnico para agência</option>
            <option>Projeto semelhante ao portfólio</option>
          </select>
        </label>
        <div className="contact-form-row">
          <label>
            Perfil de investimento
            <select name="orcamento" value={form.orcamento} onChange={(event) => updateField('orcamento', event.target.value)}>
              <option value="">Selecione o perfil</option>
              <option>Projeto enxuto com escopo fechado</option>
              <option>Projeto premium com maior profundidade</option>
              <option>Sprint técnica sob diagnóstico</option>
              <option>Sustentação ou projeto avançado sob proposta</option>
              <option>Ainda não sei</option>
            </select>
          </label>
          <label>
            Prazo ou urgência
            <select name="prazo" value={form.prazo} onChange={(event) => updateField('prazo', event.target.value)}>
              <option value="">Selecione</option>
              <option>Urgente — até 7 dias</option>
              <option>15 a 30 dias</option>
              <option>30 a 60 dias</option>
              <option>Sem urgência, quero planejar certo</option>
            </select>
          </label>
        </div>
        <label>
          Mensagem
          <textarea name="mensagem" value={form.mensagem} onChange={(event) => updateField('mensagem', event.target.value)} placeholder="Conte o que você precisa criar, melhorar ou automatizar. Quanto mais contexto, melhor o diagnóstico." rows={5} required />
        </label>
        <button className="btn btn-primary coin" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando briefing...' : 'Enviar briefing e abrir WhatsApp'} <Send size={16} />
        </button>
        <a className="contact-direct-link" href={href} target="_blank" rel="noreferrer">
          Chamar direto no WhatsApp <ArrowUpRight size={14} />
        </a>
        {status === 'saved' ? <p className="form-status success">Briefing enviado. Abrimos o WhatsApp em uma nova guia com sua mensagem preenchida.</p> : null}
        {status === 'error' ? <p className="form-status error">Não conseguimos confirmar o registro agora, mas abrimos o WhatsApp com sua mensagem preenchida.</p> : null}
      </form>

      {showConfirmation ? (
        <div className="contact-confirmation-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-confirmation-title">
          <div className="contact-confirmation-card">
            <button type="button" className="contact-confirmation-close" onClick={() => setShowConfirmation(false)} aria-label="Fechar confirmação">
              <X size={18} />
            </button>
            <div className="contact-confirmation-icon"><CheckCircle2 size={30} /></div>
            <span className="eyebrow">Mensagem preparada</span>
            <h3 id="contact-confirmation-title">Obrigado! Seu briefing foi recebido.</h3>
            <p>Também abrimos o WhatsApp em uma nova guia com a mensagem preenchida. Para concluir, revise e envie por lá.</p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary coin" onClick={openWhatsApp}>Abrir WhatsApp novamente <ArrowUpRight size={16} /></button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmation(false)}>Continuar no site</button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
