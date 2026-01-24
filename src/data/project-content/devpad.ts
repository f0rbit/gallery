import type { ProjectContent } from "./types";

export const devpadContent: ProjectContent = {
  origin: `Devpad started in October 2022 because every task tracker I tried was designed for managers, not makers. I wanted something that understood how developers actually work—scanning codebases for TODO comments, tracking tasks alongside the code they reference, and growing with the project rather than against it.`,

  problem: `Modern task trackers optimize for visibility and reporting, not for getting work done. They don't understand code. When I leave a TODO comment in my codebase, that's a task—but Jira doesn't know that. I wanted a tool that could scan my repos, find every @todo and // TODO comment, and track them alongside manually created tasks.`,

  approach: `Devpad scans codebases for TODO comments and brings them into a unified task management system. Projects, tasks, goals, and milestones are all connected. The web interface runs on Astro + SolidJS, backed by SQLite via Drizzle ORM. There's also a CLI and an MCP server for AI assistant integration—so Claude can help manage my tasks.`,

  growth: `Three years of continuous development, two major rewrites, and ~1000 commits later, Devpad has evolved from a T3 stack prototype to a mature monorepo with published npm packages. It tracks its own TODOs—true dogfooding. The journey taught me that the best tools grow with their users, and that rewriting everything isn't failure—it's refinement.`,

  features: [
    "Codebase scanning for TODO comments",
    "Task management with priorities, tags, and dates",
    "Project versioning and milestone tracking",
    "Goals system with progress tracking",
    "CLI and web interfaces",
    "MCP server for AI assistant integration",
    "Published npm packages (@devpad/api, @devpad/cli)",
  ],

  techStack: ["TypeScript", "Astro", "SolidJS", "Hono", "Bun", "SQLite", "Drizzle ORM"],

  timeline: [
    { date: "Oct 2022", title: "Project started", description: "T3 Stack (Next.js + tRPC + Prisma)" },
    { date: "Oct 2022", title: "Todo app MVP", description: "Auth, tags, modules, basic CRUD" },
    { date: "Feb 2023", title: "Project manager", description: "Goals, milestones, action history" },
    { date: "Feb 2023", title: "API development", description: "REST endpoints for forbit.dev integration" },
    { date: "Mar 2024", title: "Blogging begins", description: "Started documenting the journey on forbit.dev" },
    { date: "Mar 2024", title: "Astro rewrite", description: "Complete fresh start—deleted all Next.js code" },
    { date: "Apr 2024", title: "Astro MVP", description: "Rebuilt with Astro + SolidJS + Drizzle" },
    { date: "Jan 2025", title: "v0.1.0", description: "First version tag, VPS deployment" },
    { date: "Aug 2025", title: "Monorepo restructure", description: "Split into 7-package architecture" },
    { date: "Sep 2025", title: "API decoupling", description: "Bun + Hono backend, MCP server, CLI" },
    { date: "Sep 2025", title: "Code scanning", description: "Original vision realized—TODO comment scanning" },
    { date: "Dec 2025", title: "Ecosystem convergence", description: "Cross-domain auth, unified tooling" },
  ],

  links: {
    live: "https://devpad.tools",
    github: "https://github.com/f0rbit/devpad",
  },
};
