import { SITE_CONFIG } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-[var(--text-secondary)] text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name} ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
