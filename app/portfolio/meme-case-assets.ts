export type MemeCaseAsset = {
  image: string;
  fullImage: string;
};

export const memeCaseAssets: Record<string, MemeCaseAsset> = {
  'meme-digital': {
    image: '/images/portfolio/meme-digital-destaque.webp',
    fullImage: '/images/portfolio/meme-digital-print-completo.webp'
  }
};

export function getMemeCaseAsset(slug: string) {
  return memeCaseAssets[slug];
}
