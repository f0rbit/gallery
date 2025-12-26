export type ProjectStatus = "live" | "in-progress" | "archived";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: ProjectStatus;
  tags: string[];
  externalUrl?: string;
  description: string;
  problem?: string;
  approach?: string;
  technicalNotes?: string;
  forbitLink?: string;
};

export const projects: Project[] = [
  {
    slug: "chamber",
    title: "Chamber",
    tagline: "AI-powered political transcript summarization for democratic transparency",
    year: "2024-ongoing",
    status: "live",
    tags: ["civic tech", "AI"],
    externalUrl: "https://chamber.net.au",
    description: "Chamber uses AI to summarize, contextualize, and surface what matters from parliamentary transcripts.",
    problem: "Parliamentary transcripts are dense, inaccessible, and impractical for citizens to follow. Democracy suffers when civic information is locked behind bureaucratic language.",
    approach: "AI-powered summarization with automatic transcript ingestion, searchable archive, and plain-language explanations. Built for Australia, designed for anywhere.",
    technicalNotes: "Go backend, React frontend, PostgreSQL, Claude API. Self-hosted on personal infrastructure.",
    forbitLink: "https://forbit.dev/projects/chamber"
  },
  {
    slug: "flowers",
    title: "Flowers",
    tagline: "A photographic study in bloom and decay",
    year: "2025",
    status: "in-progress",
    tags: ["photography", "art"],
    description: "An ongoing photographic exploration of flowers-their bloom, decay, and the passage of time."
  }
];

export const getProject = (slug: string): Project | undefined =>
  projects.find(p => p.slug === slug);

export const getAdjacentProjects = (slug: string): { prev?: Project; next?: Project } => {
  const index = projects.findIndex(p => p.slug === slug);
  if (index === -1) return {};
  
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined
  };
};
