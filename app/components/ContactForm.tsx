'use client';

import { FormEvent, useMemo, useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
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
};

const initialForm: LeadFormState = {
  nome: '',
  empresa: '',
  email: '',
  telefone: '',
  servico: '',
  orcamento: '',
  prazo: '',
  mensagem: ''
};

export default function ContactForm({ page, context, title = 'Vamos transformar sua demanda em plano de execução?', description = 'Preencha o formulário para a Tehkné receber um briefing mais completo. Os dados podem alimentar planilha, CRM e uma proposta mais precisa.' }: ContactFormProps) {
  const [form, setForm] = useState<LeadFormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'saved' | 'error'>('idle');

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
      `Orçamento estimado: ${form.orcamento || 'não informado'}`,
      `Prazo/urgência: ${form.prazo || 'não informado'}`,
      `Mensagem: ${form.mensagem || 'não informada'}`
    ].join('\n');
  }, [context, form, page]);

  const href = whatsAppHref(message);

  function updateField(field: keyof LeadFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const payload = {
      ...form,
      page,
      context,
      source: 'site-tehkne',
      createdAt: new Date().toISOString(),
      message
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Lead not saved');
      setStatus('saved');
      window.open(href, '_blank', 'noopener,noreferrer');
    } catch {
      setStatus('error');
      window.open(href, '_blank', 'noopener,noreferrer');
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

      <form className="contact-form-card" onSubmit={handleSubmit}>
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
            <option>Landing page estratégica — a partir de R$ 1.600</option>
            <option>Site institucional premium — a partir de R$ 3.000</option>
            <option>Plataforma web sob medida</option>
            <option>Integrações CRM, ERP e APIs</option>
            <option>Governança, segurança e sustentação</option>
            <option>White label técnico para agência</option>
            <option>Projeto semelhante ao portfólio</option>
          </select>
        </label>
        <div className="contact-form-row">
          <label>
            Orçamento estimado
            <select name="orcamento" value={form.orcamento} onChange={(event) => updateField('orcamento', event.target.value)}>
              <option value="">Selecione uma faixa</option>
              <option>R$ 1.600 a R$ 3.000</option>
              <option>R$ 3.000 a R$ 6.000</option>
              <option>R$ 6.000 a R$ 12.000</option>
              <option>R$ 12.000+</option>
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
        {status === 'saved' ? <p className="form-status success">Briefing enviado. O WhatsApp foi aberto com a mensagem completa.</p> : null}
        {status === 'error' ? <p className="form-status error">Não consegui confirmar o envio agora, mas abri o WhatsApp com o briefing completo.</p> : null}
      </form>
    </section>
  );
}