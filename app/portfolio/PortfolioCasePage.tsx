import { notFound } from 'next/navigation';
import { ArrowUpRight, BarChart3, CheckCircle2, Layers3, LayoutDashboard, Network, Orbit, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref } from '../contact';
import { getPortfolioCase, portfolioCases } from './portfolio-data';

type Props = {
  slug: string;
};

const projectCopy: Record<string, { headline: string; readingIntro: string; modules: Array<{ title: string; text: string }>; process: Array<[string, string, string]> }> = {
  'tehkne-flow': {
    headline: 'um produto operacional para transformar rotina, indicadores e decisão em sistema vivo.',
    readingIntro: 'O Tehkné Flow representa a visão da Tehkné aplicada dentro da própria operação: organizar projetos, tarefas, contexto, automações e indicadores em uma camada única de gestão digital.',
    modules: [
      { title: 'Problema operacional', text: 'Tarefas, contexto, decisões e prioridades ficavam distribuídos entre conversas, documentos, planilhas e repositórios.' },
      { title: 'Arquitetura de produto', text: 'A solução foi pensada como painel modular para concentrar gestão, visão de projeto, governança e evolução.' },
      { title: 'Experiência e interface', text: 'UI dark premium, leitura rápida, cards de status, hierarquia visual e base preparada para dashboards e agentes.' },
      { title: 'Evolução técnica', text: 'Produto interno com potencial de integrar analytics, automações, IA, documentação viva e rotinas de operação.' }
    ],
    process: [
      ['01', 'Mapa da operação', 'Levantamento dos pontos soltos: tarefas, indicadores, demandas, arquivos, prioridades e decisões.'],
      ['02', 'Modelo de produto', 'Definição de módulos, entidades, fluxos, visões e critérios para transformar rotina em sistema.'],
      ['03', 'Interface operacional', 'Criação de uma experiência visual clara para leitura rápida, controle e acompanhamento de evolução.'],
      ['04', 'Base evolutiva', 'Estrutura preparada para automações, agentes, dados e melhorias incrementais.']
    ]
  },
  'vacina-one': {
    headline: 'uma presença digital confiável para saúde, vacinação, conteúdo e expansão comercial.',
    readingIntro: 'O Vacina One pede clareza, cuidado e confiança. O case demonstra como uma marca de saúde pode organizar serviços, unidades, calendário, conteúdo educativo e oportunidade de franquia em uma experiência objetiva.',
    modules: [
      { title: 'Confiança para saúde', text: 'A comunicação precisa transmitir segurança, acolhimento e clareza para famílias, adultos, empresas e franqueados.' },
      { title: 'Arquitetura institucional', text: 'Menu, páginas, conteúdo e chamadas foram estruturados para facilitar decisão, contato e expansão.' },
      { title: 'Base em Next.js', text: 'Projeto moderno, rápido e preparado para crescer com novas páginas, blog, unidades e campanhas.' },
      { title: 'Conteúdo e conversão', text: 'A estrutura permite educação em saúde, agendamento, relacionamento e posicionamento de marca.' }
    ],
    process: [
      ['01', 'Contexto de saúde', 'Entendimento do público, serviços, linguagem, confiança e pontos de contato.'],
      ['02', 'Arquitetura de páginas', 'Organização de Home, unidades, vacinas, calendário, empresas, blog e contato.'],
      ['03', 'Design institucional', 'Visual limpo, humano e responsivo para transmitir cuidado e credibilidade.'],
      ['04', 'Expansão futura', 'Base preparada para conteúdo, franquias, campanhas e evolução do produto digital.']
    ]
  },
  'unti-digital': {
    headline: 'uma parceria técnica contínua para sustentar sites, plataformas, integrações e operação digital.',
    readingIntro: 'A UNTI Digital entra no portfólio como ecossistema parceiro. A leitura correta é de braço técnico: apoio recorrente em arquitetura, desenvolvimento, manutenção, performance, integrações e projetos para clientes finais.',
    modules: [
      { title: 'Braço técnico', text: 'Atuação junto a uma operação digital que demanda velocidade, confiabilidade e repertório técnico recorrente.' },
      { title: 'Projetos e clientes', text: 'Experiência acumulada em sites, plataformas, WordPress, Next.js, automações, APIs e manutenção.' },
      { title: 'Governança editorial', text: 'A narrativa separa parceria técnica, participação e ecossistema para evitar confusão de autoria.' },
      { title: 'Operação em escala', text: 'O valor está na continuidade: diagnóstico, execução, suporte, ajustes e evolução de múltiplos projetos.' }
    ],
    process: [
      ['01', 'Demanda recorrente', 'Entrada por necessidades de clientes, manutenção, melhorias ou novos projetos digitais.'],
      ['02', 'Planejamento técnico', 'Definição de stack, abordagem, prazo, riscos e pontos de integração.'],
      ['03', 'Execução e suporte', 'Implementação, ajustes, revisões, performance e sustentação técnica.'],
      ['04', 'Evolução do ecossistema', 'Aprendizados reaplicados em novos projetos, automações e processos.']
    ]
  },
  'savol-seminovos': {
    headline: 'um catálogo automotivo dinâmico para organizar veículos, filtros, unidades e conversão.',
    readingIntro: 'Savol Seminovos demonstra WordPress avançado aplicado a uma operação comercial real: listagem de veículos, dados dinâmicos, filtros, cards, preços, unidades e rotina de manutenção.',
    modules: [
      { title: 'Operação automotiva', text: 'O desafio era organizar informações comerciais de veículos em uma experiência editável e fácil de navegar.' },
      { title: 'WordPress dinâmico', text: 'Uso de estrutura avançada para templates, campos, filtros, cards e manutenção de catálogo.' },
      { title: 'Busca e decisão', text: 'A página precisa ajudar o usuário a comparar modelos, valores, ano, quilometragem e unidades.' },
      { title: 'Sustentação contínua', text: 'Projeto com natureza operacional: dados mudam, ofertas mudam e a base precisa permanecer confiável.' }
    ],
    process: [
      ['01', 'Inventário comercial', 'Entendimento dos campos, marcas, modelos, unidades, preços e regras de exibição.'],
      ['02', 'Modelagem no WordPress', 'Organização de campos, templates, filtros e componentes editáveis.'],
      ['03', 'Experiência de catálogo', 'Cards, busca, ordenação e leitura comercial clara para o usuário.'],
      ['04', 'Manutenção e escala', 'Base preparada para atualizações de estoque, ajustes e evolução contínua.']
    ]
  },
  'beggin': {
    headline: 'uma experiência de marca e produto para comunicar valor, visual e narrativa comercial.',
    readingIntro: 'Beggin demonstra a capacidade de unir WordPress, produto, visual forte, conteúdo comercial e refinamento de experiência para uma marca que depende de percepção e apresentação.',
    modules: [
      { title: 'Marca e produto', text: 'O foco está em transformar portfólio de produtos, história e diferenciais em uma experiência visual memorável.' },
      { title: 'Implementação editável', text: 'WordPress e Elementor permitem manutenção de conteúdo, páginas e campanhas com autonomia operacional.' },
      { title: 'Assets e performance', text: 'Ajustes visuais, organização de imagens, recortes e otimizações sustentam uma navegação mais eficiente.' },
      { title: 'Narrativa comercial', text: 'O site precisa vender percepção de valor, qualidade de produto e identidade da marca.' }
    ],
    process: [
      ['01', 'Leitura de marca', 'Entendimento de identidade, produtos, apelo visual, tom de comunicação e pontos de venda.'],
      ['02', 'Estrutura visual', 'Organização de páginas, assets, blocos e experiência editorial.'],
      ['03', 'WordPress aplicado', 'Implementação e ajustes para manter visual, conteúdo e operação editáveis.'],
      ['04', 'Refinamento contínuo', 'Melhorias de assets, performance, responsividade e sustentação técnica.']
    ]
  }
};

