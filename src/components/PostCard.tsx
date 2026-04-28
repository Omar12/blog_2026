import Link from 'next/link';
import DateFormatter from './DateFormatter';
import { PostMetadata } from '@/lib/types';
import { formatReadingTime } from '@/lib/reading-time';

interface PostCardProps {
  post: PostMetadata;
  featured?: boolean;
}

export default function PostCard({ post, featured }: PostCardProps) {
  return (
    <article className={`group relative h-full p-6 sm:p-8 border-b border-[var(--border)] hover:bg-[var(--surface)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--primary)] transition-colors duration-200 ${featured ? 'border-t-[3px] border-t-[var(--primary)]' : ''}`}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--text-secondary)] mb-3">
        <DateFormatter dateString={post.date} />
        <span aria-hidden="true">&middot;</span>
        <span>{post.author}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{formatReadingTime(post.readingTime)}</span>
      </div>
      <h2
        className={`font-bold mb-3 group-hover:text-[var(--primary)] transition-colors ${
          featured ? 'text-3xl sm:text-4xl tracking-tight' : 'text-2xl'
        }`}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {post.title}
        </Link>
      </h2>
      <p
        className={`text-[var(--text-secondary)] mb-4 ${
          featured ? 'text-lg max-w-2xl' : 'line-clamp-3'
        }`}
      >
        {post.excerpt}
      </p>
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium text-[var(--text-tertiary)] bg-[var(--primary)] bg-opacity-10 border border-[var(--primary)] border-opacity-20 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
