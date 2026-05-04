# thomas-materne.com Gallery Site Overhaul

## Executive Summary

This plan transforms the gallery site from a minimal shell into a curated portfolio with rich project narratives. The overhaul integrates `@f0rbit/ui` for component consistency, removes the colophon, expands the about section with journey timeline data, and creates beautifully designed sub-pages for the top 3 projects (Corpus, Devpad, Chamber).

**Key Deliverables:**
1. Remove `/colophon` route and all references
2. Integrate `@f0rbit/ui` with gallery's warm paper aesthetic  
3. Create rich project detail pages for Corpus, Devpad, and Chamber
4. Expand About page with timeline and professional narrative

**Breaking Changes:**
- `/colophon` URL will 404 (acceptable - user requested removal)
- Project data structure will be extended (additive, non-breaking)

---

## Architecture Overview

### Data Structure Evolution

The current `Project` type is minimal. We need to extend it with rich content for featured projects while maintaining backward compatibility with the list views.

```typescript
// src/data/projects.ts - Extended type
export type ProjectContent = {
  origin: string;           // "Where did it come from?"
  problem: string;          // "What problem did it solve?"
  approach: string;         // "How does it work?"
  growth: string;           // "How did it help me grow?"
  features?: string[];      // Key feature highlights
  techStack?: string[];     // Technologies used
  timeline?: TimelineItem[]; // Project evolution milestones
  links?: {
    live?: string;
    github?: string;
    docs?: string;
    blog?: string;        // Link to forbit.dev deep-dive
  };
};

export type TimelineItem = {
  date: string;
  title: string;
  description?: string;
};
```

### Component Architecture for Project Pages

```
src/
├── components/
│   └── project/
│       ├── ProjectHero.tsx      # Existing - enhance
│       ├── ProjectNav.tsx       # Existing - keep
│       ├── ProjectStory.tsx     # NEW - The narrative sections
│       ├── ProjectTimeline.tsx  # NEW - Uses @f0rbit/ui Timeline
│       ├── ProjectFeatures.tsx  # NEW - Feature cards grid
│       └── ProjectTech.tsx      # NEW - Tech stack with links
├── data/
│   ├── projects.ts              # Extended with content
│   ├── project-content/         # NEW - Content for top 3
│   │   ├── corpus.ts
│   │   ├── devpad.ts
│   │   └── chamber.ts
│   └── journey.ts               # NEW - About page timeline data
```

### @f0rbit/ui Integration Strategy

The library provides utility classes and components. We'll override CSS variables to match the gallery aesthetic:

```css
/* In global.css - Theme overrides */
:root {
  /* Override @f0rbit/ui variables with gallery palette */
  --ui-bg-primary: var(--bg-cream);
  --ui-bg-secondary: var(--bg-warm);
  --ui-text-primary: var(--text-primary);
  --ui-text-muted: var(--text-muted);
  --ui-accent: var(--accent-rust);
  /* etc. */
}
```

Components to use from @f0rbit/ui:
- **Timeline** - For project evolution & about page journey
- **Collapsible** - For technical details (expandable sections)
- **Tabs** - For project aspects (Overview/Technical/Growth) if needed
- **Badge** - Replace custom badge styles

---

## Task Breakdown

### Phase 1: Cleanup & Foundation (Parallel)

| Task | Est. Lines | Files Touched | Dependencies |
|------|------------|---------------|--------------|
| 1.1 Delete colophon route | -83 | `src/routes/colophon.tsx` (delete) | None |
| 1.2 Remove colophon from nav | ~8 | `src/routes/index.tsx`, `src/components/layout/Layout.tsx` | None |
| 1.3 Install @f0rbit/ui | ~5 | `package.json` | None |
| 1.4 Import @f0rbit/ui styles & theme overrides | ~40 | `src/app.tsx`, `src/styles/ui-overrides.css` (new) | 1.3 |

**Phase 1 Agents:**
- Agent A: Tasks 1.1, 1.2 (colophon removal) - ~90 lines touched
- Agent B: Tasks 1.3, 1.4 (UI library setup) - ~45 lines

**Verification:** Build passes, no references to colophon remain, UI library styles load

---

### Phase 2: Data Layer (Sequential - needs 1.4 complete)

| Task | Est. Lines | Files Touched | Dependencies |
|------|------------|---------------|--------------|
| 2.1 Extend Project type | ~35 | `src/data/projects.ts` | 1.4 |
| 2.2 Create corpus content | ~80 | `src/data/project-content/corpus.ts` (new) | 2.1 |
| 2.3 Create devpad content | ~80 | `src/data/project-content/devpad.ts` (new) | 2.1 |
| 2.4 Create chamber content | ~80 | `src/data/project-content/chamber.ts` (new) | 2.1 |
| 2.5 Create journey data | ~100 | `src/data/journey.ts` (new) | None |

