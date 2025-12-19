import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Favorites | My Blog',
  description: 'A curated collection of my favorite things',
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
        title: 'Thinking, Fast and Slow by Daniel Kahneman',
        description:
          'Fascinating insights into how we think and make decisions.',
        tags: ['Psychology', 'Decision-making'],
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
        title: 'Raycast',
        description:
          'Lightning-fast launcher that supercharges productivity on Mac.',
        link: 'https://raycast.com',
        tags: ['Productivity', 'macOS'],
      },
    ],
  },
  {
    category: 'Websites & Blogs',
    icon: '🌐',
    items: [
      {
        title: 'Hacker News',
        description: 'Great source for tech news and thoughtful discussions.',
        link: 'https://news.ycombinator.com',
        tags: ['Tech', 'News'],
      },
      {
        title: 'CSS-Tricks',
        description:
          'Excellent tutorials and tips for web development and design.',
        link: 'https://css-tricks.com',
        tags: ['Web Dev', 'CSS'],
      },
      {
        title: 'Wait But Why',
        description:
          'Long-form articles that explore interesting topics in depth.',
        link: 'https://waitbutwhy.com',
        tags: ['Writing', 'Ideas'],
      },
    ],
  },
  {
    category: 'Podcasts',
    icon: '🎙️',
    items: [
      {
        title: 'Syntax.fm',
        description: 'Web development podcast with practical tips and insights.',
        link: 'https://syntax.fm',
        tags: ['Web Dev', 'JavaScript'],
      },
      {
        title: 'The Changelog',
        description: 'Conversations with open source developers and makers.',
        link: 'https://changelog.com',
        tags: ['Open Source', 'Tech'],
      },
      {
        title: 'Huberman Lab',
        description:
          'Science-based tools for everyday life, hosted by Andrew Huberman.',
        tags: ['Science', 'Health'],
      },
    ],
  },
];

export default function FavoritesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
          My Favorites
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
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
                          className="px-2 py-1 text-xs rounded-full bg-[var(--accent)] bg-opacity-20 text-[var(--text)] border border-[var(--border)]"
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
