# Gallery Phase 2 — Devpad Integration, Completions & /uses

## Executive Summary

Three workstreams unified into a 5-phase plan for thomas-materne.com:

1. **Foundation cleanup** — Push 4 unpushed commits, consolidate link data, delete dead code, fix badge CSS mismatch
2. **Devpad integration** — Replace hardcoded project data with build-time API calls to `@devpad/api`, create merged data layer
3. **Route updates** — Homepage/now page consume devpad data, about page wired to hobbies/properties/elsewhere, blog posts from devpad
4. **`/uses` page** — New route: hardware, dev environment, tech stack, dotfiles
5. **Polish** — System fonts decision (keep), favicon, robots.txt, sitemap, responsive audit, build verification, empty dir cleanup

Total estimated effort: ~1,100 LOC across 5 phases.

---

## Integration Point Analysis

### Current Data Architecture
```
src/data/projects.ts      → 3 hardcoded projects (Project type)
src/data/project-content/  → Narrative content for 3 featured projects (ProjectContent type)
src/data/journey.ts        → Timeline entries, hobbies[], currentFocus{} (partially unused)
src/data/posts.ts          → 5 hardcoded blog posts from 2024
```

### Devpad API Surface
- `client.projects.list({ private: false })` → ~16 public projects
- `client.tasks.list({ project_id })` → Tasks per project (potential /now source)
- `client.milestones.list({ project_id })` → Milestones per project
- `client.blog.posts.list()` → Blog posts (replaces hardcoded posts.ts)

### Type Mapping: Devpad Project → Gallery Project
| Gallery field | Source | Notes |
|---|---|---|
| `slug` | `project_id` | Devpad's `project_id` is the human-readable slug (e.g. "corpus") |
| `name` | `name` | Direct map |
| `description` | `description` | Direct map (nullable in devpad, fallback to empty string) |
| `year` | `created_at` | Extract year from ISO date |
| `status` | `status` | Map: LIVE/RELEASED/FINISHED → "live", DEVELOPMENT/PAUSED → "development" |
| `tags` | **local enrichment** | No devpad equivalent per-project; keep in local config |
| `url` | `link_url` | Direct map |
| `github` | `repo_url` | Direct map |

### What Stays Local (No Devpad Equivalent)
- `ProjectContent` (origin, problem, approach, growth, features, timeline) — narrative data
- `tags` — per-project tags (devpad has per-task tags, not useful here)
- Featured project list — which 3 to highlight on homepage
- `hobbies`, `currentFocus` from journey.ts — personal data
- `/uses` page data — entirely local

---

## DECISION NEEDED

1. **Dotfiles repo visibility** — Currently private at `~/dev/dotfiles`. The `/uses` page can link to individual config files if made public. Plan: create the page with tool entries but **no dotfiles links**. Add links later when/if repo goes public. Noted in the data model as optional `configUrl?: string`.

2. **Blog posts source** — Devpad blog API has posts. Should gallery pull from there at build time, or keep hardcoded? **Recommendation:** Pull from devpad blog API. Falls back gracefully if API unavailable.

3. **Additional project pages** — Devpad has 16+ public projects. Currently only 3 have detail pages. **Recommendation:** All public devpad projects get basic pages (hero + description + links). Only the 3 with `ProjectContent` get the full story treatment. The homepage stays curated to featured 3.

---

## Phase 1: Foundation Cleanup

**Goal:** Clean slate before integration work. Push unpushed commits, remove dead code, consolidate shared data, fix CSS bugs.

**Prerequisites:** None (first phase)

### Task 1.1: Push unpushed commits
- **Action:** `git push` the 4 unpushed commits
- **LOC:** 0
- **Files:** None (git operation only)

