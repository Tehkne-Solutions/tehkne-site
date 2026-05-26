import type { MetadataRoute } from 'next';
import { blogPosts } from './blog/blog-data';
import { portfolioCases } from './portfolio/portfolio-data';
import { productPages } from './produtos/product-data';

const siteUrl = 'https://tehknesolutions.com.br';
const staticPages = ['/', '/sobre', '/solucoes', '/portfolio', '/metodo', '/blog', '/contato', '/produtos', '/privacidade', '/termos-de-uso'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticUrls = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/solucoes' || path === '/contato' || path === '/produtos' ? 0.9 : 0.75
  })) satisfies MetadataRoute.Sitemap;

  const productUrls = productPages.map((product) => ({
    url: `${siteUrl}/produtos/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: product.slug === 'wp-business-hub' ? 0.88 : 0.82
  })) satisfies MetadataRoute.Sitemap;

  const blogUrls = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.7
  })) satisfies MetadataRoute.Sitemap;

  const portfolioUrls = portfolioCases.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.8 : 0.65
  })) satisfies MetadataRoute.Sitemap;

  return [...staticUrls, ...productUrls, ...blogUrls, ...portfolioUrls];
}
