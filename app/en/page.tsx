import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tehkné Solutions | Custom software, AI and digital products',
  description: 'Tehkné Solutions designs, builds and evolves websites, systems, automations, AI workflows and digital products for companies that need clarity, performance and scale.',
  alternates: {
    canonical: 'https://tehknesolutions.com.br/en',
    languages: {
      'pt-BR': 'https://tehknesolutions.com.br/',
      en: 'https://tehknesolutions.com.br/en',
      es: 'https://tehknesolutions.com.br/es'
    }
  }
};

export default function EnglishHomePage() {
  return (
    <main>
      <section className="section-frame services-hero">
        <div className="service-detail-copy">
          <span className="eyebrow">English version</span>
          <h1>Custom software, AI and digital products for companies that need to scale.</h1>
          <p>Tehkné Solutions helps companies, agencies and digital operations transform ideas, processes and business challenges into real systems with strategy, design, engineering and continuous evolution.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Request a technical diagnosis</a>
            <a className="btn btn-secondary" href="/portfolio">View portfolio</a>
          </div>
        </div>
      </section>
      <section className="section-frame legal-page">
        <article className="glass-card service-detail-main-card">
          <h2>What we do</h2>
          <p>We design and develop high-performance websites, custom platforms, advanced WordPress structures, integrations, dashboards, automation workflows and AI-assisted operations.</p>
          <h2>How we work</h2>
          <p>We start with diagnosis, architecture and scope definition before moving to interface, code, deployment and continuous improvement.</p>
          <h2>Official language</h2>
          <p>Portuguese remains the official source of content. This English page is the first international entry point and will evolve into a complete localized experience.</p>
        </article>
      </section>
    </main>
  );
}
