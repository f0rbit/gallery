# Gallery Site Cleanup - Simplify Links & Navigation

## Executive Summary

The site currently has:
- **Duplicate footers**: Homepage has its own inline footer (lines 130-153) + Layout.tsx has a global footer (lines 48-88)
- **10 projects** when only **3 should be featured**: corpus, devpad, chamber
- **Redundant link arrays**: navLinks and externalLinks defined in 3 places (index.tsx, Layout.tsx, about.tsx)
- **Now page references** projects that should be removed (mycelia)

### Key Decisions

| Question | Recommendation |
|----------|----------------|
| Which footer to keep? | **Layout footer only** - Homepage should not have a footer; let Layout handle it |
| How to display 3 projects on homepage? | Remove "In Development" section entirely, show all 3 in "Selected Work" |
| What about /projects page? | Only show 3 featured projects (remove Live/Dev/Finished categories) |
| Tree component useful? | **No** - site doesn't have hierarchical data that benefits from it |
| Other @f0rbit/ui components? | **Collapsible** for "Beyond Code" hobbies section could work, but not essential |

### Breaking Changes Called Out

1. **Removing 7 projects from projects.ts** - Anyone deep-linking to `/projects/dungeon-generator` etc will get 404
2. **Removing /projects category sections** - The Live/Dev/Finished organization goes away
3. **Now page update** - Removing mycelia reference

---

## Current State Analysis

### Link Redundancy Map

```
Location              | navLinks | externalLinks | elsewhereLinks | properties
----------------------|----------|---------------|----------------|------------
src/routes/index.tsx  |    ✓     |      ✓        |                |
src/components/Layout |    ✓     |      ✓        |                |
src/routes/about.tsx  |          |               |       ✓        |     ✓
```

**Problem**: 3 near-identical copies of external links (forbit.dev, blends.blog, github)

### Project Data Analysis

Current `projects.ts` has 10 projects with `featured: true/false` flags.

| Project | Keep? | Has Rich Content? | Status |
|---------|-------|-------------------|--------|
| corpus | YES | YES (corpus.ts) | live |
| devpad | YES | YES (devpad.ts) | live |
| chamber | YES | YES (chamber.ts) | development |
| mycelia | NO | NO | development |
| burning-blends | NO | NO | development |
| dungeon-generator | NO | NO | live |
| gm-server | NO | NO | live |
| todo-tracker | NO | NO | live |
| clumsy-santa | NO | NO | finished |
| java-timeline | NO | NO | finished |

The project-content directory already only has content for the 3 we want to keep.

---

## Implementation Plan

### Task Breakdown

```
Phase 1: Consolidate Link Data (parallel-safe)
├── Task 1.1: Create shared link constants file (~40 LOC)
├── Task 1.2: Update Layout.tsx to use shared constants (~15 LOC change)
└── Task 1.3: Update about.tsx to use shared constants (~20 LOC change)
→ Verification: typecheck, build

Phase 2: Simplify Homepage (parallel-safe with Phase 1 complete)
├── Task 2.1: Remove homepage inline footer (~25 LOC deletion)
├── Task 2.2: Remove "In Development" section (~15 LOC change)
├── Task 2.3: Remove local navLinks/externalLinks arrays (~10 LOC deletion)
└── Task 2.4: Wrap homepage in Layout component (~20 LOC change)
→ Verification: typecheck, build, visual review

Phase 3: Trim Projects Data (independent)
├── Task 3.1: Remove 7 projects from projects.ts (~70 LOC deletion)
├── Task 3.2: Simplify helper functions (~20 LOC change)
└── Task 3.3: Update /projects/index.tsx to single list (~40 LOC change)
→ Verification: typecheck, build

Phase 4: Cleanup Now Page (independent)
└── Task 4.1: Remove mycelia from building list (~5 LOC)
→ Verification: typecheck, build
```

### Estimated Effort

| Phase | LOC Changed | Time Est. |
|-------|-------------|-----------|
| Phase 1 | ~75 | 15 min |
| Phase 2 | ~70 | 15 min |
| Phase 3 | ~130 | 20 min |
| Phase 4 | ~5 | 5 min |
| **Total** | **~280** | **~55 min** |

---

## Detailed File Changes

### Phase 1: Consolidate Link Data

#### Task 1.1: Create `src/data/links.ts` (NEW FILE)

```typescript
// Centralized link constants

export const navLinks = [
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/now", label: "now" },
] as const;

export const externalLinks = [
  { href: "https://forbit.dev", label: "forbit.dev" },
  { href: "https://blends.blog", label: "blends.blog" },
  { href: "https://github.com/f0rbit", label: "github" },
] as const;

export const email = "tom@thomas-materne.com";

// Used on about page - describes the "three properties" mental model
export const properties = [
  { 
    name: "The Gallery", 
    desc: "Finished work, curated", 
    link: "thomas-materne.com",
    href: "https://thomas-materne.com",
    current: true,
  },
  { 
    name: "The Workshop", 
    desc: "Technical experiments", 
    link: "forbit.dev",
    href: "https://forbit.dev",
  },
  { 
    name: "The Journal", 
    desc: "Personal & creative", 
    link: "blends.blog",
    href: "https://blends.blog",
  },
] as const;
```

