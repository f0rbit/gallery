# thomas-materne.com — Magnum Opus Planning Document

## Executive Summary

This is the **gallery** to forbit.dev's **workshop** and blends.blog's **journal**. It's where Tom presents his best work to the world—curated, polished, and intentional. The site itself should feel like a piece of art: quiet confidence, organic texture, and the kind of restraint that signals mastery.

---

## 1. Site Architecture

### The Three-Property Ecosystem

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         TOM'S DIGITAL PRESENCE                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   thomas-materne.com          forbit.dev            blends.blog         │
│   ══════════════════          ══════════            ═══════════         │
│                                                                         │
│   THE GALLERY                 THE WORKSHOP          THE JOURNAL         │
│   • Finished work             • Experiments         • Personal voice    │
│   • Professional face         • Game jams           • Art, music        │
│   • Chamber, Games            • Learning posts      • Cafe reviews      │
│   • Photo projects            • Technical blog      • Book thoughts     │
│   • Collaborations            • Side projects       • Mood pieces       │
│                                                                         │
│   Audience:                   Audience:             Audience:           │
│   Collaborators, galleries,   Developers, hiring    Friends, creatives, │
│   creative partners           managers, peers       kindred spirits     │
│                                                                         │
│   Tone: Refined               Tone: Curious         Tone: Intimate      │
│   Update: Monthly             Update: Weekly        Update: When moved  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
              Cross-linking: Subtle, contextual, never forced
              • thomas-materne.com links OUT sparingly
              • forbit.dev/blends.blog link UP to gallery pieces
              • Each stands alone but acknowledges the whole
```

### thomas-materne.com Information Architecture

```
thomas-materne.com/
│
├── /                           # Home — The foyer
│   └── Curated intro, featured work, quiet confidence
│
├── /work                       # Portfolio index
│   ├── /work/chamber           # Project: Chamber
│   ├── /work/[game-name]       # Future games (2026+)
│   ├── /work/flowers           # Photo study: Flowers
│   └── /work/[project-slug]    # Other curated projects
│
├── /about                      # The person behind the work
│   └── Brief bio, philosophy, where to find more
│
├── /now                        # What I'm focused on (NOW page)
│   └── Updated monthly, links out to active projects
│
└── /colophon                   # How this site was made
    └── Tech, tools, credits, the craft of the site itself