### Task 1.2: Create `src/data/links.ts` — link data consolidation
- **Action:** Extract nav links, external links, email into shared module
- **LOC:** ~30
- **Files:** `src/data/links.ts` (new), `src/routes/index.tsx` (consume), `src/routes/about.tsx` (consume for elsewhere section)
- **Details:**
  ```ts
  export const navLinks = [
    { label: "about", href: "/about" },
    { label: "now", href: "/now" },
    { label: "uses", href: "/uses" },
  ];
  export const externalLinks = [
    { label: "GitHub", href: "https://github.com/f0rbit" },
    { label: "Blog", href: "https://forbit.dev/blog" },
  ];
  export const email = "tom@thomas-materne.com";
  ```

### Task 1.3: Wrap homepage in Layout
- **Action:** Homepage uses `<Layout>` but with no `back` prop (suppresses back arrow on home)
- **LOC:** ~10 (net change in index.tsx)
- **Files:** `src/routes/index.tsx`
- **Details:** Remove standalone `<Grain />` import, wrap in `<Layout>`. The `home` div's max-width/padding moves into layout-main context.

### Task 1.4: Fix badge CSS mismatch
- **Action:** CSS defines `badge--in-progress` but `ProjectHero.tsx` applies `badge--development`. Add `badge--development` to CSS pointing to same styles.
- **LOC:** ~5
- **Files:** `src/styles/global.css`

### Task 1.5: Dead code cleanup
- **Action:** Delete unused components and CSS
- **LOC:** -60 (deletions)
- **Files (delete):**
  - `src/components/common/InProgress.tsx` — never imported outside its file
  - `src/components/common/Divider.tsx` — `<hr class="divider">` used directly everywhere
  - `src/components/project/ProjectCard.tsx` — homepage uses `ProjectRow` pattern instead
- **Files (edit):**
  - `src/styles/global.css` — remove unused classes: `.home-projects`, `.home-status`, `.home-footer`, `.home-external`, `.in-progress`, `.in-progress-icon`, `.in-progress-text`, `@keyframes hammer-swing`
- **Note:** `.layout-footer`, `.footer-*` CSS classes stay — they may be needed when footer is added back.

### Task 1.6: Remove empty directories
- **Action:** Delete `public/fonts/` (empty), `public/images/projects/` (empty). Remove `public/images/` if empty after.
- **LOC:** 0
- **Files:** Filesystem only

### Parallelization
- Tasks 1.2, 1.4, 1.5, 1.6 can run in **parallel** (no shared files)
- Task 1.3 depends on Task 1.2 (needs `navLinks` import from `links.ts`)
- Task 1.1 should run **first** (clean git state)

### Phase 1 Execution Order
```
1.1 (push) → sequential
then parallel:
  ├── 1.2 (links.ts)
  ├── 1.4 (badge CSS)
  ├── 1.5 (dead code)
  └── 1.6 (empty dirs)
then:
  1.3 (homepage layout — needs 1.2 done)
→ Verification: typecheck, build, commit
```

### Skills for coders: None special needed (straightforward edits)

---

## Phase 2: Devpad Integration — Data Layer

**Goal:** Install `@devpad/api`, create build-time data fetching, merge devpad data with local enrichment.

**Prerequisites:** Phase 1 committed

### Task 2.1: Install `@devpad/api` and configure env
- **Action:** `bun add @devpad/api`, create `.env.example` with `DEVPAD_API_KEY=`, update `.gitignore` (already ignores `.env`)
- **LOC:** ~5
- **Files:** `package.json` (auto), `.env.example` (new)

### Task 2.2: Create `src/lib/devpad.ts` — API client factory
- **Action:** Build-time devpad client with error handling
- **LOC:** ~40
- **Files:** `src/lib/devpad.ts` (new)
- **Details:**
  ```ts
  import ApiClient from "@devpad/api";

  export function createDevpadClient() {
    const apiKey = process.env.DEVPAD_API_KEY ?? import.meta.env.DEVPAD_API_KEY;
    if (!apiKey) {
      console.warn("[devpad] No API key found, using fallback data");
      return null;
    }
    return new ApiClient({
      base_url: "https://devpad.tools/api/v1",
      api_key: apiKey,
    });
  }
  ```

