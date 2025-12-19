#!/usr/bin/env node

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

async function proofreadMarkdown(filePath: string): Promise<void> {
  // Validate API key
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('Error: ANTHROPIC_API_KEY environment variable is not set');
    process.exit(1);
  }

  // Read the markdown file
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  console.log(`\n📝 Proofreading: ${filePath}`);
  console.log(`Title: ${data.title || 'Untitled'}\n`);

  // Initialize Anthropic client
  const client = new Anthropic({ apiKey });

  // Create proofreading prompt
  const prompt = `You are a professional editor and proofreader. Please review the following blog post and provide feedback.

**Blog Post Content:**

${content}

Please provide your feedback in the following format:

## Grammar & Spelling
[List any grammar or spelling errors, or write "No issues found"]

## Style & Clarity
[Provide suggestions for improving writing style and clarity]

## Readability
[Provide suggestions for improving readability and flow]

## Overall Assessment
[Brief overall assessment and score out of 10]

Be constructive and specific. If the writing is good, acknowledge it. Focus on actionable improvements.`;

  try {
    // Call Claude API
    const message = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      temperature: 0.3,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Extract text response
    const feedback =
      message.content[0].type === 'text' ? message.content[0].text : '';

    // Output formatted feedback
    console.log('--- PROOFREADING FEEDBACK ---\n');
    console.log(feedback);
    console.log('\n--- END FEEDBACK ---\n');
  } catch (error: any) {
    console.error('Error calling Anthropic API:', error.message);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node proofread.ts <path-to-markdown-file>');
  process.exit(1);
}

const filePath = args[0];
proofreadMarkdown(filePath);
