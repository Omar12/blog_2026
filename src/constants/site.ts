export const SITE_CONFIG = {
  name: 'Omar Martinosa',
  description: 'Engineering Lead, Wannabe DJ, Full-time Dad',
  url: 'https://omartinosa.dev', // Update with your actual domain
  author: {
    name: 'Omar Martinosa',
    email: 'o*******a@gmail.com',
  },
  social: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/Omar12',
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
    description: 'Learn more about me.',
  },
  favorites: {
    title: `My Favorites | ${SITE_CONFIG.name}`,
    description: 'A curated collection of my favorite things',
  },
  listening: {
    title: `What I'm Listening To | ${SITE_CONFIG.name}`,
    description: 'Current music, my DJ sets, podcasts, and audio content in rotation',
  },
  blog: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description: 'Read my latest thoughts',
  },
} as const;