### Task 2.3: Create `src/data/project-config.ts` — local enrichment config
- **Action:** Local config that enriches devpad projects with gallery-specific data
- **LOC:** ~70
- **Files:** `src/data/project-config.ts` (new)
- **Details:**
  ```ts
  export type ProjectEnrichment = {
    tags: string[];
    featured: boolean;
    /** Override year display (devpad uses created_at) */
    yearOverride?: string;
  };

  /** Keyed by devpad project_id (slug) */
  export const projectConfig: Record<string, ProjectEnrichment> = {
    corpus: { tags: ["typescript", "library"], featured: true },
    devpad: { tags: ["developer-tools"], featured: true },
    chamber: { tags: ["civic-tech", "AI"], featured: true },
    // Non-featured projects with tags
    "dungeon-generator": { tags: ["game-dev", "java"], featured: false },
    mycelia: { tags: ["framework"], featured: false },
    // ... etc
  };

  export const featuredSlugs = Object.entries(projectConfig)
    .filter(([_, v]) => v.featured)
    .map(([k]) => k);
  ```

### Task 2.4: Refactor `src/data/projects.ts` — hybrid data source
- **Action:** Rewrite to fetch from devpad at build time, merge with local config, fall back to hardcoded data if API unavailable
- **LOC:** ~100
- **Files:** `src/data/projects.ts` (rewrite)
- **BREAKING:** `Project` type gains optional fields: `icon_url`, `version`, `devpadStatus`. Existing consumers are forward-compatible (no field removed).
- **Details:**
  The module exports the same `Project` type and functions (`getFeaturedProjects`, `getProject`, `getAdjacentProjects`) but data comes from devpad.

  Build-time approach: SolidStart SSG calls data functions during `vinxi build`. Since the build runs in Node/Bun, `process.env.DEVPAD_API_KEY` is available. The functions become async, wrapped in a cache that fetches once per build.

  ```ts
  export type Project = {
    slug: string;
    name: string;
    description: string;
    year: string;
    status: "live" | "development";
    tags: string[];
    url?: string;
    github?: string;
    icon_url?: string;
    version?: string;
  };

  // Cached build-time fetch
  let _cachedProjects: Project[] | null = null;

  async function loadProjects(): Promise<Project[]> {
    if (_cachedProjects) return _cachedProjects;

    const client = createDevpadClient();
    if (!client) {
      _cachedProjects = fallbackProjects;
      return _cachedProjects;
    }

    const result = await client.projects.list({ private: false });
    if (result.error) {
      console.warn("[devpad] API error, using fallback:", result.error);
      _cachedProjects = fallbackProjects;
      return _cachedProjects;
    }

    _cachedProjects = result.data
      .filter(p => p.visibility === "PUBLIC")
      .map(mapDevpadProject);
    return _cachedProjects;
  }
  ```

  **Key mapping function:**
  ```ts
  function mapDevpadProject(dp: DevpadProject): Project {
    const config = projectConfig[dp.project_id];
    return {
      slug: dp.project_id,
      name: dp.name,
      description: dp.description ?? "",
      year: config?.yearOverride ?? new Date(dp.created_at).getFullYear().toString(),
      status: mapStatus(dp.status),
      tags: config?.tags ?? [],
      url: dp.link_url ?? undefined,
      github: dp.repo_url ?? undefined,
      icon_url: dp.icon_url ?? undefined,
      version: dp.current_version ?? undefined,
    };
  }
  ```

### Task 2.5: Refactor `src/data/posts.ts` — blog from devpad
- **Action:** Fetch blog posts from devpad blog API at build time, fall back to hardcoded
- **LOC:** ~50
- **Files:** `src/data/posts.ts` (rewrite)
- **Details:** Similar cache pattern. Map devpad blog posts to existing `BlogPost` type.

