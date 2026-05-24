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
  ['LP estratégica', 'a partir de R$ 1.600', 'Landing page com copy, layout, responsividade, CTA e publicação.'],
  ['Site institucional', 'a partir de R$ 3.000', 'Site premium com arquitetura, páginas estratégicas, SEO técnico e formulário qualificado.'],
  ['Sprint técnica', 'sob diagnóstico', 'Integrações, sustentação, automações, WordPress avançado ou evolução de projeto.']
];

const proofTiles = [
  { icon: ShieldCheck, value: '7+ anos', label: 'repertório validado', text: 'Sites, sistemas, WordPress, produto, design, marketing, ensino e IA aplicada.' },
  { icon: Rocket, value: '120+', label: 'entregas e melhorias', text: 'Páginas, automações, ajustes, interfaces, fluxos comerciais e experiências digitais.' },
  { icon: Layers3, value: '70+', label: 'operações WordPress', text: 'Criação, manutenção, performance, Elementor, JetEngine, temas, plugins e catálogos.' },
  { icon: Code2, value: '67+', label: 'repositórios mapeados', text: 'Produtos, estudos, automações, sites, apps, laboratórios e bases técnicas próprias.' },
  { icon: Orbit, value: '30+', label: 'cases catalogados', text: 'Tehkné, UNTI, Savana, Meme Digital, projetos próprios e participação técnica segura.' },
  { icon: BrainCircuit, value: '15+', label: 'stacks e ferramentas', text: 'Next.js, React, WordPress, PHP, Python, APIs, Vercel, IA, automações e design systems.' }
];

const operationSignals = [
  ['Diagnóstico', 'problema real, urgência, público e gargalo'],
  ['Arquitetura', 'escopo, stack, dados, integrações e prioridade'],
  ['Interface', 'UX, copy, visual, conversão e leitura rápida'],
  ['Código', 'componentes, versionamento, performance e deploy'],
  ['Evolução', 'suporte, automações, analytics e melhorias contínuas']
];

const homeCases = portfolioCases.filter((item) => item.featured).slice(0, 8);
const carouselCases = [...homeCases, ...homeCases];
const latestBlogPosts = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const method = [
  ['01', 'Diagnóstico do problema real', 'Entendemos operação, público, urgência, gargalos e objetivo comercial antes de definir tecnologia, layout ou orçamento.'],
  ['02', 'Arquitetura vendável', 'Organizamos escopo, stack, dados, integrações, prioridades e plano técnico para o projeto nascer com direção clara.'],
  ['03', 'Experiência e conversão', 'Transformamos o mapa em jornada, conteúdo, interface e CTAs que ajudam o usuário a entender valor e pedir contato.'],
  ['04', 'Desenvolvimento rastreável', 'Construímos com versionamento, componentes, documentação, critérios de aceite e entregas incrementais.'],
  ['05', 'Publicação com controle', 'Testamos, ajustamos, publicamos e deixamos a base pronta para mensuração, indexação e evolução.'],
  ['06', 'Evolução contínua', 'Mantemos o projeto vivo com melhorias, suporte, automações, performance e novas demandas sem perder contexto.']
];

