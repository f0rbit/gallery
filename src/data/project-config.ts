export type ProjectEnrichment = {
  tags: string[];
  featured: boolean;
  /** Override the year display (devpad uses created_at timestamp) */
  yearOverride?: string;
};

/**
 * Local enrichment config for devpad projects.
 * Keyed by devpad project_id (slug).
 * Projects not listed here still get pages, just with no tags and not featured.
 */
export const projectConfig: Record<string, ProjectEnrichment> = {
  corpus: { tags: ["typescript", "library", "open-source"], featured: true, yearOverride: "2024" },
  devpad: { tags: ["developer-tools", "saas"], featured: true, yearOverride: "2023" },
  chamber: { tags: ["civic-tech", "ai"], featured: true, yearOverride: "2024" },
  "burning-blends": { tags: ["creative", "blog"], featured: false },
  "forbit-dev": { tags: ["portfolio", "blog"], featured: false },
  mycelia: { tags: ["framework", "digital-garden"], featured: false },
  ui: { tags: ["component-library", "solidjs"], featured: false },
  "media-timeline": { tags: ["social-media", "aggregator"], featured: false },
  runbook: { tags: ["cli", "automation"], featured: false },
  "dungeon-generator": { tags: ["game-dev", "java", "library"], featured: false },
  "gm-server": { tags: ["game-dev", "java", "library"], featured: false },
  "todo-tracker": { tags: ["cli", "go"], featured: false },
  "rich-frog": { tags: ["game-dev"], featured: false },
  "clumsy-santa": { tags: ["game-dev", "game-jam"], featured: false },
  arena: { tags: ["game-dev", "multiplayer"], featured: false },
  rollette: { tags: ["ios", "swift"], featured: false },
  "budget-sync": { tags: ["cli", "finance"], featured: false },
};

export function getEnrichment(slug: string): ProjectEnrichment {
  return projectConfig[slug] ?? { tags: [], featured: false };
}

export const featuredSlugs = Object.entries(projectConfig)
  .filter(([_, v]) => v.featured)
  .map(([k]) => k);