### Parallelization
- Task 2.1 must run **first** (dependency install)
- Tasks 2.2, 2.3 can run in **parallel** (independent new files)
- Task 2.4 depends on 2.2 + 2.3 (imports both)
- Task 2.5 depends on 2.2 (imports devpad client)

### Phase 2 Execution Order
```
2.1 (install) → sequential
then parallel:
  ├── 2.2 (devpad client)
  └── 2.3 (project config)
then parallel:
  ├── 2.4 (projects.ts refactor — depends on 2.2, 2.3)
  └── 2.5 (posts.ts refactor — depends on 2.2)
→ Verification: typecheck, build (with mock env), commit
```

### Skills for coders: `corpus-patterns` (Result type handling from API)

### SSG Build-Time Strategy

SolidStart with `preset: "static"` runs route handlers at build time. The data functions need to work as async functions called during build. Two approaches:

**Option A: Server functions with `"use server"`**
```ts
// In route files
const projects = createAsync(() => loadProjects());
```
This is the SolidStart-idiomatic way. `createAsync` + server functions run at build time for SSG.

**Option B: Pre-build script**
Run a script before `vinxi build` that fetches all devpad data and writes to `src/data/generated/`. Routes import static generated files.

**Recommendation: Option A.** It's simpler, uses SolidStart's built-in SSG machinery, and the data functions are already module-level. The cache ensures each API endpoint is called at most once during build.

**Environment variable for build:**
```bash
DEVPAD_API_KEY=xxx vinxi build
```
Cloudflare Pages build settings should have `DEVPAD_API_KEY` as an environment variable.

---

## Phase 3: Route Updates

**Goal:** All routes consume the new data layer. About page gets hobbies, properties, elsewhere links. Now page pulls from devpad.

**Prerequisites:** Phase 2 committed

### Task 3.1: Update homepage to consume async data
- **Action:** Homepage uses `createAsync` for projects and posts. Nav links from `links.ts`. Add `/uses` to nav.
- **LOC:** ~30
- **Files:** `src/routes/index.tsx`
- **Details:** Switch from sync `getFeaturedProjects()` to async. The homepage already shows the right shape; this is a plumbing change.

### Task 3.2: Update `/now` page — live data from devpad
- **Action:** Replace hardcoded building/exploring lists with devpad projects where `status === "DEVELOPMENT"`. Keep exploring section as local data. Update "Last updated" to be build-time generated.
- **LOC:** ~60
- **Files:** `src/routes/now.tsx`
- **Details:**
  ```ts
  // Building = devpad projects with DEVELOPMENT status
  const buildingProjects = createAsync(async () => {
    const all = await loadProjects();
    return all.filter(p => p.status === "development");
  });

  // Exploring = local data (currentFocus.exploring from journey.ts or inline)
  const exploring = [
    { name: "Photography", description: "Bloom, decay, the passage of time" },
    { name: "Game Design", description: "Atmospheric game design research" },
  ];
  ```
  The "Last updated" timestamp becomes the build date, not a hardcoded string.

### Task 3.3: Complete about page
- **Action:** Wire up unused data from `journey.ts`: hobbies grid, currentFocus. Add properties section (Gallery/Workshop/Journal). Add elsewhere links from `links.ts`.
- **LOC:** ~80
- **Files:** `src/routes/about.tsx`
- **Details:**
  CSS already exists for all these sections (`about-properties`, `hobbies-grid`, `hobby-item`, `elsewhere-links`). Just need to render them.

  ```tsx
  {/* Properties: Gallery / Workshop / Journal */}
  <section class="about-properties">
    <div class="property-item">
      <div class="property-name">Gallery</div>
      <div class="property-desc">Photography, painting, visual art</div>
    </div>
    ...
  </section>

  {/* Hobbies */}
  <section class="hobbies-section">
    <h2 class="section-title">Outside of Code</h2>
    <div class="hobbies-grid">
      <For each={hobbies}>
        {(hobby) => (
          <Show when={hobby.url} fallback={
            <span class="hobby-item hobby-item--no-link">{hobby.name}</span>
          }>
            <a href={hobby.url} class="hobby-item" target="_blank" rel="noopener noreferrer">
              {hobby.name}
            </a>
          </Show>
        )}
      </For>
    </div>
  </section>

  {/* Elsewhere */}
  <section class="elsewhere-section">
    <div class="elsewhere-links">
      <For each={externalLinks}>
        {(link) => <a href={link.href} class="elsewhere-link" ...>{link.label}</a>}
      </For>
      <a href={`mailto:${email}`} class="elsewhere-link">{email}</a>
    </div>
  </section>
  ```

