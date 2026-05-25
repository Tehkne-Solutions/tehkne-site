import { ArrowUpRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';
import PortfolioGrid from './PortfolioGrid';
import { portfolioCases } from './portfolio-data';
import { savanaProjectCases } from './savana-project-cases';
import { memeProjectCases } from './meme-project-cases';

const siteUrl = 'https://tehknesolutions.com.br';

function uniqueCasesBySlug<T extends { slug: string }>(cases: T[]) {
  const map = new Map<string, T>();
  cases.forEach((item) => map.set(item.slug, item));
  return Array.from(map.values());
}

const allPortfolioCases = uniqueCasesBySlug([...portfolioCases, ...savanaProjectCases, ...memeProjectCases]);
const allPortfolioStats = [
  ['9+ anos', 'de repertório em tecnologia, design, produto e operação digital'],
  ['300+', 'sites, páginas e experiências digitais criadas, ajustadas ou sustentadas'],
  ['42+', 'cases e experiências catalogadas no ecossistema Tehkné'],
  ['24+', 'stacks e ferramentas aplicadas em projetos reais']
];

export const metadata = {
  title: 'Portfólio de sites, sistemas, WordPress e IA | Tehkné Solutions',
  description:
    'Veja cases e experiências da Tehkné em sites WordPress, Next.js, sistemas sob medida, automações, IA, apps, jogos, conteúdo, UX e sustentação técnica.',
  alternates: {
    canonical: `${siteUrl}/portfolio`
  },
  openGraph: {
    title: 'Portfólio Tehkné Solutions | Sites, sistemas, IA e produto digital',
    description:
      'Repertório técnico em WordPress, Next.js, automações, IA, produto digital, apps, jogos e sustentação para empresas e agências.',
    url: `${siteUrl}/portfolio`,
    type: 'website',
    locale: 'pt_BR'
  }
};

export default function PortfolioPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.portfolio);

  return (
    <main>
      <section className="section-frame solutions-hero portfolio-hero-pro">
        <div className="section-heading">
          <span className="eyebrow">Portfólio e prova de execução</span>
          <h1>Repertório real para quem precisa contratar tecnologia com menos risco.</h1>
          <p>
            A Tehkné reúne experiência prática em 300+ sites, páginas e experiências digitais criadas, ajustadas ou sustentadas, além de produtos próprios, cases de agência, plugins, temas, apps, jogos, automações, IA e conteúdos didáticos/comerciais. Aqui o portfólio mostra contexto, stack, tipo de entrega e resultado esperado — não apenas telas bonitas.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#cases">Ver cases <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact portfolio-stats">
        {allPortfolioStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame portfolio-proof-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Prova de repertório</span>
            <h2>O que um cliente precisa saber antes de contratar.</h2>
            <p>O portfólio não mostra apenas telas bonitas. Ele organiza volume, tipo de entrega, stack, segmento, contexto, execução e capacidade técnica acumulada.</p>
          </div>
        </div>
        <div className="solutions-proof-grid portfolio-proof-grid">
          <article><h3>300+ experiências digitais</h3><p>Sites, landing pages, WordPress, catálogos, interfaces, campanhas, páginas comerciais e operações web criadas, ajustadas ou sustentadas.</p></article>
          <article><h3>96+ bases técnicas</h3><p>Projetos em Next.js, React, PHP, APIs, automações, repositórios próprios, dashboards, produtos internos, estudos e laboratórios.</p></article>
          <article><h3>42+ cases catalogados</h3><p>Experiências próprias, participação técnica segura, ecossistemas parceiros, UNTI, Savana, Meme Digital, apps, jogos e produtos interativos.</p></article>
          <article><h3>24+ stacks aplicadas</h3><p>Criação de materiais didáticos, comerciais, documentação, apresentações, copy, arquitetura de informação, IA, analytics e integrações.</p></article>
        </div>
      </section>

      <section id="cases" className="section-frame">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Inventário Tehkné Site</span>
            <h2>Uma vitrine organizada por entrega, stack e contexto.</h2>
            <p>Os cards abaixo incluem produtos próprios, sites, sistemas, campanhas, clientes atendidos em agência, ecossistemas digitais, cases UNTI, projetos Savana, cases Meme Digital e laboratórios Tehkné. Cada card entra como case navegável com a mesma estrutura de apresentação.</p>
          </div>
        </div>
        <PortfolioGrid cases={allPortfolioCases} />
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Regra editorial</span>
          <h2>Experiência real, apresentada como repertório técnico da Tehkné.</h2>
          <p>A Tehkné apresenta os cases pelo valor técnico, visual e estratégico entregue: sites, campanhas, sistemas, produtos, conteúdo, automações, WordPress, Next.js e sustentação.</p>
          <div className="os-features">
            {['Projetos Tehkné', 'Sites e sistemas', 'Agências e ecossistemas', 'Cases UNTI', 'Cases Savana', 'Cases Meme Digital', 'Produtos internos'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['WordPress', 'Elementor', 'JetEngine', 'Next.js', 'React', 'PHP', 'Python', 'Flutter', 'React Native', 'IA', 'n8n', 'GitHub', 'Vercel', 'Game Design'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <ContactForm
        page="Portfólio"
        context="300+ sites, páginas e experiências digitais, produtos próprios, cases de agência, apps, jogos, IA, automações e cases semelhantes aos apresentados no portfólio"
        title="Quer criar algo parecido com os cases da Tehkné?"
        description="Use este bloco para organizar seu interesse e chamar a Tehkné no WhatsApp com contexto de portfólio."
      />
    </main>
  );
}
