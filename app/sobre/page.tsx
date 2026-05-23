import type { Metadata } from 'next';
import { ArrowUpRight, Bot, BrainCircuit, Code2, Compass, DraftingCompass, GitBranch, Layers3, Lightbulb, Orbit, PenTool, ShieldCheck, Sparkles, Telescope, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { whatsAppHref, whatsappMessages } from '../contact';

export const metadata: Metadata = {
  title: 'Sobre a Tehkné Solutions | Cultura, Técnica, Produto Digital e IA',
  description: 'Conheça a Tehkné Solutions: uma software house com cultura baseada em téchnē, arte aplicada, arquitetura, produto digital, IA e operação contínua.'
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
  ['Raiz técnica', 'A base nasce da experiência prática em desenvolvimento, design, WordPress, Next.js, Flutter, PHP, Python, automações, manutenção e produtos digitais.'],
  ['Repertório em campo', 'A atuação em ecossistemas como UNTI Digital, Savana Publicidade e Meme Digital consolidou vivência real em sites, plataformas, marketing, sustentação e operação técnica.'],
  ['Método GIP', 'A prática foi organizada em descoberta, arquitetura, desenvolvimento, validação, deploy e evolução para reduzir retrabalho e aumentar previsibilidade.'],
  ['Tehkné OS', 'O repertório acumulado se tornou uma camada operacional própria: conhecimento, prompts, agentes, governança, portfólio, automações e documentação viva.']
];

const capabilities = ['Next.js', 'React', 'WordPress', 'Elementor', 'JetEngine', 'PHP', 'Python', 'Flutter', 'APIs', 'n8n', 'GitHub', 'Vercel', 'UX/UI', 'IA', 'Automação', 'Sustentação'];

const principles = [
  'Transformar intenção em arquitetura antes de iniciar execução pesada.',
  'Tratar cada solução como uma obra funcional: bonita, útil, rastreável e evolutiva.',
  'Separar projetos próprios, participação técnica e ecossistemas parceiros com narrativa segura.',
  'Unir engenharia, produto, design, marketing e IA em uma operação só.',
  'Construir tecnologia para ampliar pessoas, equipes e negócios — não para substituir propósito.',
  'Manter curiosidade, aprendizado e refinamento contínuo como prática diária.'
];

const culturePrinciples = [
  {
    icon: Lightbulb,
    title: 'Criatividade aplicada',
    text: 'Ideias só viram valor quando são estruturadas, prototipadas, testadas e transformadas em operação real.'
  },
  {
    icon: DraftingCompass,
    title: 'Excelência técnica',
    text: 'Código, interface, automação e documentação são tratados como peças de uma mesma arquitetura.'
  },
  {
    icon: PenTool,
    title: 'Humanismo tecnológico',
    text: 'A tecnologia deve servir pessoas, negócios e equipes. O sistema existe para ampliar clareza, autonomia e resultado.'
  },
  {
    icon: Telescope,
    title: 'Curiosidade renascentista',
    text: 'A Tehkné cruza design, engenharia, arte, ciência, marketing, IA e operação para enxergar soluções por vários ângulos.'
  }
];

export default function SobrePage() {
  const href = whatsAppHref(whatsappMessages.diagnostico);

  return (
    <main>
      <section className="section-frame about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">Cultura Tehkné</span>
          <h1>A técnica como arte. A arte como sistema. O sistema como solução real.</h1>
          <p>
            A Tehkné Solutions nasce da ideia de téchnē: arte, habilidade e saber aplicado. Para nós, tecnologia não é apenas execução. É a capacidade de transformar conhecimento, intenção e criatividade em produtos digitais que funcionam, evoluem e geram impacto para pessoas, equipes e negócios.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={href} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Ver portfólio <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="about-orbit-panel">
          <div className="about-orbit-core"><Sparkles size={34} /></div>
          <span className="orbit-label label-a">Arte</span>
          <span className="orbit-label label-b">Técnica</span>
          <span className="orbit-label label-c">Produto</span>
          <span className="orbit-label label-d">Operação</span>
        </div>
      </section>

      <section className="metrics section-frame compact about-metrics">
        <div><strong>téchnē</strong><span>arte, habilidade e saber aplicado como base cultural</span></div>
        <div><strong>70+</strong><span>experiências web e WordPress acumuladas</span></div>
        <div><strong>67+</strong><span>repositórios mapeados no inventário técnico</span></div>
        <div><strong>GIP</strong><span>método de precisão iterativa da ideia ao deploy</span></div>
      </section>

      <section className="section-frame about-block">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Origem do nome</span>
            <h2>Tehkné vem de téchnē: a técnica que cria com propósito.</h2>
          </div>
          <a className="text-link" href="/solucoes">Conhecer soluções <ArrowUpRight size={16} /></a>
        </div>
        <div className="about-editorial-grid">
          <article className="glass-card about-editorial-card large">
            <Compass size={34} className="card-icon" />
            <h3>Saber aplicado</h3>
            <p>Na tradição grega, téchnē não era um fazer automático. Era habilidade orientada por intenção, domínio, método e finalidade. Essa é a base da Tehkné: transformar conhecimento em soluções digitais bem desenhadas, úteis e sustentáveis.</p>
          </article>
          <article className="glass-card about-editorial-card">
            <Workflow size={30} className="card-icon" />
            <h3>Forma e resultado</h3>
            <p>Uma boa solução precisa sair da ideia e ganhar forma: arquitetura, interface, código, automação, deploy e evolução.</p>
          </article>
          <article className="glass-card about-editorial-card">
            <Orbit size={30} className="card-icon" />
            <h3>Engenharia criativa</h3>
            <p>Unimos precisão técnica com imaginação aplicada para criar sistemas que carregam identidade, função e estratégia.</p>
          </article>
        </div>
      </section>

      <section className="section-frame about-block">
        <div className="section-heading">
          <span className="eyebrow">Inspiração renascentista</span>
          <h2>Da Vinci como símbolo de integração entre arte, ciência e técnica.</h2>
          <p>Leonardo da Vinci representa a mentalidade que inspira a cultura da Tehkné: observar o mundo com curiosidade, cruzar disciplinas, experimentar, desenhar sistemas e transformar ideias em obras funcionais. Não copiamos a estética renascentista como ornamento; usamos seu espírito como método de criação.</p>
        </div>
        <div className="service-grid about-pillar-grid">
          {culturePrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <article className="glass-card service-card" key={principle.title}>
                <Icon className="card-icon" size={34} />
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-frame about-block">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Identidade institucional</span>
            <h2>A Tehkné não se posiciona como agência genérica. Ela opera como estúdio de engenharia criativa.</h2>
          </div>
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
            <h2>Experiência prática transformada em capital técnico institucional.</h2>
            <p>A narrativa oficial da Tehkné converte vivência de campo em processo de empresa, sempre separando projetos próprios, participação técnica e ecossistemas parceiros.</p>
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
            <a className="btn btn-secondary" href="/blog">Ler insights <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="about-principles">
          {principles.map((item) => <span key={item}><GitBranch size={15} />{item}</span>)}
        </div>
      </section>

      <section className="section-frame about-block">
        <div className="section-heading">
          <span className="eyebrow">Manifesto cultural</span>
          <h2>Software como arte funcional. Automação como engenho criativo. IA como extensão da mente humana.</h2>
          <p>Na Tehkné Solutions, cada solução nasce da união entre arte e técnica. Somos guiados pelo espírito renascentista: curiosos, criativos, precisos e comprometidos em transformar ideias em realidade. Nossa cultura é o reflexo de Da Vinci no século XXI — onde tecnologia, humanidade e execução caminham juntas.</p>
        </div>
        <div className="about-editorial-grid">
          <article className="glass-card about-editorial-card">
            <h3>Software como arte funcional</h3>
            <p>Uma interface precisa ser clara, bonita e útil. Um sistema precisa resolver uma dor real e continuar evoluindo depois da primeira entrega.</p>
          </article>
          <article className="glass-card about-editorial-card">
            <h3>Automação como engenho criativo</h3>
            <p>Automar não é apenas economizar cliques. É redesenhar fluxos para que pessoas tenham mais tempo para decidir, criar e crescer.</p>
          </article>
          <article className="glass-card about-editorial-card">
            <h3>IA como extensão da inteligência</h3>
            <p>Agentes e modelos de IA entram como apoio estratégico: organizam conhecimento, aceleram operações e ampliam a capacidade de execução.</p>
          </article>
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

      <ContactForm page="Sobre" context="conversa institucional sobre cultura Tehkné, técnica como arte, software house, braço técnico ou estúdio de produto digital" />
    </main>
  );
}