### Task 3.4: Update project detail page for async data
- **Action:** `[slug].tsx` uses async data loading. Works for all devpad projects, not just the 3 with content.
- **LOC:** ~20
- **Files:** `src/routes/projects/[slug].tsx`
- **Details:** The fallback for non-featured projects already exists (shows description + links). Just needs async data source.

### Task 3.5: SSG prerender config for dynamic routes
- **Action:** Configure SolidStart to prerender all project pages. SolidStart SSG needs to know which dynamic routes to generate.
- **LOC:** ~20
- **Files:** `app.config.ts`
- **Details:**
  ```ts
  export default defineConfig({
    server: {
      preset: "static",
      prerender: {
        routes: async () => {
          // Fetch project slugs at build time
          const projects = await loadProjects();
          return [
            "/", "/about", "/now", "/uses",
            ...projects.map(p => `/projects/${p.slug}`),
          ];
        },
      },
    },
  });
  ```

### Parallelization
- Tasks 3.1, 3.2, 3.3 can run in **parallel** (different route files, no shared file edits)
- Task 3.4 is independent of 3.1–3.3 (different file)
- Task 3.5 depends on the data layer from Phase 2 but touches only `app.config.ts`

### Phase 3 Execution Order
```
parallel:
  ├── 3.1 (homepage)
  ├── 3.2 (now page)
  ├── 3.3 (about page)
  ├── 3.4 (project detail)
  └── 3.5 (prerender config)
→ Verification: typecheck, build (with DEVPAD_API_KEY), verify all routes render, commit
```

### Skills for coders: `corpus-patterns` (Result handling in route data loading)

---

## Phase 4: `/uses` Page

**Goal:** New route showing hardware, dev environment, tech stack, and dotfiles info.

**Prerequisites:** Phase 1 committed (Layout wrapping, links.ts). Phase 2/3 not strictly required but should be done for consistency.

