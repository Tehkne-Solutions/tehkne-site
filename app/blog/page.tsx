import { ArrowUpRight, BookOpen, Clock, Layers3 } from 'lucide-react';
import { allBlogPosts } from './all-blog-posts';

export const metadata = {
  title: 'Blog | Tehkné Solutions',
  description:
    'Conteúdos instrucionais da Tehkné sobre arquitetura de soluções, desenvolvimento web, WordPress avançado, IA, automações, UX, produto digital e operação técnica.'
};

function getGeneratedCover(slug: string) {
  return `/blog/cover/${slug}`;
}

export default function BlogPage() {
  const featuredPost = allBlogPosts[0];

  return (
    <main>
      <section className="section-frame blog-hero">
        <div className="blog-hero-copy">
          <span className="eyebrow">Blog Tehkné • Conhecimento aplicado</span>
          <h1>Guias práticos para transformar tecnologia em operação real.</h1>
          <p>
            Conteúdos instrucionais para explicar conceitos técnicos, reduzir ruído na tomada de decisão
            e mostrar como arquitetura, produto, design, código e automação ajudam empresas a evoluir.
          </p>
          <div className="trust-strip">
            <span><BookOpen size={15} /> Artigos didáticos</span>
            <span><Layers3 size={15} /> Estratégia + execução</span>
            <span><Clock size={15} /> Leitura objetiva</span>
          </div>
        </div>
        <aside className="blog-hero-panel blog-featured-index-panel">
          <img src={getGeneratedCover(featuredPost.slug)} alt={`Imagem de destaque do artigo ${featuredPost.title}`} />
          <div>
            <span className="panel-kicker">Biblioteca editorial Tehkné</span>
            <strong>{featuredPost.category}</strong>
            <p>
              Guias conectados aos serviços, produtos e temas estratégicos da Tehkné para orientar decisões
              técnicas, comerciais e operacionais.
            </p>
          </div>
        </aside>
      </section>

      <section className="section-frame blog-section" id="artigos">
        <div className="section-heading inline">
          <div>
            <span className="eyebrow">Biblioteca completa</span>
            <h2>Artigos publicados</h2>
          </div>
          <p>
            A linha editorial da Tehkné é consultiva: cada post explica um termo técnico,
            mostra o problema real que ele resolve e conecta com uma aplicação prática.
          </p>
        </div>

        <div className="blog-grid">
          {allBlogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-card-cover generated-cover" aria-hidden="true">
                <img src={getGeneratedCover(post.slug)} alt="" />
                <span>{post.category}</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="blog-tags">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="btn btn-secondary" href={`/blog/${post.slug}`}>
                  Ler artigo <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame blog-cta">
        <div>
          <span className="eyebrow">Conteúdo que vira ação</span>
          <h2>Quer transformar um conceito técnico em plano de execução?</h2>
          <p>
            A Tehkné pode ajudar a mapear sua ideia, definir a arquitetura, escolher a stack
            e transformar a solução em etapas claras de design, desenvolvimento, validação e evolução.
          </p>
        </div>
        <a className="btn btn-primary coin" href="/contato#contato-form">
          Solicitar diagnóstico <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}