export function PortfolioCasePage({ slug }: Props) {
  const project = getPortfolioCase(slug);

  if (!project) {
    notFound();
  }

  const custom = projectCopy[project.slug];
  const pageWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pelo case ${project.title} no portfólio e quero conversar sobre um projeto parecido. Quero entender escopo, arquitetura, investimento e próximos passos.`);

  const metrics = [
    [project.level, 'nível editorial'],
    [project.category, 'tipo de entrega'],
    [project.sector, 'segmento'],
    [project.status, 'status no portfólio']
  ];

  const fallbackModules = [
    { title: 'Contexto', text: project.challenge },
    { title: 'Arquitetura', text: 'Organização de escopo, páginas, componentes, conteúdo, fluxos, integrações e pontos de evolução.' },
    { title: 'Execução', text: project.delivery },
    { title: 'Resultado', text: project.outcome }
  ];

  const modules = custom?.modules ?? fallbackModules;
  const process = custom?.process ?? [
    ['01', 'Diagnóstico', 'Entendimento do objetivo, público, contexto técnico, restrições e oportunidade principal.'],
    ['02', 'Estrutura', 'Organização de arquitetura, layout, conteúdo, dados, integrações e critérios de entrega.'],
    ['03', 'Construção', 'Execução técnica e visual com foco em clareza, performance, manutenção e experiência.'],
    ['04', 'Evolução', 'Ajustes, sustentação, melhorias incrementais e novos ciclos conforme a operação amadurece.']
  ];

  const icons = [LayoutDashboard, Layers3, Workflow, BarChart3, ShieldCheck, Network];

  const siteUrl = 'https://tehkne.com';
  const pageUrl = `${siteUrl}/portfolio/${project.slug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': siteUrl
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Portfólio',
            'item': `${siteUrl}/portfolio`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': project.title,
            'item': pageUrl
          }
        ]
      },
      {
        '@type': 'WebPage',
        'url': pageUrl,
        'name': project.title,
        'description': project.summary,
        'inLanguage': 'pt-BR',
        'isPartOf': {
          '@type': 'WebSite',
          'name': 'Tehkné Solutions',
          'url': siteUrl
        },
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': siteUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Portfólio',
              'item': `${siteUrl}/portfolio`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': project.title,
              'item': pageUrl
            }
          ]
        }
      }
    ]
  };

  return (
    <main className="case-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="section-frame case-hero portfolio-case-hero">
        <div className="case-hero-copy">
          <span className="eyebrow">{project.level} • {project.sector}</span>
          <h1>{project.title}: {custom?.headline ?? `${project.category.toLowerCase()} com participação técnica rastreável.`}</h1>
          <p>{project.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">
            {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>
        <div className="case-visual">
          <div className={`portfolio-case-preview ${project.tone}`}>
            <div className="case-window-bar"><span /><span /><span /></div>
            <div className="portfolio-preview-body">
              <Orbit size={54} />
              <strong>{project.imageLabel}</strong>
              <small>{project.title}</small>
              <div className="portfolio-preview-grid"><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        {metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este projeto demonstra para um novo cliente.</h2>
          <p>{custom?.readingIntro ?? 'Cada case apresenta repertório técnico, tipo de participação, stack, contexto e resultado esperado sem criar confusão de autoria.'}</p>
        </div>
        <div className="case-reading-grid">
          {modules.map((module, index) => {
            const Icon = icons[index] ?? Sparkles;
            return (
              <article className="glass-card case-reading-card" key={module.title}>
                <Icon className="card-icon" size={32} />
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <span className="eyebrow">Método aplicado</span>
          <h2>Um mapa de execução conectado ao contexto do projeto.</h2>
        </div>
        <div className="case-method-map">
          {process.map(([number, title, text]) => (
            <article className="method-step" key={title}>
              <span>{number}</span>
              <CheckCircle2 size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel">
          <span className="eyebrow">Stack e capacidade</span>
          <h2>Experiência apresentada como capital técnico institucional.</h2>
          <p>A Tehkné reúne experiência prática em desenvolvimento, design, WordPress, Next.js, automações, apps, jogos, conteúdo e sustentação. Este case entra como parte de um inventário maior de mais de 7 anos de atuação.</p>
          <div className="os-features">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Arquitetura', 'Design & UX', 'Desenvolvimento', 'Performance', 'Sustentação', 'Evolução'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <ContactForm page={`Case ${project.title}`} context={`case ${project.title}, ${project.category}, ${project.sector}, stack ${project.stack.join(', ')}`} title="Quer criar um projeto parecido?" description="Use este bloco para chamar a Tehkné no WhatsApp com o contexto deste case e iniciar um diagnóstico técnico." />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Próximo passo</span>
          <h2>Vamos transformar sua demanda em um case novo.</h2>
          <p>Conte o que você precisa criar, melhorar ou automatizar. A Tehkné organiza o caminho técnico e comercial para tornar isso real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
