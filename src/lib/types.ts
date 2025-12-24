export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  published: boolean;
  coverImage?: string;
  content: string;
  readingTime: number;
}

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  published: boolean;
  coverImage?: string;
  readingTime: number;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}
