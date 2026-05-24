import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Tehkné Solutions',
  description: 'Entenda como a Tehkné Solutions coleta, utiliza, protege e gerencia dados pessoais enviados pelo site, formulários, cookies e canais de contato.',
  alternates: {
    canonical: 'https://tehknesolutions.com.br/privacidade'
  }
};

export default function PrivacidadePage() {
  return (
    <main>
      <section className="section-frame services-hero">
        <div className="service-detail-copy">
          <span className="eyebrow">LGPD e privacidade</span>
          <h1>Política de Privacidade</h1>
          <p>Esta política explica como a Tehkné Solutions trata informações enviadas pelo site, formulários, WhatsApp, cookies e ferramentas de análise.</p>
        </div>
      </section>

      <section className="section-frame legal-page">
        <article className="glass-card service-detail-main-card">
          <h2>1. Dados que podemos coletar</h2>
          <p>Podemos coletar dados fornecidos voluntariamente em formulários, como nome, empresa, e-mail, telefone, serviço de interesse, orçamento, prazo, mensagem e contexto do projeto. Também podemos coletar dados técnicos básicos, como página de origem, data, navegador, dispositivo, endereço aproximado de IP e eventos de navegação.</p>

          <h2>2. Finalidades do tratamento</h2>
          <p>Os dados são usados para responder contatos, organizar diagnósticos técnicos, qualificar demandas comerciais, registrar leads, melhorar o site, medir performance de campanhas e manter segurança contra spam e abuso.</p>

          <h2>3. Cookies e tecnologias semelhantes</h2>
          <p>Utilizamos cookies essenciais para funcionamento do site e, mediante consentimento quando aplicável, cookies de análise e marketing para entender navegação, medir CTAs e melhorar campanhas. O usuário pode gerenciar preferências pelo banner de cookies ou pelo botão de privacidade exibido no site.</p>

          <h2>4. Compartilhamento</h2>
          <p>Podemos compartilhar dados com ferramentas necessárias à operação, como hospedagem, analytics, CRM, planilhas, automações, WhatsApp, provedores de e-mail e serviços antifraude/antispam. Não vendemos dados pessoais.</p>

          <h2>5. Segurança e retenção</h2>
          <p>Adotamos medidas razoáveis de segurança técnica e organizacional. Os dados são mantidos pelo tempo necessário para atendimento, relacionamento comercial, obrigações legais e melhoria dos serviços.</p>

          <h2>6. Direitos do titular</h2>
          <p>Nos termos da LGPD, você pode solicitar acesso, correção, exclusão, portabilidade, revogação de consentimento e informações sobre uso dos seus dados. Para exercer seus direitos, entre em contato pelos canais oficiais da Tehkné.</p>

          <h2>7. Atualizações</h2>
          <p>Esta política pode ser atualizada para refletir mudanças legais, técnicas ou operacionais. A versão vigente será sempre publicada nesta página.</p>

          <p><strong>Última atualização:</strong> maio de 2026.</p>
        </article>
      </section>
    </main>
  );
}
