import Link from 'next/link';
import DateFormatter from './DateFormatter';
import { PostMetadata } from '@/lib/types';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group h-full p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:shadow-lg hover:border-[var(--primary)] transition-all duration-300">
        <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
          {post.title}
        </h2>
        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-3">
          <DateFormatter dateString={post.date} />
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <p className="text-[var(--text-secondary)] mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-[var(--primary)] bg-opacity-20 text-[var(--text)] border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
