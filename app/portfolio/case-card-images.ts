import type { PortfolioCase } from './portfolio-data';
import { getUntiCaseAsset } from './unti-case-assets';

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

function screenshotUrl(url: string) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1100`;
}

export function getPortfolioCaseCardImage(item: PortfolioCase) {
  const publicUrl = caseHeroScreens[item.slug];

  if (publicUrl) {
    return screenshotUrl(publicUrl);
  }

  return getUntiCaseAsset(item.slug)?.image;
}
