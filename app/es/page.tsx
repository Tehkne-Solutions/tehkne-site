import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tehkné Solutions | Software a medida, IA y productos digitales',
  description: 'Tehkné Solutions diseña, desarrolla y evoluciona sitios, sistemas, automatizaciones, flujos de IA y productos digitales para empresas que necesitan claridad, rendimiento y escala.',
  alternates: {
    canonical: 'https://tehknesolutions.com.br/es',
    languages: {
      'pt-BR': 'https://tehknesolutions.com.br/',
      en: 'https://tehknesolutions.com.br/en',
      es: 'https://tehknesolutions.com.br/es'
    }
  }
};

export default function SpanishHomePage() {
  return (
    <main>
      <section className="section-frame services-hero">
        <div className="service-detail-copy">
          <span className="eyebrow">Versión en español</span>
          <h1>Software a medida, IA y productos digitales para empresas que necesitan escalar.</h1>
          <p>Tehkné Solutions ayuda a empresas, agencias y operaciones digitales a transformar ideas, procesos y desafíos comerciales en sistemas reales con estrategia, diseño, ingeniería y evolución continua.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Solicitar diagnóstico técnico</a>
            <a className="btn btn-secondary" href="/portfolio">Ver portafolio</a>
          </div>
        </div>
      </section>
      <section className="section-frame legal-page">
        <article className="glass-card service-detail-main-card">
          <h2>Qué hacemos</h2>
          <p>Diseñamos y desarrollamos sitios de alto rendimiento, plataformas a medida, estructuras avanzadas en WordPress, integraciones, dashboards, automatizaciones y operaciones asistidas por IA.</p>
          <h2>Cómo trabajamos</h2>
          <p>Comenzamos con diagnóstico, arquitectura y definición de alcance antes de avanzar hacia interfaz, código, publicación y mejora continua.</p>
          <h2>Idioma oficial</h2>
          <p>El portugués sigue siendo la fuente oficial del contenido. Esta página en español es el primer punto de entrada internacional y evolucionará hacia una experiencia localizada completa.</p>
        </article>
      </section>
    </main>
  );
}