**Phase 2 Agents:**
- Agent A: Task 2.1 (type extension) - MUST complete first
- Then parallel:
  - Agent B: Tasks 2.2, 2.3 (corpus, devpad content)
  - Agent C: Tasks 2.4, 2.5 (chamber content, journey data)

**Verification:** TypeScript compiles, data exports correctly

---

### Phase 3: Project Page Components (Parallel after 2.1)

| Task | Est. Lines | Files Touched | Dependencies |
|------|------------|---------------|--------------|
| 3.1 ProjectStory component | ~60 | `src/components/project/ProjectStory.tsx` (new) | 2.1 |
| 3.2 ProjectTimeline component | ~45 | `src/components/project/ProjectTimeline.tsx` (new) | 2.1 |
| 3.3 ProjectFeatures component | ~40 | `src/components/project/ProjectFeatures.tsx` (new) | 2.1 |
| 3.4 ProjectTech component | ~35 | `src/components/project/ProjectTech.tsx` (new) | 2.1 |
| 3.5 Enhance ProjectHero | ~25 | `src/components/project/ProjectHero.tsx` | 2.1 |
| 3.6 Add project page styles | ~120 | `src/styles/project-detail.css` (new) | 1.4 |

**Phase 3 Agents:**
- Agent A: Tasks 3.1, 3.2 (story, timeline)
- Agent B: Tasks 3.3, 3.4 (features, tech)
- Agent C: Tasks 3.5, 3.6 (hero enhancement, styles)

**Verification:** Components render in isolation, styles apply correctly

---

### Phase 4: Route Integration (Sequential after 3.x complete)

| Task | Est. Lines | Files Touched | Dependencies |
|------|------------|---------------|--------------|
| 4.1 Update [slug].tsx for rich content | ~80 | `src/routes/projects/[slug].tsx` | 2.2-2.4, 3.1-3.5 |
| 4.2 Import new CSS file | ~2 | `src/styles/global.css` | 3.6 |

**Phase 4 Agent:** Single agent to integrate all pieces

**Verification:** `/projects/corpus`, `/projects/devpad`, `/projects/chamber` render fully

---

### Phase 5: About Page Expansion (Parallel with Phase 4)

| Task | Est. Lines | Files Touched | Dependencies |
|------|------------|---------------|--------------|
| 5.1 Create JourneyTimeline component | ~60 | `src/components/about/JourneyTimeline.tsx` (new) | 2.5 |
| 5.2 Expand about.tsx with full content | ~120 | `src/routes/about.tsx` | 2.5, 5.1 |
| 5.3 Add about page styles | ~60 | `src/styles/about.css` (new) | 1.4 |

**Phase 5 Agent:** Single agent (touches related files)

**Verification:** `/about` renders with timeline, professional summary, etc.

---

### Phase 6: Final Polish & Testing (Sequential)

| Task | Est. Lines | Files Touched | Dependencies |
|------|------------|---------------|--------------|
| 6.1 Responsive testing & fixes | ~30 | Various CSS files | 4.x, 5.x |
| 6.2 Cross-link verification | ~10 | Various | All |
| 6.3 Build verification | 0 | None | All |

**Verification:** Full build succeeds, all routes work, responsive on mobile

---

## Detailed Content Specifications

### Project: Corpus

**Why does it exist?**
Born from frustration with testing stateful systems. Needed a way to snapshot, version, and track data lineage without the ceremony of traditional ORMs.

**Where did it come from?**
Started as an internal tool at Amazon for debugging distributed system state. Extracted and open-sourced after recognizing its general utility.

**What problem did it solve?**
- Testing stateful systems is hard - Corpus makes snapshots first-class
- Data lineage is invisible - Corpus tracks parent/child relationships
- Storage backends vary - Corpus abstracts memory, file, Cloudflare D1/R2

**How did it help me grow?**
First published TypeScript library. Learned API design, documentation-driven development, and the discipline of maintaining backward compatibility.

**Timeline:**
- 2024 Q1: Initial prototype for internal use
- 2024 Q2: Extracted to standalone library
- 2024 Q3: Added Cloudflare backend support
- 2024 Q4: v1.0 stable release

### Project: Devpad

**Why does it exist?**
Every task tracker felt like it was designed for managers, not makers. Wanted something that thinks like a developer - tasks as first-class objects, keyboard-driven, local-first.

