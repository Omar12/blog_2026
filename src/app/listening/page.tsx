import { Metadata } from 'next';
import { PAGE_METADATA } from '@/constants/site';

export const metadata: Metadata = {
  title: PAGE_METADATA.listening.title,
  description: PAGE_METADATA.listening.description,
};

interface ListeningItem {
  title: string;
  artist?: string;
  description?: string;
  type: 'album' | 'playlist' | 'podcast' | 'audiobook';
  link?: string;
  addedDate?: string;
  spotifyEmbed?: string; // Spotify embed URL
  soundcloudEmbed?: string; // SoundCloud embed URL
}

const currentlyListening: ListeningItem[] = [
  {
    title: 'Spring 2026',
    description:
      'Selection of tracks that I have liked for Spring so far.',
    type: 'playlist',
    addedDate: '2026-04-20',
    spotifyEmbed: 'https://open.spotify.com/embed/playlist/2eRiI8PggxyClclqvPY5md?utm_source=generator&theme=0'
  }
];

const recentlyFinished: ListeningItem[] = [];

const allTimeRotation: ListeningItem[] = [
  {
    title: 'My Favorite Albums',
    description:
      'A playlist with my favorite albums.',
    type: 'playlist',
    addedDate: '2026-04-20',
    spotifyEmbed: 'https://open.spotify.com/embed/playlist/3Z6KOtZW1I6o6Kvm3nV8yZ?utm_source=generator&theme=0'
  }
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

function SpotifyEmbed({ embedUrl }: { embedUrl: string }) {
  return (
    <div className="mt-4 rounded-lg overflow-hidden">
      <iframe
        src={embedUrl}
        width="100%"
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg border-0"
      ></iframe>
    </div>
  );
}

function SoundCloudEmbed({ embedUrl }: { embedUrl: string }) {
  return (
    <div className="mt-4 rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        src={embedUrl}
        loading="lazy"
        className="rounded-lg border-0 overflow-hidden"
      ></iframe>
    </div>
  );
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
          )} bg-opacity-20 text-[var(--text-tertiary)] border border-[var(--border)] capitalize`}
        >
          {item.type}
        </span>
      </div>
      {item.description && (
        <p className="text-[var(--text-secondary)] mb-3">{item.description}</p>
      )}
      {item.addedDate && (
        <p className="text-xs text-[var(--text-secondary)] mb-3">
          Added{' '}
          {new Date(item.addedDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      )}
      {item.spotifyEmbed && <SpotifyEmbed embedUrl={item.spotifyEmbed} />}
      {item.soundcloudEmbed && <SoundCloudEmbed embedUrl={item.soundcloudEmbed} />}
    </article>
  );
}

export default function ListeningPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-[var(--text)]">
          What I&apos;m Listening To
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-xl">
          Music, podcasts, and audiobooks currently in my rotation
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-[var(--text)]">
              Currently Playing
            </h2>
            <span className="px-3 py-1 text-sm rounded-full bg-[var(--accent)] bg-opacity-20 text-[var(--text-tertiary)] border border-[var(--border)] animate-pulse">
              Now
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {currentlyListening.map((item) => (
              <ListeningCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {recentlyFinished.length > 0 && <section>
          <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">
            Recently Finished
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentlyFinished.map((item) => (
              <ListeningCard key={item.title} item={item} />
            ))}
          </div>
        </section>}

        {allTimeRotation.length > 0 && <section>
          <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">
            All-Time Rotation
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            These are the albums, playlists, and podcasts I keep coming back to.
            No matter what mood I&apos;m in, these always hit the spot.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {allTimeRotation.map((item) => (
              <ListeningCard key={item.title} item={item} />
            ))}
          </div>
        </section>}
      </div>

      <div className="mt-12 p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
        <h3 className="text-xl font-bold mb-3 text-[var(--text)]">
          About This Page
        </h3>
        <p className="text-[var(--text-secondary)] mb-4">
          I love discovering new music and audio content. This page is a living
          document of what I&apos;m currently enjoying. I update it regularly as my
          tastes evolve and I discover new favorites.
        </p>
        <p className="text-[var(--text-secondary)]">
          Got recommendations? I&apos;d love to hear them! Feel free to reach out and
          share what you&apos;re listening to.
        </p>
      </div>
    </div>
  );
}
