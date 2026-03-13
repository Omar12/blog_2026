import { Metadata } from 'next';
import { PAGE_METADATA } from '@/constants/site';

export const metadata: Metadata = {
  title: PAGE_METADATA.about.title,
  description: PAGE_METADATA.about.description,
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-10 text-[var(--text)]">
          About Me
        </h1>

        <div className="space-y-10 text-[var(--text)] text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Hello, I'm Omar
            </h2>
            <p>
              Welcome to my corner of the internet! I'm an Engineering Manager
              passionate about technology and music. This blog is where I share my
              thoughts, experiences, and things I'm learning along the way.
            </p>
          </section>

          <hr className="border-[var(--border)]" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              What I Do
            </h2>
            <p className="mb-4">
              I spend most of my time delivering work. My work involves:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
              <li>Building things with modern web technologies</li>
              <li>Exploring new ideas and concepts</li>
              <li>Sharing knowledge with the community</li>
              <li>Constantly learning and growing</li>
            </ul>
          </section>

          <hr className="border-[var(--border)]" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Why This Blog?
            </h2>
            <p>
              I started this blog to document my journey and share insights that
              might help others. Writing helps me clarify my thinking, and I
              hope my experiences can provide value to readers who are on
              similar paths.
            </p>
          </section>

          <hr className="border-[var(--border)]" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Beyond The Screen
            </h2>
            <p>
              When I'm not coding or writing, you'll find me DJing and making music playlists.
              I believe in maintaining a healthy balance between
              work and life, and these activities help me stay creative and
              energized.
            </p>
          </section>

          <hr className="border-[var(--border)]" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Let's Connect
            </h2>
            <p className="mb-6">
              I'd love to hear from you! Feel free to reach out through:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/omar12"
                className="px-5 py-2.5 text-sm font-medium rounded border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/omartinez12"
                className="px-5 py-2.5 text-sm font-medium rounded border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
