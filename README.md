# thomas-materne.com

Personal portfolio site for Tom Materne — the **gallery** to [forbit.dev](https://forbit.dev)'s workshop and [blends.blog](https://blends.blog)'s journal.

## Philosophy

This site is intentionally minimal and curated. It presents finished work with quiet confidence, using a warm paper aesthetic inspired by aged photographs and darkroom tones.

**Design Principles:**
- Typographic-first, list-based layouts (no cards)
- Warm paper aesthetic (cream backgrounds, rust accents)
- SVG grain overlay for organic, film-like texture
- Generous whitespace — content floats, never crammed
- No dark mode (paper doesn't have dark mode)
- Manual curation over automation

## Tech Stack

- **Framework:** [SolidStart](https://start.solidjs.com/) with static SSG
- **Runtime:** [Bun](https://bun.sh/)
- **Styling:** Hand-crafted vanilla CSS with CSS custom properties
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/f0rbit/gallery.git
cd gallery

# Install dependencies
bun install
```

### Development

```bash
# Start dev server (hot reload)
bun run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
# Build static site
bun run build
```

Output goes to `.output/public/`

### Preview Production Build

```bash
npx serve .output/public
```

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Grain.tsx          # Inline SVG grain filter overlay
│   │   ├── Divider.tsx        # Section separator
│   │   └── InProgress.tsx     # Animated hammer for WIP sections
│   ├── layout/
│   │   └── Layout.tsx         # Page wrapper with footer nav
│   └── project/
│       ├── ProjectHero.tsx    # Project detail header
│       ├── ProjectNav.tsx     # Prev/next navigation
│       └── ProjectCard.tsx    # Project list item
├── data/
│   ├── projects.ts            # Project definitions
│   └── posts.ts               # Blog post references
├── routes/
│   ├── index.tsx              # Homepage
│   ├── about.tsx              # About page
│   ├── now.tsx                # Current focus (/now page)
│   ├── colophon.tsx           # Site credits
│   └── projects/
│       ├── index.tsx          # All projects
│       └── [slug].tsx         # Project detail pages
└── styles/
    ├── variables.css          # Design tokens
    ├── typography.css         # Font definitions
    ├── grain.css              # Image texture effects
    └── global.css             # All component styles
```

## Design System

### Typography

Base size 16px with a modular scale:

| Token | Size | Use |
|-------|------|-----|
| `--text-xs` | 13px | Metadata, captions |
| `--text-sm` | 14px | Secondary text |
| `--text-base` | 16px | Body text |
| `--text-lg` | 18px | Lead paragraphs |
| `--text-xl` | 24px | Section headings |
| `--text-2xl` | 32px | Page titles |
| `--text-3xl` | 44px | Hero display |

### Colors

Warm paper palette with earthy accents:

| Token | Value | Use |
|-------|-------|-----|
| `--bg-cream` | `#FAF8F5` | Page background |
| `--bg-warm` | `#F5F1EB` | Subtle sections |
| `--text-primary` | `#2C2825` | Main text |
| `--text-muted` | `#6B6560` | Secondary text |
| `--accent-rust` | `#A65D3F` | Links, highlights |

### Layout

| Token | Value | Use |
|-------|-------|-----|
| `--max-width` | 80rem (1280px) | Full layout container |
| `--content-width` | 48rem (768px) | Readable content width |

### Grain Effect

The signature grain texture is an inline SVG filter applied as a fixed overlay:

```tsx
<svg class="grain">
  <filter id="grain-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
  <rect filter="url(#grain-filter)" />
</svg>
```

## Deployment

The site deploys automatically to Cloudflare Pages on push to `main`.

**Cloudflare Pages Settings:**
- Build command: `bun run build`
- Build output directory: `.output/public`
- No deploy command needed (Pages handles it)

## Content Updates

### Adding a Project

1. Add project data to `src/data/projects.ts`
2. The project automatically appears on `/projects` and gets a detail page at `/projects/[slug]`

### Updating /now

Edit `src/routes/now.tsx` — this page is updated monthly with current focus areas.

## Related Properties

- **[forbit.dev](https://forbit.dev)** — Technical blog, experiments, learning posts
- **[blends.blog](https://blends.blog)** — Personal journal, art, music, cafe reviews

## License

All rights reserved. This is a personal portfolio site.
