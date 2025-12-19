export const SITE_CONFIG = {
  name: 'My Blog',
  description: 'A simple, elegant blog built with Next.js',
  url: 'https://yourblog.com', // Update with your actual domain
  author: {
    name: '[Your Name]',
    email: 'your.email@example.com',
  },
  social: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
} as const;

export const PAGE_METADATA = {
  home: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  about: {
    title: `About | ${SITE_CONFIG.name}`,
    description: 'Learn more about me and this blog',
  },
  favorites: {
    title: `My Favorites | ${SITE_CONFIG.name}`,
    description: 'A curated collection of my favorite things',
  },
  listening: {
    title: `What I'm Listening To | ${SITE_CONFIG.name}`,
    description: 'Current music, podcasts, and audio content in rotation',
  },
  blog: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description: 'Read my latest thoughts and articles',
  },
} as const;
