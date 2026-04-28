import { Metadata } from 'next';
import { PAGE_METADATA } from '@/constants/site';

export const metadata: Metadata = {
  title: PAGE_METADATA.favorites.title,
  description: PAGE_METADATA.favorites.description,
};

interface FavoriteItem {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

interface FavoriteCategory {
  category: string;
  icon: string;
  items: FavoriteItem[];
}

const favorites: FavoriteCategory[] = [
  {
    category: 'Books',
    icon: '📚',
    items: [
      {
        title: 'Atomic Habits by James Clear',
        description:
          'Practical strategies for building good habits and breaking bad ones.',
        tags: ['Self-improvement', 'Productivity'],
      },
      {
        title: 'The Pragmatic Programmer by David Thomas & Andrew Hunt',
        description:
          'Essential reading for any software developer looking to improve their craft.',
        tags: ['Programming', 'Career'],
      },
      {
        title: 'Project Hail Mary by Andy Weir',
        description:
          'A thrilling sci-fi adventure about survival, ingenuity, and the power of human connection.',
        tags: ['Science Fiction'],
      },
    ],
  },
  {
    category: 'Tools & Apps',
    icon: '🛠️',
    items: [
      {
        title: 'VS Code',
        description:
          'My primary code editor. Fast, extensible, and feature-rich.',
        link: 'https://code.visualstudio.com',
        tags: ['Development', 'Editor'],
      },
      {
        title: 'Obsidian',
        description:
          'Perfect for note-taking and building a personal knowledge base.',
        link: 'https://obsidian.md',
        tags: ['Productivity', 'Notes'],
      },
      {
        title: 'Claude Code',
        description:
          'AI assistant that helps me create apps, write code, and brainstorm ideas.',
        link: 'https://claude.ai',
        tags: ['Productivity', 'Development', 'AI'],
      },
    ],
  },
  {
    category: 'Websites & Blogs',
    icon: '🌐',
    items: [
      {
        title: 'Pinboard',
        description: 'A minimalist bookmarking service that I use to save and organize links.',
        link: 'https://pinboard.in',
        tags: ['Productivity', 'Bookmarks'],
      },
      {
        title: 'Every',
        description:
          'Essays and insights on technology and AI',
        link: 'https://every.to',
        tags: ['Writing', 'AI'],
      },
      {
        title: 'Midjourney',
        description:
          'An AI-powered image generation tool that I use for creative projects and design inspiration.',
        link: 'https://midjourney.com',
        tags: ['AI', 'Design', 'Creativity'],
      }
    ],
  },
  {
    category: 'Podcasts',
    icon: '🎙️',
    items: [
      {
        title: 'Darknet Diaries',
        description: 'Stories about hackers, human psychology, and technology.',
        link: 'https://darknetdiaries.com',
        tags: ['Security', 'True Crime'],
      },
    ],
  },
  {
    category: 'Video Games',
    icon: '🎮',
    items: [
      {
        title: 'The Legend of Zelda: Tears of the Kingdom',
        description:
          'A breathtaking open-world adventure that redefined what exploration in games could feel like.',
        tags: ['Action-Adventure', 'Open World', 'Nintendo'],
      },
      {
        title: 'Arc Raiders',
        description:
          'A casual extraction shooter with a unique blend of PVE and PVP enemies.',
        tags: ['Shooter', 'Extraction'],
      },
      {
        title: 'Death Stranding 2',
        description:
          'A surreal and emotional journey that pushes the boundaries of storytelling in games.',
        tags: ['Open World', 'Story-Driven'],
      },
    ],
  },
];

export default function FavoritesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-[var(--text)]">
          My Favorites
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-xl">
          A curated collection of books, tools, websites, and podcasts that I
          love and recommend
        </p>
      </div>

      <div className="space-y-12">
        {favorites.map((category) => (
          <section key={category.category}>
            <h2 className="text-3xl font-bold mb-6 text-[var(--text)] flex items-center gap-3">
              <span>{category.icon}</span>
              {category.category}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, index) => (
                <article
                  key={index}
                  className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:shadow-lg hover:border-[var(--primary)] transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2 text-[var(--text)]">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--primary)] transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-[var(--accent)] bg-opacity-20 text-[var(--text-tertiary)] border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-center">
        <p className="text-[var(--text-secondary)]">
          This list is constantly evolving as I discover new favorites. Last
          updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
