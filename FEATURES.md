# Blog Features

## Core Features

### 1. Reading Time Estimates ⏱️

Automatically calculates and displays reading time for each blog post.

**How it works:**
- Analyzes post content and counts words
- Uses 200 words per minute as average reading speed
- Strips markdown syntax for accurate word count
- Displays in format: "5 min read"

**Where it appears:**
- Blog post cards on homepage
- Individual post pages (in header metadata)

**Files:**
- `src/lib/reading-time.ts` - Calculation utilities
- `src/components/PostCard.tsx` - Display on cards
- `src/app/blog/[slug]/page.tsx` - Display on post pages

### 2. RSS Feed Generation 📡

Dynamic RSS feed for blog subscribers.

**Features:**
- XML format compatible with all RSS readers
- Includes post title, link, description, author, tags
- Auto-updates when new posts are published
- Proper caching headers for performance

**Access:**
- URL: `/feed.xml`
- Link in footer with RSS icon
- RSS link in HTML `<head>` for auto-discovery

**Files:**
- `src/app/feed.xml/route.ts` - RSS generation
- `src/app/layout.tsx` - HTML metadata link
- `src/components/Footer.tsx` - Footer link

### 3. Table of Contents 📑

Auto-generated table of contents for long blog posts.

**Features:**
- Extracts H2-H4 headings from markdown
- Displays in sticky sidebar (desktop only)
- Smooth scroll to sections
- Active section highlighting based on scroll position
- Proper indentation for heading hierarchy
- Only shows when post has headings

**How it works:**
- Parses markdown to extract headings
- Adds IDs to HTML headings for anchor links
- Uses Intersection Observer API to track active section
- Sticky positioned at top of viewport

**Where it appears:**
- Right sidebar on blog post pages (hidden on mobile/tablet)

**Files:**
- `src/lib/table-of-contents.ts` - Extraction and ID utilities
- `src/components/TableOfContents.tsx` - Interactive component
- `src/app/blog/[slug]/page.tsx` - Integration

## Technical Implementation

### Reading Time Calculation

```typescript
// Example usage
import { calculateReadingTime, formatReadingTime } from '@/lib/reading-time';

const content = "Your markdown content...";
const minutes = calculateReadingTime(content); // Returns: 5
const formatted = formatReadingTime(minutes); // Returns: "5 min read"
```

**Algorithm:**
1. Remove code blocks and markdown syntax
2. Split into words
3. Divide by 200 (words per minute)
4. Round up to nearest minute

### RSS Feed

**Endpoint:** `GET /feed.xml`

**Response:**
- Content-Type: `application/xml`
- Cache-Control: `public, max-age=3600`

**XML Structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>My Blog</title>
    <item>
      <title>Post Title</title>
      <link>https://yourblog.com/blog/slug</link>
      <description>Post excerpt</description>
      <pubDate>Date</pubDate>
      <category>tag1</category>
    </item>
  </channel>
</rss>
```

### Table of Contents

**Component Props:**
```typescript
interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

interface TableOfContentsItem {
  id: string;      // Slug-friendly ID for anchor
  title: string;   // Heading text
  level: number;   // 2, 3, or 4 (H2-H4)
}
```

**Intersection Observer Config:**
```typescript
{
  rootMargin: '-100px 0px -66%',
  threshold: 1,
}
```

This ensures the heading near the top of the viewport is marked as active.

## Styling

All features follow the existing pastel color scheme:

**Light Mode:**
- Text: `#4A4A4A`
- Secondary: `#7A7A7A`
- Primary: `#E8B4B8`
- Accent: `#D4C4E8`

**Dark Mode:**
- Text: `#E8E8E8`
- Secondary: `#B8B8B8`
- Primary: `#C78A8E`
- Accent: `#A48EBA`

## Configuration

### Environment Variables

For RSS feed customization, set in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourblog.com
NEXT_PUBLIC_SITE_NAME=My Blog
NEXT_PUBLIC_AUTHOR_NAME=Your Name
```

### Reading Time

To adjust reading speed, modify in `src/lib/reading-time.ts`:

```typescript
calculateReadingTime(text, 250) // 250 words per minute
```

### Table of Contents

To include H5 or H6 headings, modify the regex in `src/lib/table-of-contents.ts`:

```typescript
const headingRegex = /^(#{2,6})\s+(.+)$/gm; // Include H5-H6
```

## Usage Examples

### Adding Reading Time to Custom Components

```typescript
import { formatReadingTime } from '@/lib/reading-time';

function MyComponent({ post }: { post: Post }) {
  return (
    <div>
      <span>{formatReadingTime(post.readingTime)}</span>
    </div>
  );
}
```

### Subscribing to RSS Feed

Users can subscribe using any RSS reader:
1. Copy feed URL: `https://yourblog.com/feed.xml`
2. Add to RSS reader (Feedly, NewsBlur, etc.)
3. Get notified of new posts

### Table of Contents Behavior

- **Desktop (>1024px):** Sticky sidebar, always visible
- **Tablet/Mobile:** Hidden (uses CSS `display: none`)
- **Posts without headings:** TOC not rendered

## Performance

### Reading Time
- Computed once during static generation
- No runtime performance impact
- Cached in PostMetadata

### RSS Feed
- Generated dynamically on request
- Cached for 1 hour (3600s)
- Lightweight XML output

### Table of Contents
- Headings parsed once during build
- IDs added during SSG
- Intersection Observer is efficient (native browser API)
- Minimal JavaScript (~2KB)

## Accessibility

- **Reading Time:** Provides context for time commitment
- **RSS Feed:** Alternative content consumption method
- **TOC:** Keyboard navigable, semantic HTML
- **Smooth Scroll:** Respects `prefers-reduced-motion`

## Browser Support

All features work in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Intersection Observer API supported

## Future Enhancements

Potential improvements:

1. **Reading Time:**
   - Add reading progress bar
   - Estimate based on code blocks (slower to read)
   - Account for images

2. **RSS Feed:**
   - Full content in feed (not just excerpt)
   - JSON Feed format support
   - Feed for specific tags/categories

3. **Table of Contents:**
   - Collapsible sections
   - Mobile drawer/accordion
   - Keyboard shortcuts (e.g., 't' to toggle)
   - Reading progress indicator

4. **Additional Features:**
   - Related posts suggestions
   - Tag/category pages
   - Search functionality
   - Print-friendly view with TOC

## Troubleshooting

### Reading time shows "< 1 min read"
- Post content is very short
- Expected behavior for posts under 200 words

### TOC not appearing
- Post has no H2-H4 headings
- Viewing on mobile/tablet (TOC hidden by design)

### RSS feed shows old posts
- Check cache (1 hour TTL)
- Clear browser cache or wait for cache expiration

### TOC active section not updating
- Check Intersection Observer browser support
- Ensure heading IDs match TOC item IDs
- Verify scroll container setup

## Credits

Built with:
- Next.js 15
- TypeScript
- Intersection Observer API
- RSS 2.0 Specification