```

**What's NOT here:**
- No blog (that's forbit.dev and blends.blog)
- No project graveyard (only finished, proud work)
- No social feed (this is timeless, not ephemeral)
- No contact form (email link is enough)

---

## 2. ASCII Wireframes

### Home Page — "The Foyer"

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                               · · ·     │
│                                                              noise/grain│
│                                                                         │
│                                                                         │
│                                                                         │
│                         T O M   M A T E R N E                           │
│                                                                         │
│                   software · games · photography                        │
│                                                                         │
│                                                                         │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│                                                                         │
│     ┌─────────────────────────────┐   ┌─────────────────────────────┐   │
│     │                             │   │                             │   │
│     │                             │   │                             │   │
│     │     CHAMBER                 │   │     FLOWERS                 │   │
│     │     ───────                 │   │     ───────                 │   │
│     │                             │   │                             │   │
│     │     AI-powered civic       │   │     A photographic          │   │
│     │     technology for          │   │     study in bloom          │   │
│     │     democratic transparency │   │     and decay               │   │
│     │                             │   │                             │   │
│     │     [hero image/texture]    │   │     [hero image/texture]    │   │
│     │                             │   │                             │   │
│     │                             │   │                             │   │
│     │                      2024 → │   │                      2025 → │   │
│     └─────────────────────────────┘   └─────────────────────────────┘   │
│                                                                         │
│                                                                         │
│                                                                         │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│          Currently: Building mycelia, shipping Chamber v2               │
│                                                                         │
│                   ↓                                                     │
│                                                                         │
│              work    about    now    colophon                           │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│          also:  forbit.dev  ·  blends.blog  ·  github                   │
│                                                                         │
│                                                                         │
│                                              tom@thomas-materne.com     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Design notes:**
- Massive whitespace at top—let it breathe
- Name is the hero, not a logo
- Only 2-3 featured works visible (curated, not comprehensive)
- Navigation is at the bottom, not top—inverts expectations, forces viewing
- Footer links to other properties are small, secondary
- Grain texture overlays everything subtly

### Project Detail Page — "/work/chamber"

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ← work                                                     · · ·      │
│                                                                         │
│                                                                         │
│                                                                         │
│                                                                         │
│                              CHAMBER                                    │
│                           ═══════════                                   │
│                                                                         │
│                 AI-powered political transcript summarization           │
│                        for democratic transparency                      │
│                                                                         │
│                                                                         │
│               2024–ongoing  ·  civic tech  ·  chamber.net.au            │
│                                                                         │
│                                                                         │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                                                                   │  │
│  │                                                                   │  │
│  │                                                                   │  │
│  │                      [ HERO IMAGE / VIDEO ]                       │  │
│  │                                                                   │  │
│  │                      Full-width, cinematic                        │  │
│  │                      Shows the product in use                     │  │
│  │                                                                   │  │
│  │                                                                   │  │
│  │                                                                   │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│     THE PROBLEM                                                         │
│     ───────────                                                         │
│                                                                         │
│     Parliamentary transcripts are dense, inaccessible, and             │
│     impractical for citizens to follow. Democracy suffers when          │
│     civic information is locked behind bureaucratic language.           │
│                                                                         │
│                                                                         │
│     THE APPROACH                                                        │
│     ────────────                                                        │
│                                                                         │
│     Chamber uses AI to summarize, contextualize, and surface           │
│     what matters. Built for Australia, designed for anywhere.           │
│                                                                         │
│     • Automatic transcript ingestion                                    │
│     • AI-powered summarization                                          │
│     • Searchable archive                                                │
│     • Plain-language explanations                                       │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │                 │  │                 │  │                 │         │
│  │  [screenshot]   │  │  [screenshot]   │  │  [screenshot]   │         │
│  │                 │  │                 │  │                 │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
│                                                                         │
│                                                                         │
│                                                                         │
│     TECHNICAL NOTES                                                     │
│     ───────────────                                                     │
│                                                                         │
│     Go backend, React frontend, PostgreSQL, Claude API.                 │
│     Self-hosted on personal infrastructure.                             │
│                                                                         │
│     Read more on forbit.dev →                                           │
│                                                                         │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│                 ← FLOWERS                      [no next yet]            │
│                                                                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Design notes:**
- Clear hierarchy: Title → Tagline → Meta → Hero → Story → Details
- "Read more on forbit.dev" bridges to technical content without polluting gallery
- Prev/next navigation between projects
- No sidebar, no clutter—single column, generous margins

### About Page

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ← home                                                     · · ·      │
│                                                                         │
│                                                                         │
│                                                                         │
│                                                                         │
│                                                                         │
│                                                                         │
│     ┌──────────────────────┐                                            │
│     │                      │                                            │
│     │                      │      TOM MATERNE                           │
│     │                      │      ════════════                          │
│     │    [ PORTRAIT ]      │                                            │
│     │                      │      Software engineer, photographer,      │
│     │    grainy, warm,     │      aspiring game developer.              │
│     │    not corporate     │                                            │
│     │                      │      Brisbane, Australia.                  │
│     │                      │      Currently at Amazon.                  │
│     │                      │                                            │
│     └──────────────────────┘                                            │
│                                                                         │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│     I make things that sit at the intersection of technology            │
│     and human experience. My work ranges from civic technology          │
│     (Chamber) to experimental games to photographic studies.            │
│                                                                         │
│     I believe software can be art, and art can be functional.           │
│     I'm interested in tools that help people think, systems             │
│     that encourage curiosity, and experiences that linger.              │
│                                                                         │
│     This site is the gallery. The workshop is at forbit.dev.            │
│     The journal is at blends.blog.                                      │
│                                                                         │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│     ELSEWHERE                                                           │
│     ─────────                                                           │
│                                                                         │
│     github.com/tmaterne                                                 │
│     forbit.dev                                                          │
│     blends.blog                                                         │
│                                                                         │
│     tom@thomas-materne.com                                              │
│                                                                         │
│                                                                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Now Page

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ← home                                                     · · ·      │
│                                                                         │
│                                                                         │
│                                                                         │
│                               NOW                                       │
│                             ═════                                       │
│                                                                         │
│                      Last updated: December 2024                        │
│                                                                         │
│                                                                         │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│                                                                         │
│     BUILDING                                                            │
│     ────────                                                            │
│                                                                         │
│     Chamber v2 — Adding historical context and improved                 │
│     summarization. Target: Q1 2025.                                     │
│                                                                         │
│     mycelia — A framework for interconnected digital gardens.           │
│     Open-sourcing soon.                                                 │
│                                                                         │
│     devpad — Shipping to devpad.tools. Daily driver for my              │
│     own project tracking.                                               │
│                                                                         │
│                                                                         │
│     EXPLORING                                                           │
│     ─────────                                                           │
│                                                                         │
│     Beginning a photographic study on flowers—bloom, decay,             │
│     the passage of time.                                                │
│                                                                         │
│     Researching atmospheric game design. Preparing for                  │
│     first serious game project in Q3 2026.                              │
│                                                                         │
│                                                                         │
│     READING                                                             │
│     ───────                                                             │
│                                                                         │
│     [pulled from blends.blog or manual]                                 │
│                                                                         │
│                                                                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Tech Stack Recommendations

### The Decision: Fresh Build on Astro

**Why not extend existing infrastructure?**

| Option | Verdict |
|--------|---------|
| Extend forbit.dev | No—different purpose, would muddy the workshop/gallery distinction |
| Use dev-blog | No—Go backend is overkill for a static portfolio |
| Build on mycelia | Tempting, but mycelia is still in development. Don't block your gallery on framework completion. |

**Why Astro?**
- Tom already knows it (forbit.dev)
- Perfect for content-driven, mostly-static sites
- Islands architecture for the few interactive bits
- Excellent image optimization (critical for photography)
- Markdown/MDX for content—easy to update
- Static output = deploy anywhere, fast forever

### Recommended Stack

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           TECH STACK                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  FRAMEWORK         Astro 4.x                                            │
│                    Static-first, islands architecture                   │
│                                                                         │
│  COMPONENTS        SolidJS (for any interactivity)                      │
│                    Consistent with forbit.dev                           │
│                                                                         │
│  STYLING           Vanilla CSS + CSS custom properties                  │
│                    No Tailwind—this site deserves crafted CSS          │
│                    SCSS if nesting is needed                            │
│                                                                         │
│  CONTENT           Astro Content Collections                            │
│                    MDX for project pages                                │
│                    Frontmatter for metadata                             │
│                                                                         │
│  IMAGES            Astro Image (built-in)                               │
│                    Sharp for processing                                 │
│                    WebP/AVIF with fallbacks                             │
│                                                                         │
│  GRAIN/TEXTURE     CSS filters + SVG noise                              │
│                    <feTurbulence> for organic grain                     │
│                    CSS backdrop-filter for depth                        │
│                                                                         │
│  FONTS             Self-hosted WOFF2                                    │
│                    Variable fonts for flexibility                       │
│                                                                         │
│  DEPLOYMENT        Cloudflare Pages                                     │
│                    Free, fast, global CDN                               │
│                    Easy custom domain                                   │
│                                                                         │
│  REPO              Monorepo with forbit.dev? NO.                        │
│                    Separate repo: thomas-materne.com                    │
│                    These are different gardens.                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Integration Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       INTEGRATION POINTS                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────┐                                                        │
│  │   devpad    │ ─── NOT INTEGRATED                                     │
│  └─────────────┘     This is a gallery, not a dashboard.                │
│                      Keep task tracking separate.                       │
│                                                                         │
│  ┌─────────────┐                                                        │
│  │  dev-blog   │ ─── NOT INTEGRATED                                     │
│  └─────────────┘     Technical blog stays on forbit.dev.                │
│                      Link out when relevant.                            │
│                                                                         │
│  ┌─────────────┐                                                        │
│  │media-timeline│ ─── MAYBE LATER (Phase 3)                             │
│  └─────────────┘     Could feed into /now page.                         │
│                      Only if it adds value, not noise.                  │
│                                                                         │
│  ┌─────────────┐                                                        │
│  │   mycelia   │ ─── FUTURE (Phase 4)                                   │
│  └─────────────┘     Once mycelia is stable, could power               │
│                      project interconnections. But don't wait.          │
│                                                                         │
│  ┌─────────────┐                                                        │
│  │ forbit.dev  │ ─── CROSS-LINKING                                      │
│  └─────────────┘     Project pages link to technical deep-dives        │
│                      on forbit.dev. "Read more →"                       │
│                                                                         │
│  ┌─────────────┐                                                        │
│  │ blends.blog │ ─── CROSS-LINKING                                      │
│  └─────────────┘     /now page could pull recent posts.                │
│                      Or just link out.                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**The principle: This site should work with zero dependencies on other systems.** Integrations are enhancements, not requirements.

---

## 4. Design System

### Typography

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          TYPOGRAPHY                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  DISPLAY / HEADINGS                                                     │
│  ──────────────────                                                     │
│                                                                         │
│  Option A: Playfair Display                                             │
│            Classic, editorial, confident serifs                         │
│            Pairs with modern sans for contrast                          │
│                                                                         │
│  Option B: Fraunces                                                     │
│            Organic, slightly wonky, "soft serif"                        │
│            Variable font with "wonk" axis                               │
│            Feels handmade, matches grainy aesthetic                     │
│                                                                         │
│  Option C: Instrument Serif                                             │
│            Modern editorial, clean but warm                             │
│            Good for "professional artist" vibe                          │
│                                                                         │
│  RECOMMENDATION: Fraunces for display                                   │
│                  The organic wobble matches the grain texture           │
│                                                                         │
│                                                                         │
│  BODY TEXT                                                              │
│  ─────────                                                              │
│                                                                         │
│  Option A: Inter                                                        │
│            Reliable, readable, modern                                   │
│                                                                         │
│  Option B: IBM Plex Sans                                                │
│            Slightly more character, technical heritage                  │
│                                                                         │
│  Option C: Source Serif 4                                               │
│            All-serif approach, editorial, literary                      │
│                                                                         │
│  RECOMMENDATION: IBM Plex Sans for body                                 │
│                  Technical DNA for a technical person                   │
│                  Clean but not sterile                                  │
│                                                                         │
│                                                                         │
│  MONOSPACE (for technical details)                                      │
│  ─────────                                                              │
│                                                                         │
│  IBM Plex Mono or JetBrains Mono                                        │
│  Consistent with Plex Sans                                              │
│                                                                         │
│                                                                         │
│  SCALE                                                                  │
│  ─────                                                                  │
│                                                                         │
│  Base: 18px (readable, generous)                                        │
│  Scale: 1.333 (Perfect Fourth)                                          │
│                                                                         │
│  --text-xs:   0.75rem   (13.5px)                                        │
│  --text-sm:   0.875rem  (15.75px)                                       │
│  --text-base: 1rem      (18px)                                          │
│  --text-lg:   1.333rem  (24px)                                          │
│  --text-xl:   1.777rem  (32px)                                          │
│  --text-2xl:  2.369rem  (42.6px)                                        │
│  --text-3xl:  3.157rem  (56.8px)                                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Color Palette

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          COLOR PALETTE                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  CONCEPT: Warm paper, aged photographs, darkroom tones                  │
│           Not pure black/white—everything has temperature               │
│                                                                         │
│                                                                         │
│  BACKGROUNDS                                                            │
│  ───────────                                                            │
│                                                                         │
│   ████████  --bg-cream      #FAF8F5    Warm off-white, paper-like      │
│   ████████  --bg-warm       #F5F1EB    Slightly darker cream           │
│   ████████  --bg-stone      #E8E4DD    For cards, hover states         │
│                                                                         │
│                                                                         │
│  TEXT                                                                   │
│  ────                                                                   │
│                                                                         │
│   ████████  --text-primary  #2C2825    Warm near-black                 │
│   ████████  --text-muted    #6B6560    For secondary text              │
│   ████████  --text-subtle   #9C9690    For metadata, captions          │
│                                                                         │
│                                                                         │
│  ACCENTS (use sparingly)                                                │
│  ───────                                                                │
│                                                                         │
│   ████████  --accent-rust   #A65D3F    Warm, earthy, aged photo tone   │
│   ████████  --accent-sage   #7A8B6E    Organic, garden-like            │
│   ████████  --accent-ink    #3D4F5F    Deep, for links                 │
│                                                                         │
│                                                                         │
│  DARK MODE? NO.                                                         │
│  ─────────────                                                          │
│  This site is a statement. Paper doesn't have dark mode.                │
│  If someone wants dark mode, they can use browser extensions.           │
│  Opinionated choice = stronger identity.                                │
│                                                                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Grain & Texture Implementation

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       GRAIN & TEXTURE                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  THE GRAIN                                                              │
│  ─────────                                                              │
│                                                                         │
│  Use SVG filter with <feTurbulence> for procedural noise:               │
│                                                                         │
│  <svg style="display: none;">                                           │
│    <filter id="grain">                                                  │
│      <feTurbulence                                                      │
│        type="fractalNoise"                                              │
│        baseFrequency="0.7"                                              │
│        numOctaves="4"                                                   │
│        stitchTiles="stitch"                                             │
│      />                                                                 │
│      <feColorMatrix type="saturate" values="0" />                       │
│    </filter>                                                            │
│  </svg>                                                                 │
│                                                                         │
│  Apply as overlay:                                                      │
│                                                                         │
│  body::after {                                                          │
│    content: "";                                                         │
│    position: fixed;                                                     │
│    inset: 0;                                                            │
│    filter: url(#grain);                                                 │
│    opacity: 0.04;  /* subtle! */                                        │
│    pointer-events: none;                                                │
│    z-index: 9999;                                                       │
│  }                                                                      │
│                                                                         │
│                                                                         │
│  THE TEXTURE                                                            │
│  ───────────                                                            │
│                                                                         │
│  For images: Apply slight grain + warmth on hover                       │
│                                                                         │
│  .project-image {                                                       │
│    filter: grayscale(10%) sepia(5%);                                    │
│    transition: filter 0.3s ease;                                        │
│  }                                                                      │
│                                                                         │
│  .project-image:hover {                                                 │
│    filter: grayscale(0%) sepia(0%);                                     │
│  }                                                                      │
│                                                                         │
│                                                                         │
│  BORDERS & SEPARATORS                                                   │
│  ────────────────────                                                   │
│                                                                         │
│  No hard lines. Use:                                                    │
│  • Generous whitespace                                                  │
│  • Subtle background shifts                                             │
│  • If lines needed: thin, warm gray, possibly dashed                    │
│                                                                         │
│  hr {                                                                   │
│    border: none;                                                        │
│    height: 1px;                                                         │
│    background: var(--text-subtle);                                      │
│    opacity: 0.3;                                                        │
│    margin: 4rem 0;                                                      │
│  }                                                                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### The "Well-Kept Garden" Feel

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    GARDEN DESIGN PRINCIPLES                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  1. NEGATIVE SPACE IS THE GARDEN                                        │
│     • Minimum 40% of viewport is "empty"                                │
│     • Content floats in space, not crammed                              │
│     • Padding is generous everywhere                                    │
│                                                                         │
│  2. EVERYTHING HAS ROOM TO BREATHE                                      │
│     • Line height: 1.7 for body text                                    │
│     • Paragraph spacing: 1.5em                                          │
│     • Section spacing: 6-8rem                                           │
│                                                                         │
│  3. ONLY PLANT WHAT YOU'LL TEND                                         │
│     • 3-5 projects max on homepage                                      │
│     • Remove before you add                                             │
│     • Every element earns its place                                     │
│                                                                         │
│  4. SEASONAL UPDATES, NOT CONSTANT CHURN                                │
│     • /now page updated monthly                                         │
│     • New projects added quarterly at most                              │
│     • Old projects can be "composted" (removed gracefully)              │
│                                                                         │
│  5. PATHS ARE CLEAR                                                     │
│     • Navigation is minimal and obvious                                 │
│     • One clear action per section                                      │
│     • No cognitive load on the visitor                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Content Strategy

### Content Allocation Matrix

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     WHERE DOES IT GO?                                   │
├───────────────────────┬───────────────────┬─────────────────────────────┤
│ thomas-materne.com    │ forbit.dev        │ blends.blog                 │
├───────────────────────┼───────────────────┼─────────────────────────────┤
│                       │                   │                             │
│ Chamber (showcase)    │ Chamber (tech)    │ --                          │
│                       │                   │                             │
│ Flowers (gallery)     │ --                │ Flowers (process/feelings)  │
│                       │                   │                             │
│ Games (when ready)    │ Game jam entries  │ Game inspirations           │
│                       │                   │                             │
│ Major photo series    │ Photography tech  │ Individual photos, moods    │
│                       │                   │                             │
│ --                    │ devpad, mycelia   │ --                          │
│                       │ (as tools)        │                             │
│                       │                   │                             │
│ Bio (professional)    │ Bio (developer)   │ Bio (personal)              │
│                       │                   │                             │
│ --                    │ Learning posts    │ Book reviews                │
│                       │                   │                             │
│ --                    │ Tech tutorials    │ Cafe reviews                │
│                       │                   │                             │
└───────────────────────┴───────────────────┴─────────────────────────────┘
```

