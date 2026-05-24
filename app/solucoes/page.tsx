import { ArrowUpRight, Bot, CheckCircle2, Code2, Database, Gauge, GitBranch, LifeBuoy, Network, SearchCheck, ShieldCheck, Sparkles, Workflow, Wrench, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

const cases = [
  {
    icon: SearchCheck,
    slug: 'diagnostico-arquitetura',
    eyebrow: 'Oferta 01 · Diagnóstico e arquitetura',
    title: 'Para quando você sabe que precisa de tecnologia, mas ainda não sabe exatamente o que construir.',
    summary: 'Transformamos ideia, briefing, urgência e dúvidas em escopo técnico, roadmap e plano de execução.',
    pain: 'Sem diagnóstico, o projeto começa no chute: orçamento indefinido, escopo mudando toda hora e decisões tomadas por ansiedade.',
    approach: 'Mapeamos operação, objetivo comercial, público, funcionalidades, riscos, integrações, prioridades e critérios de aceite.',
    deliverables: ['Mapa técnico', 'Escopo por fases', 'Stack recomendada', 'Roadmap', 'Riscos e dependências'],
    result: ['clareza', 'prioridade', 'menos retrabalho'],
    stack: ['GIP', 'Roadmap', 'Arquitetura', 'UX Flow']
  },
  {
    icon: Code2,
    slug: 'sites-plataformas',
    eyebrow: 'Oferta 02 · Sites e plataformas',
    title: 'Para quando o site precisa deixar de ser vitrine bonita e virar ferramenta comercial.',
    summary: 'Criamos sites, landing pages, portais e plataformas com copy, SEO, performance, componentes e fluxo de conversão.',
    pain: 'Um site que só parece bonito, mas não explica valor, não gera confiança e não facilita contato, vira custo parado.',
    approach: 'Tratamos a entrega como produto: posicionamento, páginas, jornada, conteúdo, interface, formulário, analytics e deploy.',
    deliverables: ['Home e páginas internas', 'Landing pages', 'Componentes', 'SEO técnico', 'Formulários e CRM'],
    result: ['publicável', 'convincente', 'escalável'],
    stack: ['Next.js', 'React', 'Vercel', 'Analytics']
  },
  {
    icon: Wrench,
    slug: 'wordpress-avancado',
    eyebrow: 'Oferta 03 · WordPress avançado',
    title: 'Para quando o WordPress precisa deixar de ser remendo e virar sistema editável.',
    summary: 'Organizamos WordPress com conteúdo dinâmico, templates, CPTs, plugins, performance e painel mais útil.',
    pain: 'WordPress montado no improviso fica lento, difícil de editar, cheio de dependências e caro de manter.',
    approach: 'Separamos conteúdo, layout, campos, regras, componentes e integrações para facilitar operação e evolução.',
    deliverables: ['CPTs', 'Templates', 'Plugins e snippets', 'Catálogos e filtros', 'Performance'],
    result: ['editável', 'organizado', 'manutenível'],
    stack: ['WordPress', 'PHP', 'Elementor', 'JetEngine']
  },
  {
    icon: Database,
    slug: 'sistemas-dashboards',
    eyebrow: 'Oferta 04 · Sistemas e dashboards',
    title: 'Para quando sua operação cresceu mais do que suas planilhas conseguem acompanhar.',
    summary: 'Desenhamos sistemas, dashboards, áreas internas e módulos conectados à operação real.',
    pain: 'Informações espalhadas em planilhas, mensagens e e-mails reduzem velocidade, controle e qualidade da decisão.',
    approach: 'Centralizamos dados, telas, permissões, fluxos, indicadores e integrações em uma base evolutiva.',
    deliverables: ['Dashboard', 'Área logada', 'Modelagem de dados', 'APIs', 'Permissões'],
    result: ['centralização', 'controle', 'decisão rápida'],
    stack: ['Next.js', 'APIs', 'Banco de dados', 'GitHub']
  },
  {
    icon: Bot,
    slug: 'ia-automacoes',
    eyebrow: 'Oferta 05 · IA e automações',
    title: 'Para quando existe trabalho repetitivo demais e pouca inteligência operacional.',
    summary: 'Criamos automações, agentes e integrações para reduzir trabalho manual e acelerar resposta, venda e operação.',
    pain: 'Automação sem arquitetura vira fluxo frágil; IA sem processo vira hype sem impacto prático.',
    approach: 'Mapeamos entradas, saídas, validações, exceções e ferramentas antes de automatizar.',
    deliverables: ['Fluxos n8n', 'Agentes de IA', 'Webhooks', 'Integrações', 'Documentação'],
    result: ['menos manual', 'mais velocidade', 'processo inteligente'],
    stack: ['n8n', 'APIs', 'CRM', 'Notion']
  },
  {
    icon: ShieldCheck,
    slug: 'sustentacao-evolucao',
    eyebrow: 'Oferta 06 · Sustentação e evolução',
    title: 'Para quando o projeto está no ar, mas precisa de dono técnico para continuar evoluindo.',
    summary: 'Mantemos, corrigimos e evoluímos sites, sistemas e operações digitais com rotina e governança.',
    pain: 'Depois do deploy, projetos sem dono técnico acumulam erro, lentidão, inconsistência e oportunidade perdida.',
    approach: 'Criamos rotina de suporte, backlog, melhoria, documentação, performance e novas features por impacto.',
    deliverables: ['Suporte', 'Correções', 'Backlog', 'Performance', 'Documentação'],
    result: ['estabilidade', 'menos risco', 'evolução'],
    stack: ['Git', 'QA', 'Vercel', 'WordPress']
  }
];

const process = [
  ['01', 'Diagnóstico', 'Entendemos negócio, objetivo, urgência, operação e critério de sucesso.'],
  ['02', 'Arquitetura', 'Transformamos demanda em escopo, stack, fases, riscos e prioridades.'],
  ['03', 'Execução', 'Construímos em ciclos com validação, versionamento e clareza de entrega.'],
  ['04', 'Evolução', 'Publicamos, medimos, sustentamos e melhoramos com contexto preservado.']
];

export const metadata = {
  title: 'Soluções para sites, sistemas, IA e WordPress | Tehkné Solutions',
  description: 'Soluções da Tehkné para diagnóstico técnico, sites de alta performance, WordPress avançado, sistemas sob medida, IA, automações, sustentação e evolução digital.',
  alternates: {
    canonical: 'https://tehknesolutions.com.br/solucoes'
  },
  openGraph: {
    title: 'Soluções Tehkné | Sites, sistemas, IA, WordPress e sustentação',
    description: 'Escolha pelo problema que precisa resolver: escopo, site, WordPress, sistema interno, automação, IA ou evolução contínua.',
    url: 'https://tehknesolutions.com.br/solucoes',
    type: 'website',
    locale: 'pt_BR'
  }
};

export default function SolucoesPage() {
  const pageWhatsApp = whatsAppHref(whatsappMessages.solucoes);

  return (
    <main>
      <section className="section-frame solutions-hero solutions-hero-pro solutions-hero-clean">
        <div className="section-heading solutions-hero-content">
          <span className="eyebrow">Soluções para vender, organizar e escalar</span>
          <h1>Escolha pelo problema que trava sua operação — a tecnologia vem depois da estratégia.</h1>
          <p>Site que não convence, WordPress bagunçado, operação manual, produto sem escopo, automação mal pensada ou projeto abandonado depois do deploy. A Tehkné entra para transformar esse caos em arquitetura, execução e evolução.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Quero mapear minha demanda <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#cases-solucoes">Ver soluções por problema <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="solutions-hero-panel solutions-orbit-panel" aria-hidden="true">
          <div className="solutions-orbit-core"><Sparkles size={34} /></div>
          <div className="solutions-orbit-list">
            {['Diagnóstico', 'Sites', 'WordPress', 'Sistemas', 'IA', 'Evolução'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="metrics section-frame compact solutions-metrics">
        <div><strong>06</strong><span>ofertas organizadas por dor real</span></div>
        <div><strong>GIP</strong><span>método para reduzir retrabalho</span></div>
        <div><strong>360°</strong><span>arquitetura, design, código e suporte</span></div>
        <div><strong>IA</strong><span>automação aplicada com processo</span></div>
      </section>

      <section className="section-frame compact solutions-index solutions-index-clean">
        {cases.map((item) => <a href={`#${item.slug}`} key={item.slug}>{item.eyebrow}</a>)}
      </section>

      <section id="cases-solucoes" className="solutions-case-list">
        {cases.map((item, index) => {
          const Icon = item.icon;
          const caseWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pela página de Soluções e me interessei por: ${item.eyebrow}. Quero entender como aplicar isso no meu projeto.`);
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
                <article className="solution-case-card"><span>Dor que resolvemos</span><p>{item.pain}</p></article>
                <article className="solution-case-card"><span>Como a Tehkné conduz</span><p>{item.approach}</p></article>
                <article className="solution-case-card deliverables"><span>O que pode entrar na entrega</span><ul>{item.deliverables.map((deliverable) => <li key={deliverable}><CheckCircle2 size={15} />{deliverable}</li>)}</ul></article>
                <article className="solution-case-card result"><span>Resultado que buscamos</span><div className="os-features solution-outcomes">{item.result.map((result) => <span key={result}>{result}</span>)}</div><div className="case-stack solution-case-stack">{item.stack.map((stack) => <span key={stack}>{stack}</span>)}</div><a className="text-link" href={caseWhatsApp} target="_blank" rel="noreferrer">Quero conversar sobre esta solução <ArrowUpRight size={15} /></a></article>
              </div>
            </section>
          );
        })}
      </section>

      <section className="section-frame method-section solutions-method-clean">
        <div className="section-heading">
          <span className="eyebrow">Como saímos da bagunça</span>
          <h2>Um fluxo simples para transformar demanda em execução sem virar retrabalho.</h2>
          <p>Antes de prometer tela, código ou automação, entendemos o problema e desenhamos o caminho mais seguro para entregar valor.</p>
        </div>
        <div className="method-line solutions-process-clean">
          {process.map(([number, title, text]) => <article className="method-step" key={title}><span>{number}</span><Workflow size={22} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-frame solutions-proof-section solutions-proof-clean">
        <div className="section-heading inline"><div><span className="eyebrow">Stack e operação</span><h2>A tecnologia entra depois que o problema está claro.</h2><p>Next.js, React, WordPress, PHP, Python, Flutter, APIs, n8n, GitHub, Vercel, CRM, ERP e IA são ferramentas. A solução nasce da arquitetura correta.</p></div></div>
        <div className="solutions-proof-grid">
          <article><Gauge size={24} /><h3>Performance</h3><p>Entrega pensada para carregar bem, convencer, converter e sustentar evolução.</p></article>
          <article><Network size={24} /><h3>Integrações</h3><p>Formulários, CRM, APIs, automações e dados entram no desenho técnico desde o início.</p></article>
          <article><GitBranch size={24} /><h3>Governança</h3><p>Versionamento, documentação e critérios reduzem ruído, risco e retrabalho.</p></article>
          <article><LifeBuoy size={24} /><h3>Sustentação</h3><p>Depois do deploy, o projeto segue com correções, suporte, melhoria e novas oportunidades.</p></article>
        </div>
      </section>

      <ContactForm page="Soluções" context="diagnóstico e escolha do melhor caso de uso: arquitetura, site/plataforma, WordPress, sistema, IA/automações ou sustentação" title="Qual problema você precisa resolver primeiro?" description="Use este bloco para iniciar uma conversa contextualizada. A Tehkné ajuda a transformar dor, ideia ou demanda em arquitetura, escopo e próximos passos." />

      <section className="final-cta">
        <div><span className="eyebrow">Diagnóstico técnico</span><h2>Antes de contratar tecnologia no escuro, vamos mapear o caminho certo.</h2><p>Conte o que precisa criar, melhorar ou automatizar. A primeira entrega é clareza.</p></div>
        <div className="hero-actions"><a className="btn btn-primary coin" href={pageWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <Zap size={16} /></a><a className="btn btn-secondary" href="/portfolio">Ver provas e cases <ArrowUpRight size={16} /></a></div>
      </section>
    </main>
  );
}
