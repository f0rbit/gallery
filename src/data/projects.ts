export type ProjectStatus = "live" | "development" | "paused" | "finished";

export type Project = {
  slug: string;
  name: string;
  description: string;
  year: string;
  status: ProjectStatus;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
  order?: number;
};

export const projects: Project[] = [
  {
    slug: "chamber",
    name: "Chamber",
    description: "AI-powered political transcript summarization",
    year: "2024",
    status: "development",
    tags: ["civic-tech", "AI"],
    url: "https://chamber.net.au",
    github: "https://github.com/f0rbit/chamber",
    featured: true,
    order: 1,
  },
  {
    slug: "devpad",
    name: "devpad",
    description: "Development lifecycle tools",
    year: "2024",
    status: "live",
    tags: ["developer-tools"],
    url: "https://devpad.tools",
    github: "https://github.com/f0rbit/devpad",
    featured: true,
    order: 2,
  },
  {
    slug: "corpus",
    name: "corpus",
    description: "Functional snapshotting library for TypeScript",
    year: "2024",
    status: "live",
    tags: ["typescript", "library"],
    github: "https://github.com/f0rbit/corpus",
    featured: true,
    order: 3,
  },
  {
    slug: "mycelia",
    name: "mycelia",
    description: "Framework for interconnected digital gardens",
    year: "2024",
    status: "development",
    tags: ["framework"],
    github: "https://github.com/f0rbit/mycelia",
    featured: true,
    order: 10,
  },
  {
    slug: "burning-blends",
    name: "burning-blends",
    description: "Blog site for creative side",
    year: "2024",
    status: "development",
    tags: ["blog"],
    url: "https://blends.blog",
    github: "https://github.com/f0rbit/burning-blends",
    featured: true,
    order: 11,
  },
  {
    slug: "dungeon-generator",
    name: "dungeon-generator",
    description: "Java library for generating 2D dungeons",
    year: "2019",
    status: "live",
    tags: ["java", "game-dev"],
    github: "https://github.com/f0rbit/dungeon-generator",
    featured: true,
    order: 4,
  },
  {
    slug: "gm-server",
    name: "gm-server",
    description: "Java-GameMaker server framework",
    year: "2020",
    status: "live",
    tags: ["java", "gamemaker"],
    github: "https://github.com/f0rbit/gm-server",
    featured: false,
    order: 5,
  },
  {
    slug: "todo-tracker",
    name: "todo-tracker",
    description: "CLI for tracking code TODOs",
    year: "2023",
    status: "live",
    tags: ["cli", "developer-tools"],
    github: "https://github.com/f0rbit/todo-tracker",
    featured: false,
    order: 6,
  },
];

export const getFeaturedProjects = () =>
  projects
    .filter(p => p.featured)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const getLiveProjects = () =>
  getFeaturedProjects().filter(p => p.status === "live" || p.status === "finished");

export const getDevProjects = () =>
  getFeaturedProjects().filter(p => p.status === "development");

export const getProject = (slug: string): Project | undefined =>
  projects.find(p => p.slug === slug);

export const getAdjacentProjects = (slug: string): { prev?: Project; next?: Project } => {
  const featured = getFeaturedProjects();
  const index = featured.findIndex(p => p.slug === slug);
  if (index === -1) return {};

  return {
    prev: index > 0 ? featured[index - 1] : undefined,
    next: index < featured.length - 1 ? featured[index + 1] : undefined,
  };
};