### The Flowers Study

```
On thomas-materne.com:
┌──────────────────────────────────────┐
│                                      │
│  /work/flowers                       │
│                                      │
│  A curated gallery page.             │
│  8-15 final images, beautifully      │
│  presented. Brief artist statement.  │
│  The finished exhibit.               │
│                                      │
└──────────────────────────────────────┘

On blends.blog:
┌──────────────────────────────────────┐
│                                      │
│  Series of posts over time.          │
│  Process shots, thoughts, failures.  │
│  "Today I watched a peony rot..."    │
│  The journey, not the destination.   │
│                                      │
└──────────────────────────────────────┘
```

### Maintenance Strategy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    MAINTENANCE CADENCE                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  MONTHLY (15 min)                                                       │
│  ────────────────                                                       │
│  • Update /now page with current focus                                  │
│  • Review homepage: still accurate?                                     │
│                                                                         │
│  QUARTERLY (1-2 hours)                                                  │
│  ─────────────────────                                                  │
│  • Add/remove projects from showcase                                    │
│  • Update about page if needed                                          │
│  • Check for dead links                                                 │
│                                                                         │
│  PER-PROJECT (2-4 hours)                                                │
│  ───────────────────────                                                │
│  • When a project is "gallery-ready," add project page                  │
│  • Write the story, gather assets, craft the presentation               │
│  • This is intentionally effortful—it's a curation act                 │
│                                                                         │
│  AUTOMATION                                                             │
│  ──────────                                                             │
│  • None needed. This is a hand-tended garden.                           │
│  • Resist the urge to auto-sync from other sources.                     │
│  • Every piece is placed with intention.                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Integration Points (Detailed)

