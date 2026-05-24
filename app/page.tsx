'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  GitBranch,
  Layers3,
  MousePointer2,
  Orbit,
  Rocket,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import ClientProofSection from './components/ClientProofSection';
import { portfolioCases } from './portfolio/portfolio-data';
import { getPortfolioCaseCardImage } from './portfolio/case-card-images';
import { blogPosts } from './blog/blog-data';
import { StackCard, stacksData } from './components/StackCard';

const services = [
  {
    icon: Layers3,
    slug: 'site-institucional-alta-performance',
    title: 'Site institucional de alta performance',
    text: 'Presença digital premium, rápida, persuasiva, com SEO técnico, copy, UX e conversão.'
  },
  {
    icon: Code2,
    slug: 'plataforma-web-sob-medida',
    title: 'Plataforma web sob medida',
    text: 'Sistemas, áreas logadas, dashboards e módulos próprios para transformar processo em produto digital.'
  },
  {
    icon: MousePointer2,
    slug: 'integracoes-crm-erp-apis',
    title: 'Integrações CRM, ERP e APIs',
    text: 'Conecte site, formulários, WhatsApp, CRM, ERP, webhooks e automações para reduzir retrabalho.'
  },
  {
    icon: Bot,
    slug: 'white-label-tecnico-agencias',
    title: 'White label técnico para agências',
    text: 'Braço técnico confiável para agências venderem mais sem travar em desenvolvimento e sustentação.'
  }
];

const authorityMetrics = [
  ['7+ anos', 'atuando em sites, sistemas, design, marketing, ensino e IA aplicada'],
  ['120+', 'entregas, melhorias, páginas, automações e experiências digitais acumuladas'],
  ['70+', 'sites WordPress, páginas e operações web criadas, ajustadas ou sustentadas'],
  ['67+', 'repositórios mapeados entre produtos, estudos, automações, sites e laboratórios'],
  ['30+', 'cases e experiências catalogadas entre Tehkné, UNTI, Savana, Meme e ecossistemas'],
  ['15+', 'stacks e ferramentas usadas em projetos reais: Next.js, WordPress, PHP, Python, APIs, IA e automações']
];

const pricingAnchors = [
  ['Projeto enxuto', 'sob diagnóstico', 'Entrada controlada para validar necessidade, páginas, conteúdo, urgência e escopo de publicação.'],
  ['Projeto premium', 'sob escopo', 'Entrega mais completa com arquitetura, experiência, SEO técnico, integração e direção visual sob medida.'],
  ['Sprint técnica', 'sob planejamento', 'Integrações, sustentação, automações, WordPress avançado ou evolução de projeto existente.']
];

const homeCases = portfolioCases.filter((item) => item.featured).slice(0, 8);
const carouselCases = [...homeCases, ...homeCases];
const latestBlogPosts = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const method = [
  ['01', 'Descoberta estratégica', 'Entendemos contexto, público, objetivos, riscos, gargalos, operação atual e critérios de sucesso antes de pensar em tela ou código.'],
  ['02', 'Arquitetura da solução', 'Organizamos escopo, stack, dados, integrações, fluxos, prioridades e plano técnico para evitar retrabalho e decisões soltas.'],
  ['03', 'Produto e experiência', 'Transformamos o mapa técnico em jornadas, interfaces, conteúdo, protótipos e decisões de UX orientadas a conversão e operação.'],
  ['04', 'Desenvolvimento rastreável', 'Construímos com versionamento, componentes, documentação, boas práticas e entregas incrementais para manter clareza durante o projeto.'],
  ['05', 'Validação e deploy', 'Testamos, revisamos, ajustamos, publicamos e preparamos a base para mensuração, manutenção e evolução contínua.'],
  ['06', 'Evolução contínua', 'Acompanhamos melhorias, performance, novas demandas, automações e sustentação para o produto continuar vivo depois do lançamento.']
];