**Where did it come from?**
Grew out of a collection of markdown files and shell scripts. The friction of context-switching to Jira/Linear was killing flow state.

**What problem did it solve?**
- Context switching between IDE and task tracker
- Loss of technical context in generic tools
- Offline-first for flight/commute coding

**How did it help me grow?**
Daily driver for 2+ years now. Learned the value of building for yourself first, then generalizing. Practicing what I preach with dogfooding.

**Timeline:**
- 2022: Initial CLI prototype
- 2023: Web interface added
- 2024: devpad.tools launched publicly

### Project: Chamber

**Why does it exist?**
Democracy works best when citizens are informed. Parliamentary transcripts are public but practically inaccessible - thousands of pages of dense bureaucratic language.

**Where did it come from?**
Australia's federal election in 2022. Wanted to know what politicians actually said, not what media reported they said. Discovered Hansard was impenetrable.

**What problem did it solve?**
- Parliamentary transcripts are unreadable for normal humans
- No easy way to track what your representative says
- Important debates buried in procedural noise

**How did it help me grow?**
First civic tech project. Learned about responsible AI summarization, the importance of transparency in algorithms that interpret democratic speech, and shipping something that matters beyond code.

**Timeline:**
- 2024 Q1: Prototype with manual transcript processing
- 2024 Q2: Automated ingestion pipeline
- 2024 Q3: AI summarization with Claude
- 2024 Q4: Public launch at chamber.net.au

### About Page Content

**Professional Summary:**
Software Development Engineer at Amazon Brisbane, working on grocery logistics systems. Bachelor of Computer Science from University of Adelaide.

**Philosophy:**
"I believe software can be art, and art can be functional. I'm interested in tools that help people think, systems that encourage curiosity, and experiences that linger."

**Journey Timeline:** (from forbit.dev/about)
- 2011-2016: Scratch - First steps into programming
- 2016-2018: GameMaker - Game development passion ignites
- 2017-2019: Minecraft Plugins - First "real" programming language (Java)
- 2018-2022: Game Development - Published games, learned discipline
- 2021-2024: University - Bachelor of Computer Science
- 2021-present: Web Development - Fell in love with the web platform
- 2022-2025: Software Developer at HIVE AID - First professional dev role
- 2025-present: SDE at Amazon Brisbane - Distributed systems at scale

**Current Focus:**
- Chamber v2 - Historical context and improved summarization
- Mycelia - Framework for interconnected digital gardens
- Devpad - Shipping to devpad.tools

**Hobbies:**
Photography, Painting, Music, Badminton

**Elsewhere:**
- forbit.dev (technical workshop)
- blends.blog (personal journal)
- GitHub
- tom@thomas-materne.com

---

## File-by-File Specification

### Files to DELETE:
- `src/routes/colophon.tsx`

### Files to CREATE:
```
src/data/project-content/corpus.ts      (~80 lines)
src/data/project-content/devpad.ts      (~80 lines)
src/data/project-content/chamber.ts     (~80 lines)
src/data/project-content/index.ts       (~15 lines) - re-exports
src/data/journey.ts                     (~100 lines)

src/components/project/ProjectStory.tsx     (~60 lines)
src/components/project/ProjectTimeline.tsx  (~45 lines)
src/components/project/ProjectFeatures.tsx  (~40 lines)
src/components/project/ProjectTech.tsx      (~35 lines)

src/components/about/JourneyTimeline.tsx    (~60 lines)

src/styles/ui-overrides.css    (~40 lines)
src/styles/project-detail.css  (~120 lines)
src/styles/about.css           (~60 lines)
```

### Files to MODIFY:
```
package.json                        - Add @f0rbit/ui dependency
src/app.tsx                         - Import @f0rbit/ui styles
src/styles/global.css               - Import new CSS files
src/data/projects.ts                - Extend types, add content refs
src/routes/index.tsx                - Remove colophon from nav
src/components/layout/Layout.tsx    - Remove colophon from nav
src/routes/projects/[slug].tsx      - Rich content rendering
src/routes/about.tsx                - Full content expansion
src/components/project/ProjectHero.tsx - Enhanced for rich projects
```

---

## Testing Strategy

### Unit Tests (`__tests__/unit/`)

**Pure functions to test:**
1. `getProject()` - returns correct project or undefined
2. `getAdjacentProjects()` - returns correct prev/next
3. `getProjectContent()` - returns content for top 3, undefined for others

