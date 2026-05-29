import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, Layers3, Network, Orbit, UserRound } from 'lucide-react';
import { notFound } from 'next/navigation';
import ShareButtons from '../../components/ShareButtons';
import { allBlogPosts, getAllBlogPost } from '../all-blog-posts';
import { getBlogImageAsset } from '../blog-image-assets';
import type { BlogBlock } from '../blog-data';
import { getBlogExpansionBlocks } from '../blog-expansions';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getGeneratedCover(slug: string) {
  return `/blog/cover/${slug}`;
}

const coverImageStyle = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover'
} as const;

const featuredCoverCardStyle = {
  position: 'relative',
  minHeight: 430,
  padding: 0,
  display: 'block',
  overflow: 'hidden',
  background: '#020617'
} as const;

const featuredCoverOverlayStyle = {
  position: 'absolute',
  left: 18,
  right: 18,
  bottom: 18,
  zIndex: 2,
  padding: 18,
  border: '1px solid rgba(148,163,184,.16)',
  borderRadius: 20,
  background: 'linear-gradient(180deg, rgba(2,6,23,.42), rgba(2,6,23,.9))'
} as const;

const relatedCoverStyle = {
  position: 'relative',
  overflow: 'hidden',
  padding: 0,
  display: 'block',
  background: '#020617'
} as const;

const relatedBadgeStyle = {
  position: 'absolute',
  left: 18,
  bottom: 18,
  zIndex: 2,
  margin: 0,
  padding: '8px 12px',
  borderRadius: 999,
  border: '1px solid rgba(255,255,255,.18)',
  background: 'rgba(2,6,23,.62)',
  color: '#e0f2fe',
  fontSize: 11,
  fontWeight: 900,
  textTransform: 'uppercase'
} as const;

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getAllBlogPost(slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado | Tehkné Solutions'
    };
  }

  const asset = getBlogImageAsset(post.slug);
  const cover = asset?.src ?? getGeneratedCover(post.slug);

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
      images: [cover]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [cover]
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
  const post = getAllBlogPost(slug);

  if (!post) {
    notFound();
  }

  const expandedBlocks = [...post.blocks, ...getBlogExpansionBlocks(post.slug)];
  const asset = getBlogImageAsset(post.slug);
  const heroImage = asset?.src ?? getGeneratedCover(post.slug);
  const heroAlt = asset?.alt ?? `Imagem de destaque do artigo ${post.title}`;
  const headings = expandedBlocks.filter((block): block is Extract<BlogBlock, { type: 'heading' }> => block.type === 'heading');
  const relatedPosts = allBlogPosts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.category === post.category || item.tags.some((tag) => post.tags.includes(tag)))
    .concat(allBlogPosts.filter((item) => item.slug !== post.slug))
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
              <ShareButtons title={post.title} text={post.description} />
            </div>
            <aside className="blog-cover-card blog-photo-hero-card" style={featuredCoverCardStyle} aria-label={heroAlt}>
              <img src={heroImage} alt={heroAlt} style={coverImageStyle} />
              <div className="blog-photo-hero-glow" aria-hidden="true" />
              <div className="blog-featured-image-overlay" style={featuredCoverOverlayStyle}>
                <span>Tehkné Insights</span>
                <strong>{post.category}</strong>
                {asset?.credit ? <small>{asset.credit}</small> : null}
              </div>
            </aside>
          </div>
        </section>

        <section className="section-frame blog-reading-shell">
          <aside className="blog-toc">
            <span className="eyebrow">Neste artigo</span>
            <a href="#artigo">Leitura principal</a>
            {headings.slice(0, 8).map((heading) => {
              const id = slugify(heading.text);
              return <a href={`#${id}`} key={heading.text}>{heading.text}</a>;
            })}
            <a href="#visual">Mapa prático</a>
            <a href="#diagnostico">Diagnóstico</a>
          </aside>

          <div className="blog-content" id="artigo">
            <p className="blog-lead">{post.description}</p>
            {expandedBlocks.map((block, index) => (
              <BlogBlockRenderer block={block} key={`${block.type}-${index}`} />
            ))}
            <ShareButtons title={post.title} text={post.description} />
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
                <div className="blog-card-cover generated-cover" style={relatedCoverStyle} aria-hidden="true">
                  <img src={getGeneratedCover(item.slug)} alt="" style={coverImageStyle} />
                  <span style={relatedBadgeStyle}>{item.category}</span>
                </div>
                <div>
                  <span className="eyebrow">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a className="text-link" href={`/blog/${item.slug}`}>Ler artigo <ArrowUpRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
