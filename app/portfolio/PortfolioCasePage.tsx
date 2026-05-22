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
    headline: 'um produto operacional para transformar rotina, indicadores e decisao em sistema vivo.',
    readingIntro: 'O Tehkn\u00e9 Flow representa a visao da Tehkn\u00e9 aplicada dentro da propria operacao: organizar projetos, tarefas, contexto, automacoes e indicadores em uma camada unica de gestao digital.',
    modules: [
      { title: 'Problema operacional', text: 'Tarefas, contexto, decisoes e prioridades ficavam distribuidos entre conversas, documentos, planilhas e repositorios.' },
      { title: 'Arquitetura de produto', text: 'A solucao foi pensada como painel modular para concentrar gestao, visao de projeto, governanca e evolucao.' },
      { title: 'Experiencia e interface', text: 'UI dark premium, leitura rapida, cards de status, hierarquia visual e base preparada para dashboards e agentes.' },
      { title: 'Evolucao tecnica', text: 'Produto interno com potencial de integrar analytics, automacoes, IA, documentacao viva e rotinas de operacao.' }
    ],
    process: [
      ['01', 'Mapa da operacao', 'Levantamento dos pontos soltos: tarefas, indicadores, demandas, arquivos, prioridades e decisoes.'],
      ['02', 'Modelo de produto', 'Definicao de modulos, entidades, fluxos, visoes e criterios para transformar rotina em sistema.'],
      ['03', 'Interface operacional', 'Criacao de uma experiencia visual clara para leitura rapida, controle e acompanhamento de evolucao.'],
      ['04', 'Base evolutiva', 'Estrutura preparada para automacoes, agentes, dados e melhorias incrementais.']
    ]
  },
  'vacina-one': {
    headline: 'uma presenca digital confiavel para saude, vacinacao, conteudo e expansao comercial.',
    readingIntro: 'O Vacina One pede clareza, cuidado e confianca. O case demonstra como uma marca de saude pode organizar servicos, unidades, calendario, conteudo educativo e oportunidade de franquia em uma experiencia objetiva.',
    modules: [
      { title: 'Confianca para saude', text: 'A comunicacao precisa transmitir seguranca, acolhimento e clareza para familias, adultos, empresas e franqueados.' },
      { title: 'Arquitetura institucional', text: 'Menu, paginas, conteudo e chamadas foram estruturados para facilitar decisao, contato e expansao.' },
      { title: 'Base em Next.js', text: 'Projeto moderno, rapido e preparado para crescer com novas paginas, blog, unidades e campanhas.' },
      { title: 'Conteudo e conversao', text: 'A estrutura permite educacao em saude, agendamento, relacionamento e posicionamento de marca.' }
    ],
    process: [
      ['01', 'Contexto de saude', 'Entendimento do publico, servicos, linguagem, confianca e pontos de contato.'],
      ['02', 'Arquitetura de paginas', 'Organizacao de Home, unidades, vacinas, calendario, empresas, blog e contato.'],
      ['03', 'Design institucional', 'Visual limpo, humano e responsivo para transmitir cuidado e credibilidade.'],
      ['04', 'Expansao futura', 'Base preparada para conteudo, franquias, campanhas e evolucao do produto digital.']
    ]
  },
  'unti-digital': {
    headline: 'uma parceria tecnica continua para sustentar sites, plataformas, integracoes e operacao digital.',
    readingIntro: 'A UNTI Digital entra no portfolio como ecossistema parceiro. A leitura correta e de braco tecnico: apoio recorrente em arquitetura, desenvolvimento, manutencao, performance, integracoes e projetos para clientes finais.',
    modules: [
      { title: 'Braco tecnico', text: 'Atuacao junto a uma operacao digital que demanda velocidade, confiabilidade e repertorio tecnico recorrente.' },
      { title: 'Projetos e clientes', text: 'Experiencia acumulada em sites, plataformas, WordPress, Next.js, automacoes, APIs e manutencao.' },
      { title: 'Governanca editorial', text: 'A narrativa separa parceria tecnica, participacao e ecossistema para evitar confusao de autoria.' },
      { title: 'Operacao em escala', text: 'O valor esta na continuidade: diagnostico, execucao, suporte, ajustes e evolucao de multiplos projetos.' }
    ],
    process: [
      ['01', 'Demanda recorrente', 'Entrada por necessidades de clientes, manutencao, melhorias ou novos projetos digitais.'],
      ['02', 'Planejamento tecnico', 'Definicao de stack, abordagem, prazo, riscos e pontos de integracao.'],
      ['03', 'Execucao e suporte', 'Implementacao, ajustes, revisoes, performance e sustentacao tecnica.'],
      ['04', 'Evolucao do ecossistema', 'Aprendizados reaplicados em novos projetos, automacoes e processos.']
    ]
  },
  'savol-seminovos': {
    headline: 'um catalogo automotivo dinamico para organizar veiculos, filtros, unidades e conversao.',
    readingIntro: 'Savol Seminovos demonstra WordPress avancado aplicado a uma operacao comercial real: listagem de veiculos, dados dinamicos, filtros, cards, precos, unidades e rotina de manutencao.',
    modules: [
      { title: 'Operacao automotiva', text: 'O desafio era organizar informacoes comerciais de veiculos em uma experiencia editavel e facil de navegar.' },
      { title: 'WordPress dinamico', text: 'Uso de estrutura avancada para templates, campos, filtros, cards e manutencao de catalogo.' },
      { title: 'Busca e decisao', text: 'A pagina precisa ajudar o usuario a comparar modelos, valores, ano, quilometragem e unidades.' },
      { title: 'Sustentacao continua', text: 'Projeto com natureza operacional: dados mudam, ofertas mudam e a base precisa permanecer confiavel.' }
    ],
    process: [
      ['01', 'Inventario comercial', 'Entendimento dos campos, marcas, modelos, unidades, precos e regras de exibicao.'],
      ['02', 'Modelagem no WordPress', 'Organizacao de campos, templates, filtros e componentes editaveis.'],
      ['03', 'Experiencia de catalogo', 'Cards, busca, ordenacao e leitura comercial clara para o usuario.'],
      ['04', 'Manutencao e escala', 'Base preparada para atualizacoes de estoque, ajustes e evolucao continua.']
    ]
  },
  'beggin': {
    headline: 'uma experiencia de marca e produto para comunicar valor, visual e narrativa comercial.',
    readingIntro: 'Beggin demonstra a capacidade de unir WordPress, produto, visual forte, conteudo comercial e refinamento de experiencia para uma marca que depende de percepcao e apresentacao.',
    modules: [
      { title: 'Marca e produto', text: 'O foco esta em transformar portfolio de produtos, historia e diferenciais em uma experiencia visual memoravel.' },
      { title: 'Implementacao editavel', text: 'WordPress e Elementor permitem manutencao de conteudo, paginas e campanhas com autonomia operacional.' },
      { title: 'Assets e performance', text: 'Ajustes visuais, organizacao de imagens, recortes e otimizacoes sustentam uma navegacao mais eficiente.' },
      { title: 'Narrativa comercial', text: 'O site precisa vender percepcao de valor, qualidade de produto e identidade da marca.' }
    ],
    process: [
      ['01', 'Leitura de marca', 'Entendimento de identidade, produtos, apelo visual, tom de comunicacao e pontos de venda.'],
      ['02', 'Estrutura visual', 'Organizacao de paginas, assets, blocos e experiencia editorial.'],
      ['03', 'WordPress aplicado', 'Implementacao e ajustes para manter visual, conteudo e operacao editaveis.'],
      ['04', 'Refinamento continuo', 'Melhorias de assets, performance, responsividade e sustentacao tecnica.']
    ]
  }
};

