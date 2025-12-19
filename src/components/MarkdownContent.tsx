interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div
      className="prose prose-lg max-w-none
        prose-headings:text-[var(--text)]
        prose-p:text-[var(--text)]
        prose-a:text-[var(--primary)] hover:prose-a:text-[var(--accent)]
        prose-strong:text-[var(--text)]
        prose-code:text-[var(--accent)]
        prose-code:bg-[var(--surface)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-[var(--surface)] prose-pre:border prose-pre:border-[var(--border)]
        prose-blockquote:border-l-[var(--primary)] prose-blockquote:text-[var(--text-secondary)]
        prose-hr:border-[var(--border)]
        prose-li:text-[var(--text)]
        prose-ul:text-[var(--text)]
        prose-ol:text-[var(--text)]"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
