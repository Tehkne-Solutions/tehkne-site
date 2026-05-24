'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Orbit } from 'lucide-react';
import type { PortfolioCase } from './portfolio-data';
import { getUntiCaseAsset } from './unti-case-assets';

const filters = ['Todos', 'Projetos Tehkné', 'Participação Técnica', 'Ecossistemas', 'UNTI', 'Automotivo', 'Saúde', 'Corporativo', 'Indústria', 'WordPress', 'Next.js', 'Apps', 'Jogos', 'IA'];

type Props = {
  cases: PortfolioCase[];
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function matchesFilter(item: PortfolioCase, filter: string) {
  if (filter === 'Todos') return true;

  const text = normalize([
    item.title,
    item.level,
    item.category,
    item.sector,
    item.status,
    item.source ?? '',
    item.stack.join(' ')
  ].join(' '));

  const key = normalize(filter);

  if (key === 'projetos tehkne') {
    return normalize(item.level).includes('projeto tehkne') || normalize(item.level).includes('produto interno') || normalize(item.level).includes('laboratorio tehkne');
  }

  if (key === 'participacao tecnica') {
    return normalize(item.level).includes('participacao tecnica') || normalize(item.level).includes('historico profissional');
  }

  if (key === 'ecossistemas') {
    return normalize(item.level).includes('ecossistema') || normalize(item.status).includes('ecossistema') || normalize(item.source ?? '').includes('unti');
  }

  if (key === 'unti') {
    return normalize(item.source ?? '').includes('unti') || normalize(item.status).includes('unti');
  }

  if (key === 'apps') {
    return text.includes('app') || text.includes('mobile') || text.includes('flutter') || text.includes('react native');
  }

  if (key === 'jogos') {
    return text.includes('game') || text.includes('jogo') || text.includes('mmorpg') || text.includes('byond');
  }

  return text.includes(key);
}

export default function PortfolioGrid({ cases }: Props) {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const visibleCases = useMemo(
    () => cases.filter((item) => matchesFilter(item, activeFilter)),
    [cases, activeFilter]
  );

  return (
    <>
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
        <span>{visibleCases.length} experiência{visibleCases.length === 1 ? '' : 's'} em exibição</span>
        <strong>{activeFilter}</strong>
      </div>

      <div className="project-grid portfolio-grid-expanded">
        {visibleCases.map((item) => {
          const asset = getUntiCaseAsset(item.slug);

          return (
            <article className="project-card portfolio-card-rich" key={item.slug}>
              {asset ? (
                <div className={`project-thumb portfolio-thumb portfolio-image-thumb ${item.tone}`}>
                  <img src={asset.image} alt={`Imagem do case ${item.title}`} loading="lazy" />
                  <span className="portfolio-image-overlay">{item.imageLabel}</span>
                </div>
              ) : (
                <div className={`project-thumb portfolio-thumb ${item.tone}`}>
                  <Orbit size={46} />
                  <strong>{item.imageLabel}</strong>
                  <span />
                </div>
              )}
              <small>{item.level}</small>
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
