import { blogPosts, type BlogPost } from './blog-data';
import { newBlogPosts } from './blog-new-posts';
import { seoPillarBlogPosts } from './blog-seo-pillar-posts';

export const allBlogPosts: BlogPost[] = [...seoPillarBlogPosts, ...newBlogPosts, ...blogPosts];

export function getAllBlogPost(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug);
}

export const latestAllBlogPosts = allBlogPosts.slice(0, 3);
