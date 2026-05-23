import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, Layers3, Network, Orbit, UserRound } from 'lucide-react';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost, type BlogBlock } from '../blog-data';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado | Tehkné Solutions'
    };
  }

  return {
    title: `${post.title} | Blog Tehkné`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'pt_BR',
      url: `/blog/${post.slug}`,
      images: [post.cover]
    }
  };
}

function BlogBlockRenderer({ block }: { block: BlogBlock }) {
  if (block.type === 'paragraph') {
    return <p>{block.text}</p>;
  }

  if (block.type === 'heading') {
    return <h2 id={slugify(block.text)}>{block.text}</h2>;
  }

  if (block.type === 'subheading') {
    return <h3>{block.text}</h3>;
  }

  if (block.type === 'quote') {
    return (
      <aside className="blog-callout">
        <p>{block.text}</p>
        {block.cta && block.href ? (
          <a className="btn btn-primary coin" href={block.href}>
            {block.cta} <ArrowUpRight size={15} />
          </a>
        ) : null}
      </aside>
    );
  }

  if (block.type === 'list') {
    return (
      <ul className="blog-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'code') {
    return <pre className="blog-diagram"><code>{block.text}</code></pre>;
  }

  if (block.type === 'compare') {
    return (
      <div className="blog-compare">
        <article>
          <h3>{block.leftTitle}</h3>
          <ul>
            {block.left.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>{block.rightTitle}</h3>
          <ul>
            {block.right.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    );
  }

  return null;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const headings = post.blocks.filter((block): block is Extract<BlogBlock, { type: 'heading' }> => block.type === 'heading');
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.category === post.category || item.tags.some((tag) => post.tags.includes(tag)))
    .concat(blogPosts.filter((item) => item.slug !== post.slug))
    .filter((item, index, array) => array.findIndex((candidate) => candidate.slug === item.slug) === index)
    .slice(0, 3);

  const visualCards = [
    {
      icon: Layers3,
      label: 'Camada 01',
      title: 'Contexto',
      text: `O artigo parte de ${post.category.toLowerCase()} e traduz o tema para uma dor real de empresa.`
    },
    {
      icon: Network,
      label: 'Camada 02',
      title: 'Arquitetura',
      text: 'A leitura conecta termos técnicos, fluxos, decisões, riscos e impacto operacional.'
    },
    {
      icon: Orbit,
      label: 'Camada 03',
      title: 'Aplicação',
      text: 'O fechamento mostra quando aplicar, como evitar retrabalho e qual próximo passo tomar.'
    }
  ];

  return (
    <main>
      <article>
        <section className="section-frame blog-post-hero">
          <a className="blog-back" href="/blog">
            <ArrowLeft size={15} /> Voltar para o blog
          </a>
          <div className="blog-post-hero-grid">
            <div>
              <span className="eyebrow">{post.category}</span>
              <h1>{post.title}</h1>
              <p>{post.intro}</p>
              <div className="blog-post-meta">
                <span><UserRound size={15} /> {post.author}</span>
                <span><CalendarDays size={15} /> {post.date}</span>
                <span><Clock size={15} /> {post.readingTime}</span>
              </div>
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <aside className="blog-cover-card blog-editorial-cover" aria-label={`Visual editorial do artigo ${post.title}`}>
              <div className="blog-cover-window">
                <span />
                <span />
                <span />
              </div>
              <div className="blog-cover-art" aria-hidden="true">
                <div className="blog-cover-orbit orbit-a" />
                <div className="blog-cover-orbit orbit-b" />
                <div className="blog-cover-core"><Orbit size={42} /></div>
                <div className="blog-cover-node node-a" />
                <div className="blog-cover-node node-b" />
                <div className="blog-cover-node node-c" />
              </div>
              <span>Visual editorial</span>
              <strong>{post.category}</strong>
              <p>{post.description}</p>
              <div className="blog-cover-tags">
                {post.tags.slice(0, 3).map((tag) => <em key={tag}>{tag}</em>)}
              </div>
            </aside>
          </div>
        </section>

        <section className="section-frame blog-reading-shell">
          <aside className="blog-toc">
            <span className="eyebrow">Neste artigo</span>
            <a href="#artigo">Leitura principal</a>
            {headings.slice(0, 6).map((heading) => {
              const id = slugify(heading.text);
              return <a href={`#${id}`} key={heading.text}>{heading.text}</a>;
            })}
            <a href="#visual">Mapa prático</a>
            <a href="#diagnostico">Diagnóstico</a>
          </aside>

          <div className="blog-content" id="artigo">
            <p className="blog-lead">{post.description}</p>
            {post.blocks.map((block, index) => (
              <BlogBlockRenderer block={block} key={`${block.type}-${index}`} />
            ))}
          </div>
        </section>

        <section className="section-frame blog-visual-section" id="visual">
          <div className="section-heading inline">
            <div>
              <span className="eyebrow">Mapa prático</span>
              <h2>Como este conceito se conecta à operação.</h2>
            </div>
            <p>
              A leitura se organiza em três movimentos: entender o contexto, estruturar as decisões técnicas
              e transformar o conceito em aplicação prática dentro da operação digital.
            </p>
          </div>
          <div className="blog-visual-grid">
            {visualCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title}>
                  <div className="blog-visual-icon"><Icon size={22} /></div>
                  <span>{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-frame blog-final-cta" id="diagnostico">
          <div>
            <span className="eyebrow">Próximo passo</span>
            <h2>Quer transformar este conceito em plano de execução?</h2>
            <p>
              A Tehkné atua como software house, estúdio de produto digital e braço técnico para empresas,
              agências e operações que precisam construir com clareza, método e evolução contínua.
            </p>
          </div>
          <a className="btn btn-primary coin" href="/contato#contato-form">
            Solicitar diagnóstico <ArrowUpRight size={16} />
          </a>
        </section>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="section-frame blog-section">
          <div className="section-heading inline">
            <div>
              <span className="eyebrow">Continue lendo</span>
              <h2>Outros artigos da trilha Tehkné</h2>
            </div>
            <a className="btn btn-secondary" href="/blog">Ver todos <ArrowUpRight size={15} /></a>
          </div>
          <div className="blog-grid compact-blog-grid">
            {relatedPosts.map((item) => (
              <article className="blog-card" key={item.slug}>
                <div className="blog-card-cover" aria-hidden="true">
                  <span>{item.category}</span>
                  <div className="blog-card-orbit" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{item.date}</span>
                    <span>{item.readingTime}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a className="btn btn-secondary" href={`/blog/${item.slug}`}>
                    Ler artigo <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
