import type { Metadata } from 'next';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Tehkné Solutions',
  description: 'Política de Privacidade da Tehkné Solutions sobre coleta de leads, cookies, analytics, contato comercial e tratamento de dados.'
};

export default function PrivacidadePage() {
  return (
    <main>
      <section className="section-frame service-detail-hero">
        <div className="service-detail-copy">
          <span className="eyebrow">Privacidade e LGPD</span>
          <h1>Política de Privacidade</h1>
          <p>A Tehkné Solutions respeita a privacidade dos visitantes e clientes. Esta página explica, de forma objetiva, como coletamos, usamos e protegemos informações enviadas pelo site.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Falar com a Tehkné <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/termos-de-uso">Ver termos de uso <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="service-detail-panel">
          <div className="service-detail-icon"><ShieldCheck size={32} /></div>
          <strong>Dados tratados com finalidade clara.</strong>
          <p>Coletamos apenas informações necessárias para responder contatos, qualificar briefing, medir desempenho do site e melhorar a experiência.</p>
        </aside>
      </section>

      <section className="section-frame blog-reading-shell">
        <aside className="blog-toc">
          <span className="eyebrow">Resumo</span>
          <a href="#dados">Dados coletados</a>
          <a href="#uso">Como usamos</a>
          <a href="#cookies">Cookies</a>
          <a href="#direitos">Seus direitos</a>
        </aside>
        <div className="blog-content">
          <h2 id="dados">Dados coletados</h2>
          <p>Podemos coletar nome, empresa, e-mail, telefone, serviço de interesse, perfil de investimento, prazo, mensagem enviada, página de origem, data de envio, navegador e referência de acesso.</p>
          <h2 id="uso">Como usamos as informações</h2>
          <p>Usamos os dados para responder solicitações, preparar diagnósticos, enviar mensagens comerciais relacionadas ao pedido, melhorar páginas, medir cliques em CTAs e entender quais canais geram oportunidades.</p>
          <h2 id="cookies">Cookies e métricas</h2>
          <p>O site pode usar cookies necessários para funcionamento e cookies opcionais de analytics/marketing quando aceitos pelo visitante. O usuário pode gerenciar preferências pelo botão de cadeado no canto inferior esquerdo.</p>
          <h2 id="direitos">Direitos do titular</h2>
          <p>Você pode solicitar acesso, correção, exclusão ou revisão do tratamento dos seus dados entrando em contato pelo formulário ou WhatsApp oficial da Tehkné.</p>
          <h2>Compartilhamento</h2>
          <p>Dados podem ser enviados a ferramentas de formulário, CRM, automação, analytics, hospedagem e mensageria apenas quando necessário para operação, atendimento e mensuração.</p>
          <h2>Atualizações</h2>
          <p>Esta política pode ser atualizada conforme novas integrações, ferramentas e requisitos legais forem adicionados ao site.</p>
        </div>
      </section>
    </main>
  );
}