export function PortfolioCasePage({ slug }: Props) {
  const project = getPortfolioCase(slug);

  if (!project) {
    notFound();
  }

  const custom = projectCopy[project.slug];
  const pageWhatsApp = whatsAppHref(`Ol\u00e1, Tehkn\u00e9! Vim pelo case ${project.title} no portf\u00f3lio e quero conversar sobre um projeto parecido. Quero entender escopo, arquitetura, investimento e pr\u00f3ximos passos.`);

  const metrics = [
    [project.level, 'n\u00edvel editorial'],
    [project.category, 'tipo de entrega'],
    [project.sector, 'segmento'],
    [project.status, 'status no portf\u00f3lio']
  ];

  const fallbackModules = [
    { title: 'Contexto', text: project.challenge },
    { title: 'Arquitetura', text: 'Organiza\u00e7\u00e3o de escopo, p\u00e1ginas, componentes, conte\u00fado, fluxos, integra\u00e7\u00f5es e pontos de evolu\u00e7\u00e3o.' },
    { title: 'Execu\u00e7\u00e3o', text: project.delivery },
    { title: 'Resultado', text: project.outcome }
  ];

  const modules = custom?.modules ?? fallbackModules;
  const process = custom?.process ?? [
    ['01', 'Diagn\u00f3stico', 'Entendimento do objetivo, p\u00fablico, contexto t\u00e9cnico, restri\u00e7\u00f5es e oportunidade principal.'],
    ['02', 'Estrutura', 'Organiza\u00e7\u00e3o de arquitetura, layout, conte\u00fado, dados, integra\u00e7\u00f5es e crit\u00e9rios de entrega.'],
    ['03', 'Constru\u00e7\u00e3o', 'Execu\u00e7\u00e3o t\u00e9cnica e visual com foco em clareza, performance, manuten\u00e7\u00e3o e experi\u00eancia.'],
    ['04', 'Evolu\u00e7\u00e3o', 'Ajustes, sustenta\u00e7\u00e3o, melhorias incrementais e novos ciclos conforme a opera\u00e7\u00e3o amadurece.']
  ];

  const icons = [LayoutDashboard, Layers3, Workflow, BarChart3, ShieldCheck, Network];

  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero">
        <div className="case-hero-copy">
          <span className="eyebrow">{project.level} • {project.sector}</span>
          <h1>{project.title}: {custom?.headline ?? `${project.category.toLowerCase()} com participa\u00e7\u00e3o t\u00e9cnica rastre\u00e1vel.`}</h1>
          <p>{project.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portf\u00f3lio <ArrowUpRight size={16} /></a>
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
          <p>{custom?.readingIntro ?? 'Cada case apresenta repert\u00f3rio t\u00e9cnico, tipo de participa\u00e7\u00e3o, stack, contexto e resultado esperado sem criar confus\u00e3o de autoria.'}</p>
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
          <span className="eyebrow">M\u00e9todo aplicado</span>
          <h2>Um mapa de execu\u00e7\u00e3o conectado ao contexto do projeto.</h2>
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
          <h2>Experi\u00eancia apresentada como capital t\u00e9cnico institucional.</h2>
          <p>A Tehkn\u00e9 re\u00fane experi\u00eancia pr\u00e1tica em desenvolvimento, design, WordPress, Next.js, automa\u00e7\u00f5es, apps, jogos, conte\u00fado e sustenta\u00e7\u00e3o. Este case entra como parte de um invent\u00e1rio maior de mais de 7 anos de atua\u00e7\u00e3o.</p>
          <div className="os-features">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {['Arquitetura', 'Design & UX', 'Desenvolvimento', 'Performance', 'Sustenta\u00e7\u00e3o', 'Evolu\u00e7\u00e3o'].map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <ContactForm page={`Case ${project.title}`} context={`case ${project.title}, ${project.category}, ${project.sector}, stack ${project.stack.join(', ')}`} title="Quer criar um projeto parecido?" description="Use este bloco para chamar a Tehkn\u00e9 no WhatsApp com o contexto deste case e iniciar um diagn\u00f3stico t\u00e9cnico." />

      <section className="final-cta">
        <div>
          <span className="eyebrow">Pr\u00f3ximo passo</span>
          <h2>Vamos transformar sua demanda em um case novo.</h2>
          <p>Conte o que voc\u00ea precisa criar, melhorar ou automatizar. A Tehkn\u00e9 organiza o caminho t\u00e9cnico e comercial para tornar isso real.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagn\u00f3stico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver solu\u00e7\u00f5es <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}

export function getAllPortfolioSlugs() {
  return portfolioCases.map((item) => ({ slug: item.slug }));
}
