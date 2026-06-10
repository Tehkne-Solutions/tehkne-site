'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, CalendarDays, Filter, Layers3, Search } from 'lucide-react';
import type { BlogPost } from './blog-data';

type BlogIndexClientProps = {
  posts: BlogPost[];
};

const INITIAL_VISIBLE_POSTS = 9;
const POSTS_PER_PAGE = 6;

function getGeneratedCover(slug: string) {
  return `/blog/cover/${slug}`;
}

function formatBrazilDate(date: string) {
  const [year, month, day] = date.split('-');
  if (!year || !month || !day) return date;
  return `${day}/${month}/${year}`;
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_POSTS);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map((post) => post.category))).sort((a, b) => a.localeCompare(b, 'pt-BR'));
    return ['Todos', ...uniqueCategories];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const search = normalizeText(searchTerm.trim());

    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      const searchableContent = normalizeText(`${post.title} ${post.description} ${post.category} ${post.tags.join(' ')}`);
      const matchesSearch = !search || searchableContent.includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [posts, searchTerm, selectedCategory]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
    setVisibleCount(INITIAL_VISIBLE_POSTS);
  }

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    setVisibleCount(INITIAL_VISIBLE_POSTS);
  }

  return (
    <div className="blog-index-ux">
      <div className="blog-filter-panel" aria-label="Filtros do blog">
        <div className="blog-filter-search">
          <Search size={17} />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder="Buscar por tema, tecnologia ou dor..."
            aria-label="Buscar artigos"
          />
        </div>

        <div className="blog-category-filter" aria-label="Filtrar por tema">
          <span><Filter size={15} /> Temas</span>
          <div className="blog-category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={selectedCategory === category ? 'is-active' : ''}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="blog-index-summary">
        <span><Layers3 size={15} /> {filteredPosts.length} artigo{filteredPosts.length === 1 ? '' : 's'} encontrado{filteredPosts.length === 1 ? '' : 's'}</span>
        <span>Exibindo {visiblePosts.length} de {filteredPosts.length}</span>
      </div>

      <div className="blog-grid blog-grid-limited">
        {visiblePosts.map((post) => (
          <article className="blog-card blog-card-refined" key={post.slug}>
            <div className="blog-card-cover generated-cover" aria-hidden="true">
              <img src={getGeneratedCover(post.slug)} alt="" loading="lazy" />
              <span>{post.category}</span>
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span><CalendarDays size={13} /> {formatBrazilDate(post.date)}</span>
                <span>{post.readingTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="blog-tags blog-tag-buttons" aria-label="Tags do artigo">
                <span className="blog-theme-tag">{post.category}</span>
                {post.tags.slice(0, 2).map((tag) => (
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

      {filteredPosts.length === 0 ? (
        <div className="blog-empty-state">
          <strong>Nenhum artigo encontrado para esse filtro.</strong>
          <p>Experimente buscar por outro tema, como WordPress, IA, SEO, sistemas, integrações ou produto digital.</p>
        </div>
      ) : null}

      {hasMore ? (
        <div className="blog-load-more">
          <button className="btn btn-primary coin" type="button" onClick={() => setVisibleCount((count) => count + POSTS_PER_PAGE)}>
            Ver mais artigos <ArrowUpRight size={16} />
          </button>
        </div>
      ) : filteredPosts.length > INITIAL_VISIBLE_POSTS ? (
        <div className="blog-load-more blog-load-complete">
          <span>Todos os artigos desse filtro foram exibidos.</span>
        </div>
      ) : null}
    </div>
  );
}
