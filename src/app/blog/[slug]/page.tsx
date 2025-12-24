import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import { extractTableOfContents, addHeadingIds } from '@/lib/table-of-contents';
import { formatReadingTime } from '@/lib/reading-time';
import DateFormatter from '@/components/DateFormatter';
import MarkdownContent from '@/components/MarkdownContent';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/site';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | ${SITE_CONFIG.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Extract table of contents from markdown
  const toc = extractTableOfContents(post.content);

  // Convert markdown to HTML and add IDs to headings
  let content = await markdownToHtml(post.content);
  content = addHeadingIds(content);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] mb-8 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to all posts
      </Link>

      <div className="flex gap-8">
        <article className="flex-1 max-w-4xl">
          <header className="mb-8 pb-8 border-b border-[var(--border)]">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[var(--text)]">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[var(--text-secondary)] mb-4">
              <DateFormatter dateString={post.date} />
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{formatReadingTime(post.readingTime)}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-[var(--primary)] bg-opacity-20 text-[var(--text)] border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <MarkdownContent content={content} />
        </article>

        {toc.length > 0 && (
          <aside className="w-64 flex-shrink-0">
            <TableOfContents items={toc} />
          </aside>
        )}
      </div>
    </div>
  );
}