### Task 4.1: Create `src/data/uses.ts` — structured uses data
- **LOC:** ~120
- **Files:** `src/data/uses.ts` (new)
- **Details:**
  ```ts
  export type UsesCategory = {
    title: string;
    items: UsesItem[];
  };

  export type UsesItem = {
    name: string;
    description?: string;
    url?: string;
    /** Link to dotfiles config (optional, added when dotfiles go public) */
    configUrl?: string;
  };

  export const usesData: UsesCategory[] = [
    {
      title: "Hardware",
      items: [
        { name: "MacBook Air M2", description: "Primary machine" },
        { name: "2x Linux VPS", description: "Hosting & CI" },
        { name: "iPhone 15" },
        { name: "Apple Watch" },
      ],
    },
    {
      title: "Development Environment",
      items: [
        { name: "Ghostty", description: "Terminal emulator", url: "https://ghostty.org" },
        { name: "Neovim", description: "Primary editor" },
        { name: "Zed", description: "Secondary editor", url: "https://zed.dev" },
        { name: "Fish", description: "Shell" },
        { name: "tmux", description: "Terminal multiplexer with custom sessionizer" },
        { name: "OpenCode", description: "AI coding assistant" },
        { name: "JetBrains Mono", description: "Editor font" },
        { name: "Tokyo Night", description: "Theme everywhere" },
      ],
    },
    {
      title: "CLI Tools",
      items: [
        { name: "yazi", description: "File manager" },
        { name: "gitui + git-delta", description: "Git UI & diffs" },
        { name: "fzf", description: "Fuzzy finder" },
        { name: "zoxide", description: "Smart cd" },
        { name: "eza", description: "ls replacement" },
        { name: "bat", description: "cat replacement" },
        { name: "fd", description: "find replacement" },
        { name: "ripgrep", description: "grep replacement" },
        { name: "btop", description: "System monitor" },
        { name: "tokei", description: "Code statistics" },
      ],
    },
    {
      title: "macOS",
      items: [
        { name: "Aerospace", description: "Tiling window manager" },
        { name: "Sketchybar", description: "Custom status bar" },
        { name: "Zen", description: "Browser" },
        { name: "Obsidian", description: "Notes" },
        { name: "Apple Music" },
      ],
    },
    {
      title: "Tech Stack",
      items: [
        { name: "TypeScript", description: "Primary language (19+ projects)" },
        { name: "Bun", description: "Runtime, bundler, test runner (17+ projects)" },
        { name: "SolidJS", description: "UI framework of choice (9 projects)" },
        { name: "Drizzle ORM", description: "Database toolkit (9 projects)" },
        { name: "Cloudflare", description: "Workers, D1, Pages, R2 (6+ projects)" },
        { name: "Hono", description: "Web framework (4 projects)" },
        { name: "Zod", description: "Schema validation (10+ projects)" },
        { name: "Astro", description: "Content sites (7 projects)" },
        { name: "@f0rbit/corpus", description: "Own error handling library (8 projects)" },
        { name: "@f0rbit/ui", description: "Own component library (5 projects)" },
        { name: "Biome", description: "Linter & formatter (9 projects)" },
      ],
    },
    {
      title: "Dotfiles",
      items: [
        {
          name: "Managed configs",
          description: "fish, tmux, nvim, ghostty, bat, btop, yazi, gitui, aerospace, sketchybar, glow, git, raycast, opencode",
        },
        // configUrl fields added when dotfiles repo goes public
      ],
    },
  ];
  ```

### Task 4.2: Create `src/routes/uses.tsx` — the route
- **LOC:** ~70
- **Files:** `src/routes/uses.tsx` (new)
- **Details:**
  Uses Layout with back link. Renders each category as a section using existing design system classes (`.section-title`, `.def-list`, `.def-item`, `.def-label`, `.def-value`).

  ```tsx
  export default function Uses() {
    return (
      <Layout back={{ href: "/", label: "home" }}>
        <Title>Uses — Tom Materne</Title>
        <Meta name="description" content="Hardware, software, and tools I use for development." />

        <article class="page">
          <header class="page-header">
            <h1 class="page-title">Uses</h1>
            <p class="page-subtitle">Tools, software, and hardware I use daily</p>
          </header>

          <hr class="divider" />

          <For each={usesData}>
            {(category) => (
              <section class="uses-section">
                <h2 class="section-title">{category.title}</h2>
                <div class="uses-list">
                  <For each={category.items}>
                    {(item) => (
                      <div class="uses-item">
                        <Show when={item.url} fallback={
                          <span class="uses-name">{item.name}</span>
                        }>
                          <a href={item.url} class="uses-name uses-link" target="_blank" rel="noopener noreferrer">
                            {item.name}
                          </a>
                        </Show>
                        <Show when={item.description}>
                          <span class="uses-desc">— {item.description}</span>
                        </Show>
                      </div>
                    )}
                  </For>
                </div>
              </section>
            )}
          </For>
        </article>
      </Layout>
    );
  }
  ```

### Task 4.3: Create `src/styles/uses.css` — /uses page styles
- **LOC:** ~50
- **Files:** `src/styles/uses.css` (new), `src/styles/global.css` (add import)
- **Details:** Minimal styles matching the warm paper aesthetic:
  ```css
  .uses-section {
    margin-bottom: var(--space-2xl);
  }

  .uses-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .uses-item {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    padding: var(--space-xs) 0;
    font-size: var(--text-sm);
  }

  .uses-name {
    color: var(--text-primary);
    font-weight: 500;
  }

  .uses-link {
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .uses-link:hover {
    color: var(--accent-rust);
  }

  .uses-desc {
    color: var(--text-muted);
  }
  ```

