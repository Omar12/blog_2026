import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
          Welcome
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
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
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
