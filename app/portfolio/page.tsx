import { ArrowUpRight, Orbit } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

type PortfolioCase = {
  title: string;
  type: string;
  category: string;
  stack: string;
  text: string;
  tone: 'violet' | 'cyan' | 'blue' | 'orange' | 'amber' | 'pink';
  status: string;
  href?: string;
};

const cases: PortfolioCase[] = [
  {
    title: 'Tehkné Flow',
    type: 'Projeto Tehkné',
    category: 'Sistema / Produto',
    stack: 'Next.js • Gestão • Analytics • Operação',
    text: 'Produto interno para gestão de projetos, tarefas, automações e visão operacional de times digitais.',
    tone: 'violet',
    status: 'Laboratório Tehkné',
    href: '/portfolio/tehkne-flow'
  },
  {
    title: 'Vacina One',
    type: 'Projeto Tehkné',
    category: 'Site institucional',
    stack: 'Next.js • Saúde • Conteúdo • Franquias',
    text: 'Estrutura institucional moderna para clínica de vacinação, com comunicação clara, navegação objetiva e base preparada para expansão.',
    tone: 'cyan',
    status: 'Projeto direto / staging',
    href: '/portfolio/vacina-one'
  },
  {
    title: 'UNTI Digital',
    type: 'Parceria técnica',
    category: 'Site / Plataforma',
    stack: 'Next.js • Integrações • Operação digital',
    text: 'Atuação como braço técnico em operação digital com foco em sites, plataformas, integrações, APIs e sustentação.',
    tone: 'blue',
    status: 'Cliente fixo / ecossistema',
    href: '/portfolio/unti-digital'
  },
  {
    title: 'Savol Seminovos',
    type: 'Participação técnica',
    category: 'Catálogo dinâmico',
    stack: 'WordPress • Elementor • Filtros • Catálogo',
    text: 'Portal automotivo com listagem de veículos, filtros comerciais, cards dinâmicos e estrutura de manutenção contínua.',
    tone: 'orange',
    status: 'Participação técnica',
    href: '/portfolio/savol-seminovos'
  },
  {
    title: 'Beggin',
    type: 'Participação técnica',
    category: 'Marca / Produto',
    stack: 'WordPress • Elementor • Produto • Performance',
    text: 'Site de marca e produto com narrativa visual, experiência editorial, páginas comerciais e ajustes técnicos de performance.',
    tone: 'amber',
    status: 'Participação técnica',
    href: '/portfolio/beggin'
  },
  {
    title: 'HNK Agent',
    type: 'Projeto Tehkné',
    category: 'IA / Sistema operacional',
    stack: 'GIP • Agentes • Prompts • Automação',
    text: 'Sistema conceitual e operacional para arquitetura de soluções, agentes, documentação viva e governança de criação digital.',
    tone: 'cyan',
    status: 'Produto interno'
  },
  {
    title: 'Meme Digital',
    type: 'Ecossistema parceiro',
    category: 'Martech / Web',
    stack: 'WordPress • Sites • Marketing • Suporte',
    text: 'Experiência técnica em ecossistema martech, com sites institucionais, suporte a operações digitais e projetos web.',
    tone: 'pink',
    status: 'Histórico profissional'
  },
  {
    title: 'Savana Publicidade',
    type: 'Ecossistema parceiro',
    category: 'Agência / Web',
    stack: 'WordPress • Elementor • Branding • Campanhas',
    text: 'Experiência em ecossistema de agência com sites, campanhas, comunicação visual e sustentação técnica para projetos digitais.',
    tone: 'violet',
    status: 'Histórico profissional'
  },
  ...[
    ['Grupo Savol', 'Automotivo / Ecossistema', 'Next.js • Tailwind CSS • CRM', 'Case UNTI com atuação técnica em marcas, operação e captação regional para ecossistema automotivo.', 'blue'],
    ['Toriba', 'Automotivo / Leads', 'Next.js • Framer Motion • CRM', 'Plataforma de leads com foco em velocidade comercial, captação e experiência digital objetiva.', 'cyan'],
    ['Auto Shopping Tiquatira', 'Automotivo / Catálogo', 'API • Catálogo web • SEO', 'Catálogo conectado ao estoque real, com organização comercial e estrutura preparada para busca e conversão.', 'orange'],
    ['Dr. Eduardo Ursolino', 'Saúde / Odontologia', 'Next.js • SEO • Framer Motion', 'Case de autoridade clínica e agendamento premium, com foco em confiança, clareza e posicionamento profissional.', 'cyan'],
    ['Dr. Alessandro Linder', 'Saúde / Estética', 'Next.js • SEO local • UX', 'Experiência digital para saúde e estética, com foco em confiança clínica e geração de consultas qualificadas.', 'violet'],
    ['Uroclínica de Joinville', 'Saúde / Clínica especializada', 'Next.js • Tailwind CSS • SEO local', 'Clareza institucional, contato qualificado e navegação objetiva para clínica especializada.', 'blue'],
    ['Hospital Thereza Mussi', 'Saúde / Hospital', 'Next.js • Conteúdo • SEO local', 'Organização de serviços e confiança digital para instituição hospitalar, com base de conteúdo escalável.', 'cyan'],
    ['Human Clinic', 'Saúde / Clínica premium', 'Next.js • UX premium • Tailwind CSS', 'Refinamento visual e fluxo de contato mais objetivo para experiência clínica premium.', 'violet'],
    ['Dra. Isabel Borelli', 'Saúde / Estética', 'Next.js • SEO local • UX', 'Posicionamento profissional, proximidade e jornada de contato clara para marca médica pessoal.', 'pink'],
    ['Dra. Gionvana Bombonatto', 'Saúde / Estética', 'Next.js • UX premium • SEO local', 'Autoridade médica com experiência premium, visual refinado e arquitetura voltada para conversão.', 'violet'],
    ['Dr. Thiago Azuaga', 'Saúde especializada', 'Next.js • Tailwind CSS • SEO local', 'Confiança e jornada de contato enxuta para atuação médica especializada.', 'blue'],
    ['Grupo ALJR', 'Corporativo / Grupo empresarial', 'Next.js • SEO • UX B2B', 'Marca corporativa e relacionamento comercial com foco em clareza institucional e presença B2B.', 'violet'],
    ['Conect 7G', 'Tecnologia & Serviços', 'Next.js • Performance web • Tailwind CSS', 'Autoridade técnica e geração de demanda para empresa de tecnologia e serviços.', 'cyan'],
    ['Landing Page Conect 7G', 'Landing page / CRO', 'Next.js • Framer Motion • CRO', 'Landing page com foco em captação de leads, resposta rápida e comunicação objetiva.', 'cyan'],
    ['Clube Recreativo de Sumaré', 'Institucional & Serviços', 'Next.js • Conteúdo • Performance web', 'Agenda, serviços e relacionamento institucional organizados em uma experiência digital clara.', 'blue'],
    ['Odete Design', 'Marca criativa', 'Next.js • UX premium • SEO', 'Posicionamento premium e percepção de valor para marca criativa com presença digital refinada.', 'pink'],
    ['Renata Pimentel', 'Marca pessoal', 'Next.js • SEO local • UX', 'Autoridade, oferta e proximidade em uma presença digital orientada a contato qualificado.', 'violet'],
    ['Plataforma Wiki das Celebridades', 'Plataforma web / Conteúdo', 'Next.js • SEO técnico • Conteúdo', 'Estrutura editorial, navegação e escala para plataforma web orientada a conteúdo.', 'blue'],
    ['Nerd ao Máximo', 'Mídia & Conteúdo', 'Next.js • Conteúdo • Performance web', 'Comunidade, conteúdo e experiência editorial para ecossistema de mídia digital.', 'cyan'],
    ['Catálogo Grupo Niks', 'Indústria / Catálogo digital', 'Next.js • Catálogo digital • Tailwind CSS', 'Organização comercial da oferta em catálogo digital estruturado para apresentação e venda.', 'orange'],
    ['E-commerce Onile Alimentos', 'E-commerce', 'Next.js • E-commerce • UX', 'Jornada de compra mais clara para operação de alimentos, com foco em navegação e conversão.', 'amber'],
    ['Website SuporteShop', 'E-commerce & Suporte', 'Next.js • SEO técnico • UX', 'Serviços e operação de suporte digital organizados em presença web comercial.', 'orange'],
    ['SOS Pistolas', 'Indústria & Varejo', 'Next.js • SEO local • Performance web', 'Nicho técnico com clareza comercial, arquitetura de conteúdo e navegação objetiva.', 'amber']
  ].map(([title, category, stack, text, tone]) => ({
    title,
    type: 'Participação técnica autorizada',
    category,
    stack,
    text,
    tone: tone as PortfolioCase['tone'],
    status: 'Ecossistema UNTI'
  }))
];

