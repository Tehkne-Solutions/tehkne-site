'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Orbit } from 'lucide-react';
import type { PortfolioCase } from './portfolio-data';
import { getUntiCaseAsset } from './unti-case-assets';

const filters = ['Todos', 'Projetos Tehkné', 'Savana', 'UNTI', 'Automotivo', 'Saúde', 'Corporativo', 'Indústria', 'WordPress', 'Next.js', 'Apps', 'Jogos', 'IA'];

const caseHeroScreens: Record<string, string> = {
  beggin: 'https://beggin.vercel.app/',
  'vacina-one': 'https://vacina-one-site.vercel.app/',
  'meme-digital': 'https://meme-servicos-delta.vercel.app/',
  'unti-digital': 'https://www.untidigital.com.br/',
  'savol-seminovos': 'https://savol-seminovos.vercel.app/',
  'savana-publicidade': 'https://savanapublicidade.com.br/',
  'savana-sinfonia-residencial': 'https://savanapublicidade.com.br/',
  'savana-dafra-motos': 'https://savanapublicidade.com.br/',
  'savana-eurofarma': 'https://savanapublicidade.com.br/',
  'savana-stine-sementes': 'https://savanapublicidade.com.br/',
  'savana-massas-de': 'https://savanapublicidade.com.br/',
  'savana-nutralle': 'https://savanapublicidade.com.br/',
  'savana-ecobrisa-energia': 'https://savanapublicidade.com.br/',
  'savana-oficina-do-estudante': 'https://savanapublicidade.com.br/',
  'savana-bob-imoveis': 'https://savanapublicidade.com.br/',
  'liugong-br': 'https://liugongla.com/',
  'tehkne-flow-wp-lite': 'https://tehkne-flow-wp.page.gd/'
};

type Props = {
  cases: PortfolioCase[];
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function displayLevel(item: PortfolioCase) {
  const text = normalize([item.level, item.status, item.source ?? ''].join(' '));
  if (text.includes('savana')) return 'Case Tehkné • Savana';
  if (text.includes('unti')) return 'Case Tehkné • UNTI';
  if (text.includes('historico')) return 'Case Tehkné';
  if (text.includes('participacao')) return 'Case Tehkné';
  return item.level;
}

function getCaseCardImage(item: PortfolioCase, asset?: { image: string }) {
  const url = caseHeroScreens[item.slug];
  if (url) {
    return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1100`;
  }
  return asset?.image;
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
    return text.includes('tehkne') || text.includes('produto interno') || text.includes('laboratorio') || text.includes('case tehkne');
  }

  if (key === 'savana') {
    return text.includes('savana');
  }

  if (key === 'unti') {
    return text.includes('unti');
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
        <span>{visibleCases.length} case{visibleCases.length === 1 ? '' : 's'} em exibição</span>
        <strong>{activeFilter}</strong>
      </div>

      <div className="project-grid portfolio-grid-expanded">
        {visibleCases.map((item) => {
          const asset = getUntiCaseAsset(item.slug);
          const cardImage = getCaseCardImage(item, asset);

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
