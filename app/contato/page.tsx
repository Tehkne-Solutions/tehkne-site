import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { WHATSAPP_DISPLAY, whatsAppHref, whatsappMessages } from '../contact';

const contactCards = [
  {
    icon: MessageCircle,
    title: 'WhatsApp principal',
    text: WHATSAPP_DISPLAY,
    detail: 'Canal direto para diagnóstico, dúvidas e início de projeto.'
  },
  {
    icon: Mail,
    title: 'E-mail institucional',
    text: 'contato@tehkne.com.br',
    detail: 'Ideal para propostas, briefings, documentos e encaminhamentos formais.'
  },
  {
    icon: MapPin,
    title: 'Base de atuação',
    text: 'Campinas, SP • Brasil',
    detail: 'Atuação remota, híbrida e em parceria com empresas e agências.'
  }
];

const intents = [
  'Criar um site institucional premium',
  'Transformar operação manual em sistema',
  'Evoluir WordPress, performance ou integrações',
  'Planejar IA, agentes ou automações',
  'Organizar produto digital com método GIP',
  'Contratar braço técnico para agência ou empresa'
];

export const metadata = {
  title: 'Contato | Tehkné Solutions',
  description: 'Fale com a Tehkné Solutions para diagnóstico técnico, arquitetura de soluções, desenvolvimento web, WordPress avançado, IA, automações e sustentação.'
};

export default function ContatoPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.contato);

  return (
    <main>
      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">Contato e diagnóstico</span>
          <h1>Vamos entender sua demanda e transformar em plano técnico.</h1>
          <p>Conte o que você precisa criar, melhorar, automatizar ou sustentar. A Tehkné organiza o caminho entre intenção, arquitetura, execução e evolução.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Chamar no WhatsApp <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="mailto:contato@tehkne.com.br">Enviar e-mail <Mail size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>01</strong><span>diagnóstico inicial para entender contexto</span></div>
        <div><strong>GIP</strong><span>método para transformar demanda em plano</span></div>
        <div><strong>24h</strong><span>referência interna para primeira triagem</span></div>
        <div><strong>BR</strong><span>atuação remota e presencial sob demanda</span></div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Canais</span>
          <h2>Escolha o melhor ponto de entrada.</h2>
          <p>O WhatsApp é o caminho mais rápido para iniciar uma conversa contextualizada. O e-mail funciona melhor para materiais, briefings e arquivos.</p>
        </div>
        <div className="service-grid solutions-grid">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const href = card.title.includes('WhatsApp') ? pageWhatsApp : card.title.includes('E-mail') ? 'mailto:contato@tehkne.com.br' : '/sobre';
            return (
              <article className="glass-card service-card solution-card" key={card.title}>
                <Icon className="card-icon" size={34} />
                <h3>{card.title}</h3>
                <p><strong>{card.text}</strong></p>
                <p>{card.detail}</p>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>Abrir canal <ArrowUpRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Como chegar com clareza</span>
          <h2>Quanto melhor o contexto, mais preciso fica o diagnóstico.</h2>
          <p>Você não precisa ter tudo definido. Basta trazer intenção, problema, objetivo ou referência. A Tehkné ajuda a estruturar o restante.</p>
          <div className="os-features">
            {['Objetivo do projeto', 'Público ou operação', 'Referências visuais', 'Prazo desejado', 'Stack atual', 'Principais dores'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {intents.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <ContactForm
        page="Contato"
        context="início de conversa para diagnóstico técnico, arquitetura, desenvolvimento, WordPress, IA, automações ou sustentação"
        title="Organize sua mensagem e fale com a Tehkné."
        description="O botão abre uma conversa no WhatsApp com contexto da página de Contato. Depois podemos evoluir este bloco para um formulário dinâmico client-side."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Próximo passo</span>
          <h2>Vamos sair da ideia solta para o plano de execução.</h2>
          <p>Se existe uma demanda digital travada, uma operação manual demais ou uma ideia pronta para virar produto, este é o ponto de partida.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Iniciar conversa <Send size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <Phone size={16} /></a>
        </div>
      </section>
    </main>
  );
}
