import type { Metadata } from 'next';
import { ArrowUpRight, BrainCircuit, Code2, GraduationCap, MapPin, ShieldCheck, Workflow } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { WHATSAPP_DISPLAY, whatsAppHref, whatsappMessages } from '../../contact';

export const metadata: Metadata = {
  title: 'Thales Wallison | Founder & CTO da Tehkné Solutions',
  description: 'Conheça Thales Wallison: Founder & CTO da Tehkné Solutions, Senior Full-Stack Engineer, Product Engineer, Solutions Architect e AI Automation Specialist.'
};

const facts = [
  ['Founder & CTO', 'Tehkné Solutions desde 2022'],
  ['7+ anos', 'em tecnologia, produto, educação e operação digital'],
  ['Base', 'Campinas/SP, Brasil'],
  ['Contato', 'contato@tehknesolutions.com.br'],
  ['WhatsApp', WHATSAPP_DISPLAY]
];

const expertise = [
  ['Arquitetura de soluções', 'Diagnóstico, escopo, stack, integrações, dados, riscos e plano de execução.'],
  ['Full-stack e WordPress', 'Next.js, React, TypeScript, JavaScript, PHP, Python, APIs, WordPress avançado, temas, plugins, Elementor, JetEngine e WooCommerce.'],
  ['Produto e UX/UI', 'Estratégia de produto, jornada, interface, Figma, Adobe XD, copy, conversão, prototipação e evolução por fases.'],
  ['IA e automações', 'OpenAI API, LangChain, Ollama, agentes de IA, prompt engineering, n8n, workflows, documentação viva e revisão humana.']
];

const experience = [
  ['Tehkné Solutions', 'Founder & CTO', '2022 — presente', 'Software house, produto digital, WordPress avançado, Next.js, IA, automações, integrações, sustentação e arquitetura de soluções.'],
  ['Savana Publicidade', 'Web Developer', '2024 — 2025', 'Desenvolvimento e manutenção de sites, landing pages, WordPress, performance, integrações e suporte técnico para operações digitais.'],
  ['CartSys Software Ltda.', 'Product Designer UX/UI', '2022', 'UX/UI, produto, análise de jornada, prototipação e desenho de interfaces para sistemas e experiências digitais.'],
  ['SimpleWay Languages', 'Founder & Methodology Creator', '2013 — presente', 'Projeto educacional com metodologia própria, design instrucional, gamificação, jornada de aprendizagem e produto digital.'],
  ['Hands Up Design Studio', 'Product Design Manager', '2020 — 2022', 'Gestão de produto, design, processos criativos, interfaces, comunicação e acompanhamento de entregas digitais.'],
  ['Meme Digital', 'Product Manager / Product Designer', '2019 — 2020', 'Produto, design, estratégia digital, experiência de usuário e apoio à operação de projetos web.'],
  ['Agência Salvatore', 'Web Designer & Product Owner', '2016 — 2018', 'Web design, produto, sites, páginas comerciais, acompanhamento de demandas e visão de entrega.']
];

const projects = ['Chilli Drinks App', 'SimpleWay Academy', 'Christian Therapist Academy', 'Holistic Therapist Academy', 'ByteBot OS', 'Shimokodan AaaS', 'GIP Agent Dev TEHKNÉ', 'Tehkné Flow', 'CRM WP', 'Integrações WP'];
const stack = ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'PHP', 'Python', 'APIs', 'Flutter', 'React Native', 'WordPress', 'WooCommerce', 'Elementor', 'JetEngine', 'OpenAI API', 'LangChain', 'Ollama', 'n8n', 'Docker', 'GitHub Actions', 'Vercel', 'Netlify', 'Figma', 'Adobe XD'];
const education = ['Bacharelado em Administração', 'MBA em Gestão Estratégica de Projetos e Metodologias Ágeis', 'Pós-graduação em Psicopedagogia'];

