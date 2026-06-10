import { ArrowUpRight, BrainCircuit, Code2, ShieldCheck, Sparkles } from 'lucide-react';

const metrics = [
  ['300+', 'experiências digitais criadas, ajustadas ou sustentadas'],
  ['42+', 'cases e experiências catalogadas'],
  ['24+', 'stacks, ferramentas e integrações'],
  ['9+ anos', 'de repertório em tecnologia, produto e operação']
];

const trustCards = [
  {
    icon: ShieldCheck,
    title: 'Credibilidade institucional',
    text: 'Responsável, canais oficiais, cases, dados de contato e narrativa clara para reduzir insegurança antes do primeiro contato.'
  },
  {
    icon: Code2,
    title: 'Execução técnica real',
    text: 'Sites, WordPress avançado, sistemas, integrações, automações e sustentação com foco em operação, performance e evolução.'
  },
  {
    icon: BrainCircuit,
    title: 'IA com processo',
    text: 'Automação e inteligência artificial aplicadas com contexto, base de conhecimento, revisão humana e integração com fluxos reais.'
  }
];

export default function HomeTrustBlocks() {
  return (
    <section className="section-frame home-trust-blocks" aria-labelledby="home-trust-title">
      <div className="section-heading inline">
        <div>
          <span className="eyebrow">Prova e confiança</span>
          <h2 id="home-trust-title">Uma base técnica para empresas que precisam vender, organizar e escalar.</h2>
        </div>
        <p>
          A Tehkné combina design, código, produto, automações e sustentação para transformar presença digital em operação mais clara, mensurável e evolutiva.
        </p>
      </div>

      <div className="metrics trust-metrics" aria-label="Indicadores de repertório Tehkné">
        {metrics.map(([value, label]) => (
          <div key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="portfolio-grid compact-blog-grid trust-card-grid">
        {trustCards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="glass-card mini-card premium-hover" key={card.title}>
              <Icon className="card-icon" size={26} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div>

      <div className="home-proof-actions">
        <a className="btn btn-secondary" href="/portfolio">
          Ver provas e cases <ArrowUpRight size={16} />
        </a>
        <a className="text-link" href="/contato#contato-form">
          Solicitar diagnóstico <Sparkles size={16} />
        </a>
      </div>
    </section>
  );
}
