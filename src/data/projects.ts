export type ProjectStatus = "live" | "development";

export type Project = {
  slug: string;
  name: string;
  description: string;
  year: string;
  status: ProjectStatus;
  tags: string[];
  url?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "corpus",
    name: "Corpus",
    description: "Functional snapshotting library for TypeScript",
    year: "2025",
    status: "live",
    tags: ["typescript", "library"],
    github: "https://github.com/f0rbit/corpus",
  },
  {
    slug: "devpad",
    name: "Devpad",
    description: "Task tracking for developers with codebase scanning",
    year: "2022",
    status: "live",
    tags: ["developer-tools"],
    url: "https://devpad.tools",
    github: "https://github.com/f0rbit/devpad",
  },
  {
    slug: "chamber",
    name: "Chamber",
    description: "AI-powered political transcript summarization",
    year: "2024",
    status: "development",
    tags: ["civic-tech", "AI"],
    url: "https://chamber.net.au",
    github: "https://github.com/f0rbit/chamber",
  },
];

/**
 * Get all projects (all 3 are featured)
 */
export function getFeaturedProjects(): Project[] {
  return projects;
}

/**
 * Get a project by slug
 */
export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

/**
 * Get adjacent projects for navigation
 */
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex(p => p.slug === slug);
  if (index === -1) return {};

  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
