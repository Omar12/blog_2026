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
}
