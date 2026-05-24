import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | Tehkné Solutions',
  description: 'Informações institucionais sobre uso do site da Tehkné Solutions.'
};

export default function LegalPage() {
  return (
    <main>
      <section className="section-frame services-hero">
        <div className="service-detail-copy">
          <span className="eyebrow">Informações gerais</span>
          <h1>Legal</h1>
          <p>Informações institucionais sobre navegação, contato e conteúdos do site.</p>
        </div>
      </section>
      <section className="section-frame legal-page">
        <article className="glass-card service-detail-main-card">
          <h2>Uso</h2>
          <p>O site tem finalidade institucional, informativa e comercial.</p>
          <h2>Conteúdo</h2>
          <p>Textos, imagens e materiais representam a identidade e o repertório da Tehkné Solutions.</p>
          <h2>Contato</h2>
          <p>O envio de formulário inicia atendimento, diagnóstico e proposta.</p>
          <h2>Atualização</h2>
          <p>Esta página pode ser atualizada conforme a evolução do site.</p>
        </article>
      </section>
    </main>
  );
}
