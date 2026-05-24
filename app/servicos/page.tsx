import { ArrowUpRight, Building2, CheckCircle2, Code2, Gauge, GitBranch, Layers3, Network, ShieldCheck, Sparkles, Workflow, Wrench, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref } from '../contact';

const serviceCatalog = [
  {
    icon: Gauge,
    slug: 'site-institucional-alta-performance',
    eyebrow: 'Serviço 01',
    title: 'Site institucional de alta performance',
    short: 'Para empresas que precisam de presença digital premium, rápida, clara e preparada para conversão.',
    pain: 'Seu site precisa comunicar valor, carregar bem, organizar conteúdo e gerar contato qualificado sem parecer genérico.',
    deliverables: ['Arquitetura de páginas', 'UI premium responsiva', 'SEO técnico inicial', 'Performance e deploy', 'Formulários e WhatsApp', 'Base para evolução'],
    bestFor: ['Empresas em crescimento', 'Marcas premium', 'Clínicas', 'Indústrias', 'Serviços B2B'],
    relatedCases: ['Beggin', 'Vacina One', 'Human Clinic'],
    commercial: 'Projeto sob diagnóstico',
    cta: 'Quero um site premium',
    stack: ['Next.js', 'React', 'WordPress', 'Vercel', 'SEO']
  },
  {
    icon: Code2,
    slug: 'plataforma-web-sob-medida',
    eyebrow: 'Serviço 02',
    title: 'Plataforma web sob medida',
    short: 'Para transformar processos, produtos e operações em sistemas digitais reais, com áreas logadas, dados e módulos próprios.',
    pain: 'Quando planilhas, mensagens e ferramentas soltas já não sustentam a operação, a solução precisa virar plataforma.',
    deliverables: ['Mapeamento de requisitos', 'Modelagem de dados', 'Dashboard e módulos', 'Área logada', 'Permissões', 'Deploy e documentação'],
    bestFor: ['Produtos digitais', 'Operações internas', 'SaaS inicial', 'Dashboards', 'Portais privados'],
    relatedCases: ['Tehkné Flow', 'UNTI Digital', 'HNK Agent'],
    commercial: 'Projeto sob orçamento',
    cta: 'Planejar plataforma',
    stack: ['Next.js', 'APIs', 'PostgreSQL', 'Prisma', 'GitHub']
  },
  {
    icon: Network,
    slug: 'integracoes-crm-erp-apis',
    eyebrow: 'Serviço 03',
    title: 'Integrações com CRM, ERP e APIs',
    short: 'Para conectar formulários, catálogos, sistemas internos, CRMs, ERPs, automações e bases de dados.',
    pain: 'A operação perde velocidade quando informação importante fica presa em ferramentas que não conversam entre si.',
    deliverables: ['Diagnóstico de integrações', 'Mapeamento de fluxos', 'APIs e webhooks', 'Automação entre ferramentas', 'Validação de dados', 'Documentação técnica'],
    bestFor: ['Comercial e vendas', 'Catálogos', 'Operações com CRM', 'Sistemas legados', 'Automação interna'],
    relatedCases: ['Savol Seminovos', 'Auto Shopping Tiquatira', 'Conect 7G'],
    commercial: 'Sob diagnóstico',
    cta: 'Diagnosticar integração',
    stack: ['APIs', 'n8n', 'CRM', 'ERP', 'Webhooks']
  },
  {
    icon: ShieldCheck,
    slug: 'governanca-seguranca-sustentacao',
    eyebrow: 'Serviço 04',
    title: 'Governança, segurança e sustentação',
    short: 'Para manter sites, sistemas e operações digitais vivos, estáveis, organizados e prontos para evoluir.',
    pain: 'Depois do deploy, projetos sem dono técnico acumulam erros, lentidão, risco, dependência e retrabalho.',
    deliverables: ['Auditoria técnica', 'Correções e melhorias', 'Backlog evolutivo', 'Performance', 'Documentação viva', 'Rotina de sustentação'],
    bestFor: ['Sites em produção', 'WordPress crítico', 'Operações com tráfego', 'Projetos herdados', 'Times sem suporte técnico'],
    relatedCases: ['WordPress avançado', 'Beggin', 'Savana Publicidade'],
    commercial: 'Sob diagnóstico',
    cta: 'Avaliar operação',
    stack: ['Git', 'QA', 'WordPress', 'Vercel', 'Analytics']
  },
  {
    icon: Building2,
    slug: 'white-label-tecnico-agencias',
    eyebrow: 'Serviço 05',
    title: 'White label técnico para agências',
    short: 'Para agências, estúdios e operações comerciais que precisam de braço técnico confiável sem montar time interno completo.',
    pain: 'Agências vendem bem, mas podem travar quando falta arquitetura, desenvolvimento, manutenção, automação ou integração técnica.',
    deliverables: ['Execução técnica em parceria', 'Landing pages e sites', 'WordPress avançado', 'Next.js e integrações', 'Suporte evolutivo', 'Comunicação por sprint'],
    bestFor: ['Agências digitais', 'Estúdios de design', 'Operações comerciais', 'Times de marketing', 'Parceiros white label'],
    relatedCases: ['UNTI Digital', 'Savana Publicidade', 'Meme Digital'],
    commercial: 'Sob consulta',
    cta: 'Quero operar em white label',
    stack: ['WordPress', 'Next.js', 'Elementor', 'APIs', 'Suporte']
  }
];