#### Task 1.2: Update `src/components/layout/Layout.tsx`

**Changes:**
- Remove local `navLinks` and `externalLinks` arrays (lines 15-25)
- Import from `~/data/links`

```diff
+ import { navLinks, externalLinks, email } from "~/data/links";
- const navLinks = [
-   { href: "/projects", label: "projects" },
-   { href: "/about", label: "about" },
-   { href: "/now", label: "now" },
- ] as const;
- 
- const externalLinks = [
-   { href: "https://forbit.dev", label: "forbit.dev" },
-   { href: "https://blends.blog", label: "blends.blog" },
-   { href: "https://github.com/f0rbit", label: "github" },
- ] as const;
```

And update email line:
```diff
- <a href="mailto:tom@thomas-materne.com" class="link-subtle">tom@thomas-materne.com</a>
+ <a href={`mailto:${email}`} class="link-subtle">{email}</a>
```

#### Task 1.3: Update `src/routes/about.tsx`

**Changes:**
- Remove local `elsewhereLinks` and `properties` arrays (lines 7-42)
- Import from `~/data/links`
- Derive `elsewhereLinks` from shared constants

```diff
+ import { externalLinks, properties, email } from "~/data/links";

- const elsewhereLinks = [
-   { label: "github.com/f0rbit", href: "https://github.com/f0rbit" },
-   { label: "forbit.dev", href: "https://forbit.dev" },
-   { label: "blends.blog", href: "https://blends.blog" },
-   { label: "tom@thomas-materne.com", href: "mailto:tom@thomas-materne.com" },
- ] as const;
- 
- type Property = { ... };
- const properties: Property[] = [ ... ];

+ // Combine external links with email for the "Elsewhere" section
+ const elsewhereLinks = [
+   ...externalLinks.map(l => ({ label: l.label, href: l.href })),
+   { label: email, href: `mailto:${email}` },
+ ];
```

---

### Phase 2: Simplify Homepage

#### Task 2.1 & 2.2 & 2.3 & 2.4: Update `src/routes/index.tsx`

**Major Changes:**
1. Remove `navLinks` and `externalLinks` local arrays
2. Remove `DevRow` component (no longer needed)
3. Remove "In Development" section entirely
4. Remove inline footer section
5. Wrap in Layout component (removes need for separate nav/footer)
6. Update `getLiveProjects` to `getFeaturedProjects` (show all 3)

**New simplified structure:**

```typescript
import { Component, For } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";
import { getFeaturedProjects, type Project } from "~/data/projects";
import { getLatestPosts, type BlogPost } from "~/data/posts";

const ProjectRow: Component<{ project: Project }> = (props) => {
  // ... keep existing implementation
};

const PostRow: Component<{ post: BlogPost }> = (props) => {
  // ... keep existing implementation
};

const Home: Component = () => {
  const featuredProjects = getFeaturedProjects();
  const latestPosts = getLatestPosts(3);

  return (
    <Layout>
      <Title>Tom Materne</Title>
      <Meta name="description" content="..." />
      
      <div class="home">
        <header class="home-hero">
          <h1 class="home-name">THOMAS MATERNE</h1>
          <p class="home-tagline">software games art</p>
        </header>

        <div class="home-content">
          <section class="home-section">
            <h2 class="section-label">Selected Work</h2>
            <For each={featuredProjects}>
              {(project) => <ProjectRow project={project} />}
            </For>
          </section>

          <section class="home-section">
            <h2 class="section-label">Latest Writing</h2>
            <For each={latestPosts}>
              {(post) => <PostRow post={post} />}
            </For>
            <a href="https://forbit.dev/blog" class="link-more">
              all posts →
            </a>
          </section>
        </div>
      </div>
      {/* No footer needed - Layout handles it */}
    </Layout>
  );
};
```

**Note:** Will need to update Layout.tsx to NOT show back link on homepage, or make back optional (it already is - `back?: BackLink`).

**CSS consideration:** The homepage currently imports `Grain` directly. Layout also imports Grain. Need to remove Grain import from homepage to avoid duplication.

---

### Phase 3: Trim Projects Data

#### Task 3.1: Update `src/data/projects.ts`

**Delete these projects** (keep only corpus, devpad, chamber):

