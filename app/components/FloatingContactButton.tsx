'use client';

import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import styles from './FloatingContactButton.module.css';

type ChatStep = 'intro' | 'name' | 'email' | 'phone' | 'department' | 'done';

type ChatForm = {
  name: string;
  email: string;
  phone: string;
};

type WhatsAppDepartment = {
  id: string;
  label: string;
  subtitle: string;
  phone: string;
};

const CHAT_STEP_ORDER: ChatStep[] = ['intro', 'name', 'email', 'phone', 'department', 'done'];
const AUTO_OPEN_STORAGE_KEY = 'tehkne-whatsapp-chat-opened';
const TYPING_DELAY_MS = 760;
const DEFAULT_WHATSAPP_TEXT = 'Olá! Quero atendimento da Tehkné Solutions.';

const fallbackDepartments: WhatsAppDepartment[] = [
  {
    id: 'geral',
    label: 'Atendimento Tehkné Solutions',
    subtitle: 'Soluções digitais, sistemas, sites, IA e automações',
    phone: '5519998930846'
  }
];

function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('55')) return digits;
  return `55${digits}`;
}

function cleanDigits(value: string, maxLength: number): string {
  return value.replace(/\D/g, '').slice(0, maxLength);
}

function formatPhoneInput(value: string): string {
  const digits = cleanDigits(value, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function createWhatsAppHref(phone: string, message = DEFAULT_WHATSAPP_TEXT): string {
  const normalizedPhone = normalizePhone(phone);
  if (!normalizedPhone) return '';
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

function isAgentStepVisible(current: ChatStep | null, target: ChatStep): boolean {
  if (!current) return false;
  return CHAT_STEP_ORDER.indexOf(current) >= CHAT_STEP_ORDER.indexOf(target);
}

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [departments, setDepartments] = useState<WhatsAppDepartment[]>(fallbackDepartments);
  const [loading, setLoading] = useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('geral');
  const [step, setStep] = useState<ChatStep>('intro');
  const [visibleAgentStep, setVisibleAgentStep] = useState<ChatStep | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [chatForm, setChatForm] = useState<ChatForm>({ name: '', email: '', phone: '' });
  const [currentValue, setCurrentValue] = useState('');
  const [fieldError, setFieldError] = useState('');
  const hasLoadedDepartmentsRef = useRef(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const sortedDepartments = useMemo(
    () => [...departments].sort((a, b) => a.label.localeCompare(b.label, 'pt-BR')),
    [departments]
  );

  const selectedDepartment = sortedDepartments.find((department) => department.id === selectedDepartmentId) ?? sortedDepartments[0];
  const canSubmitTextStep = step === 'intro' || step === 'name' || step === 'email' || step === 'phone';
  const isCurrentStepReady = visibleAgentStep === step && !isTyping;

  useEffect(() => {
    if (!isOpen || hasLoadedDepartmentsRef.current) return;

    const controller = new AbortController();
    hasLoadedDepartmentsRef.current = true;
    setLoading(true);

    fetch('/api/whatsapp-atendimento', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : { items: fallbackDepartments }))
      .then((payload: { items?: WhatsAppDepartment[] } | WhatsAppDepartment[]) => {
        const items = Array.isArray(payload) ? payload : payload.items;
        if (Array.isArray(items) && items.length > 0) {
          setDepartments(items);
          setSelectedDepartmentId(items[0].id);
        }
      })
      .catch(() => {
        setDepartments(fallbackDepartments);
        hasLoadedDepartmentsRef.current = false;
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem(AUTO_OPEN_STORAGE_KEY) === 'true') return;

    const timerId = window.setTimeout(() => {
      window.sessionStorage.setItem(AUTO_OPEN_STORAGE_KEY, 'true');
      setIsOpen(true);
      trackEvent('tehkne_whatsapp_auto_open', 'WhatsApp atendimento auto open');
    }, 8500);

    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    setCurrentValue('');
    setFieldError('');
  }, [step]);

  useEffect(() => {
    if (!isOpen || step === 'done' || visibleAgentStep === step) return;

    setIsTyping(true);
    const timerId = window.setTimeout(() => {
      setVisibleAgentStep(step);
      setIsTyping(false);
    }, TYPING_DELAY_MS);

    return () => window.clearTimeout(timerId);
  }, [isOpen, step, visibleAgentStep]);

  useEffect(() => {
    if (!isOpen) return;
    const chatBody = chatBodyRef.current;
    if (!chatBody) return;
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });
  }, [chatForm.email, chatForm.name, chatForm.phone, isOpen, isTyping, visibleAgentStep]);

  function trackEvent(event: string, label: string, extra?: Record<string, unknown>) {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event,
      cta_text: label,
      page_path: window.location.pathname,
      ...extra
    });

    window.gtag?.('event', event, {
      event_category: 'engagement',
      event_label: label,
      page_path: window.location.pathname,
      ...extra
    });
  }

  function resetChat() {
    setStep('intro');
    setVisibleAgentStep(null);
    setIsTyping(false);
    setChatForm({ name: '', email: '', phone: '' });
    setCurrentValue('');
    setFieldError('');
  }

  function openChat() {
    if (!isOpen && step === 'done') resetChat();
    setIsOpen((current) => !current);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(AUTO_OPEN_STORAGE_KEY, 'true');
    }
    trackEvent('tehkne_floating_whatsapp_click', 'WhatsApp atendimento flutuante', { open: !isOpen });
  }

  function submitCurrentStep() {
    const value = currentValue.trim();

    if (step === 'intro') {
      setStep('name');
      return;
    }

    if (step === 'name') {
      if (!value) {
        setFieldError('Digite seu nome para continuar.');
        return;
      }
      setChatForm((current) => ({ ...current, name: value }));
      setStep('email');
      return;
    }

    if (step === 'email') {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        setFieldError('Digite um e-mail válido.');
        return;
      }
      setChatForm((current) => ({ ...current, email: value }));
      setStep('phone');
      return;
    }

    if (step === 'phone') {
      const phoneDigits = cleanDigits(value, 11);
      if (phoneDigits.length < 10) {
        setFieldError('Digite um telefone válido.');
        return;
      }
      setChatForm((current) => ({ ...current, phone: formatPhoneInput(value) }));
      setStep('department');
    }
  }

  function handleInputChange(value: string) {
    setFieldError('');
    setCurrentValue(step === 'phone' ? formatPhoneInput(value) : value);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitCurrentStep();
  }

  function startWhatsApp() {
    if (!selectedDepartment?.phone) {
      setFieldError('WhatsApp ainda não configurado. Defina TEHKNE_WHATSAPP_PHONE na Vercel.');
      return;
    }

    const pageText = typeof window !== 'undefined' ? `\nPágina: ${window.location.href}` : '';
    const message = [
      'Olá! Vim pelo chat do site da Tehkné Solutions e quero atendimento.',
      `Nome: ${chatForm.name}`,
      `E-mail: ${chatForm.email}`,
      `Telefone: ${chatForm.phone}`,
      `Assunto: ${selectedDepartment.label}`,
      `Contexto: ${selectedDepartment.subtitle}${pageText}`
    ].join('\n');

    const href = createWhatsAppHref(selectedDepartment.phone, message);
    if (!href) {
      setFieldError('Número de WhatsApp inválido. Verifique a configuração do atendimento.');
      return;
    }

    trackEvent('tehkne_whatsapp_start', 'Ir para WhatsApp', {
      department: selectedDepartment.id
    });

    window.open(href, '_blank', 'noopener,noreferrer');
    setStep('done');
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={styles.launcher}
        aria-label="Abrir chat de atendimento Tehkné Solutions pelo WhatsApp"
        title="Atendimento Tehkné Solutions"
        onClick={openChat}
      >
        <MessageCircle size={24} aria-hidden="true" />
        <span>WhatsApp</span>
      </button>

      {isOpen ? (
        <section
          className={styles.panel}
          aria-modal="false"
          role="dialog"
          aria-labelledby="tehkne-whatsapp-title"
        >
          <button type="button" className={styles.closeButton} aria-label="Fechar chat" onClick={() => setIsOpen(false)}>
            <X size={16} aria-hidden="true" />
          </button>

          <header className={styles.header}>
            <div className={styles.headerIcon}>
              <MessageCircle size={24} aria-hidden="true" />
            </div>
            <div>
              <h2 id="tehkne-whatsapp-title">Atendimento Tehkné Solutions</h2>
              <p>Online agora</p>
            </div>
          </header>

          <div className={styles.chatBody} ref={chatBodyRef}>
            {isAgentStepVisible(visibleAgentStep, 'intro') ? (
              <p className={styles.agentBubble}>
                Olá! Sou o canal rápido da Tehkné. Posso te direcionar para soluções digitais, sistemas, sites, IA ou suporte.
              </p>
            ) : null}

            {step !== 'intro' ? <p className={styles.userBubble}>Quero atendimento</p> : null}

            {isAgentStepVisible(visibleAgentStep, 'name') ? (
              <p className={styles.agentBubble}>Perfeito. Primeiro, qual é o seu nome?</p>
            ) : null}
            {chatForm.name ? <p className={styles.userBubble}>{chatForm.name}</p> : null}

            {isAgentStepVisible(visibleAgentStep, 'email') ? (
              <p className={styles.agentBubble}>Agora me informe seu melhor e-mail.</p>
            ) : null}
            {chatForm.email ? <p className={styles.userBubble}>{chatForm.email}</p> : null}

            {isAgentStepVisible(visibleAgentStep, 'phone') ? (
              <p className={styles.agentBubble}>Legal. Qual telefone/WhatsApp podemos usar para retorno?</p>
            ) : null}
            {chatForm.phone ? <p className={styles.userBubble}>{chatForm.phone}</p> : null}

            {isAgentStepVisible(visibleAgentStep, 'department') ? (
              <p className={styles.agentBubble}>Por último, escolha o assunto para direcionarmos a conversa com o especialista certo.</p>
            ) : null}

            {isTyping ? (
              <p className={styles.typingBubble} aria-label="Atendente digitando">
                <span />
                <span />
                <span />
              </p>
            ) : null}
          </div>

          <div className={styles.composer}>
            {loading ? <p className={styles.helperText}>Carregando atendimento...</p> : null}

            {canSubmitTextStep && isCurrentStepReady ? (
              <div className={styles.textStep}>
                {step === 'intro' ? (
                  <button type="button" className={styles.primaryButton} onClick={submitCurrentStep}>
                    Começar atendimento
                  </button>
                ) : (
                  <>
                    <input
                      className={styles.input}
                      type={step === 'email' ? 'email' : 'text'}
                      inputMode={step === 'phone' ? 'numeric' : 'text'}
                      placeholder={step === 'name' ? 'Digite seu nome' : step === 'email' ? 'Digite seu e-mail' : 'Digite seu telefone'}
                      value={currentValue}
                      onChange={(event) => handleInputChange(event.target.value)}
                      onKeyDown={handleInputKeyDown}
                    />
                    <button type="button" className={styles.sendButton} aria-label="Enviar resposta" onClick={submitCurrentStep}>
                      <Send size={18} aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>
            ) : null}

            {step === 'department' && isCurrentStepReady ? (
              <>
                <label>
                  <span className={styles.srOnly}>Assunto do atendimento</span>
                  <select
                    className={styles.select}
                    value={selectedDepartmentId}
                    onChange={(event) => setSelectedDepartmentId(event.target.value)}
                    disabled={loading || sortedDepartments.length === 0}
                  >
                    {sortedDepartments.map((department) => (
                      <option key={department.id} value={department.id}>
                        {department.label}
                      </option>
                    ))}
                  </select>
                </label>

                {selectedDepartment ? <p className={styles.helperText}>{selectedDepartment.subtitle}</p> : null}

                <button type="button" className={styles.primaryButton} onClick={startWhatsApp}>
                  Ir para o WhatsApp
                </button>
              </>
            ) : null}

            {fieldError ? <p className={styles.errorText}>{fieldError}</p> : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
