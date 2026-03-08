import { getDevpadClient } from "~/lib/devpad";
import { getEnrichment, featuredSlugs } from "~/data/project-config";

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
  icon_url?: string;
  version?: string;
};

const fallbackProjects: Project[] = [
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

const liveStatuses = new Set(["LIVE", "RELEASED", "FINISHED"]);

function mapStatus(status: string): ProjectStatus {
  return liveStatuses.has(status) ? "live" : "development";
}

function yearFromIso(iso: string): string {
  return new Date(iso).getFullYear().toString();
}

let _cache: Project[] | null = null;

async function fetchProjects(): Promise<Project[]> {
  if (_cache) return _cache;

  const client = getDevpadClient();
  if (!client) {
    _cache = fallbackProjects;
    return _cache;
  }

  const result = await client.projects.list({ private: false });

  if (!result.ok) {
    console.warn("[gallery] devpad API error, using fallback data:", result.error);
    _cache = fallbackProjects;
    return _cache;
  }

  const projects = result.value
    .filter(p => p.visibility === "PUBLIC")
    .map((p): Project => {
      const enrichment = getEnrichment(p.project_id);
      return {
        slug: p.project_id,
        name: p.name,
        description: p.description ?? "",
        year: enrichment.yearOverride ?? yearFromIso(p.created_at),
        status: mapStatus(p.status),
        tags: enrichment.tags,
        url: p.link_url ?? undefined,
        github: p.repo_url ?? undefined,
        icon_url: p.icon_url ?? undefined,
        version: p.current_version ?? undefined,
      };
    });

  _cache = projects;
  return _cache;
}

export async function getAllProjects(): Promise<Project[]> {
  return fetchProjects();
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await fetchProjects();
  const bySlug = new Map(all.map(p => [p.slug, p]));

  return featuredSlugs
    .map(slug => bySlug.get(slug))
    .filter((p): p is Project => p !== undefined);
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const all = await fetchProjects();
  return all.find(p => p.slug === slug);
}

export async function getAdjacentProjects(slug: string): Promise<{ prev: Project | null; next: Project | null }> {
  const featured = await getFeaturedProjects();
  const index = featured.findIndex(p => p.slug === slug);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? featured[index - 1] : null,
    next: index < featured.length - 1 ? featured[index + 1] : null,
  };
}
