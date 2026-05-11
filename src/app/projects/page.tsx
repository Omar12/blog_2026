import { Metadata } from 'next';
import { PAGE_METADATA, SITE_CONFIG } from '@/constants/site';

export const metadata: Metadata = {
  title: PAGE_METADATA.projects.title,
  description: PAGE_METADATA.projects.description,
};

export const revalidate = 3600;

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

async function getVibeCodingRepos(): Promise<GitHubRepo[]> {
  const username = SITE_CONFIG.social.github.split('/').pop();
  const res = await fetch(
    `https://api.github.com/search/repositories?q=user:${username}+topic:vibe-coding&sort=updated&per_page=100`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return [];

  const data = await res.json();
  return data.items ?? [];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  Rust: 'bg-orange-600',
  Go: 'bg-cyan-500',
  CSS: 'bg-purple-500',
  HTML: 'bg-red-500',
  Vue: 'bg-emerald-500',
  Swift: 'bg-orange-400',
  Kotlin: 'bg-violet-500',
};

export default async function ProjectsPage() {
  const repos = await getVibeCodingRepos();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-[var(--text)]">
          Vibe Coding
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-xl">
          Projects built with vibes — GitHub repositories tagged{' '}
          <code className="text-sm font-mono px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--primary)]">
            #vibe-coding
          </code>
        </p>
      </div>

      {repos.length === 0 ? (
        <div className="text-center py-20 text-[var(--text-secondary)]">
          No vibe-coding repos found yet.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:shadow-lg hover:border-[var(--primary)] transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-2 text-[var(--text)]">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {repo.name}
                  </a>
                </h2>
                {repo.description && (
                  <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-3">
                    {repo.description}
                  </p>
                )}
              </div>

              <div className="mt-4 space-y-3">
                {repo.topics.filter((t) => t !== 'vibe-coding').length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics
                      .filter((t) => t !== 'vibe-coding')
                      .slice(0, 4)
                      .map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 text-xs rounded-full bg-[var(--accent)] bg-opacity-20 text-[var(--text-secondary)] border border-[var(--border)]"
                        >
                          {topic}
                        </span>
                      ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${LANGUAGE_COLORS[repo.language] ?? 'bg-[var(--text-tertiary)]'}`}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--primary)] transition-colors"
                        aria-label="Live site"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--primary)] transition-colors"
                      aria-label="GitHub repo"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-12 p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-center">
        <p className="text-[var(--text)] text-sm">
          Pulled live from{' '}
          <a
            href={`${SITE_CONFIG.social.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            GitHub
          </a>{' '}
          · repos tagged{' '}
          <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-[var(--primary)] bg-opacity-20 border border-[var(--border)] text-[var(--surface)]">
            vibe-coding
          </code>
        </p>
      </div>
    </div>
  );
}
