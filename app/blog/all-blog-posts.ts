import { blogPosts, type BlogPost } from './blog-data';
import { gipMethodBlogPosts } from './blog-gip-method-posts';
import { newBlogPosts } from './blog-new-posts';
import { seoPillarBlogPosts } from './blog-seo-pillar-posts';
import { seoPillarBlogPosts2 } from './blog-seo-pillar-posts-2';
import { seoPillarBlogPosts3 } from './blog-seo-pillar-posts-3';
import { seoPillarBlogPosts4 } from './blog-seo-pillar-posts-4';
import { seoPillarBlogPosts5 } from './blog-seo-pillar-posts-5';
import { seoPillarBlogPosts6 } from './blog-seo-pillar-posts-6';
import { seoPillarBlogPosts7 } from './blog-seo-pillar-posts-7';
import { seoPillarBlogPosts8 } from './blog-seo-pillar-posts-8';
import { seoPillarBlogPosts9 } from './blog-seo-pillar-posts-9';
import { seoPillarBlogPosts10 } from './blog-seo-pillar-posts-10';

const sourcePosts: BlogPost[] = [
  ...gipMethodBlogPosts,
  ...seoPillarBlogPosts10,
  ...seoPillarBlogPosts9,
  ...seoPillarBlogPosts8,
  ...seoPillarBlogPosts7,
  ...seoPillarBlogPosts6,
  ...seoPillarBlogPosts5,
  ...seoPillarBlogPosts4,
  ...seoPillarBlogPosts3,
  ...seoPillarBlogPosts2,
  ...seoPillarBlogPosts,
  ...newBlogPosts,
  ...blogPosts
];

const editorialAuthor = 'Thales Da Vinci - TKN';
const latestDate = '2026-06-10';

function formatIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function getPreviousWeekday(date: Date) {
  const result = new Date(date);
  result.setDate(result.getDate() - 1);

  while (result.getDay() === 0 || result.getDay() === 6) {
    result.setDate(result.getDate() - 1);
  }

  return result;
}

function normalizePosts(posts: BlogPost[]) {
  let dateCursor = new Date(`${latestDate}T12:00:00.000Z`);

  return posts.map((post, index) => {
    if (index > 0) {
      dateCursor = getPreviousWeekday(dateCursor);
    }

    return {
      ...post,
      author: editorialAuthor,
      date: formatIsoDate(dateCursor)
    };
  });
}

export const allBlogPosts: BlogPost[] = normalizePosts(sourcePosts);

export function getAllBlogPost(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug);
}

export const latestAllBlogPosts = allBlogPosts.slice(0, 3);
