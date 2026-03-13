import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-[var(--text)]">
          Welcome
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-xl">
          Thoughts, ideas, and stories about technology and life
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[var(--text-secondary)] text-lg">
            No posts yet. Stay tuned!
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <div key={post.slug} className={i === 0 ? 'md:col-span-2' : ''}>
              <PostCard post={post} featured={i === 0} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
