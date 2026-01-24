import type { ProjectContent } from "./types";

export const chamberContent: ProjectContent = {
  origin: `Chamber started in April 2024 from a simple question: what are Australian politicians actually saying? Parliamentary transcripts (Hansard) are public, but practically unreadable—thousands of pages of dense formal language. Democracy is technically transparent but practically opaque. I wanted to fix that.`,

  problem: `Parliamentary transcripts are optimized for legal precision, not human comprehension. Important debates are buried in procedural noise. There's no easy way to track what your representative says, how they vote, or what positions they take. Citizens can't engage with democracy if they can't understand it.`,

  approach: `Chamber scrapes Hansard automatically, parses the XML into structured data, and uses AI to generate plain-language summaries. The website ran on Cloudflare Pages from the start, but all the heavy lifting—scraping, parsing, summarization—ran on a VPS with a Go orchestrator. Over time, I migrated everything to Cloudflare-native: Workers for processing, D1 for storage, Workers AI for summaries. The observations system extracts structured facts: stances, votes, claims, questions.`,

  growth: `This was my first civic tech project. When you're summarizing democratic speech, accuracy isn't optional—it's essential. The technical challenges pushed me into building Corpus (the snapshotting library) to handle the scraping pipeline. Chamber taught me that some projects matter beyond code, and that betting on Cloudflare's edge primitives pays off.`,

  features: [
    "Automated Hansard scraping with Puppeteer",
    "XML parsing to structured JSON",
    "AI-powered plain-language summaries",
    "Observations extraction (stances, votes, claims)",
    "Member and party tracking",
    "Bill tracking and topic analysis",
    "Versioned document storage via Corpus",
  ],

  techStack: ["TypeScript", "Hono", "Next.js", "Cloudflare Workers", "Cloudflare D1", "Drizzle ORM", "Workers AI"],

  timeline: [
    { date: "Apr 2024", title: "Project started", description: "Website on Cloudflare Pages, processors on VPS" },
    { date: "Jul 2024", title: "XML parser", description: "Standalone Hansard parsing script" },
    { date: "Jul 2024", title: "Go orchestrator", description: "VPS backend for scraping, parsing, summarization" },
    { date: "Aug 2024", title: "v0.1 release", description: "First public deployment" },
    { date: "Sep 2024", title: "Polling system", description: "Puppeteer-based web scraping on VPS" },
    { date: "Mar 2025", title: "Scheduling system", description: "Automated ingestion workflows" },
    { date: "Apr 2025", title: "Admin dashboard", description: "UI for managing workflows" },
    { date: "Apr 2025", title: "Edge migration begins", description: "Poller moved to Cloudflare Worker" },
    { date: "Dec 2025", title: "Full Cloudflare migration", description: "Go server deleted, all processing on edge" },
    { date: "Dec 2025", title: "AI migration", description: "OpenAI → Workers AI (Llama 4 Scout)" },
    { date: "Dec 2025", title: "Observations system", description: "Structured fact extraction from debates" },
  ],

  links: {
    live: "https://chamber.net.au",
    github: "https://github.com/f0rbit/chamber",
  },
};