### The Principle: Loose Coupling, Clear Boundaries

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      INTEGRATION PHILOSOPHY                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  thomas-materne.com should:                                             │
│                                                                         │
│  ✓ LINK OUT to other properties                                         │
│  ✓ BE LINKED TO from other properties                                   │
│  ✗ NOT pull content dynamically from other systems                      │
│  ✗ NOT require other systems to be running                              │
│  ✗ NOT show live feeds/activity                                         │
│                                                                         │
│  WHY: The gallery is timeless. Feeds are ephemeral.                     │
│       Mixing them dilutes the curation.                                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Cross-Property Linking Pattern

```
ON THOMAS-MATERNE.COM:
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  /work/chamber                                                          │
│                                                                         │
│  [... project showcase content ...]                                     │
│                                                                         │
│  ────────────────────────────────────                                   │
│                                                                         │
│  Technical deep-dive on forbit.dev →                                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

ON FORBIT.DEV:
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  /projects/chamber                                                      │
│                                                                         │
│  [... technical blog post ...]                                          │
│                                                                         │
│  ────────────────────────────────────                                   │
│                                                                         │
│  See the polished showcase at thomas-materne.com →                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### RSS/Feeds Strategy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           RSS STRATEGY                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  thomas-materne.com/feed.xml                                            │
│  ─────────────────────────────                                          │
│  • YES, have one                                                        │
│  • Only updates when new project added (rare)                           │
│  • Clean, simple, Atom format                                           │
│  • This is for the dedicated followers                                  │
│                                                                         │
│                                                                         │
│  AGGREGATE FEED?                                                        │
│  ───────────────                                                        │
│  • NO. Each property has its own identity.                              │
│  • Someone interested in cafe reviews (blends.blog)                     │
│    may not care about civic tech (chamber).                             │
│  • Let people subscribe to what they want.                              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Future mycelia Integration (Phase 4+)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      MYCELIA INTEGRATION                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  When mycelia is stable and you have multiple projects:                 │
│                                                                         │
│  OPTION A: Node Graph Visualization                                     │
│  ────────────────────────────────────                                   │
│  • Add to /work index page                                              │
│  • Shows connections between projects                                   │
│  • Chamber ←→ civic tech interest ←→ transparency tools                 │
│  • Games ←→ atmospheric design ←→ photography                           │
│  • Interactive, exploratory, optional                                   │
│                                                                         │
│  OPTION B: "Related" Suggestions                                        │
│  ────────────────────────────────                                       │
│  • At bottom of project pages                                           │
│  • "If you liked this, you might explore..."                            │
│  • Powered by mycelia's connection data                                 │
│                                                                         │
│  WHEN TO DO THIS:                                                       │
│  • When you have 5+ projects on the site                                │
│  • When mycelia is production-stable                                    │
│  • When connections add value (not just because you can)                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Phased Implementation Plan

### Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          PHASES OVERVIEW                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Phase 1: Foundation (MVP)           ~2-3 weekends                      │
│           Site skeleton, Chamber page, deploy                           │
│           SHIP THIS.                                                    │
│                                                                         │
│  Phase 2: Polish                     ~1-2 weekends                      │
│           Grain effects, typography tuning, /now page                   │
│                                                                         │
│  Phase 3: Flowers                    When study complete                │
│           Add photography project page                                  │
│                                                                         │
│  Phase 4: Expansions                 2026+                              │
│           Games, mycelia integration, evolved design                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Task Breakdown with Estimates

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     PHASE 1: FOUNDATION (MVP)                           │
│                     Total: ~800-1000 LOC                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  1.1 Project Setup                                    [~50 LOC]         │
│  ├── 1.1.1 Initialize Astro project                   (~20 LOC)         │
│  ├── 1.1.2 Configure TypeScript                       (~10 LOC)         │
│  ├── 1.1.3 Set up directory structure                 (~5 LOC)          │
│  └── 1.1.4 Configure deployment (Cloudflare)          (~15 LOC)         │
│      ⚡ CAN PARALLELIZE: 1.1.1-1.1.3                                    │
│                                                                         │
│  1.2 Design System Setup                              [~200 LOC]        │
│  ├── 1.2.1 CSS custom properties (colors, spacing)    (~60 LOC)         │
│  ├── 1.2.2 Typography styles                          (~50 LOC)         │
│  ├── 1.2.3 Base layout components                     (~70 LOC)         │
│  └── 1.2.4 Self-host fonts (Fraunces, IBM Plex)       (~20 LOC)         │
│      ⚡ DEPENDENCY: Requires 1.1 complete                               │
│      ⚡ CAN PARALLELIZE: 1.2.1-1.2.4 internally                         │
│                                                                         │
│  1.3 Core Pages                                       [~400 LOC]        │
│  ├── 1.3.1 Layout component (header/footer)           (~80 LOC)         │
│  ├── 1.3.2 Home page                                  (~100 LOC)        │
│  ├── 1.3.3 About page                                 (~60 LOC)         │
│  ├── 1.3.4 Work index page                            (~80 LOC)         │
│  └── 1.3.5 Colophon page                              (~40 LOC)         │
│      ⚡ DEPENDENCY: Requires 1.2 complete                               │
│      ⚡ CAN PARALLELIZE: 1.3.2-1.3.5 (after 1.3.1)                      │
│                                                                         │
│  1.4 Content System                                   [~150 LOC]        │
│  ├── 1.4.1 Content collection schema (projects)      (~50 LOC)         │
│  ├── 1.4.2 Project detail template                    (~80 LOC)         │
│  └── 1.4.3 Image optimization config                  (~20 LOC)         │
│      ⚡ DEPENDENCY: Requires 1.2 complete                               │
│      ⚡ CAN PARALLELIZE with 1.3                                        │
│                                                                         │
│  1.5 First Project: Chamber                           [~100 LOC]        │
│  ├── 1.5.1 Write Chamber content (MDX)                (~70 LOC)         │
│  └── 1.5.2 Gather/process Chamber images              (~30 LOC config)  │
│      ⚡ DEPENDENCY: Requires 1.4 complete                               │
│                                                                         │
│  1.6 Deploy MVP                                       [~20 LOC]         │
│  ├── 1.6.1 Cloudflare Pages setup                     (~10 LOC)         │
│  └── 1.6.2 Custom domain configuration                (~10 LOC)         │
│      ⚡ DEPENDENCY: Requires 1.5 complete                               │
│                                                                         │
│  ═══════════════════════════════════════════════════════════════════    │
│  CRITICAL PATH: 1.1 → 1.2 → (1.3 || 1.4) → 1.5 → 1.6                   │
│  ═══════════════════════════════════════════════════════════════════    │
│                                                                         │
│  🚨 APPROVAL GATE: After 1.2, review design system before proceeding    │
│     This sets the visual language for everything else.                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                       PHASE 2: POLISH                                   │
│                       Total: ~300-400 LOC                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  2.1 Grain & Texture Effects                          [~100 LOC]        │
│  ├── 2.1.1 SVG noise filter                           (~30 LOC)         │
│  ├── 2.1.2 Overlay implementation                     (~40 LOC)         │
│  └── 2.1.3 Image hover effects                        (~30 LOC)         │
│      ⚡ CAN PARALLELIZE: All subtasks                                   │
│                                                                         │
│  2.2 /now Page                                        [~80 LOC]         │
│  ├── 2.2.1 Page template                              (~50 LOC)         │
│  └── 2.2.2 Initial content                            (~30 LOC)         │
│      ⚡ CAN PARALLELIZE with 2.1                                        │
│                                                                         │
│  2.3 Typography & Spacing Refinement                  [~60 LOC]         │
│  ├── 2.3.1 Responsive typography adjustments          (~30 LOC)         │
│  └── 2.3.2 Spacing fine-tuning                        (~30 LOC)         │
│      ⚡ CAN PARALLELIZE with 2.1, 2.2                                   │
│                                                                         │
│  2.4 Transitions & Micro-interactions                 [~80 LOC]         │
│  ├── 2.4.1 Page transitions (View Transitions API)    (~40 LOC)         │
│  └── 2.4.2 Hover states, focus styles                 (~40 LOC)         │
│      ⚡ DEPENDENCY: Best done after 2.1-2.3 settled                     │
│                                                                         │
│  2.5 RSS Feed                                         [~50 LOC]         │
│  └── 2.5.1 Atom feed generation                       (~50 LOC)         │
│      ⚡ CAN PARALLELIZE with 2.1-2.3                                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                      PHASE 3: FLOWERS                                   │
│                      Total: ~150-200 LOC                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  3.1 Photography Project Template                     [~100 LOC]        │
│  ├── 3.1.1 Gallery layout component                   (~60 LOC)         │
│  └── 3.1.2 Lightbox interaction (if needed)           (~40 LOC)         │
│                                                                         │
│  3.2 Flowers Content                                  [~80 LOC]         │
│  ├── 3.2.1 Write artist statement                     (~30 LOC)         │
│  ├── 3.2.2 Curate images                              (~20 LOC config)  │
│  └── 3.2.3 Process images (optimization)              (~30 LOC config)  │
│                                                                         │
│  TIMING: When flower study is complete (2025)                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                     PHASE 4: EXPANSIONS (2026+)                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  4.1 Game Project Template                            [~200 LOC]        │
│  ├── 4.1.1 Embed trailer/gameplay video               (~80 LOC)         │
│  ├── 4.1.2 Download/store links component             (~60 LOC)         │
│  └── 4.1.3 Press kit page template                    (~60 LOC)         │
│                                                                         │
│  4.2 mycelia Integration (if warranted)               [~300 LOC]        │
│  ├── 4.2.1 Build-time data fetching from mycelia     (~100 LOC)        │
│  ├── 4.2.2 Node graph visualization component         (~150 LOC)        │
│  └── 4.2.3 "Related" suggestions component            (~50 LOC)         │
│                                                                         │
│  4.3 Design Evolution                                 [TBD]             │
│  └── Revisit design system after 2 years of use                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Dependency Graph

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       TASK DEPENDENCY GRAPH                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                           ┌─────────┐                                   │
│                           │   1.1   │                                   │
│                           │  Setup  │                                   │
│                           └────┬────┘                                   │
│                                │                                        │
│                                ▼                                        │
│                           ┌─────────┐                                   │
│                           │   1.2   │                                   │
│                           │ Design  │ ◄─── 🚨 APPROVAL GATE             │
│                           │ System  │                                   │
│                           └────┬────┘                                   │
│                                │                                        │
│               ┌────────────────┼────────────────┐                       │
│               │                │                │                       │
│               ▼                ▼                ▼                       │
│          ┌─────────┐      ┌─────────┐      ┌─────────┐                  │
│          │   1.3   │      │   1.4   │      │  (2.5)  │                  │
│          │  Pages  │      │ Content │      │   RSS   │                  │
│          │         │      │ System  │      │ (async) │                  │
│          └────┬────┘      └────┬────┘      └─────────┘                  │
│               │                │                                        │
│               └───────┬────────┘                                        │
│                       │                                                 │
│                       ▼                                                 │
│                  ┌─────────┐                                            │
│                  │   1.5   │                                            │
│                  │ Chamber │                                            │
│                  │ Content │                                            │
│                  └────┬────┘                                            │
│                       │                                                 │
│                       ▼                                                 │
│                  ┌─────────┐                                            │
│                  │   1.6   │                                            │
│                  │ Deploy  │ ◄─── 🎉 MVP COMPLETE                       │
│                  │   MVP   │                                            │
│                  └────┬────┘                                            │
│                       │                                                 │
│       ┌───────────────┼───────────────┬───────────────┐                 │
│       │               │               │               │                 │
│       ▼               ▼               ▼               ▼                 │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐            │
│  │   2.1   │     │   2.2   │     │   2.3   │     │   2.5   │            │
│  │  Grain  │     │   /now  │     │  Type   │     │   RSS   │            │
│  │ Effects │     │  Page   │     │ Polish  │     │  Feed   │            │
│  └────┬────┘     └────┬────┘     └────┬────┘     └─────────┘            │
│       │               │               │                                 │
│       └───────────────┼───────────────┘                                 │
│                       │                                                 │
│                       ▼                                                 │
│                  ┌─────────┐                                            │
│                  │   2.4   │                                            │
│                  │  Micro  │                                            │
│                  │ -inter- │ ◄─── 🎉 PHASE 2 COMPLETE                   │
│                  │ actions │                                            │
│                  └────┬────┘                                            │
│                       │                                                 │
│                       ▼                                                 │
│              ┌─────────────────┐                                        │
│              │  Phase 3 + 4    │                                        │
│              │   (Future)      │                                        │
│              └─────────────────┘                                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Parallel Execution Opportunities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PARALLEL WORK STREAMS                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  STREAM A                    STREAM B                    STREAM C       │
│  (Core Build)                (Content)                   (Polish)       │
│  ───────────                 ─────────                   ────────       │
│                                                                         │
│  Week 1:                                                                │
│  ┌──────────────┐                                                       │
│  │ 1.1 Setup    │                                                       │
│  │ 1.2 Design   │ ◄── Review before proceeding                          │
│  └──────────────┘                                                       │
│                                                                         │
│  Week 2:                                                                │
│  ┌──────────────┐           ┌──────────────┐                            │
│  │ 1.3 Pages    │           │ 1.5 Write    │                            │
│  │ 1.4 Content  │           │ Chamber MDX  │                            │
│  │     System   │           │ (in parallel)│                            │
│  └──────────────┘           └──────────────┘                            │
│                                                                         │
│  Week 3:                                                                │
│  ┌──────────────┐           ┌──────────────┐           ┌──────────────┐ │
│  │ 1.6 Deploy   │           │ Gather       │           │ 2.5 RSS      │ │
│  │              │           │ images       │           │ (can start   │ │
│  │              │           │              │           │  early)      │ │
│  └──────────────┘           └──────────────┘           └──────────────┘ │
│                                                                         │
│  Week 4+:                                                               │
│  ┌──────────────┐           ┌──────────────┐           ┌──────────────┐ │
│  │ 2.4 Micro-   │           │ 2.2 /now     │           │ 2.1 Grain    │ │
│  │ interactions │           │ content      │           │ 2.3 Type     │ │
│  └──────────────┘           └──────────────┘           └──────────────┘ │
│                                                                         │
│                                                                         │
│  AGENT ASSIGNMENT (if parallelizing):                                   │
│  ─────────────────────────────────────                                  │
│                                                                         │
│  Agent 1: 1.1 → 1.2 (needs approval) → 1.3 → 1.6                       │
│  Agent 2: (waits for 1.2) → 1.4 → 2.5                                  │
│  Agent 3: 1.5 content writing (can start once schema exists)            │
│  Agent 4: 2.1, 2.3 polish (after MVP deploy)                            │
│                                                                         │
│  MERGE CONFLICTS LIKELY:                                                │
│  • 1.3 + 1.4 (both touch layouts)                                       │
│  • 2.1 + 2.3 (both touch CSS)                                           │
│                                                                         │
│  SAFE TO PARALLELIZE:                                                   │
│  • Content writing (1.5) + infrastructure (1.4)                         │
│  • RSS (2.5) + anything else                                            │
│  • /now page (2.2) + grain effects (2.1)                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Project Structure (Codebase)

```
thomas-materne.com/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro           # Minimal header
│   │   │   ├── Footer.astro           # Links, email, other properties
│   │   │   └── Layout.astro           # Main layout wrapper
│   │   ├── project/
│   │   │   ├── ProjectCard.astro      # Card for work index
│   │   │   ├── ProjectHero.astro      # Hero section for project pages
│   │   │   └── ProjectNav.astro       # Prev/next navigation
│   │   ├── gallery/
│   │   │   └── PhotoGrid.astro        # For photography projects
│   │   └── common/
│   │       ├── Grain.astro            # SVG noise overlay
│   │       └── Divider.astro          # Subtle section separator
│   │
│   ├── content/
│   │   ├── config.ts                  # Content collection schemas
│   │   └── projects/
│   │       ├── chamber.mdx            # Chamber project
│   │       └── flowers.mdx            # (Phase 3)
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro           # HTML skeleton, meta, fonts
│   │
│   ├── pages/
│   │   ├── index.astro                # Home page
│   │   ├── about.astro                # About page
│   │   ├── now.astro                  # Now page
│   │   ├── colophon.astro             # Colophon page
│   │   ├── work/
│   │   │   ├── index.astro            # Work index
│   │   │   └── [...slug].astro        # Dynamic project pages
│   │   └── feed.xml.ts                # RSS feed
│   │
│   └── styles/
│       ├── global.css                 # Reset, base styles
│       ├── variables.css              # CSS custom properties
│       ├── typography.css             # Font styles
│       └── grain.css                  # Texture effects
│
├── public/
│   ├── fonts/
│   │   ├── fraunces/                  # Display font
│   │   └── ibm-plex/                  # Body font
│   └── images/
│       ├── projects/
│       │   ├── chamber/
│       │   └── flowers/
│       └── portrait.jpg               # About page photo
│
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 9. Testing Strategy

