# My Blog

A modern, minimalist blog built with Next.js, featuring a beautiful pastel color scheme, dark mode support, and automated proofreading powered by Claude AI.

## Features

- ✨ **Beautiful Design**: Soft pastel colors with seamless dark mode
- 📝 **Markdown-Based**: Write posts in simple markdown files
- 🚀 **Lightning Fast**: Static site generation for optimal performance
- 🤖 **AI Proofreading**: Automated content review using Claude API via GitHub Actions
- 🎨 **Syntax Highlighting**: Beautiful code blocks with syntax highlighting
- 📱 **Fully Responsive**: Looks great on all devices
- ♿ **Accessible**: Built with accessibility in mind
- 🔍 **SEO Optimized**: Proper metadata and OpenGraph tags

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Markdown with [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Markdown Processing**: [unified](https://unifiedjs.com/), [remark](https://remark.js.org/), [rehype](https://github.com/rehypejs/rehype)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **AI**: [Anthropic Claude API](https://www.anthropic.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- (Optional) Anthropic API key for proofreading

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd blog_2026
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Anthropic API key if you want to test proofreading locally:
```
ANTHROPIC_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
blog_2026/
├── .github/
│   └── workflows/
│       └── proofread.yml          # GitHub Actions workflow for proofreading
├── content/
│   └── posts/                     # Your blog posts (markdown files)
├── public/
│   └── images/                    # Static images
├── scripts/
│   └── proofread.ts              # Proofreading script using Claude API
├── src/
│   ├── app/
│   │   ├── blog/[slug]/
│   │   │   └── page.tsx          # Blog post page (dynamic route)
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage (blog listing)
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── DateFormatter.tsx     # Date formatting component
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Header.tsx            # Site header
│   │   ├── MarkdownContent.tsx   # Markdown renderer
│   │   ├── PostCard.tsx          # Blog post preview card
│   │   └── ThemeToggle.tsx       # Dark mode toggle
│   ├── lib/
│   │   ├── markdown.ts           # Markdown processing utilities
│   │   ├── posts.ts              # Post fetching functions
│   │   └── types.ts              # TypeScript interfaces
│   └── styles/
│       └── markdown.css          # Markdown-specific styles
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## Writing Blog Posts

### Creating a New Post

1. Create a new markdown file in `content/posts/`:
```bash
touch content/posts/my-new-post.md
```

2. Add frontmatter and content:
```markdown
---
title: "My Awesome Post"
date: "2025-12-18"
excerpt: "A brief description of what this post is about"
author: "Your Name"
tags: ["nextjs", "typescript", "webdev"]
published: true
---

# My Post Title

Your content here...
```

### Frontmatter Fields

- **title** (required): Post title
- **date** (required): Publication date in YYYY-MM-DD format
- **excerpt** (required): Brief description (shown on homepage)
- **author** (required): Author name
- **tags** (required): Array of tags
- **published** (required): Set to `true` to publish, `false` to hide
- **coverImage** (optional): Path to cover image

### Markdown Features

The blog supports:
- Headings (H1-H6)
- **Bold** and *italic* text
- Links and images
- Code blocks with syntax highlighting
- Blockquotes
- Lists (ordered and unordered)
- Tables
- Task lists
- And more via GitHub Flavored Markdown

### Example Code Block

\`\`\`typescript
interface Post {
  title: string;
  date: string;
  content: string;
}
\`\`\`

## Color Scheme

### Light Mode
- Background: `#FFF9F5` (soft cream)
- Surface: `#FFFFFF` (white)
- Primary: `#E8B4B8` (dusty rose)
- Secondary: `#B8D4E8` (powder blue)
- Accent: `#D4C4E8` (soft lavender)

### Dark Mode
- Background: `#1A1625` (deep purple-black)
- Surface: `#251E35` (dark purple)
- Primary: `#C78A8E` (muted rose)
- Secondary: `#8AA4BA` (muted blue)
- Accent: `#A48EBA` (muted lavender)

### Customizing Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  light: {
    bg: '#FFF9F5',
    // ... other colors
  },
  dark: {
    bg: '#1A1625',
    // ... other colors
  },
}
```

## Automated Proofreading

### How It Works

When you create a pull request with new or modified markdown files in `content/posts/`, the GitHub Actions workflow automatically:

1. Detects changed markdown files
2. Runs the proofreading script for each file
3. Calls the Anthropic Claude API for analysis
4. Posts feedback as a PR comment

The feedback includes:
- Grammar and spelling corrections
- Style and clarity suggestions
- Readability improvements
- Overall assessment

### Setup GitHub Actions

1. Go to your repository settings
2. Navigate to **Secrets and variables → Actions**
3. Add a new repository secret:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key

### Testing Proofreading Locally

```bash
npx tsx scripts/proofread.ts content/posts/your-post.md
```

## Building for Production

```bash
npm run build
```

This generates a static site in the `.next` directory, optimized for deployment.

## Deployment

This blog can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add the `ANTHROPIC_API_KEY` environment variable (optional, only for GitHub Actions)
4. Deploy!

### Netlify

```bash
npm run build
```

Deploy the `.next` directory to Netlify.

### Other Platforms

The blog works with any platform supporting Next.js static exports:
- AWS Amplify
- Cloudflare Pages
- GitHub Pages (with export)
- Your own server

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding Features

The codebase is well-organized and easy to extend:

- Add new pages in `src/app/`
- Create new components in `src/components/`
- Add utility functions in `src/lib/`
- Modify styles in `src/app/globals.css` or `tailwind.config.ts`

## Future Enhancements

Potential features to add:

- [ ] Search functionality
- [ ] Tag filtering page
- [ ] RSS feed generation
- [ ] Reading time estimates
- [ ] Table of contents for long posts
- [ ] Related posts suggestions
- [ ] Comments system (Giscus)
- [ ] Newsletter signup
- [ ] Analytics integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Proofreading powered by [Claude AI](https://www.anthropic.com/)
- Inspired by modern minimalist design

---

Made with ❤️ and Next.js
