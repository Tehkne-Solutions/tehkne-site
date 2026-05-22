import { ArrowUpRight, Bot, CheckCircle2, Code2, Database, Gauge, GitBranch, LifeBuoy, Network, SearchCheck, ShieldCheck, Sparkles, Workflow, Wrench, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

const cases = [
  {
    icon: SearchCheck,
    slug: 'diagnostico-arquitetura',
    eyebrow: 'Case 01 · Diagnóstico e arquitetura',
    title: 'Quando a ideia existe, mas ainda não virou escopo claro.',
    summary: 'Transformamos briefing, objetivos e dúvidas em um mapa técnico executável.',
    pain: 'Sem arquitetura, cada pessoa entende o projeto de um jeito e a execução vira retrabalho.',
    approach: 'Mapeamos escopo, stack, módulos, riscos, integrações, fases e critérios de aceite.',
    deliverables: ['Mapa técnico', 'Escopo por fases', 'Stack recomendada', 'Roadmap', 'Riscos e dependências'],
    result: ['clareza', 'prioridade', 'menos retrabalho'],
    stack: ['GIP', 'Roadmap', 'Arquitetura', 'UX Flow']
  },
  {
    icon: Code2,
    slug: 'sites-plataformas',
    eyebrow: 'Case 02 · Sites e plataformas',
    title: 'Quando a empresa precisa de presença digital com estrutura real.',
    summary: 'Criamos sites, landing pages, portais e experiências digitais com performance e base de evolução.',
    pain: 'Um site bonito não sustenta crescimento se não tiver arquitetura, SEO, componentes e fluxo comercial.',
    approach: 'Tratamos a entrega como produto: páginas, jornada, conteúdo, componentes, integração e deploy.',
    deliverables: ['Home e páginas internas', 'Landing pages', 'Componentes', 'SEO técnico', 'Formulários e CRM'],
    result: ['publicável', 'premium', 'escalável'],
    stack: ['Next.js', 'React', 'Vercel', 'Analytics']
  },
  {
    icon: Wrench,
    slug: 'wordpress-avancado',
    eyebrow: 'Case 03 · WordPress avançado',
    title: 'Quando o WordPress precisa deixar de ser improviso visual.',
    summary: 'Organizamos WordPress com conteúdo dinâmico, templates, plugins, performance e painel mais útil.',
    pain: 'WordPress com remendos fica lento, difícil de editar e dependente de manutenção emergencial.',
    approach: 'Separamos conteúdo, layout, campos, regras e integrações para facilitar operação e manutenção.',
    deliverables: ['CPTs', 'Templates', 'Plugins e snippets', 'Catálogos e filtros', 'Performance'],
    result: ['editável', 'organizado', 'manutenível'],
    stack: ['WordPress', 'PHP', 'Elementor', 'JetEngine']
  },
  {
    icon: Database,
    slug: 'sistemas-dashboards',
    eyebrow: 'Case 04 · Sistemas e dashboards',
    title: 'Quando o negócio precisa parar de depender de planilhas.',
    summary: 'Desenhamos sistemas, dashboards, áreas internas e módulos conectados à operação real.',
    pain: 'Informações espalhadas em planilhas, mensagens e e-mails reduzem velocidade e controle.',
    approach: 'Centralizamos dados, telas, permissões, fluxos e integrações em uma base evolutiva.',
    deliverables: ['Dashboard', 'Área logada', 'Modelagem de dados', 'APIs', 'Permissões'],
    result: ['centralização', 'controle', 'decisão rápida'],
    stack: ['Next.js', 'APIs', 'Banco de dados', 'GitHub']
  },
  {
    icon: Bot,
    slug: 'ia-automacoes',
    eyebrow: 'Case 05 · IA e automações',
    title: 'Quando existe trabalho repetitivo demais.',
    summary: 'Criamos automações, agentes e integrações para reduzir operação manual e acelerar respostas.',
    pain: 'Automação sem arquitetura vira fluxo frágil; IA sem processo vira apenas hype.',
    approach: 'Mapeamos entradas, saídas, validações e ferramentas antes de automatizar.',
    deliverables: ['Fluxos n8n', 'Agentes de IA', 'Webhooks', 'Integrações', 'Documentação'],
    result: ['menos manual', 'mais velocidade', 'processo inteligente'],
    stack: ['n8n', 'APIs', 'CRM', 'Notion']
  },
  {
    icon: ShieldCheck,
    slug: 'sustentacao-evolucao',
    eyebrow: 'Case 06 · Sustentação e evolução',
    title: 'Quando o projeto já está no ar, mas precisa continuar vivo.',
    summary: 'Mantemos, corrigimos e evoluímos sites, sistemas e operações digitais.',
    pain: 'Depois do deploy, projetos sem dono técnico acumulam erro, lentidão e inconsistência.',
    approach: 'Criamos rotina de suporte, backlog, melhoria, documentação e novas features por impacto.',
    deliverables: ['Suporte', 'Correções', 'Backlog', 'Performance', 'Documentação'],
    result: ['estabilidade', 'menos risco', 'evolução'],
    stack: ['Git', 'QA', 'Vercel', 'WordPress']
  }
];

const process = [
  ['01', 'Diagnóstico', 'Entendemos negócio, objetivo, urgência e operação.'],
  ['02', 'Arquitetura', 'Transformamos intenção em escopo, stack e prioridades.'],
  ['03', 'Execução', 'Construímos em ciclos com validação e versionamento.'],
  ['04', 'Evolução', 'Publicamos, sustentamos, medimos e melhoramos.']
];

export const metadata = {
  title: 'Soluções | Tehkné Solutions',
  description: 'Soluções da Tehkné organizadas por casos de uso: arquitetura, sites, WordPress, sistemas, IA, automações e sustentação.'
};

export default function SolucoesPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.solucoes);

  return (
    <main>
      <section className="section-frame solutions-hero solutions-hero-pro solutions-hero-clean">
        <div className="section-heading solutions-hero-content">
          <span className="eyebrow">Soluções por caso de uso</span>
          <h1>Escolha pelo problema que precisa resolver, não pelo nome da tecnologia.</h1>
          <p>A página foi reorganizada em seções claras: diagnóstico, site ou plataforma, WordPress, sistema interno, IA e automações, sustentação e evolução.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#cases-solucoes">Ver casos de uso <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="solutions-hero-panel solutions-orbit-panel" aria-hidden="true">
          <div className="solutions-orbit-core"><Sparkles size={34} /></div>
          <div className="solutions-orbit-list">
            {['Diagnóstico', 'Produto', 'WordPress', 'Sistemas', 'IA', 'Evolução'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact solutions-metrics">
        <div><strong>06</strong><span>casos de uso principais</span></div>
        <div><strong>GIP</strong><span>da descoberta à evolução</span></div>
        <div><strong>360°</strong><span>arquitetura, design, código e suporte</span></div>
        <div><strong>IA</strong><span>automação aplicada com contexto</span></div>
      </section>

      <section className="section-frame compact solutions-index solutions-index-clean">
        {cases.map((item) => <a href={`#${item.slug}`} key={item.slug}>{item.eyebrow}</a>)}
      </section>

      <section id="cases-solucoes" className="solutions-case-list">
        {cases.map((item, index) => {
          const Icon = item.icon;
          const caseWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pela página de Soluções e me interessei pelo ${item.eyebrow}. Quero entender como aplicar isso no meu projeto.`);
          return (
            <section className="section-frame solution-case-section" id={item.slug} key={item.slug}>
              <div className="solution-case-heading">
                <span className="solution-case-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="solution-case-icon"><Icon size={30} /></div>
                <div>
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                </div>
              </div>
              <div className="solution-case-grid">
                <article className="solution-case-card"><span>Problema</span><p>{item.pain}</p></article>
                <article className="solution-case-card"><span>Como resolvemos</span><p>{item.approach}</p></article>
                <article className="solution-case-card deliverables"><span>Entregas possíveis</span><ul>{item.deliverables.map((deliverable) => <li key={deliverable}><CheckCircle2 size={15} />{deliverable}</li>)}</ul></article>
                <article className="solution-case-card result"><span>Resultado esperado</span><div className="os-features solution-outcomes">{item.result.map((result) => <span key={result}>{result}</span>)}</div><div className="case-stack solution-case-stack">{item.stack.map((stack) => <span key={stack}>{stack}</span>)}</div><a className="text-link" href={caseWhatsApp} target="_blank" rel="noreferrer">Conversar sobre este caso <ArrowUpRight size={15} /></a></article>
              </div>
            </section>
          );
        })}
      </section>

      <section className="section-frame method-section solutions-method-clean">
        <div className="section-heading">
          <span className="eyebrow">Como saímos da bagunça</span>
          <h2>Um fluxo simples para transformar demanda em execução.</h2>
          <p>O trabalho passa por quatro momentos: diagnóstico, arquitetura, execução e evolução.</p>
        </div>
        <div className="method-line solutions-process-clean">
          {process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><Workflow size={22} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-frame solutions-proof-section solutions-proof-clean">
        <div className="section-heading inline"><div><span className="eyebrow">Stack e operação</span><h2>A tecnologia entra depois que o problema está claro.</h2><p>Next.js, React, WordPress, PHP, Python, Flutter, APIs, n8n, GitHub, Vercel, CRM, ERP e IA são ferramentas. A solução nasce da arquitetura correta.</p></div></div>
        <div className="solutions-proof-grid">
          <article><Gauge size={24} /><h3>Performance</h3><p>Entrega pensada para carregar bem, converter e sustentar evolução.</p></article>
          <article><Network size={24} /><h3>Integrações</h3><p>Formulários, CRM, APIs, automações e dados entram no desenho técnico.</p></article>
          <article><GitBranch size={24} /><h3>Governança</h3><p>Versionamento, documentação e critérios reduzem ruído e retrabalho.</p></article>
          <article><LifeBuoy size={24} /><h3>Sustentação</h3><p>Depois do deploy, o projeto segue com correções, suporte e melhorias.</p></article>
        </div>
      </section>

      <ContactForm page="Soluções" context="diagnóstico e escolha do melhor caso de uso: arquitetura, site/plataforma, WordPress, sistema, IA/automações ou sustentação" title="Qual caso parece mais próximo da sua demanda?" description="Use este bloco para iniciar uma conversa contextualizada. A Tehkné ajuda a transformar o problema em arquitetura, escopo e próximos passos." />

      <section className="final-cta">
        <div><span className="eyebrow">Diagnóstico técnico</span><h2>Vamos transformar sua demanda em uma solução organizada?</h2><p>Conte o que precisa criar, melhorar ou automatizar. A primeira entrega é clareza.</p></div>
        <div className="hero-actions"><a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <Zap size={16} /></a><a className="btn btn-secondary" href="/portfolio">Ver portfólio <ArrowUpRight size={16} /></a></div>
      </section>
    </main>
  );
}
