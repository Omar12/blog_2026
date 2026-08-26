---
title: "DJ Toolbelt"
date: "2026-08-25"
excerpt: "A vibe-coded map of how DJs discover, prepare, perform, and share music — plus nine calculators I got tired of re-deriving."
author: "Omar"
tags: ["projects", "vibe-coding", "dj", "nextjs"]
published: true
---

# DJ Toolbelt

Every "DJ resources" page I found was a link dump. Alphabetical, no order, no answer to the only question I ever have: *I am at this point in my process, what do I use next?*

So I built [DJ Toolbelt](https://dj-toolbelt.vercel.app/). It's organized by workflow stage instead of by category — Discover, Prepare, Mix, Record, Publish, Learn, Tools. Around 80 curated resources, filterable by price, platform, genre, skill level, and format.

## Digging has six shapes

The Discover section is the part I care most about. Digging isn't one activity, it's six:

- **By sound** — find tracks that feel like this one
- **By DJ** — follow someone's sets backwards into their crates
- **By label** — catalogs are curation
- **By scene** — geography still matters
- **By era** — a genre's history by year
- **By sample** — trace the lineage

Each one routes into real places: Bandcamp, Discogs, 1001Tracklists, NTS, SoundCloud.

## Nine calculators

The utilities exist because I kept doing the same math in my head, badly. Camelot wheel for harmonic compatibility. BPM tapper. Transition calculator for tempo gaps. Set duration and track count. All client-side, no account, favorites live in browser storage.

## Stack

Next.js 16, React 19, Tailwind 4, TypeScript. No database, no CMS — every resource is typed TypeScript in the repo. That sounds primitive until you realize the type checker becomes the content validator. There are also scripts that verify the math in the calculators and check that every outbound URL still resolves.

## On vibe-coding it

Most of this was built by describing what I wanted and correcting what came back. That works well for breadth — 80 resources, seven sections, nine tools — and poorly for judgment. The AI will happily generate a plausible-looking harmonic compatibility table. Whether it's *correct* is on me, which is why the validation scripts exist.

The map is the hard part. The code was the easy part.

Code: [github.com/Omar12/dj-toolbelt](https://github.com/Omar12/dj-toolbelt)
