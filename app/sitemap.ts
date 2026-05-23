import type { MetadataRoute } from 'next';
import { portfolioCases } from './portfolio/portfolio-data';

const siteUrl = 'https://tehkne.com';
const staticPages = ['/', '/sobre', '/solucoes', '/servicos', '/portfolio', '/metodo', '/tehkne-os', '/contato'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticUrls = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now
  }));

  const portfolioUrls = portfolioCases.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: now
  }));

  return [...staticUrls, ...portfolioUrls];
}
