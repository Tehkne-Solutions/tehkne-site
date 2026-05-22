'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  GitBranch,
  Layers3,
  MousePointer2,
  Orbit,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow
} from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsAppHref, whatsappMessages } from './contact';

const services = [
  {
    icon: Layers3,
    title: 'Arquitetura de Soluções',
    text: 'Do escopo solto ao mapa técnico: stack, dados, integrações, governança e evolução planejada.'
  },
  {
    icon: Code2,
    title: 'Desenvolvimento Web & Mobile',
    text: 'Sites, plataformas, apps e sistemas com performance, manutenção e base pronta para escalar.'
  },
  {
    icon: MousePointer2,
    title: 'Design & UX de Produto',
    text: 'Interfaces premium, jornadas claras e experiências centradas no usuário e no resultado do negócio.'
  },
  {
    icon: Bot,
    title: 'IA & Automações',
    text: 'Agentes, fluxos, integrações e automações para reduzir trabalho manual e acelerar operação.'
  }
];

const projects = [
  { title: 'Tehkné Flow', type: 'Sistema', stack: 'Produto interno • gestão • analytics', tone: 'violet' },
  { title: 'Beggin', type: 'Site', stack: 'Marca • produto • performance', tone: 'amber' },
  { title: 'UNTI Digital', type: 'Plataforma', stack: 'Parceria técnica • Next.js', tone: 'blue' },
  { title: 'HNK Agent', type: 'IA', stack: 'Agentes • GIP • automação', tone: 'cyan' },
  { title: 'Savol Seminovos', type: 'Catálogo', stack: 'WordPress avançado • filtros', tone: 'orange' },
  { title: 'Meme Digital', type: 'Ecossistema', stack: 'Martech • sites • suporte técnico', tone: 'pink' }
];

const method = [
  ['Descoberta', 'Entendemos o desafio, contexto, objetivos, riscos e oportunidades.'],
  ['Arquitetura', 'Definimos solução, escopo, stack, dados, integrações e plano técnico.'],
  ['Design/Produto', 'Criamos jornadas, interfaces, protótipos e decisões de experiência.'],
  ['Desenvolvimento', 'Construímos com código limpo, versionamento, qualidade e rastreabilidade.'],
  ['Validação/Deploy', 'Testamos, ajustamos, implantamos e preparamos a operação.'],
  ['Evolução', 'Monitoramos, mantemos e evoluímos continuamente o produto.']
];

const painPoints = [
  'Ideias sem arquitetura clara',
  'Sites que não sustentam crescimento',
  'Operações manuais demais',
  'Agências sem braço técnico confiável',
  'Produtos digitais sem UX',
  'Projetos sem suporte depois do deploy'
];

const stacks = ['Next.js', 'React', 'WordPress', 'PHP', 'Python', 'Flutter', 'APIs', 'n8n', 'GitHub', 'Vercel', 'CRM', 'ERP'];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' as const }
};