```diff
export const projects: Project[] = [
  {
    slug: "chamber",
    // ... keep
  },
  {
    slug: "devpad",
    // ... keep
  },
  {
    slug: "corpus",
    // ... keep  
  },
-   {
-     slug: "mycelia",
-     // ... DELETE
-   },
-   {
-     slug: "burning-blends",
-     // ... DELETE
-   },
-   {
-     slug: "dungeon-generator",
-     // ... DELETE
-   },
-   {
-     slug: "gm-server",
-     // ... DELETE
-   },
-   {
-     slug: "todo-tracker",
-     // ... DELETE
-   },
-   {
-     slug: "clumsy-santa",
-     // ... DELETE
-   },
-   {
-     slug: "java-timeline",
-     // ... DELETE
-   },
];
```

#### Task 3.2: Simplify helper functions

With only 3 projects, we don't need complex filtering:

```typescript
export const getFeaturedProjects = () =>
  projects.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

// Remove these functions (no longer needed):
// - getProjectsByStatus
// - getLiveProjects  
// - getDevProjects

export const getProject = (slug: string): Project | undefined =>
  projects.find(p => p.slug === slug);

export const getAdjacentProjects = (slug: string): { prev?: Project; next?: Project } => {
  const all = getFeaturedProjects();
  const index = all.findIndex(p => p.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? all[index - 1] : undefined,
    next: index < all.length - 1 ? all[index + 1] : undefined,
  };
};
```

#### Task 3.3: Simplify `src/routes/projects/index.tsx`

Remove status categories, show single list:

```typescript
import { Component, For } from "solid-js";
import { Title } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";
import { getFeaturedProjects, type Project } from "~/data/projects";

const projects = getFeaturedProjects();

const ProjectRow: Component<{ project: Project }> = (props) => {
  const href = () => props.project.url ?? `/projects/${props.project.slug}`;
  const isExternal = () => !!props.project.url;

  return (
    <a
      href={href()}
      class="project-row"
      target={isExternal() ? "_blank" : undefined}
      rel={isExternal() ? "noopener noreferrer" : undefined}
    >
      <span class="project-year">{props.project.year}</span>
      <span class="project-name">{props.project.name}</span>
      <span class="project-tags">{props.project.tags.join(", ")}</span>
    </a>
  );
};

const ProjectsIndex: Component = () => {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Projects - Tom Materne</Title>
      
      <div class="page">
        <header class="page-header">
          <h1 class="page-title">Projects</h1>
        </header>

        <hr class="divider" />

        <section class="home-section">
          <For each={projects}>
            {(project) => <ProjectRow project={project} />}
          </For>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectsIndex;
```

---

### Phase 4: Cleanup Now Page

#### Task 4.1: Update `src/routes/now.tsx`

Remove mycelia from building list:

```diff
const building: NowItem[] = [
  {
    name: "Chamber v2",
    description: "Adding historical context and improved summarization",
  },
-   {
-     name: "mycelia",
-     description: "Framework for interconnected digital gardens",
-   },
  {
    name: "devpad",
    description: "Daily driver for project tracking",
    link: { label: "devpad.tools", href: "https://devpad.tools" },
  },
];
```

---

## @f0rbit/ui Component Recommendations

### Components That Don't Fit

| Component | Why Not |
|-----------|---------|
| **Tree** | No hierarchical data. Projects are flat. Journey is chronological, not hierarchical. |
| **Tabs** | Only 3 projects - tabs add unnecessary complexity |
| **Modal** | No modal use cases identified |
| **MultiSelect/ChipInput** | No form inputs needed |

### Components That Could Help (Optional)

| Component | Where | Benefit | Worth It? |
|-----------|-------|---------|-----------|
| **Collapsible** | About page "Beyond Code" section | Could collapse hobbies list | Maybe - adds interaction without much value |
| **Badge** | Project status indicators | Replace text status with visual badge | Maybe - but current minimalist style works |
| **Card** | Project list items | Consistent card styling | No - current row style is cleaner |
| **Timeline** | Already using | Journey timeline | Keep as-is |

**Recommendation**: Don't add more @f0rbit/ui components. The current minimal approach aligns with the "warm paper aesthetic" goal. Timeline is already being used appropriately.

---

## Verification Checklist

After implementation:

- [ ] Homepage shows 3 projects in "Selected Work" (no "In Development" section)
- [ ] Homepage has no inline footer (uses Layout footer)
- [ ] `/projects` shows flat list of 3 projects (no categories)
- [ ] `/projects/[slug]` works for corpus, devpad, chamber
- [ ] `/projects/mycelia` returns 404 (expected)
- [ ] About page "Elsewhere" links work
- [ ] Now page doesn't mention mycelia
- [ ] No TypeScript errors (`bun run build`)
- [ ] Links in Layout footer work

---

## Summary

This cleanup reduces:
- **3 files with duplicate link data** → **1 source of truth**
- **10 projects** → **3 featured projects**
- **2 footer implementations** → **1 Layout footer**
- **3 homepage sections** → **2 sections** (work + writing)

The result is a cleaner, more focused portfolio that highlights the 3 key projects without noise.
