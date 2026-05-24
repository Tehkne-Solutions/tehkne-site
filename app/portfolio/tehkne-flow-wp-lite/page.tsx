import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getPortfolioMetadata } from '../portfolio-data';

const siteUrl = 'https://tehkne-flow-wp.page.gd/';

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
  ['03', 'Interface de produto', 'Criação de um app shell com sidebar, cards, estados vazios, dashboards, kanban e suporte a tema claro/escuro.'],
  ['04', 'Governança de acesso', 'Bloqueio do painel WP para usuários não administrativos e direcionamento da operação para páginas próprias do sistema.' ]
];

const modules = ['Dashboard', 'Minhas Demandas', 'Clientes', 'Projetos', 'Tarefas', 'Kanban', 'Processos', 'Time Tracker', 'Activity Log', 'Central WP'];

function FlowAppPreview({ mode = 'light' }: { mode?: 'light' | 'dark' }) {
  const dark = mode === 'dark';
  return (
    <div style={{ borderRadius: 22, overflow: 'hidden', border: dark ? '1px solid rgba(56,189,248,.22)' : '1px solid rgba(15,23,42,.10)', background: dark ? '#050b14' : '#f5f7fb', boxShadow: dark ? '0 24px 80px rgba(0,0,0,.55)' : '0 24px 80px rgba(15,23,42,.16)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', minHeight: 340 }}>
        <aside style={{ padding: 18, background: dark ? '#02070c' : '#ffffff', borderRight: dark ? '1px solid rgba(148,163,184,.12)' : '1px solid rgba(15,23,42,.08)' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 22 }}><b style={{ display: 'grid', placeItems: 'center', width: 34, height: 34, borderRadius: 10, background: dark ? '#10223d' : '#1d4ed8', color: '#fff', fontSize: 13 }}>TF</b><span style={{ color: dark ? '#f8fafc' : '#0f172a', fontWeight: 800, lineHeight: 1.1 }}>Tehkné Flow<br /><small style={{ color: dark ? '#94a3b8' : '#64748b', fontWeight: 500 }}>WP LITE v0.3.1</small></span></div>
          {['DB Dashboard', 'ME Minhas Demandas', 'CL Clientes', 'PR Projetos', 'TK Tarefas', 'KB Kanban'].map((item, index) => <div key={item} style={{ padding: '9px 10px', borderRadius: 12, marginBottom: 6, color: index === 1 ? '#0891b2' : dark ? '#cbd5e1' : '#64748b', background: index === 1 ? dark ? 'rgba(8,145,178,.13)' : '#e0f2fe' : 'transparent', fontSize: 12 }}>{item}</div>)}
        </aside>
        <section style={{ padding: 22 }}>
          <div style={{ borderRadius: 18, padding: '14px 18px', marginBottom: 16, background: dark ? '#0f172a' : '#fff', border: dark ? '1px solid rgba(148,163,184,.12)' : '1px solid rgba(15,23,42,.08)' }}><small style={{ letterSpacing: 2, color: dark ? '#94a3b8' : '#64748b' }}>TEHKNÉ FLOW WP LITE</small><h3 style={{ margin: '4px 0 0', color: dark ? '#f8fafc' : '#0f172a', fontSize: 24 }}>Minhas Demandas</h3><p style={{ margin: '4px 0 0', color: dark ? '#94a3b8' : '#64748b' }}>Projetos, tarefas e subtarefas onde você é responsável ou envolvido.</p></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 14 }}>
            {['Tarefas', 'Subtarefas', 'Projetos', 'Time Tracker'].map((label) => <div key={label} style={{ borderRadius: 18, padding: 16, background: dark ? '#111827' : '#fff', border: dark ? '1px solid rgba(148,163,184,.12)' : '1px solid rgba(15,23,42,.08)' }}><strong style={{ display: 'block', color: '#0891b2', fontSize: 18 }}>0</strong><b style={{ color: dark ? '#f8fafc' : '#0f172a' }}>{label}</b><p style={{ color: dark ? '#94a3b8' : '#64748b', fontSize: 11 }}>Acompanhe a operação.</p></div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}><div style={{ borderRadius: 18, padding: 20, minHeight: 90, textAlign: 'center', background: dark ? '#0f172a' : '#fff', border: '1px dashed rgba(148,163,184,.34)', color: dark ? '#cbd5e1' : '#475569' }}><b>Nenhuma tarefa atribuída</b><p>Quando você for responsável, ela aparecerá aqui.</p></div><div style={{ borderRadius: 18, padding: 20, minHeight: 90, textAlign: 'center', background: dark ? '#0f172a' : '#fff', border: '1px dashed rgba(148,163,184,.34)', color: dark ? '#cbd5e1' : '#475569' }}><b>Nenhuma subtarefa atribuída</b><p>Use subtarefas para dividir a execução diária.</p></div></div>
        </section>
      </div>
    </div>
  );
}

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
        <div className="case-visual"><FlowAppPreview mode="light" /></div>
      </section>

      <section className="metrics section-frame compact">
        <div><strong>Full WP</strong><span>arquitetura</span></div>
        <div><strong>Dark / Light</strong><span>temas</span></div>
        <div><strong>Kanban</strong><span>fluxo visual</span></div>
        <div><strong>Permissões</strong><span>acesso por perfil</span></div>
      </section>

      <section className="section-frame case-reading-section-tight">
        <div className="section-heading"><span className="eyebrow">Leitura do case</span><h2>O que este sistema demonstra para um novo cliente.</h2><p>Este case mostra que a Tehkné domina WordPress como plataforma de produto: não apenas páginas, mas sistemas internos completos com interface própria, regras de acesso e operação diária.</p></div>
        <div className="case-reading-grid case-reading-grid-balanced">{cards.map((card) => <article className="glass-card case-reading-card case-reading-card-balanced" key={card.title}><CheckCircle2 className="card-icon" size={30} /><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>
      </section>

      <section className="section-frame case-full-showcase-section">
        <div className="section-heading"><span className="eyebrow">Telas do app</span><h2>Interface operacional em light e dark mode.</h2><p>Em vez de exibir tela de login, o case apresenta a experiência real do sistema após acesso: sidebar, módulos, cards, estados vazios e áreas de gestão.</p></div>
        <div style={{ display: 'grid', gap: 24 }}><FlowAppPreview mode="light" /><FlowAppPreview mode="dark" /></div>
      </section>

      <section className="section-frame">
        <div className="section-heading"><span className="eyebrow">Método aplicado</span><h2>Da lógica de gestão ao produto WordPress operacional.</h2></div>
        <div className="case-method-map">{process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><CheckCircle2 size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section-frame os-section">
        <div className="os-panel"><span className="eyebrow">Módulos do sistema</span><h2>Fluxo operacional inspirado em sistemas como Operand, adaptado para WordPress.</h2><p>O sistema organiza rotina de produção, demanda e gestão em páginas próprias, mantendo o admin WordPress restrito ao administrador.</p><div className="os-features">{modules.map((item) => <span key={item}>{item}</span>)}</div></div>
        <div className="stack-cloud">{stack.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <ContactForm page="Case Tehkné Flow WP Lite" context="sistema full WordPress, gestão de projetos, kanban, permissões, app shell, dark mode, light mode e produto interno" title="Quer um sistema operacional dentro do WordPress?" description="Use este bloco para iniciar um diagnóstico sobre sistema interno, WordPress avançado, permissões, gestão, kanban e operação digital." />
    </main>
  );
}