```typescript
// __tests__/unit/projects.test.ts (~40 lines)
describe('getProject', () => {
  it('returns project by slug', () => {
    const result = getProject('corpus');
    expect(result?.name).toBe('corpus');
  });
  
  it('returns undefined for unknown slug', () => {
    const result = getProject('nonexistent');
    expect(result).toBeUndefined();
  });
});

describe('getProjectContent', () => {
  it('returns rich content for corpus', () => {
    const content = getProjectContent('corpus');
    expect(content?.origin).toBeDefined();
    expect(content?.problem).toBeDefined();
  });
  
  it('returns undefined for non-featured project', () => {
    const content = getProjectContent('clumsy-santa');
    expect(content).toBeUndefined();
  });
});
```

### Integration Tests (`__tests__/integration/`)

**User workflow tests:**

```typescript
// __tests__/integration/navigation.test.ts (~60 lines)
describe('Site Navigation', () => {
  it('home page renders all nav links except colophon', async () => {
    // Render home, verify projects/about/now present, colophon absent
  });
  
  it('can navigate from home to project detail', async () => {
    // Click project link, verify project page renders
  });
  
  it('project nav links work correctly', async () => {
    // On project page, verify prev/next navigate correctly
  });
});

// __tests__/integration/project-pages.test.ts (~80 lines)
describe('Project Detail Pages', () => {
  it('corpus page renders full content', async () => {
    // Render /projects/corpus
    // Verify: title, origin, problem, approach, growth, timeline, tech stack
  });
  
  it('devpad page renders full content', async () => {
    // Same as corpus
  });
  
  it('chamber page renders full content', async () => {
    // Same as corpus
  });
  
  it('non-featured project shows minimal view', async () => {
    // Render /projects/dungeon-generator
    // Verify: basic hero, no rich content sections
  });
});

// __tests__/integration/about-page.test.ts (~50 lines)
describe('About Page', () => {
  it('renders professional summary', async () => {
    // Verify Amazon role, education
  });
  
  it('renders journey timeline', async () => {
    // Verify timeline entries render
  });
  
  it('renders elsewhere links', async () => {
    // Verify all external links present
  });
});
```

### Test Setup

We'll use `@solidjs/testing-library` with `vitest` for component testing. Since this is SSG, we focus on:
1. Data functions are correct
2. Components render expected content
3. Navigation links are correct

No mocking needed for external services - this is a static site with all content embedded.

---

## Estimated Total Lines of Code

| Category | Lines |
|----------|-------|
| Delete (colophon) | -83 |
| New components | ~300 |
| New data files | ~355 |
| New CSS files | ~220 |
| Modified files | ~150 |
| Test files | ~230 |
| **Net new** | **~1,172** |

---

## Risk Assessment

### Low Risk
- Colophon removal - straightforward deletion
- Data structure extension - additive changes
- Component creation - isolated new files

### Medium Risk
- @f0rbit/ui integration - CSS variable conflicts possible
  - Mitigation: Create dedicated override file, test thoroughly

### Considerations
- No database - all content is static TypeScript
- No API calls - SSG means all data baked in at build time
- No auth - public site

---

## Phase Execution Summary

```
Phase 1: Cleanup & Foundation
├── Agent A: Colophon removal (parallel)
├── Agent B: UI library setup (parallel)
└── Verification Agent: Build check, commit

Phase 2: Data Layer  
├── Agent A: Type extension (first)
├── Agent B: Corpus + Devpad content (after 2.1)
├── Agent C: Chamber + Journey data (after 2.1)
└── Verification Agent: TypeScript check, commit

Phase 3: Project Components
├── Agent A: Story + Timeline components (parallel)
├── Agent B: Features + Tech components (parallel)
├── Agent C: Hero enhancement + styles (parallel)
└── Verification Agent: Build check, commit

Phase 4: Route Integration
├── Single Agent: Update [slug].tsx + CSS imports
└── Verification Agent: Route testing, commit

Phase 5: About Page
├── Single Agent: JourneyTimeline + about.tsx + styles
└── Verification Agent: Route testing, commit

Phase 6: Polish
├── Single Agent: Responsive fixes, final verification
└── Verification Agent: Full build, all routes, commit
```

---

## Approval Gates

**CRITICAL - Requires approval before proceeding:**

1. **After Phase 1 verification:** Confirm @f0rbit/ui integration approach is correct
2. **After Phase 2 data content:** Review content accuracy for the 3 projects
3. **After Phase 4:** Verify project pages match design vision before about page work

---

## Next Steps

1. Begin Phase 1 with parallel agents for colophon removal and UI library setup
2. After Phase 1 verification, proceed to Phase 2 data layer
3. Continue through phases with verification checkpoints

Ready to execute on your approval.
