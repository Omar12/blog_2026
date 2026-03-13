# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run proofread "content/posts/my-post.md"` — Proofread a post with Claude API (requires `ANTHROPIC_API_KEY`)
- `npm run proofread:all` — Proofread all posts

## Architecture

Next.js 15 (App Router) personal blog with Tailwind CSS, dark/light theme support via `next-themes`.

### Content Pipeline

Blog posts are Markdown files in `content/posts/`. Each has YAML frontmatter with fields defined in `src/lib/types.ts` (`title`, `date`, `excerpt`, `author`, `tags`, `published`, `coverImage`). Only posts with `published: true` are shown. The slug is derived from the filename.

Processing chain: `gray-matter` parses frontmatter → `remark`/`rehype` converts Markdown to HTML (`src/lib/markdown.ts`) → table of contents extracted from headings (`src/lib/table-of-contents.ts`) → heading IDs added for anchor links.

### Key Files

- `src/constants/site.ts` — Site metadata and page metadata config
- `src/lib/posts.ts` — Reads/sorts posts from filesystem
- `src/app/blog/[slug]/page.tsx` — Individual blog post page with TOC sidebar
- `src/app/feed.xml/route.ts` — RSS feed
- `scripts/proofread.ts` — Claude-powered proofreading script

### Styling

Uses CSS custom properties for theming (e.g., `var(--primary)`, `var(--text)`, `var(--border)`). Components use Tailwind utility classes referencing these variables.
