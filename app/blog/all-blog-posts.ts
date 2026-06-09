import { blogPosts, type BlogPost } from './blog-data';
import { newBlogPosts } from './blog-new-posts';
import { seoPillarBlogPosts } from './blog-seo-pillar-posts';
import { seoPillarBlogPosts2 } from './blog-seo-pillar-posts-2';
import { seoPillarBlogPosts3 } from './blog-seo-pillar-posts-3';

export const allBlogPosts: BlogPost[] = [...seoPillarBlogPosts3, ...seoPillarBlogPosts2, ...seoPillarBlogPosts, ...newBlogPosts, ...blogPosts];

export function getAllBlogPost(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug);
}

export const latestAllBlogPosts = allBlogPosts.slice(0, 3);