const painPoints = [
  'Ideias sem arquitetura clara',
  'Sites que não sustentam crescimento',
  'Operações manuais demais',
  'Agências sem braço técnico confiável',
  'Produtos digitais sem UX',
  'Projetos sem suporte depois do deploy'
];

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
  const contactHref = '#contato-form';

  return (
    <main>
      <section id="top" className="hero section-frame">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }}>
          <span className="eyebrow">Software house • Produto digital • IA • Operação</span>
          <h1>Arquitetura, design e engenharia para empresas que querem <span>parecer grandes porque operam com método.</span></h1>
          <p>Mais de 7 anos construindo, melhorando e sustentando sites, sistemas, experiências digitais, automações, design e operações para empresas, agências e ecossistemas parceiros.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={contactHref}>Solicitar diagnóstico pelo formulário <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Ver autoridade e cases <ArrowUpRight size={16} /></a>
          </div>
          <div className="trust-strip">
            <span><ShieldCheck size={15} /> Técnica com prova</span>
            <span><Rocket size={15} /> Execução premium</span>
            <span><BrainCircuit size={15} /> IA aplicada</span>
            <span><Workflow size={15} /> Sustentação contínua</span>
          </div>
        </motion.div>
        <MetatronCore />
      </section>

      <motion.section className="section-frame authority-section" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Autoridade técnica acumulada</span>
            <h2>Números que mostram repertório sem inflar promessa.</h2>
            <p>Experiência somada em desenvolvimento, WordPress, Next.js, design, marketing, ensino, IA, automações, sustentação e participação técnica em ecossistemas digitais.</p>
          </div>
          <a className="btn btn-secondary" href="#contato-form">Pedir diagnóstico <ArrowUpRight size={16} /></a>
        </div>
        <div className="authority-grid">
          {authorityMetrics.map(([value, label]) => <article key={value}><strong>{value}</strong><span>{label}</span></article>)}
        </div>
      </motion.section>

      <motion.section className="section-frame pricing-anchor-section compact" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Modelo comercial</span>
            <h2>Sem tabela pública: cada proposta nasce do diagnóstico.</h2>
            <p>A Tehkné não expõe valores fechados no site porque escopo, urgência, stack, conteúdo, integrações, animações e sustentação mudam completamente a entrega.</p>
          </div>
        </div>
        <div className="pricing-anchor-grid">
          {pricingAnchors.map(([title, price, text]) => <article key={title}><span>{title}</span><strong>{price}</strong><p>{text}</p></article>)}
        </div>
      </motion.section>

      <motion.section id="solucoes" className="section-frame" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Soluções enterprise</span>
            <h2>Você não precisa só de um site. Precisa de uma operação digital estruturada.</h2>
            <p>A Tehkné entra onde existe ideia, demanda, gargalo ou oportunidade — e transforma isso em arquitetura, interface, código, integração e evolução.</p>
          </div>
          <a className="btn btn-secondary" href="/servicos">Ver serviços <ArrowUpRight size={16} /></a>
        </div>
        <div className="pain-grid">
          {painPoints.map((item) => <div className="pain-card" key={item}><DatabaseZap size={17} />{item}</div>)}
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article className="glass-card service-card" key={service.title} initial={{ opacity: 0, y: 34, rotateX: -8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }}>
                <Icon className="card-icon" size={34} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={`/servicos/${service.slug}`}>Ver serviço <ArrowUpRight size={15} /></a>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section id="portfolio" className="section-frame portfolio-carousel-section" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Portfólio e experiências</span>
            <h2>Cases rodando em vitrine contínua, com narrativa editorial segura.</h2>
            <p>Projetos próprios, participação técnica autorizada, produtos internos e ecossistemas parceiros organizados sem inflar autoria nem misturar contextos comerciais.</p>
          </div>
          <a className="text-link" href="/portfolio">Ver portfólio completo <ArrowUpRight size={16} /></a>
        </div>
        <div className="case-marquee" aria-label="Carrossel de cases Tehkné">
          <div className="case-marquee-track">
            {carouselCases.map((project, index) => {
              const cardImage = getPortfolioCaseCardImage(project);

              return (
                <a className={`project-card home-case-card ${project.tone}`} href={`/portfolio/${project.slug}`} key={`${project.slug}-${index}`}>
                  {cardImage ? (
                    <div className={`project-thumb portfolio-thumb portfolio-image-thumb portfolio-case-card-shot ${project.tone}`}>
                      <img src={cardImage} alt={`Imagem do case ${project.title}`} loading="lazy" />
                    </div>
                  ) : (
                    <div className={`project-thumb ${project.tone}`}><Orbit size={46} /><span /></div>
                  )}
                  <small>{project.level} • {project.category}</small>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="home-case-stack">{project.stack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <strong>Abrir case <ArrowUpRight size={14} /></strong>
                </a>
              );
            })}
          </div>
        </div>
      </motion.section>

      <ClientProofSection />

      <motion.section id="metodo" className="section-frame method-section method-expanded" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">GIP Tehkné OS</span>
            <h2>Um sistema para tirar projetos do improviso e colocar a operação em trilhos.</h2>
            <p>O GIP Tehkné OS une método, arquitetura viva, design de produto, engenharia, IA aplicada, automações, documentação, governança e evolução contínua em uma única operação.</p>
          </div>
          <a className="btn btn-secondary" href="/metodo">Conhecer o sistema <ArrowUpRight size={16} /></a>
        </div>
        <div className="method-line">
          {method.map(([number, title, text]) => (
            <motion.div className="method-step" key={title} whileHover={{ y: -8, scale: 1.03 }}>
              <span>{number}</span>
              <GitBranch size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="os" className="section-frame os-section os-expanded" {...fadeUp}>
        <div className="os-panel">
          <span className="eyebrow">Design • Arquitetura • Engenharia</span>
          <h2>GIP Tehkné OS conecta estratégia, produto, código, IA, documentação e sustentação.</h2>
          <p>Mais do que um conjunto de ferramentas, o GIP Tehkné OS é o sistema operacional que transforma experiência técnica em processo empresarial: arquitetura viva, base de conhecimento, prompts, agentes, automações, versionamento, curadoria de portfólio e governança de entrega.</p>
          <p>Na prática, ele organiza como a Tehkné pensa, constrói, documenta, valida e evolui soluções digitais — reduzindo dependência de improviso e aumentando previsibilidade para clientes, parceiros e produtos internos.</p>
          <div className="os-features">
            {['Diagnóstico técnico', 'Roadmap de produto', 'Documentação viva', 'Agentes de IA', 'Governança Git', 'Suporte evolutivo'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="hero-actions os-actions">
            <a className="btn btn-primary coin" href="/metodo#visao">Explorar GIP Tehkné OS <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo#fluxo-gip">Ver fluxo GIP <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="stack-cloud">
          {stacksData.map((stack) => (
            <StackCard key={stack.name} name={stack.name} icon={stack.icon} />
          ))}
        </div>
      </motion.section>

      <motion.section id="blog" className="section-frame home-blog-section" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Blog Tehkné</span>
            <h2>Conteúdo para transformar tecnologia em decisão prática.</h2>
            <p>Artigos consultivos sobre arquitetura, produto, WordPress, Next.js, IA, automações, UX e operação digital — sempre conectando conceito técnico com aplicação real.</p>
          </div>
          <a className="btn btn-secondary" href="/blog">Ver todos os posts <ArrowUpRight size={16} /></a>
        </div>
        <div className="home-blog-grid">
          {latestBlogPosts.map((post) => (
            <a className="home-blog-card" href={`/blog/${post.slug}`} key={post.slug}>
              <div className="home-blog-icon"><BookOpen size={22} /></div>
              <small>{post.category} • {post.readingTime}</small>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <span>Ler post <ArrowUpRight size={14} /></span>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section id="contato" className="final-cta" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div>
          <span className="eyebrow">Diagnóstico qualificado</span>
          <h2>Conte o que você quer construir para receber um caminho mais preciso.</h2>
          <p>O formulário organiza dados do lead, tipo de projeto, perfil de investimento, urgência e mensagem antes do contato. Isso prepara a base para diagnóstico, CRM, planilha e proposta sob medida.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href="#contato-form">Preencher formulário <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/contato#contato-form">Página de contato <ArrowUpRight size={16} /></a>
        </div>
      </motion.section>

      <ContactForm page="Home" context="diagnóstico estratégico para transformar uma ideia, processo ou operação em sistema digital real" />
    </main>
  );
}
