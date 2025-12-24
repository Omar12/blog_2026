import { TableOfContentsItem } from './types';

/**
 * Extract table of contents from markdown content
 * @param markdown - The markdown content
 * @returns Array of table of contents items
 */
export function extractTableOfContents(
  markdown: string
): TableOfContentsItem[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length; // Number of # characters
    const title = match[2].trim();

    // Skip H1 (we only want H2-H4 for TOC)
    if (level === 1) continue;

    // Create slug-friendly ID
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();

    toc.push({
      id,
      title,
      level,
    });
  }

  return toc;
}

/**
 * Add IDs to headings in HTML for anchor links
 * @param html - The HTML content
 * @returns HTML with IDs added to headings
 */
export function addHeadingIds(html: string): string {
  return html.replace(
    /<h([2-4])>(.+?)<\/h\1>/g,
    (match, level, content) => {
      // Extract text content (remove any HTML tags)
      const text = content.replace(/<[^>]+>/g, '');

      // Create slug-friendly ID
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      return `<h${level} id="${id}">${content}</h${level}>`;
    }
  );
}