const audiences = [
  ['Empresas', 'Sites premium, plataformas internas, integrações, governança e sustentação.'],
  ['Agências', 'Execução técnica white label, WordPress, landing pages, integrações e suporte.'],
  ['Operações em crescimento', 'Automação, dashboards, processos, CRM, ERP e melhoria contínua.'],
  ['Produtos digitais', 'MVP, roadmap técnico, UX, sistema, validação, deploy e evolução.']
];

const comparison = [
  ['Quero presença digital', 'Site institucional de alta performance'],
  ['Quero organizar uma operação', 'Plataforma web sob medida'],
  ['Quero conectar ferramentas', 'Integrações CRM/ERP/APIs'],
  ['Quero manter e evoluir', 'Governança, segurança e sustentação'],
  ['Sou agência/parceiro', 'White label técnico para agências']
];

export const metadata = {
  title: 'Serviços | Tehkné Solutions',
  description: 'Catálogo de serviços da Tehkné: sites de alta performance, plataformas web, integrações, governança, sustentação e white label técnico para agências.'
};

export default function ServicosPage() {
  const pageWhatsApp = whatsAppHref('Olá, Tehkné! Vim pela página de Serviços e quero entender qual serviço combina melhor com minha demanda.');

  return (
    <main>
      <section className="section-frame services-hero">
        <div className="section-heading services-hero-copy">
          <span className="eyebrow">Catálogo de serviços</span>
          <h1>Serviços claros para transformar demanda digital em execução real.</h1>
          <p>Esta página organiza o que a Tehkné entrega como serviço. Produtos próprios terão uma página separada; aqui o foco é contratação, diagnóstico, arquitetura, desenvolvimento, integração e sustentação.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="#servicos-lista">Ver serviços <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/contato#contato-form">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="services-hero-panel" aria-hidden="true">
          <div className="services-radar-core"><Sparkles size={34} /></div>
          {['Sites', 'Plataformas', 'Integrações', 'Governança', 'White label'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>05</strong><span>serviços principais para contratação</span></div>
        <div><strong>70+</strong><span>experiências web/WordPress acumuladas</span></div>
        <div><strong>67+</strong><span>repositórios mapeados no inventário técnico</span></div>
        <div><strong>GIP</strong><span>método de descoberta, arquitetura e evolução</span></div>
      </section>

      <section className="section-frame services-audience-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Escolha por contexto</span>
            <h2>O ponto de entrada muda conforme o tipo de operação.</h2>
            <p>A Tehkné pode atuar como software house, estúdio de produto, braço técnico de agência ou sustentação evolutiva.</p>
          </div>
        </div>
        <div className="services-audience-grid">
          {audiences.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="servicos-lista" className="services-list">
        {serviceCatalog.map((service, index) => {
          const Icon = service.icon;
          const serviceWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pela página de Serviços e quero conversar sobre: ${service.title}. Meu objetivo é entender escopo, investimento, prazo e próximos passos.`);
          return (
            <section className="section-frame service-offer-section" id={service.slug} key={service.slug}>
              <div className="service-offer-heading">
                <span className="service-offer-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="service-offer-icon"><Icon size={30} /></div>
                <div>
                  <span className="eyebrow">{service.eyebrow}</span>
                  <h2>{service.title}</h2>
                  <p>{service.short}</p>
                </div>
              </div>

              <div className="service-offer-grid">
                <article className="service-offer-card main">
                  <span>Dor que resolve</span>
                  <p>{service.pain}</p>
                </article>
                <article className="service-offer-card list-card">
                  <span>Entregáveis</span>
                  <ul>{service.deliverables.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul>
                </article>
                <article className="service-offer-card list-card">
                  <span>Ideal para</span>
                  <ul>{service.bestFor.map((item) => <li key={item}><Workflow size={15} />{item}</li>)}</ul>
                </article>
                <article className="service-offer-card result">
                  <span>Modelo comercial</span>
                  <strong>{service.commercial}</strong>
                  <div className="case-stack service-stack">{service.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="related-cases">{service.relatedCases.map((item) => <em key={item}>{item}</em>)}</div>
                  <div className="service-card-actions">
                    <a className="btn btn-secondary" href={`/servicos/${service.slug}`}>Página do serviço <ArrowUpRight size={15} /></a>
                    <a className="btn btn-primary coin" href={serviceWhatsApp} target="_blank" rel="noreferrer">{service.cta} <ArrowUpRight size={15} /></a>
                  </div>
                </article>
              </div>
            </section>
          );
        })}
      </section>

      <section className="section-frame services-chooser">
        <div className="section-heading">
          <span className="eyebrow">Escolha assistida</span>
          <h2>Não sabe qual serviço pedir? Comece pela intenção.</h2>
          <p>A primeira conversa serve para transformar demanda solta em caminho técnico, comercial e operacional.</p>
        </div>
        <div className="services-comparison-grid">
          {comparison.map(([intent, service]) => (
            <article key={intent}>
              <span>{intent}</span>
              <strong>{service}</strong>
              <a href={`/servicos/${serviceCatalog.find((item) => item.title === service)?.slug ?? ''}`}>Ver página do serviço <ArrowUpRight size={14} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame services-proof-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Como contratamos com segurança</span>
            <h2>Sem preço genérico para problema complexo.</h2>
            <p>Os serviços são tratados como projeto sob diagnóstico. Isso evita prometer escopo errado, preço artificial ou solução que não resolve a operação.</p>
          </div>
        </div>
        <div className="solutions-proof-grid">
          <article><Layers3 size={24} /><h3>Diagnóstico</h3><p>Entendemos contexto, problema, urgência, público e objetivo antes de propor execução.</p></article>
          <article><GitBranch size={24} /><h3>Arquitetura</h3><p>Transformamos intenção em escopo, stack, fases, entregáveis e critérios de aceite.</p></article>
          <article><Wrench size={24} /><h3>Execução</h3><p>Desenvolvemos com versionamento, documentação, validação e comunicação por etapa.</p></article>
          <article><Zap size={24} /><h3>Evolução</h3><p>Depois do deploy, mantemos melhoria, sustentação, performance e novas demandas.</p></article>
        </div>
      </section>

      <ContactForm page="Serviços" context="catálogo de serviços da Tehkné: site premium, plataforma web, integrações, governança, sustentação ou white label técnico" title="Qual serviço combina com sua demanda agora?" description="Use este bloco para iniciar o diagnóstico com contexto. A Tehkné ajuda a transformar a demanda em escopo, arquitetura e próximos passos." />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Próxima decisão</span>
          <h2>Serviço certo primeiro. Tecnologia depois.</h2>
          <p>Vamos entender a demanda, indicar o melhor serviço e organizar o caminho entre estratégia, produto, código e evolução.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Falar sobre serviços <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/portfolio">Ver portfólio <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
