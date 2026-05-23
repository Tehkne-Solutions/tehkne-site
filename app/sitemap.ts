import type { MetadataRoute } from 'next';
import { blogPosts } from './blog/blog-data';
import { portfolioCases } from './portfolio/portfolio-data';

const siteUrl = 'https://tehkne.com';
const staticPages = ['/', '/sobre', '/solucoes', '/servicos', '/portfolio', '/metodo', '/tehkne-os', '/blog', '/contato'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticUrls = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date
  }));

  const portfolioUrls = portfolioCases.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: now
  }));

  return [...staticUrls, ...blogUrls, ...portfolioUrls];
}
