import type { ProjectContent } from "./types";

export const corpusContent: ProjectContent = {
  origin: `Corpus was built specifically for Chamber. I needed a clean abstraction layer for data scraping and AI pipelines—scrape websites, parse to XML, summarize with AI. Each step produces a versioned snapshot, and being able to replay from any step makes debugging trivial. The architecture was also inspired by my work at Amazon, where we did continuous planning for grocery warehouses using a similar snapshotting approach.`,

  problem: `AI pipelines are messy. Data flows through multiple transformation steps—scraping, parsing, summarization—and when something breaks, you're guessing which step failed. Traditional debugging means re-running the entire pipeline. I wanted to inspect and replay from any point, with full visibility into how data evolved.`,

  approach: `Corpus is a versioned data store with Zod schemas for type-safe storage. Every piece of data gets a version and optional parent reference, creating lineage graphs. SHA-256 content hashing means identical data is stored once. The observations system extracts structured facts from documents with automatic staleness detection. Multiple backends (memory, file, Cloudflare D1/R2, layered) share the same API—no exceptions thrown, just Result types you can pattern match on.`,

  growth: `Corpus combines what I learned about distributed systems at Amazon with AI pipelines and Cloudflare-native primitives. It's the library I wished existed when building Chamber—so I built it. Rapidly iterated from v0.1 to v0.3 in under two months, adding observations, layered backends, and a full documentation site.`,

  features: [
    "Type-safe stores with Zod schema validation",
    "Content deduplication via SHA-256 hashing",
    "Lineage tracking with parent references",
    "Observations: extract structured facts with staleness detection",
    "Errors as values (Result type, no exceptions)",
    "Pluggable backends: memory, file, Cloudflare D1/R2, layered",
  ],

  techStack: ["TypeScript", "Zod", "Bun", "Cloudflare D1", "Cloudflare R2"],

  timeline: [
    { date: "Dec 1, 2025", title: "Project started", description: "Result<T,E> pattern from day one" },
    { date: "Dec 3, 2025", title: "v0.1.0", description: "First npm publish" },
    { date: "Dec 4, 2025", title: "Serverless support", description: "Separate import path for edge runtimes" },
    { date: "Dec 7, 2025", title: "Layered backend", description: "Composable read/write layers" },
    { date: "Dec 16, 2025", title: "Observations", description: "Extract structured facts from documents" },
    { date: "Dec 25, 2025", title: "v0.2.0", description: "Result utilities and concurrency helpers" },
    { date: "Dec 30, 2025", title: "v0.3.0", description: "File backend isolated for browser compatibility" },
    { date: "Jan 18, 2026", title: "v0.3.4", description: "Documentation overhaul, Drizzle schema exports" },
  ],

  links: {
    github: "https://github.com/f0rbit/corpus",
    docs: "https://f0rbit.github.io/corpus/",
  },
};