const painPoints = [
  'O site existe, mas não convence',
  'A operação depende de planilhas e WhatsApp',
  'O WordPress virou remendo',
  'A agência precisa de braço técnico',
  'A ideia ainda não virou escopo',
  'O projeto morreu depois do deploy'
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
          <span className="eyebrow">Software sob medida • IA • WordPress avançado • Produto digital</span>
          <h1>Saia do improviso digital e transforme sua operação em <span>sistema que vende, organiza e escala.</span></h1>
          <p>A Tehkné projeta, desenvolve e evolui sites, sistemas, automações e produtos digitais para empresas e agências que precisam clareza, performance, conversão e sustentação depois do deploy.</p>
          <div className="hero-actions">
            <a className="btn btn-primary coin" href={contactHref}>Quero um diagnóstico técnico <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/portfolio">Ver provas e cases <ArrowUpRight size={16} /></a>
          </div>
          <div className="trust-strip">
            <span><ShieldCheck size={15} /> Menos retrabalho</span>
            <span><Rocket size={15} /> Mais conversão</span>
            <span><BrainCircuit size={15} /> IA com processo</span>
            <span><Workflow size={15} /> Suporte evolutivo</span>
          </div>
        </motion.div>
        <MetatronCore />
      </section>

      <motion.section className="section-frame home-proof-lab" {...fadeUp}>
        <div className="home-proof-copy">
          <span className="eyebrow">Autoridade visualizada</span>
          <h2>Números, stack e repertório convertidos em painel de decisão.</h2>
          <p>Em vez de vender uma promessa solta, a Tehkné apresenta provas de execução: volume técnico, repertório de projetos, ecossistemas, WordPress avançado, produtos internos e IA aplicada em fluxo real.</p>
          <div className="home-proof-actions">
            <a className="btn btn-secondary" href="/portfolio">Explorar provas <ArrowUpRight size={16} /></a>
            <a className="text-link" href="#solucoes">Ver como isso vira solução <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="home-proof-stage" aria-label="Painel visual de autoridade Tehkné">
          <div className="proof-orbit proof-orbit-one" />
          <div className="proof-orbit proof-orbit-two" />
          <div className="proof-core-card">
            <span>Tehkné Stack</span>
            <strong>Design + Código + IA + Operação</strong>
            <small>processo vivo para transformar demanda em produto digital</small>
          </div>
          <div className="proof-signal signal-a">Next.js</div>
          <div className="proof-signal signal-b">WordPress</div>
          <div className="proof-signal signal-c">IA</div>
          <div className="proof-signal signal-d">UX</div>
        </div>

        <div className="proof-tile-grid">
          {proofTiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <motion.article
                className="proof-tile premium-hover"
                key={tile.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
              >
                <Icon size={24} />
                <strong>{tile.value}</strong>
                <span>{tile.label}</span>
                <p>{tile.text}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section className="section-frame home-offer-map compact" {...fadeUp}>
        <div className="offer-map-header">
          <div>
            <span className="eyebrow">Do investimento ao sistema</span>
            <h2>Cada entrada vira um caminho de entrega, não um pacote genérico.</h2>
          </div>
          <p>As faixas ajudam o cliente a entender ponto de partida. A entrega real nasce do diagnóstico, escopo, urgência, integrações, conteúdo e sustentação necessária.</p>
        </div>

        <div className="offer-map-grid">
          <div className="investment-rail">
            {pricingAnchors.map(([title, price, text], index) => (
              <motion.article
                className="investment-card premium-hover"
                key={title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.48 }}
              >
                <span>0{index + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <b>{price}</b>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="operation-flow-card premium-hover">
            <div className="flow-card-top">
              <DatabaseZap size={28} />
              <div>
                <span>Mapa operacional</span>
                <strong>Como a Tehkné lê a demanda</strong>
              </div>
            </div>
            <div className="operation-flow-list">
              {operationSignals.map(([title, text], index) => (
                <div className="operation-flow-item" key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="solucoes" className="section-frame visual-section" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Soluções enterprise</span>
            <h2>Você não precisa só de um site. Precisa de uma operação digital estruturada.</h2>
            <p>A Tehkné entra onde existe ideia, demanda, gargalo ou oportunidade — e transforma isso em arquitetura, interface, código, integração e evolução.</p>
          </div>
          <a className="btn btn-secondary" href="/servicos">Ver serviços <ArrowUpRight size={16} /></a>
        </div>
        <div className="pain-grid visual-chip-grid">
          {painPoints.map((item) => <div className="pain-card premium-hover" key={item}><DatabaseZap size={17} />{item}</div>)}
        </div>
        <div className="service-grid visual-card-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article className="glass-card service-card premium-hover" key={service.title} initial={{ opacity: 0, y: 34, rotateX: -8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }}>
                <Icon className="card-icon" size={34} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={`/servicos/${service.slug}`}>Ver serviço <ArrowUpRight size={15} /></a>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section id="portfolio" className="section-frame portfolio-carousel-section visual-section" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Prova antes da promessa</span>
            <h2>Cases, produtos e experiências para reduzir o risco de contratar tecnologia.</h2>
            <p>Organizamos projetos próprios, participação técnica autorizada, produtos internos e ecossistemas parceiros por contexto, stack, desafio e entrega — para você entender o tipo de problema que a Tehkné resolve.</p>
          </div>
          <a className="text-link" href="/portfolio">Ver portfólio completo <ArrowUpRight size={16} /></a>
        </div>
        <div className="case-marquee" aria-label="Carrossel de cases Tehkné">
          <div className="case-marquee-track">
            {carouselCases.map((project, index) => {
              const cardImage = getPortfolioCaseCardImage(project);

              return (
                <a className={`project-card home-case-card premium-hover ${project.tone}`} href={`/portfolio/${project.slug}`} key={`${project.slug}-${index}`}>
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

      <motion.section id="metodo" className="section-frame method-section method-expanded visual-section" {...fadeUp}>
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Método GIP Tehkné</span>
            <h2>O método existe para o cliente não pagar por bagunça.</h2>
            <p>O GIP Tehkné OS une diagnóstico, arquitetura, produto, engenharia, IA aplicada, automações, documentação, governança e evolução contínua para transformar demanda em execução rastreável.</p>
          </div>
          <a className="btn btn-secondary" href="/metodo">Conhecer o método <ArrowUpRight size={16} /></a>
        </div>
        <div className="method-line">
          {method.map(([number, title, text]) => (
            <motion.div className="method-step premium-hover" key={title} whileHover={{ y: -8, scale: 1.03 }}>
              <span>{number}</span>
              <GitBranch size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="os" className="section-frame os-section os-expanded visual-section" {...fadeUp}>
        <div className="os-panel premium-hover">
          <span className="eyebrow">Design • Arquitetura • Engenharia</span>
          <h2>A Tehkné conecta estratégia, produto, código, IA, documentação e sustentação.</h2>
          <p>Mais do que um fornecedor de execução, atuamos como braço técnico para transformar experiência, processos e decisões em um sistema digital com continuidade: arquitetura viva, base de conhecimento, automações, versionamento, curadoria de portfólio e governança de entrega.</p>
          <p>Na prática, isso reduz improviso, aumenta previsibilidade e ajuda o cliente a entender o que está sendo criado, por que está sendo criado e como aquilo vai evoluir.</p>
          <div className="os-features">
            {['Diagnóstico técnico', 'Roadmap de produto', 'Documentação viva', 'Agentes de IA', 'Governança Git', 'Suporte evolutivo'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="hero-actions os-actions">
            <a className="btn btn-primary coin" href="/contato#contato-form">Mapear minha demanda <ArrowUpRight size={16} /></a>
            <a className="btn btn-secondary" href="/metodo#fluxo-gip">Ver fluxo GIP <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="stack-cloud visual-stack-cloud">
          {stacksData.map((stack) => (
            <StackCard key={stack.name} name={stack.name} icon={stack.icon} />
          ))}
        </div>
      </motion.section>

      <motion.section id="blog" className="section-frame home-blog-section visual-section" {...fadeUp}>
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
            <a className="home-blog-card premium-hover" href={`/blog/${post.slug}`} key={post.slug}>
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
          <span className="eyebrow">Diagnóstico estratégico</span>
          <h2>Antes de começar outro projeto no escuro, vamos mapear o caminho certo.</h2>
          <p>Conte o que precisa criar, melhorar ou automatizar. A primeira entrega é clareza técnica e comercial.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary coin" href={contactHref}>Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          <a className="btn btn-secondary" href="/solucoes">Ver soluções <ArrowUpRight size={16} /></a>
        </div>
      </motion.section>

      <ContactForm
        page="Home"
        context="diagnóstico estratégico para transformar uma ideia, processo ou operação em sistema digital real, vendável e evolutivo"
        title="Quer entender o melhor caminho para seu projeto?"
        description="Envie o contexto da sua demanda. A Tehkné retorna com uma leitura inicial de arquitetura, prioridade e próximos passos."
      />
    </main>
  );
}
