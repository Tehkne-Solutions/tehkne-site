import type { Metadata } from 'next';
import { ArrowUpRight, Bot, BrainCircuit, Code2, Compass, GitBranch, Layers3, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

export const metadata: Metadata = {
  title: 'Sobre a Tehkné Solutions | Software House, Produto Digital e IA',
  description: 'Conheça a Tehkné Solutions: software house, estúdio de produto digital e braço técnico para empresas, agências e operações que precisam transformar ideias em sistemas reais.'
};

const pillars = [
  {
    icon: Layers3,
    title: 'Arquitetura antes do código',
    text: 'Todo projeto começa com clareza de objetivo, escopo, stack, dados, integrações e riscos. A execução nasce de um mapa, não de improviso.'
  },
  {
    icon: Code2,
    title: 'Desenvolvimento com visão de produto',
    text: 'Sites, plataformas, WordPress avançado, Next.js, PHP, Python, Flutter, APIs e sistemas são tratados como produtos vivos, não apenas entregas isoladas.'
  },
  {
    icon: BrainCircuit,
    title: 'IA aplicada à operação',
    text: 'A Tehkné usa agentes, automações, documentação viva e workflows inteligentes para reduzir trabalho manual e acelerar decisões técnicas.'
  },
  {
    icon: ShieldCheck,
    title: 'Sustentação e evolução',
    text: 'Depois do deploy, o foco continua em performance, segurança, manutenção, melhoria contínua, rastreabilidade e suporte evolutivo.'
  }
];

const timeline = [
  ['Origem técnica', 'A base nasce da experiência prática em desenvolvimento, design, WordPress, Next.js, Flutter, PHP, Python, automações, manutenção e produtos digitais.'],
  ['Ecossistemas parceiros', 'A atuação em ambientes como UNTI Digital, Savana Publicidade e Meme Digital consolidou repertório real em sites, plataformas, marketing, sustentação e operação técnica.'],
  ['Método GIP', 'O processo foi organizado em descoberta, arquitetura, desenvolvimento, validação, deploy e evolução para reduzir retrabalho e aumentar previsibilidade.'],
  ['Tehkné OS', 'A experiência acumulada virou uma camada operacional própria: conhecimento, prompts, agentes, governança, portfólio, automações e documentação viva.']
];

const capabilities = ['Next.js', 'React', 'WordPress', 'Elementor', 'JetEngine', 'PHP', 'Python', 'Flutter', 'APIs', 'n8n', 'GitHub', 'Vercel', 'UX/UI', 'IA', 'Automação', 'Sustentação'];

const principles = [
  'Transformar experiência acumulada em processo empresarial rastreável.',
  'Separar projetos próprios, participação técnica e ecossistemas parceiros com narrativa segura.',
  'Unir engenharia, produto, design, marketing e IA em uma operação só.',
  'Construir soluções digitais com clareza, performance e evolução contínua.'
];

export default function SobrePage() {
  const href = whatsAppHref(whatsappMessages.diagnostico);

  return (
    <main>
      <section className="section-frame about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">Sobre a Tehkné Solutions</span>
          <h1>Uma software house com mentalidade de produto, arquitetura e operação contínua.</h1>
          <p>
            A Tehkné Solutions nasceu para transformar ideias, processos e operações em sistemas digitais reais. Unimos desenvolvimento, UX, automações, IA, WordPress avançado, Next.js e sustentação para atuar como braço técnico de empresas, agências e produtos digitais.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={href} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Ver portfólio <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="about-orbit-panel">
          <div className="about-orbit-core"><Sparkles size={34} /></div>
          <span className="orbit-label label-a">Produto</span>
          <span className="orbit-label label-b">Código</span>
          <span className="orbit-label label-c">IA</span>
          <span className="orbit-label label-d">Operação</span>
        </div>
      </section>

      <section className="metrics section-frame compact about-metrics">
        <div><strong>70+</strong><span>experiências web e WordPress acumuladas</span></div>
        <div><strong>67+</strong><span>repositórios mapeados no inventário técnico</span></div>
        <div><strong>30+</strong><span>cases e experiências catalogadas</span></div>
        <div><strong>GIP</strong><span>método de precisão iterativa da ideia ao deploy</span></div>
      </section>

      <section className="section-frame about-block">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Identidade institucional</span>
            <h2>A Tehkné não se posiciona como agência genérica. Ela opera como engenharia criativa.</h2>
          </div>
          <a className="text-link" href="/solucoes">Conhecer soluções <ArrowUpRight size={16} /></a>
        </div>
        <div className="about-editorial-grid">
          <article className="glass-card about-editorial-card large">
            <Compass size={34} className="card-icon" />
            <h3>O que somos</h3>
            <p>Software house, estúdio de produto digital e braço técnico para operações que precisam transformar demandas reais em arquitetura, interface, código, automação e sustentação.</p>
          </article>
          <article className="glass-card about-editorial-card">
            <Workflow size={30} className="card-icon" />
            <h3>Como atuamos</h3>
            <p>Com diagnóstico, mapa técnico, priorização, design, desenvolvimento, validação, deploy e evolução contínua.</p>
          </article>
          <article className="glass-card about-editorial-card">
            <Bot size={30} className="card-icon" />
            <h3>Onde evoluímos</h3>
            <p>Em IA aplicada, agentes, automações, documentação viva, governança de portfólio e operação técnica escalável.</p>
          </article>
        </div>
      </section>

      <section className="section-frame about-block">
        <div className="section-heading">
          <span className="eyebrow">Pilares de atuação</span>
          <h2>Uma base multidisciplinar para entregar produtos digitais completos.</h2>
          <p>O repertório da Tehkné conecta tecnologia, negócio, design, conteúdo, automação e sustentação. Essa combinação permite sair da ideia e chegar em uma solução funcional, mensurável e evolutiva.</p>
        </div>
        <div className="service-grid about-pillar-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article className="glass-card service-card" key={pillar.title}>
                <Icon className="card-icon" size={34} />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame about-timeline-section">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Nossa trajetória</span>
            <h2>Experiência pessoal transformada em capital técnico institucional.</h2>
            <p>A narrativa oficial da Tehkné converte vivência prática em processo de empresa, sempre separando projetos próprios, participação técnica e ecossistemas parceiros.</p>
          </div>
        </div>
        <div className="about-timeline">
          {timeline.map(([title, text], index) => (
            <article className="about-timeline-item" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame about-os-callout">
        <div>
          <span className="eyebrow">Método e operação</span>
          <h2>O GIP organiza a execução. O Tehkné OS organiza a evolução.</h2>
          <p>O GIP Framework estrutura o caminho da descoberta ao deploy. O Tehkné OS amplia essa lógica para documentação viva, agentes, automações, versionamento, curadoria de portfólio e governança de entrega.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href="/metodo">Ver Método GIP <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo">Explorar Tehkné OS <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="about-principles">
          {principles.map((item) => <span key={item}><GitBranch size={15} />{item}</span>)}
        </div>
      </section>

      <section className="section-frame about-stack-section">
        <div className="section-heading">
          <span className="eyebrow">Stack e repertório</span>
          <h2>Tecnologias usadas para construir, integrar, automatizar e sustentar.</h2>
        </div>
        <div className="stack-cloud about-stack-cloud">
          {capabilities.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Conversa estratégica</span>
          <h2>Vamos entender onde a Tehkné pode entrar na sua operação?</h2>
          <p>Mapeamos sua demanda e indicamos o melhor caminho: projeto fechado, sprint evolutiva, sustentação ou braço técnico.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={href} target="_blank" rel="noreferrer">Falar com a Tehkné <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/contato">Página de contato <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <ContactForm page="Sobre" context="conversa institucional sobre como a Tehkné pode atuar como software house, braço técnico ou estúdio de produto digital" />
    </main>
  );
}
