// Adding a Claude artifact:
// 1. Copy or download the artifact from the Claude.ai artifact panel
// 2. Save as public/artifacts/[slug]/index.html (create the folder)
//      HTML artifact  → paste as-is
//      JSX artifact   → use the template at public/artifacts/_template-jsx.html;
//                       paste your component code where indicated
// 3. Add an entry to CLAUDE_ARTIFACTS below:
//      slug    - must match the folder name in public/artifacts/
//      title   - display name shown on /projects
//      description - shown on the card (keep it short)
//      date    - ISO format: 'YYYY-MM-DD'
//      tags    - array of short strings
//      type    - 'html' (default) or 'jsx'
// The section on /projects appears automatically once the array is non-empty.

export interface ClaudeArtifact {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  type?: 'html' | 'jsx';
}

export const CLAUDE_ARTIFACTS: ClaudeArtifact[] = [
  {
    slug: 'claude-cheat-sheet',
    title: 'Claude Cheat Sheet',
    description: 'A quick reference for using Claude AI',
    date: '2026-05-24',
    tags: ['cheat-sheet', 'claude', 'ai'],
    type: 'html',
  },
  {
    slug: 'dj-transitions-cheat-sheet',
    title: 'DJ Transitions Cheat Sheet',
    description: 'A quick reference for creating smooth DJ transitions',
    date: '2026-05-24',
    tags: ['cheat-sheet', 'dj', 'transitions'],
    type: 'jsx',
  },
  {
    slug: 'datamosh',
    title: 'Datamosh (Webcam Browser API Experiment)',
    description: 'A fun experiment with the webcam and browser APIs to create datamoshing effects in real-time.',
    date: '2026-02-08',
    tags: ['datamosh', 'webcam', 'browser-api'],
    type: 'html'
  }
];