export default function FounderPage() {
  const href = whatsAppHref(whatsappMessages.diagnostico);

  return (
    <main>
      <section className="section-frame services-hero">
        <div className="section-heading services-hero-copy">
          <span className="eyebrow">Quem está por trás da Tehkné</span>
          <h1>Thales Wallison, Founder & CTO da Tehkné Solutions.</h1>
          <p>Senior Full-Stack Engineer, Product Engineer, Solutions Architect e AI Automation Specialist. A atuação conecta desenvolvimento web, WordPress avançado, sistemas digitais, IA, automações, UX/UI, integrações e produtos sob medida.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={href} target="_blank" rel="noreferrer">Conversar com a Tehkné <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Ver provas e cases <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <aside className="services-hero-panel">
          <div className="services-radar-core"><ShieldCheck size={34} /></div>
          {['Founder & CTO', 'Full-Stack', 'Produto', 'IA', 'WordPress', 'Next.js'].map((item) => <span key={item}>{item}</span>)}
        </aside>
      </section>

      <section className="metrics section-frame compact">
        {facts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section-frame services-audience-section">
        <div className="section-heading inline"><div><span className="eyebrow">Credibilidade institucional</span><h2>Uma operação técnica com responsável visível, contato oficial e escopo rastreável.</h2><p>Para projetos B2B, confiança depende de saber quem responde pela arquitetura, pela execução, pela comunicação e pela sustentação.</p></div></div>
        <div className="services-audience-grid">
          {expertise.map(([title, text], index) => {
            const Icon = [Workflow, Code2, MapPin, BrainCircuit][index];
            return <article key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>;
          })}
        </div>
      </section>

      <section className="section-frame services-audience-section">
        <div className="section-heading"><span className="eyebrow">Trajetória profissional</span><h2>Experiência em tecnologia, produto, educação, design e operação digital.</h2></div>
        <div className="services-audience-grid">
          {experience.map(([company, role, period, text]) => <article key={company}><Workflow size={22} /><h3>{company}</h3><strong>{role}</strong><span>{period}</span><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-frame services-audience-section">
        <div className="section-heading"><span className="eyebrow">Projetos e repertório</span><h2>Produtos, academias, apps, automações, agentes e sistemas.</h2></div>
        <div className="service-detail-deliverables">{projects.map((item) => <span key={item}><Code2 size={16} />{item}</span>)}</div>
      </section>

      <section className="section-frame services-audience-section">
        <div className="section-heading"><span className="eyebrow">Stack técnico</span><h2>Ferramentas e tecnologias usadas na prática.</h2></div>
        <div className="service-detail-deliverables">{stack.map((item) => <span key={item}><BrainCircuit size={16} />{item}</span>)}</div>
      </section>

      <section className="section-frame services-audience-section">
        <div className="section-heading"><span className="eyebrow">Formação</span><h2>Base de negócios, projetos, metodologias ágeis e aprendizagem.</h2></div>
        <div className="services-audience-grid">{education.map((item) => <article key={item}><GraduationCap size={22} /><h3>{item}</h3><p>Base aplicada em produto digital, gestão, estratégia, educação, metodologia, operação e experiência do usuário.</p></article>)}</div>
      </section>

      <section className="final-cta">
        <div><span className="eyebrow">Links oficiais</span><h2>Confira os canais oficiais ligados à Tehkné.</h2><p>Use estes canais para reduzir confusão com marcas de nome parecido e validar o responsável pela operação.</p></div>
        <div className="hero-actions"><a className="btn btn-primary coin" href="https://www.linkedin.com/in/thales-wallison-ferreira/" target="_blank" rel="noreferrer">LinkedIn de Thales <ArrowUpRight size={16} /></a><a className="btn btn-secondary" href="https://github.com/thales-da-vinci" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a></div>
      </section>

      <ContactForm page="Responsável Tehkné" context="conversa institucional com a Tehkné Solutions, responsável técnico, diagnóstico, arquitetura, desenvolvimento, IA e automações" title="Quer validar uma demanda com a Tehkné?" description="Envie seu contexto para avaliação técnica, comercial e operacional com mais clareza." />
    </main>
  );
}