Given the nature of this project (primarily static content site), testing is minimal but intentional:

```
thomas-materne.com/
├── __tests__/
│   ├── unit/
│   │   ├── content-schema.test.ts     # Validate content collection schemas
│   │   └── rss-generation.test.ts     # Ensure RSS generates correctly
│   │
│   └── integration/
│       ├── build.test.ts              # Full site builds without error
│       ├── pages.test.ts              # All pages render expected content
│       └── links.test.ts              # No broken internal links
│
└── playwright.config.ts               # For visual regression if desired
```

**Testing Philosophy for this project:**
- Unit tests for pure functions (content schema validation, RSS generation)
- Integration tests verify the site builds and pages render
- Visual regression tests (optional) catch unintended design changes
- No need for complex test infrastructure—this is a static site

---

## 10. Limitations & Future Considerations

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         LIMITATIONS                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  INTENTIONAL CONSTRAINTS                                                │
│  ───────────────────────                                                │
│  • No dark mode (opinionated design choice)                             │
│  • No comments/interaction (this is a gallery, not a forum)             │
│  • No search (site is small enough to browse)                           │
│  • No analytics* (consider privacy-respecting option later)             │
│  • Manual updates only (no auto-sync, no CMS)                           │
│                                                                         │
│  SCALING LIMITS                                                         │
│  ──────────────                                                         │
│  • 20-30 projects before navigation needs rethinking                    │
│  • Photography projects with 50+ images need lazy loading               │
│  • Current design suits 2024-2028; plan to evolve after                │
│                                                                         │
│  KNOWN TRADE-OFFS                                                       │
│  ─────────────────                                                      │
│  • No dark mode = some users will be annoyed (acceptable)               │
│  • Manual curation = more friction to update (intentional)              │
│  • Separate from forbit.dev = two codebases to maintain                │
│  • Static = no dynamic personalization (fine for a gallery)             │
│                                                                         │
│  *Analytics: If added later, use Plausible or Fathom (privacy-first)    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 11. Timeline Fit

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    FITTING INTO TOM'S 2025-2026                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Q1 2025: Focus on Chamber, Devpad, mycelia                             │
│  ─────────────────────────────────────────                              │
│  • thomas-materne.com MVP can ship in 2-3 weekends                      │
│  • Do Phase 1 in January/February between main work                     │
│  • Chamber page will be ready because Chamber is shipping               │
│                                                                         │
│  Q2 2025: Polish and Flowers                                            │
│  ───────────────────────────                                            │
│  • Phase 2 polish (grain, /now page) as weekend project                 │
│  • If flower study progresses, add to site                              │
│                                                                         │
│  Q3-Q4 2025: Site is stable                                             │
│  ─────────────────────────                                              │
│  • Monthly /now updates only                                            │
│  • Add projects as they become gallery-ready                            │
│                                                                         │
│  Q3 2026+: Games begin                                                  │
│  ─────────────────────                                                  │
│  • First game project gets a page                                       │
│  • Consider Phase 4 expansions                                          │
│  • Possibly integrate mycelia if it's stable                            │
│                                                                         │
│  RECOMMENDED APPROACH                                                   │
│  ────────────────────                                                   │
│  Treat thomas-materne.com as a "weekend project" not a "priority."      │
│  Ship MVP fast. Polish over time. Don't let it block Chamber/mycelia.   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Summary: What To Do Now

1. **Approve this plan** (or request changes)
2. **Phase 1 in 2-3 weekends:**
   - Weekend 1: Setup + Design System (get approval on look/feel)
   - Weekend 2: Pages + Content System + Chamber page
   - Weekend 3: Deploy, polish, done
3. **Phase 2 as time allows** (grain effects, /now page)
4. **Forget about it** until you have a new project to add

The site should feel like it's been there forever, quietly confident, never demanding attention but always impressive when someone finds it.

---

*Document prepared for Tom Materne, December 2024*
