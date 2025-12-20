'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { SITE_CONFIG } from '@/constants/site';

const navLinks = [
  { href: '/' as const, label: 'Blog' },
  { href: '/about' as const, label: 'About' },
  { href: '/favorites' as const, label: 'Favorites' },
  { href: '/listening' as const, label: 'Listening' },
] as const;

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname.startsWith('/blog');
    }
    return pathname === href;
  };

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </h1>
          </Link>
          <nav className="flex items-center space-x-1 sm:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? 'bg-[var(--primary)] bg-opacity-20 text-[var(--text)] border border-[var(--border)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--primary)] hover:bg-opacity-10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
