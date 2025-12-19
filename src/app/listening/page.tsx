import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What I'm Listening To | My Blog",
  description: 'Current music, podcasts, and audio content in rotation',
};

interface ListeningItem {
  title: string;
  artist?: string;
  description?: string;
  type: 'album' | 'playlist' | 'podcast' | 'audiobook';
  link?: string;
  addedDate?: string;
}

const currentlyListening: ListeningItem[] = [
  {
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    description:
      'Classic electronic album perfect for focus work. The production is incredible.',
    type: 'album',
    addedDate: '2025-12-15',
  },
  {
    title: 'Deep Focus',
    artist: 'Spotify',
    description: 'Ambient and post-rock music for concentration.',
    type: 'playlist',
    addedDate: '2025-12-10',
  },
  {
    title: 'Syntax.fm',
    description: 'Web development tips and best practices.',
    type: 'podcast',
    addedDate: '2025-12-01',
  },
];

const recentlyFinished: ListeningItem[] = [
  {
    title: 'In Rainbows',
    artist: 'Radiohead',
    type: 'album',
    addedDate: '2025-11-28',
  },
  {
    title: 'The Creative Act: A Way of Being',
    artist: 'Rick Rubin',
    description: 'Insights on creativity from legendary music producer.',
    type: 'audiobook',
    addedDate: '2025-11-20',
  },
  {
    title: 'Bon Iver',
    artist: 'Bon Iver',
    type: 'album',
    addedDate: '2025-11-15',
  },
];

const allTimeRotation: ListeningItem[] = [
  {
    title: 'Midnight City',
    artist: 'M83',
    description: 'Never gets old. Perfect energy boost.',
    type: 'album',
  },
  {
    title: 'Lofi Hip Hop Radio',
    description: 'For those long coding sessions.',
    type: 'playlist',
  },
  {
    title: 'The Changelog',
    description: 'Deep conversations about software and open source.',
    type: 'podcast',
  },
  {
    title: 'OK Computer',
    artist: 'Radiohead',
    description: 'A masterpiece that stands the test of time.',
    type: 'album',
  },
];

function getTypeIcon(type: string): string {
  switch (type) {
    case 'album':
      return '💿';
    case 'playlist':
      return '🎵';
    case 'podcast':
      return '🎙️';
    case 'audiobook':
      return '📖';
    default:
      return '🎧';
  }
}

function getTypeColor(type: string): string {
  switch (type) {
    case 'album':
      return 'bg-[var(--primary)]';
    case 'playlist':
      return 'bg-[var(--secondary)]';
    case 'podcast':
      return 'bg-[var(--accent)]';
    case 'audiobook':
      return 'bg-[var(--primary)]';
    default:
      return 'bg-[var(--text-secondary)]';
  }
}

function ListeningCard({ item }: { item: ListeningItem }) {
  return (
    <article className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:shadow-lg hover:border-[var(--primary)] transition-all duration-300">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{getTypeIcon(item.type)}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[var(--text)] mb-1">
            {item.title}
          </h3>
          {item.artist && (
            <p className="text-[var(--text-secondary)] font-medium">
              {item.artist}
            </p>
          )}
        </div>
        <span
          className={`px-3 py-1 text-xs rounded-full ${getTypeColor(
            item.type
          )} bg-opacity-20 text-[var(--text)] border border-[var(--border)] capitalize`}
        >
          {item.type}
        </span>
      </div>
      {item.description && (
        <p className="text-[var(--text-secondary)] mb-3">{item.description}</p>
      )}
      {item.addedDate && (
        <p className="text-xs text-[var(--text-secondary)]">
          Added{' '}
          {new Date(item.addedDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      )}
    </article>
  );
}

export default function ListeningPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
          What I'm Listening To
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          Music, podcasts, and audiobooks currently in my rotation
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-[var(--text)]">
              Currently Playing
            </h2>
            <span className="px-3 py-1 text-sm rounded-full bg-[var(--primary)] bg-opacity-20 text-[var(--text)] border border-[var(--border)] animate-pulse">
              Now
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {currentlyListening.map((item, index) => (
              <ListeningCard key={index} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">
            Recently Finished
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentlyFinished.map((item, index) => (
              <ListeningCard key={index} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">
            All-Time Rotation
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            These are the albums, playlists, and podcasts I keep coming back to.
            No matter what mood I'm in, these always hit the spot.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {allTimeRotation.map((item, index) => (
              <ListeningCard key={index} item={item} />
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
        <h3 className="text-xl font-bold mb-3 text-[var(--text)]">
          About This Page
        </h3>
        <p className="text-[var(--text-secondary)] mb-4">
          I love discovering new music and audio content. This page is a living
          document of what I'm currently enjoying. I update it regularly as my
          tastes evolve and I discover new favorites.
        </p>
        <p className="text-[var(--text-secondary)]">
          Got recommendations? I'd love to hear them! Feel free to reach out and
          share what you're listening to.
        </p>
      </div>
    </div>
  );
}
