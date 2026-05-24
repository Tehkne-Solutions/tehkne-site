import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getPortfolioMetadata } from '../portfolio-data';
import CaseScreens from '../CaseScreens';

const siteUrl = 'https://tehkne-flow-wp.page.gd/';
const heroShot = `https://s0.wp.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=1500`;

const stack = ['WordPress', 'PHP', 'Tema próprio', 'Plugin próprio', 'REST API', 'CPTs', 'Permissões', 'Dark/Light Mode'];

const cards = [
  {
    title: 'Sistema full WordPress',
    text: 'Tehkné Flow WP Lite é um sistema operacional de gestão construído em WordPress, com tema próprio para a interface e plugin próprio para domínio, dados, permissões e regras.'
  },
  {
    title: 'App shell operacional',
    text: 'O sistema organiza dashboard, minhas demandas, clientes, projetos, tarefas, kanban, processos, time tracker, activity log e central WP em uma experiência única.'
  },
  {
    title: 'Permissões por perfil',
    text: 'Somente o administrador acessa o painel WordPress. Gerentes, responsáveis e usuários operacionais visualizam e operam pelas páginas do sistema, sem entrar no admin.'
  },
  {
    title: 'Dark e Light Mode',
    text: 'A interface possui alternância de tema claro e escuro, mantendo usabilidade, leitura, contraste e consistência visual em diferentes rotinas de uso.'
  }
];

const process = [
  ['01', 'Arquitetura WP', 'Separação entre tema de interface e plugin de regras, dados, CPTs, endpoints, permissões e lógica operacional.'],
  ['02', 'Modelagem operacional', 'Organização das entidades: clientes, projetos, tarefas, subtarefas, kanban, processos, sessões de tempo e logs.'],
  ['03', 'Interface de produto', 'Criação de um app shell com sidebar, cards, estados vazios, dashboards, listagens, kanban e suporte a tema claro/escuro.'],
  ['04', 'Governança de acesso', 'Bloqueio do painel WP para usuários não administrativos e direcionamento da operação para páginas próprias do sistema.' ]
];

export const metadata = getPortfolioMetadata('tehkne-flow-wp-lite') ?? {
  title: 'Case: Tehkné Flow WP Lite | Tehkné Solutions',
  description: 'Sistema full WordPress para gestão de projetos, tarefas, kanban, clientes, processos, time tracker, activity log, permissões e dark/light mode.'
};

export default function TehkneFlowWpLiteCase() {
  return (
    <main className="case-page">
      <section className="section-frame case-hero portfolio-case-hero portfolio-case-hero-rich">
        <div className="case-hero-copy">
          <span className="eyebrow">Produto Tehkné • Full WordPress</span>
          <h1>Tehkné Flow WP Lite: gestão de projetos, demandas, kanban e operação dentro do WordPress.</h1>
          <p>Sistema próprio em WordPress para gestão operacional, com páginas de app, controle de permissões, dark/light mode, kanban, projetos, tarefas, clientes, processos, time tracker e activity log.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="#contato-form">Quero algo parecido <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href={siteUrl} target="_blank" rel="noreferrer">Abrir sistema <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Voltar ao portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="case-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="case-visual">
          <div className="portfolio-case-preview portfolio-real-hero-preview cyan">
            <div className="case-window-bar"><span /><span /><span /></div>
            <img src={heroShot} alt="Print do Tehkné Flow WP Lite" loading="eager" />
            <div className="portfolio-real-hero-caption"><span>Preview do sistema</span><strong>Tehkné Flow WP Lite</strong></div>
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>Full WP</strong><span>arquitetura</span></div>
        <div><strong>Dark / Light</strong><span>temas</span></div>
        <div><strong>Kanban</strong><span>fluxo visual</span></div>
        <div><strong>Permissões</strong><span>acesso por perfil</span></div>
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading">
          <span className="eyebrow">Leitura do case</span>
          <h2>O que este sistema demonstra para um novo cliente.</h2>
          <p>Este case mostra que a Tehkné domina WordPress como plataforma de produto: não apenas páginas, mas sistemas internos completos com interface própria, regras de acesso e operação diária.</p>
        </div>
        <div className="case-reading-grid case-reading-grid-balanced">
          {cards.map((card) => <article className="glass-card case-reading-card case-reading-card-balanced" key={card.title}><CheckCircle2 className="card-icon" size={30} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </section>

      <CaseScreens title="Tehkné Flow WP Lite" url={siteUrl} />

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Da lógica de gestão ao produto WordPress operacional.</h2></div>
        <div className="case-method-map">{process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel"><span className="eyebrow">Módulos do sistema</span><h2>Fluxo operacional inspirado em sistemas como Operand, adaptado para WordPress.</h2><p>O sistema organiza rotina de produção, demanda e gestão em páginas próprias, mantendo o admin WordPress restrito ao administrador.</p><div className="os-features">{['Dashboard', 'Minhas Demandas', 'Clientes', 'Projetos', 'Tarefas', 'Kanban', 'Processos', 'Time Tracker', 'Activity Log', 'Central WP'].map((item) => <span key={item}>{item}</span>)}</div></div>
        <div className="stack-cloud">{stack.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <ContactForm page="Case Tehkné Flow WP Lite" context="sistema full WordPress, gestão de projetos, kanban, permissões, app shell, dark mode, light mode e produto interno" title="Quer um sistema operacional dentro do WordPress?" description="Use este bloco para iniciar um diagnóstico sobre sistema interno, WordPress avançado, permissões, gestão, kanban e operação digital." />
    </main>
  );
}