const filters = ['Todos', 'Projetos Tehkné', 'Participação Técnica', 'Ecossistemas', 'UNTI', 'Automotivo', 'Saúde', 'Corporativo', 'Indústria', 'Sites', 'Sistemas', 'WordPress', 'Next.js', 'IA'];
const stats = [
  ['31+', 'experiências listadas'],
  ['23', 'cases UNTI autorizados'],
  ['67+', 'repositórios mapeados'],
  ['5', 'cases individuais publicados']
];

export const metadata = {
  title: 'Portfólio | Tehkné Solutions',
  description: 'Projetos Tehkné, participação técnica autorizada e ecossistemas digitais onde atuamos com arquitetura, desenvolvimento, WordPress, Next.js, IA e sustentação.'
};

export default function PortfolioPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.portfolio);

  return (
    <main>
      <section className="section-frame solutions-hero">
        <div className="section-heading">
          <span className="eyebrow">Portfólio e experiências</span>
          <h1>Projetos, produtos e ecossistemas digitais com participação técnica real.</h1>
          <p>A curadoria da Tehkné separa projetos próprios, participação técnica autorizada e experiências em ecossistemas parceiros para apresentar o portfólio com clareza, responsabilidade e lastro técnico.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#cases">Ver cases <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section id="cases" className="section-frame">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Inventário Tehkné Site v1</span>
            <h2>Uma vitrine organizada por autoria, participação e contexto.</h2>
            <p>Os cases abaixo incluem projetos próprios, participações técnicas e cases autorizados do ecossistema UNTI Digital. Os cards com página individual publicada levam para o case; os demais levam ao diagnóstico.</p>
          </div>
        </div>
        <div className="filters" aria-label="Filtros de portfólio">
          {filters.map((filter, index) => <button className={index === 0 ? 'active' : ''} key={filter}>{filter}</button>)}
        </div>
        <div className="project-grid">
          {cases.map((item) => (
            <article className="project-card" key={item.title}>
              <div className={`project-thumb ${item.tone}`}><Orbit size={46} /><span /></div>
              <small>{item.type}</small>
              <h3>{item.title}</h3>
              <p><strong>{item.category}</strong></p>
              <p>{item.text}</p>
              <p>{item.stack}</p>
              <a href={item.href ?? pageWhatsApp} target={item.href ? undefined : '_blank'} rel={item.href ? undefined : 'noreferrer'}>{item.href ? 'Ver case' : 'Solicitar diagnóstico'} <ArrowUpRight size={14} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Regra editorial</span>
          <h2>Portfólio com narrativa segura e profissional.</h2>
          <p>A Tehkné trata experiência acumulada como capital técnico institucional, mas separa claramente projetos próprios, participação técnica autorizada e ecossistemas onde houve atuação.</p>
          <div className="os-features">
            {['Projetos Tehkné', 'Participação técnica autorizada', 'Ecossistemas parceiros', 'Cases UNTI', 'Laboratórios internos', 'Produtos próprios'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Next.js', 'React', 'WordPress', 'Elementor', 'PHP', 'Python', 'Flutter', 'APIs', 'IA', 'n8n', 'GitHub', 'Vercel'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <ContactForm
        page="Portfólio"
        context="projetos próprios, participação técnica autorizada, ecossistemas parceiros e cases semelhantes aos apresentados no portfólio"
        title="Quer criar algo parecido com os cases da Tehkné?"
        description="Use este bloco para organizar seu interesse e chamar a Tehkné no WhatsApp com contexto de portfólio."
      />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Quer algo parecido?</span>
          <h2>Vamos mapear o tipo de projeto que sua operação precisa.</h2>
          <p>Conte sua demanda e a Tehkné estrutura o caminho: arquitetura, design, desenvolvimento, automação, publicação e evolução.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
