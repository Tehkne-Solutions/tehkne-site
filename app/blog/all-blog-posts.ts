import { blogPosts, type BlogPost } from './blog-data';
import { newBlogPosts } from './blog-new-posts';
import { seoPillarBlogPosts } from './blog-seo-pillar-posts';
import { seoPillarBlogPosts2 } from './blog-seo-pillar-posts-2';
import { seoPillarBlogPosts3 } from './blog-seo-pillar-posts-3';
import { seoPillarBlogPosts4 } from './blog-seo-pillar-posts-4';
import { seoPillarBlogPosts5 } from './blog-seo-pillar-posts-5';
import { seoPillarBlogPosts6 } from './blog-seo-pillar-posts-6';
import { seoPillarBlogPosts7 } from './blog-seo-pillar-posts-7';
import { seoPillarBlogPosts8 } from './blog-seo-pillar-posts-8';

export const allBlogPosts: BlogPost[] = [...seoPillarBlogPosts8, ...seoPillarBlogPosts7, ...seoPillarBlogPosts6, ...seoPillarBlogPosts5, ...seoPillarBlogPosts4, ...seoPillarBlogPosts3, ...seoPillarBlogPosts2, ...seoPillarBlogPosts, ...newBlogPosts, ...blogPosts];

export function getAllBlogPost(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug);
}

export const latestAllBlogPosts = allBlogPosts.slice(0, 3);
