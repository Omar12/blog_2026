import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              My Blog
            </h1>
          </Link>
          <nav className="flex items-center space-x-4">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
