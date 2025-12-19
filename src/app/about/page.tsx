import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | My Blog',
  description: 'Learn more about me and this blog',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="space-y-6 text-[var(--text)]">
          <section className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Hello, I'm [Your Name]
            </h2>
            <p className="text-[var(--text)] leading-relaxed">
              Welcome to my corner of the internet! I'm a [your profession/role]
              passionate about [your interests]. This blog is where I share my
              thoughts, experiences, and things I'm learning along the way.
            </p>
          </section>

          <section className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              What I Do
            </h2>
            <p className="text-[var(--text)] leading-relaxed mb-4">
              I spend most of my time [describe what you do]. My work involves:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--text)]">
              <li>Building things with modern web technologies</li>
              <li>Exploring new ideas and concepts</li>
              <li>Sharing knowledge with the community</li>
              <li>Constantly learning and growing</li>
            </ul>
          </section>

          <section className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Why This Blog?
            </h2>
            <p className="text-[var(--text)] leading-relaxed">
              I started this blog to document my journey and share insights that
              might help others. Writing helps me clarify my thinking, and I
              hope my experiences can provide value to readers who are on
              similar paths.
            </p>
          </section>

          <section className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Beyond The Screen
            </h2>
            <p className="text-[var(--text)] leading-relaxed">
              When I'm not coding or writing, you'll find me [your hobbies and
              interests]. I believe in maintaining a healthy balance between
              work and life, and these activities help me stay creative and
              energized.
            </p>
          </section>

          <section className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
              Let's Connect
            </h2>
            <p className="text-[var(--text)] leading-relaxed mb-4">
              I'd love to hear from you! Feel free to reach out through:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://twitter.com/yourusername"
                className="px-4 py-2 rounded-lg bg-[var(--primary)] bg-opacity-20 text-[var(--text)] border border-[var(--border)] hover:bg-opacity-30 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://github.com/yourusername"
                className="px-4 py-2 rounded-lg bg-[var(--secondary)] bg-opacity-20 text-[var(--text)] border border-[var(--border)] hover:bg-opacity-30 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="px-4 py-2 rounded-lg bg-[var(--accent)] bg-opacity-20 text-[var(--text)] border border-[var(--border)] hover:bg-opacity-30 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="px-4 py-2 rounded-lg bg-[var(--primary)] bg-opacity-20 text-[var(--text)] border border-[var(--border)] hover:bg-opacity-30 transition-all"
              >
                Email
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
