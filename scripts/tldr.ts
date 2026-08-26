#!/usr/bin/env node

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import matter from 'gray-matter';

const MARKER = '<summary>TL;DR</summary>';

async function summarize(client: Anthropic, content: string): Promise<string> {
  const message = await client.messages.create({
    model: 'claude-opus-5',
    max_tokens: 500,
    messages: [
      {
        role: 'user',
        content: `Summarize this blog post in 2-3 sentences. Write in the same voice as the post, present tense, no preamble like "This post". Output only the summary text.\n\n${content}`,
      },
    ],
  });

  return message.content
    .map((b) => (b.type === 'text' ? b.text : ''))
    .join('')
    .trim();
}

async function main(filePaths: string[]): Promise<void> {
  if (!filePaths.length) throw new Error('usage: tsx scripts/tldr.ts <file>...');

  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('tldr: ANTHROPIC_API_KEY not set — skipping TL;DR generation');
    return;
  }

  const client = new Anthropic();

  for (const filePath of filePaths) {
    const original = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(original);

    if (content.includes(MARKER)) {
      console.log(`tldr: already present, skipping: ${filePath}`);
      continue;
    }

    // Splice the block in after the frontmatter rather than re-serializing it,
    // so YAML quoting and list style stay exactly as the author wrote them.
    const block = `<details>\n${MARKER}\n\n${await summarize(client, content)}\n\n</details>\n\n`;
    const bodyStart = original.length - content.length;
    fs.writeFileSync(filePath, original.slice(0, bodyStart) + block + content.trimStart());
    console.log(`tldr: added to ${filePath}`);
  }
}

main(process.argv.slice(2)).catch((error: any) => {
  // Never block a commit on an API failure.
  console.warn(`tldr: skipped — ${error.message}`);
});
