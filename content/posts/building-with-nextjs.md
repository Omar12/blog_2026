---
title: "Building a Modern Blog with Next.js"
date: "2025-12-17"
excerpt: "A deep dive into how I built this blog using Next.js, TypeScript, and Tailwind CSS, with automated proofreading via Claude."
author: "Blog Author"
tags: ["nextjs", "typescript", "tutorial", "web-development"]
published: true
---

# Building a Modern Blog with Next.js

Creating a blog in 2025 is easier than ever, thanks to modern frameworks like Next.js. In this post, I'll walk you through the key decisions and technologies I used to build this blog.

## Technology Stack

### Next.js 15 with App Router

Next.js continues to be my go-to framework for React applications. The new App Router provides:

- **Server Components by default**: Better performance and SEO
- **Improved routing**: File-system based routing that's intuitive
- **Built-in optimizations**: Image optimization, font optimization, and more

### TypeScript

Type safety is crucial for maintainable codebases:

```typescript
interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  published: boolean;
  content: string;
}
```

### Tailwind CSS with Custom Colors

I chose a soft, pastel color palette:

- **Light mode**: Cream backgrounds with dusty rose, powder blue, and soft lavender accents
- **Dark mode**: Deep purple-black backgrounds with muted complementary colors
- **Smooth transitions**: Everything feels polished and intentional

### Markdown for Content

All blog posts are written in markdown files with frontmatter:

```yaml
---
title: "Post Title"
date: "2025-12-17"
excerpt: "Brief description"
author: "Author Name"
tags: ["tag1", "tag2"]
published: true
---
```

## Key Features

### Static Site Generation (SSG)

Every blog post is statically generated at build time:

```typescript
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}
```

This means:
- Lightning-fast page loads
- Excellent SEO
- Lower hosting costs
- Better user experience

### Dark Mode Support

Using `next-themes`, the blog respects user preferences and provides a toggle:

- System preference detection
- Persistent theme choice
- Smooth transitions
- No flash of unstyled content

### Automated Proofreading

The most unique feature: GitHub Actions automatically proofreads new posts using Claude AI:

1. **Trigger**: When a new markdown file is added or modified
2. **Process**: Claude analyzes grammar, style, and readability
3. **Feedback**: Results are posted as PR comments
4. **Review**: I can review suggestions before publishing

This helps maintain quality without manual proofreading overhead.

## Implementation Highlights

### Post Processing Pipeline

```typescript
// lib/posts.ts
export function getAllPosts(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const { data } = matter(fileContents);
      return { slug, ...data };
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
```

### Markdown to HTML

Using `unified`, `remark`, and `rehype`:

```typescript
export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHtml)
    .process(markdown);

  return result.toString();
}
```

## Lessons Learned

1. **Keep it simple**: Don't over-engineer. Markdown files are perfect for blogs.
2. **Focus on performance**: SSG + modern framework = fast site
3. **Design matters**: A clean, cohesive color scheme makes a huge difference
4. **Automate when possible**: Let AI help with proofreading

## What's Next?

Future enhancements I'm considering:

- [ ] Search functionality
- [ ] Tag filtering
- [ ] RSS feed
- [ ] Reading time estimates
- [ ] Related posts suggestions
- [ ] Table of contents for long posts

## Conclusion

Building this blog was a fun project that combined modern web technologies with practical features. The result is a fast, beautiful, and maintainable platform for sharing ideas.

If you're thinking about starting a blog, I highly recommend this stack. The developer experience is excellent, and the end result is professional and performant.

---

**Want to build something similar?** Check out the source code or reach out if you have questions!
