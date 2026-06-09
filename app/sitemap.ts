import type { MetadataRoute } from 'next';
import { allBlogPosts } from './blog/all-blog-posts';
import { portfolioCases } from './portfolio/portfolio-data';
import { productPages } from './produtos/product-data';
import { servicePages } from './servicos/service-data';

const siteUrl = 'https://www.tehknesolutions.com.br';
const staticPages = ['/', '/sobre', '/sobre/thales-wallison', '/solucoes', '/portfolio', '/metodo', '/blog', '/contato', '/produtos', '/servicos', '/privacidade', '/termos-de-uso'];

function canonicalServiceSlug(slug: string) {
  return slug === 'ia-automacoes-agentes-inteligentes' ? 'solucoes-ia' : slug;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticUrls = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/solucoes' || path === '/contato' || path === '/produtos' || path === '/servicos' ? 0.9 : 0.75
  })) satisfies MetadataRoute.Sitemap;

  const serviceUrls = servicePages.map((service) => ({
    url: `${siteUrl}/servicos/${canonicalServiceSlug(service.slug)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: service.slug === 'ia-automacoes-agentes-inteligentes' ? 0.88 : 0.82
  })) satisfies MetadataRoute.Sitemap;

  const productUrls = productPages.map((product) => ({
    url: `${siteUrl}/produtos/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: product.slug === 'wp-business-hub' ? 0.88 : 0.82
  })) satisfies MetadataRoute.Sitemap;

  const blogUrls = allBlogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.72
  })) satisfies MetadataRoute.Sitemap;

  const portfolioUrls = portfolioCases.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.8 : 0.65
  })) satisfies MetadataRoute.Sitemap;

  return [...staticUrls, ...serviceUrls, ...productUrls, ...blogUrls, ...portfolioUrls];
}