### Parallelization
- Tasks 4.1, 4.2, 4.3 can all run in **parallel** (separate new files, except 4.3 adds one import line to global.css)
- Actually: 4.3 touches `global.css` (import line), so run 4.3 after 4.1+4.2 or have verification handle the import.

### Phase 4 Execution Order
```
parallel:
  ├── 4.1 (uses data)
  ├── 4.2 (uses route)
  └── 4.3 (uses CSS + global.css import)
→ Verification: typecheck, build, verify /uses renders, commit
```

### Skills for coders: None special

---

## Phase 5: Polish

**Goal:** Production readiness. System fonts confirmed, meta files, responsive check, build verification.

**Prerequisites:** All prior phases committed

### Task 5.1: Fonts decision — keep system fonts
- **Action:** Update `typography.css` comments to reflect deliberate choice (not placeholder). Remove "placeholder" language. Delete empty `public/fonts/` dir (done in Phase 1).
- **LOC:** ~5 (comment edits only)
- **Files:** `src/styles/typography.css`
- **Rationale:** System fonts (Georgia + system-ui) work well with the paper aesthetic, load instantly, and avoid FOUT. The comments currently say "placeholder for Fraunces" — change to "chosen for" to reflect intent.

### Task 5.2: Add favicon
- **Action:** Add a minimal favicon. Could be a simple SVG favicon in `<head>` matching the warm paper aesthetic (e.g., a simple monogram "TM" in the rust accent color).
- **LOC:** ~10
- **Files:** `src/app.tsx` (add to MetaProvider), optionally `public/favicon.svg` (new)

### Task 5.3: Add robots.txt and sitemap
- **Action:** Static `public/robots.txt` allowing all crawlers. Sitemap can be a static XML generated at build time or a simple `public/sitemap.xml`.
- **LOC:** ~30
- **Files:** `public/robots.txt` (new), `public/sitemap.xml` (new) or build script to generate

### Task 5.4: Error boundaries
- **Action:** Add error boundary in `app.tsx` root. SolidStart has `ErrorBoundary` from solid-js. Wrap route content with a catch-all that renders a styled error page.
- **LOC:** ~30
- **Files:** `src/app.tsx`

### Task 5.5: Responsive audit
- **Action:** Review all pages at mobile breakpoints (320px, 375px, 640px, 768px). Fix any overflow or spacing issues.
- **LOC:** ~20 (CSS tweaks)
- **Files:** Various CSS files
- **Note:** This is best done by a coder agent running the dev server and checking layout. Most responsive styles are already in place.

### Task 5.6: Build verification
- **Action:** Full `vinxi build` with `DEVPAD_API_KEY`. Verify all routes generate static HTML. Check output size. Verify no console errors.
- **LOC:** 0
- **Files:** None (verification only)

### Parallelization
- Tasks 5.1, 5.2, 5.3, 5.4 can run in **parallel**
- Task 5.5 should run after 5.1-5.4 (needs final CSS state)
- Task 5.6 runs **last** (final verification)

### Phase 5 Execution Order
```
parallel:
  ├── 5.1 (fonts comments)
  ├── 5.2 (favicon)
  ├── 5.3 (robots + sitemap)
  └── 5.4 (error boundary)
then:
  5.5 (responsive audit)
then:
  5.6 (build verification)
→ Verification: full build, all routes, commit
```

### Skills for coders: None special

---

## File Impact Summary

