'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Orbit, Search, X } from 'lucide-react';
import type { PortfolioCase } from './portfolio-data';
import { getPortfolioCaseCardImage } from './case-card-images';

const filters = ['Todos', 'Projetos Tehkné', 'UNTI', 'Meme Digital', 'Automotivo', 'Saúde', 'Corporativo', 'Indústria', 'WordPress', 'Next.js', 'Apps', 'Jogos', 'IA'];

type Props = {
  cases: PortfolioCase[];
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function searchableText(item: PortfolioCase) {
  return normalize([
    item.title,
    item.level,
    item.category,
    item.sector,
    item.status,
    item.source ?? '',
    item.summary,
    item.challenge,
    item.delivery,
    item.outcome,
    item.imageLabel,
    item.stack.join(' ')
  ].join(' '));
}

function isAgencyClientCase(item: PortfolioCase) {
  return normalize([item.status, item.source ?? '', item.level].join(' ')).includes('savana');
}

function displayLevel(item: PortfolioCase) {
  const text = normalize([item.level, item.status, item.source ?? ''].join(' '));
  if (isAgencyClientCase(item)) return 'Case Tehkné';
  if (text.includes('unti')) return 'Case Tehkné • UNTI';
  if (text.includes('historico')) return 'Case Tehkné';
  if (text.includes('participacao')) return 'Case Tehkné';
  return item.level;
}

function getCaseCardImage(item: PortfolioCase) {
  if (isAgencyClientCase(item)) {
    return undefined;
  }

  return getPortfolioCaseCardImage(item);
}

function matchesFilter(item: PortfolioCase, filter: string) {
  if (filter === 'Todos') return true;

  const text = searchableText(item);
  const key = normalize(filter);

  if (key === 'projetos tehkne') {
    return text.includes('tehkne') || text.includes('produto interno') || text.includes('laboratorio') || text.includes('case tehkne') || isAgencyClientCase(item);
  }

  if (key === 'unti') {
    return text.includes('unti');
  }

  if (key === 'meme digital') {
    return text.includes('meme');
  }

  if (key === 'apps') {
    return text.includes('app') || text.includes('mobile') || text.includes('flutter') || text.includes('react native');
  }

  if (key === 'jogos') {
    return text.includes('game') || text.includes('jogo') || text.includes('mmorpg') || text.includes('byond');
  }

  return text.includes(key);
}

function matchesSearch(item: PortfolioCase, query: string) {
  const value = normalize(query.trim());
  if (!value) return true;
  const text = searchableText(item);
  return value.split(/\s+/).every((term) => text.includes(term));
}

export default function PortfolioGrid({ cases }: Props) {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const visibleCases = useMemo(
    () => cases.filter((item) => matchesFilter(item, activeFilter) && matchesSearch(item, searchTerm)),
    [cases, activeFilter, searchTerm]
  );

  return (
    <>
      <div className="portfolio-search-shell" role="search">
        <Search size={18} />
        <input
          type="search"
          value={searchTerm}
          placeholder="Buscar por nome, stack, cliente, segmento ou palavra-chave..."
          aria-label="Buscar projetos no portfólio"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {searchTerm ? <button type="button" onClick={() => setSearchTerm('')} aria-label="Limpar busca"><X size={16} /></button> : null}
      </div>

      <div className="filters portfolio-filters" aria-label="Filtros de portfólio">
        {filters.map((filter) => (
          <button
            type="button"
            className={filter === activeFilter ? 'active' : ''}
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="portfolio-filter-result">
        <span>{visibleCases.length} case{visibleCases.length === 1 ? '' : 's'} em exibição</span>
        <strong>{searchTerm ? `Busca: ${searchTerm}` : activeFilter}</strong>
      </div>

      <div className="project-grid portfolio-grid-expanded">
        {visibleCases.map((item) => {
          const cardImage = getCaseCardImage(item);

          return (
            <article className="project-card portfolio-card-rich" key={item.slug}>
              {cardImage ? (
                <a className={`project-thumb portfolio-thumb portfolio-image-thumb portfolio-case-card-shot ${item.tone}`} href={`/portfolio/${item.slug}`}>
                  <img src={cardImage} alt={`Imagem do case ${item.title}`} loading="lazy" />
                </a>
              ) : (
                <div className={`project-thumb portfolio-thumb ${item.tone}`}>
                  <Orbit size={46} />
                  <strong>{item.imageLabel}</strong>
                  <span />
                </div>
              )}
              <small>{displayLevel(item)}</small>
              <h3>{item.title}</h3>
              <p><strong>{item.category}</strong></p>
              <p>{item.summary}</p>
              <p className="portfolio-stack-line">{item.stack.slice(0, 4).join(' • ')}</p>
              <a href={`/portfolio/${item.slug}`}>Ver case <ArrowUpRight size={14} /></a>
            </article>
          );
        })}
      </div>
    </>
  );
}