function MetatronCore() {
  return (
    <motion.div className="metatron-card" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="metatron">
        {Array.from({ length: 7 }).map((_, index) => (
          <span key={index} className={`node node-${index + 1}`} />
        ))}
        <svg viewBox="0 0 420 320" aria-hidden="true">
          <path d="M210 35 L85 105 L85 220 L210 285 L335 220 L335 105 Z" />
          <path d="M210 35 L210 285 M85 105 L335 220 M335 105 L85 220 M85 105 L335 105 M85 220 L335 220" />
          <path d="M210 35 L85 220 M210 35 L335 220 M210 285 L85 105 M210 285 L335 105" />
        </svg>
        <div className="core-glow" />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const homeWhatsApp = whatsAppHref(whatsappMessages.home);

  return (
    <main className="site-shell">
      <div className="background-grid" />
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Tehkné Solutions">
          <span className="brand-symbol"><Sparkles size={18} /></span>
          <span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span>
        </a>
        <nav>
          <a href="#solucoes">Soluções</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#metodo">Método</a>
          <a href="#os">Tehkné OS</a>
          <a href={homeWhatsApp} target="_blank" rel="noreferrer">Contato</a>
        </nav>
        <a className="btn btn-primary coin" href={homeWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
      </header>

      <section id="top" className="hero section-frame">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }}>
          <span className="eyebrow">Arquitetura • Tecnologia • Performance • Evolução</span>
          <h1>Transformamos ideias, processos e operações em <span>sistemas digitais reais.</span></h1>
          <p>Arquitetura, design, desenvolvimento, automações e IA para criar produtos digitais com clareza, performance, segurança e evolução contínua.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={homeWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="#portfolio">Ver portfólio <ArrowUpRight size={16} /></a>
          </div>
          <div className="trust-strip">
            <span><ShieldCheck size={15} /> Arquitetura sólida</span>
            <span><Rocket size={15} /> Desenvolvimento ágil</span>
            <span><BrainCircuit size={15} /> IA aplicada</span>
            <span><Workflow size={15} /> Sustentação contínua</span>
          </div>
        </motion.div>
        <MetatronCore />
      </section>

      <motion.section className="metrics section-frame compact" {...fadeUp}>
        <div><strong>67+</strong><span>repositórios mapeados para inventário técnico</span></div>
        <div><strong>33+</strong><span>cases catalogados para curadoria de portfólio</span></div>
        <div><strong>5</strong><span>pilares: arquitetura, dev, design, IA e sustentação</span></div>
        <div><strong>GIP</strong><span>método com descoberta, arquitetura, validação e evolução</span></div>
      </motion.section>

      <motion.section id="solucoes" className="section-frame" {...fadeUp}>
        <div className="section-heading">
          <span className="eyebrow">Soluções enterprise</span>
          <h2>Você não precisa só de um site. Precisa de uma operação digital estruturada.</h2>
          <p>A Tehkné entra onde existe ideia, demanda, gargalo ou oportunidade — e transforma isso em arquitetura, interface, código, integração e evolução.</p>
        </div>
        <div className="pain-grid">
          {painPoints.map((item) => <div className="pain-card" key={item}><DatabaseZap size={17} />{item}</div>)}
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceWhatsApp = whatsAppHref(`Olá, Tehkné! Vim pela Home e quero planejar uma solução de ${service.title}. Quero entender escopo, arquitetura e próximos passos.`);
            return (
              <motion.article className="glass-card service-card" key={service.title} initial={{ opacity: 0, y: 34, rotateX: -8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }}>
                <Icon className="card-icon" size={34} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={serviceWhatsApp} target="_blank" rel="noreferrer">Planejar solução <ArrowUpRight size={15} /></a>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section id="portfolio" className="section-frame" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Portfólio e experiências</span>
            <h2>Projetos reais, produtos próprios e participação técnica em ecossistemas digitais.</h2>
          </div>
          <a className="text-link" href={whatsAppHref('Olá, Tehkné! Vim pela Home e quero solicitar uma análise de case para entender uma solução parecida com meu projeto.')} target="_blank" rel="noreferrer">Solicitar análise de case <ArrowUpRight size={16} /></a>
        </div>
        <div className="filters" aria-label="Filtros de portfólio">
          {['Todos', 'Projetos Tehkné', 'Participação Técnica', 'Parceiros', 'Sites', 'Sistemas', 'IA'].map((filter, index) => <button className={index === 0 ? 'active' : ''} key={filter}>{filter}</button>)}
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article className="project-card" key={project.title} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <div className={`project-thumb ${project.tone}`}><Orbit size={46} /><span /></div>
              <small>{project.type}</small>
              <h3>{project.title}</h3>
              <p>{project.stack}</p>
              <a href={whatsAppHref(`Olá, Tehkné! Vim pela Home e quero conversar sobre um projeto parecido com ${project.title}.`)} target="_blank" rel="noreferrer">Abrir case <ArrowUpRight size={14} /></a>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="metodo" className="section-frame method-section" {...fadeUp}>
        <div className="section-heading">
          <span className="eyebrow">Tehkné OS / Método GIP</span>
          <h2>Clareza, rastreabilidade e evolução contínua do diagnóstico ao deploy.</h2>
          <p>O Guided Iterative Precision organiza descoberta, arquitetura, desenvolvimento, validação e evolução para reduzir retrabalho e dar previsibilidade à entrega.</p>
        </div>
        <div className="method-line">
          {method.map(([title, text], index) => (
            <motion.div className="method-step" key={title} whileHover={{ y: -8, scale: 1.03 }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <GitBranch size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="os" className="section-frame os-section" {...fadeUp}>
        <div className="os-panel">
          <span className="eyebrow">Operação técnica para escalar</span>
          <h2>Tehkné OS conecta estratégia, produto, código, IA, documentação e sustentação.</h2>
          <p>Uma camada operacional para transformar experiência acumulada em processo empresarial: arquitetura viva, prompts, agentes, automações, versionamento, curadoria de portfólio e governança técnica.</p>
          <div className="os-features">
            {['Diagnóstico técnico', 'Roadmap de produto', 'Documentação viva', 'Agentes de IA', 'Governança Git', 'Suporte evolutivo'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="stack-cloud">
          {stacks.map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </motion.section>

      <motion.section className="section-frame ecosystems" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Ecossistemas e projetos onde atuamos</span>
            <h2>Experiência prática em produtos, marcas, agências e operações digitais.</h2>
          </div>
        </div>
        <div className="logo-row">
          {['UNTI Digital', 'Savana Publicidade', 'Meme Digital', 'Savol', 'Beggin', 'Vacina One'].map((logo) => <span key={logo}>{logo}</span>)}
        </div>
      </motion.section>

      <motion.section id="contato" className="final-cta" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div>
          <span className="eyebrow">Diagnóstico estratégico</span>
          <h2>Pronto para transformar sua ideia em realidade?</h2>
          <p>Vamos mapear seu desafio e criar juntos a melhor solução digital para escalar com clareza.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={homeWhatsApp} target="_blank" rel="noreferrer">Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href={homeWhatsApp} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight size={16} /></a>
        </div>
      </motion.section>

      <section className="contact-form-section section-frame" id="contato-form">
        <div className="contact-form-copy">
          <span className="eyebrow">Contato direto</span>
          <h2>Vamos transformar sua demanda em plano de execução?</h2>
          <p>Use este bloco para organizar sua mensagem antes de chamar a Tehkné no WhatsApp. O botão abre uma conversa contextualizada para a Home.</p>
          <div className="contact-phone-card">
            <span>WhatsApp principal</span>
            <strong>{WHATSAPP_DISPLAY}</strong>
          </div>
        </div>
        <form className="contact-form-card" action={homeWhatsApp}>
          <label>Nome<input name="nome" placeholder="Seu nome" /></label>
          <label>Empresa ou projeto<input name="empresa" placeholder="Nome da empresa/projeto" /></label>
          <label>Serviço de interesse<select name="servico" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Arquitetura de Soluções</option><option>Desenvolvimento Web & Mobile</option><option>WordPress Avançado</option><option>Design & UX de Produto</option><option>IA & Automações</option><option>Sustentação & Evolução</option></select></label>
          <label>Mensagem<textarea name="mensagem" placeholder="Conte rapidamente o que você precisa criar, melhorar ou automatizar." rows={5} /></label>
          <a className="btn btn-primary coin" href={homeWhatsApp} target="_blank" rel="noreferrer">Enviar pelo WhatsApp <Send size={16} /></a>
          <a className="contact-direct-link" href={homeWhatsApp} target="_blank" rel="noreferrer">Chamar direto no WhatsApp <ArrowUpRight size={14} /></a>
        </form>
      </section>

      <footer className="footer section-frame">
        <div className="footer-brand">
          <a className="brand" href="#top"><span className="brand-symbol"><Sparkles size={18} /></span><span><strong>TEHKNÉ</strong><small>SOLUTIONS</small></span></a>
          <p>Arquitetura, tecnologia e design para criar soluções digitais com clareza, performance e evolução contínua.</p>
        </div>
        <div><h4>Soluções</h4><a>Arquitetura</a><a>Web & Mobile</a><a>UX & Produto</a><a>IA & Automações</a></div>
        <div><h4>Portfólio</h4><a>Todos os projetos</a><a>Projetos Tehkné</a><a>Participação Técnica</a><a>Ecossistemas</a></div>
        <div><h4>Tehkné OS</h4><a>Método GIP</a><a>Automação</a><a>Agentes de IA</a><a>Governança</a></div>
        <div><h4>Contato</h4><a href={homeWhatsApp} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a><a href="mailto:contato@tehkne.com.br">contato@tehkne.com.br</a><a>Campinas, SP • Brasil</a></div>
      </footer>
    </main>
  );
}
