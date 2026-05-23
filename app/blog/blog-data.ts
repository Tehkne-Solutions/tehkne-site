export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'quote'; text: string; cta?: string; href?: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; text: string }
  | { type: 'compare'; leftTitle: string; left: string[]; rightTitle: string; right: string[] };

export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  cover: string;
  author: string;
  date: string;
  readingTime: string;
  intro: string;
  imageSuggestions: {
    label: string;
    source: string;
    query: string;
    path: string;
    alt: string;
  }[];
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const latestBlogPosts = blogPosts.slice(0, 3);
