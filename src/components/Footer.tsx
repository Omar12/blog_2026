import { SITE_CONFIG } from '@/constants/site';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-secondary)] text-sm">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name} ✨
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/feed.xml"
              className="text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm transition-colors flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
              RSS Feed
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