| File | Phase | Action |
|------|-------|--------|
| `package.json` | 2 | Add `@devpad/api` |
| `.env.example` | 2 | New |
| `app.config.ts` | 3, 5 | Prerender config, error boundary |
| `src/app.tsx` | 5 | Favicon, error boundary |
| `src/lib/devpad.ts` | 2 | New — API client |
| `src/data/links.ts` | 1 | New — shared link data |
| `src/data/uses.ts` | 4 | New — /uses page data |
| `src/data/projects.ts` | 2 | Rewrite — hybrid devpad/local |
| `src/data/posts.ts` | 2 | Rewrite — devpad blog API |
| `src/data/project-config.ts` | 2 | New — local enrichment |
| `src/data/journey.ts` | — | No changes (consumed by about page) |
| `src/data/project-content/*` | — | No changes (stays local) |
| `src/routes/index.tsx` | 1, 3 | Layout wrap, async data, links.ts |
| `src/routes/about.tsx` | 3 | Hobbies, properties, elsewhere |
| `src/routes/now.tsx` | 3 | Devpad integration |
| `src/routes/uses.tsx` | 4 | New route |
| `src/routes/projects/[slug].tsx` | 3 | Async data |
| `src/styles/global.css` | 1, 4 | Dead code removal, uses.css import |
| `src/styles/uses.css` | 4 | New |
| `src/styles/typography.css` | 5 | Comment updates |
| `src/components/common/InProgress.tsx` | 1 | Delete |
| `src/components/common/Divider.tsx` | 1 | Delete |
| `src/components/project/ProjectCard.tsx` | 1 | Delete |
| `public/robots.txt` | 5 | New |
| `public/sitemap.xml` | 5 | New |
| `public/favicon.svg` | 5 | New |

---

## Open Questions (Not Blocking)

1. **Dotfiles public?** — `/uses` page has `configUrl` field ready. When `~/dev/dotfiles` goes public, add URLs like `https://github.com/f0rbit/dotfiles/tree/main/nvim/.config/nvim`.

2. **More project content?** — Only corpus/devpad/chamber have `ProjectContent`. Could write narrative content for more projects over time. The system supports it — just add files to `src/data/project-content/`.

3. **Blog post freshness** — If devpad blog API is used, posts auto-update on each build. Consider periodic rebuilds or Cloudflare Pages deploy hooks to keep content fresh.

4. **Project images** — `public/images/projects/` is empty. Screenshots or project logos could be added later. The `icon_url` from devpad could serve as a project icon if populated.

---

## Suggested AGENTS.md Updates

After this plan is executed, create `AGENTS.md` with:

```markdown
# Gallery — AGENTS.md

## Project Overview
SolidStart SSG portfolio site for thomas-materne.com, deployed to Cloudflare Pages (static preset).

## Key Architecture
- **Static site**: All data fetching happens at build time via `vinxi build`
- **Data sources**: Devpad API (projects, blog) + local files (narrative content, uses, journey)
- **Devpad client**: `src/lib/devpad.ts` — requires `DEVPAD_API_KEY` env var at build time
- **Local enrichment**: `src/data/project-config.ts` maps devpad project_ids to gallery-specific tags/featured flags

## Conventions
- CSS organization: `variables.css` → `typography.css` → `grain.css` → page-specific CSS. All imported via `global.css`.
- Components use `@f0rbit/ui` with overrides in `ui-overrides.css`
- Layout component: all pages use `<Layout>`. Homepage passes no `back` prop.
- Project data: `Project` type is the merged type. `ProjectContent` is separate narrative data for featured projects only.
- No fonts directory — system fonts are a deliberate choice, not a placeholder.

## Build
- `DEVPAD_API_KEY=xxx vinxi build` for full build with devpad data
- Falls back to hardcoded data if no API key (for local dev)
- Cloudflare Pages build settings need `DEVPAD_API_KEY` environment variable

## Gotchas
- Badge CSS: both `badge--development` and `badge--in-progress` exist in CSS for the same visual style
- Grain component uses inline SVG filter — z-index 9999, pointer-events none
- `@f0rbit/ui` styles imported before gallery styles in `app.tsx` (order matters for overrides)
```
