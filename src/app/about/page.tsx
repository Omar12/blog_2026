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
        <h1 className="text-display font-extrabold mb-10 text-[var(--text)]">
          About Me
        </h1>

        <div className="space-y-10 text-[var(--text)] text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Hello, I&apos;m Omar
            </h2>
            <p>
              Welcome to my corner of the internet. I&apos;m an Engineering Manager
              and product-minded engineer based in Seattle. I build customer-focused web
              applications, help teams work through complex problems, and stay curious
              about the tools shaping how we create software. This blog is where I share
              what I&apos;m learning about technology, creativity, and the work in between.
            </p>
          </section>

          <hr className="border-[var(--border)]" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              What I Do
            </h2>
            <p className="mb-4">
              Most days, I help turn ideas into useful, reliable products. My work
              includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
              <li>Building product-focused web applications with modern technologies</li>
              <li>Leading, mentoring, and supporting engineering teams</li>
              <li>Exploring AI-assisted development and developer productivity tools</li>
              <li>Creating accessible, thoughtful user experiences</li>
              <li>Writing down what I learn and sharing it with others</li>
            </ul>
          </section>

          <hr className="border-[var(--border)]" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Why This Blog?
            </h2>
            <p>
              This blog is my working notebook. Writing helps me slow down, clarify what
              I think, and make sense of the things I&apos;m learning, building, and
              noticing. I write about technology, creative work, and the occasional idea
              that is still taking shape. If something here helps you see a problem
              differently or gives you a useful starting point, then it was worth sharing.
            </p>
          </section>

          <hr className="border-[var(--border)]" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Beyond the Screen
            </h2>
            <p>
              When I&apos;m not coding or writing, you&apos;ll probably find me DJing,
              building playlists, or searching for the next song to share. Music keeps me
              curious and creative, and it is a good reminder that the best experiences,
              whether a product or a set, are built with care for the people on the other
              side.
            </p>
          </section>

          <hr className="border-[var(--border)]" />

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Let&apos;s Connect
            </h2>
            <p className="mb-6">
              I&apos;d love to hear from you! Feel free to reach out through:
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
              <a
                href="https://x.com/omar12"
                className="px-5 py-2.5 text-sm font-medium rounded border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                X.com
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
