import { BookOpen, Clock, Layers3 } from 'lucide-react';
import { allBlogPosts } from './all-blog-posts';
import BlogIndexClient from './BlogIndexClient';

export const metadata = {
  title: 'Blog | Tehkné Solutions',
  description:
    'Conteúdos instrucionais da Tehkné sobre arquitetura de soluções, desenvolvimento web, WordPress avançado, IA, automações, UX, produto digital e operação técnica.'
};

export default function BlogPage() {
  return (
    <main>
      <section className="section-frame blog-hero blog-hero-clean">
        <div className="blog-hero-copy">
          <span className="eyebrow">Blog Tehkné • Conhecimento aplicado</span>
          <h1>Guias práticos para transformar tecnologia em operação real.</h1>
          <p>
            Conteúdos instrucionais para explicar conceitos técnicos, reduzir ruído na tomada de decisão
            e mostrar como arquitetura, produto, design, código e automação ajudam empresas a evoluir.
          </p>
          <div className="trust-strip blog-hero-trust-strip">
            <span><BookOpen size={15} /> Artigos didáticos</span>
            <span><Layers3 size={15} /> Estratégia + execução</span>
            <span><Clock size={15} /> Leitura objetiva</span>
          </div>
        </div>
      </section>

      <section className="section-frame blog-section" id="artigos">
        <div className="section-heading inline blog-index-heading">
          <div>
            <span className="eyebrow">Biblioteca completa</span>
            <h2>Artigos publicados</h2>
          </div>
          <p>
            Filtre por tema, encontre o assunto certo e avance pela biblioteca sem carregar dezenas de cards de uma vez.
          </p>
        </div>

        <BlogIndexClient posts={allBlogPosts} />
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
          Solicitar diagnóstico
        </a>
      </section>
    </main>
  );
}
