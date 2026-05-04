# Chamber Project Research

**Research Date:** January 2026  
**Purpose:** Gather accurate information for portfolio content update

---

## Executive Summary

Chamber is a political transparency tool that scrapes Australian Parliament Hansard transcripts and uses AI to generate accessible summaries. Started in April 2024, it has evolved from a simple prototype to a comprehensive mono-repo with ~700 commits, featuring automated scraping, AI summarization, entity tracking, and a full Next.js website.

---

## Project Timeline

### Key Dates

| Date | Milestone | Notes |
|------|-----------|-------|
| **7 Apr 2024** | First commit | "add readme" - project inception |
| **8 Apr 2024** | Initial development burst | Landing page, daily reports, weekly summaries, pricing page concepts |
| **20 Jul 2024** | Testing framework tag | Major testing infrastructure work |
| **12 Aug 2024** | v0.1 | First versioned release - VPS deployment |
| **21 Sep 2024** | v0.2 | Polling uploads implemented |
| **26 Mar 2025** | v0.3 | Polling & parsing scheduling |
| **14 Apr 2025** | v0.4 | Website admin area & document rendering |
| **14-16 Apr 2025** | v0.5.x series | Major iteration on poller/worker architecture |
| **Dec 2025** | Current state | Heavy development on observations, AI upgrades, testing infrastructure |

### Development Intensity

Most active development days (commits > 5):
- **27 Jul 2024**: 46 commits (major feature push)
- **14-15 Dec 2025**: 93 commits (observations system, AI improvements)
- **24 Dec 2025**: 37 commits (AI model upgrade to Llama 4 Scout)
- **26 Dec 2025**: 14 commits (electorate boundaries feature)

### Version Tags

- `testing-framework` (Jul 2024)
- `v0.1` through `v0.5.9` (Aug 2024 - Apr 2025)

---

## Project Purpose & Description

**What it does:**  
Chamber automates the process of monitoring Australian Parliament by:
1. Scraping Hansard transcripts from the APH (Australian Parliament House) website
2. Parsing XML data into structured documents
3. Generating AI summaries using LLMs
4. Storing versioned documents for historical access
5. Tracking entities (members, parties, bills, topics)
6. Detecting observations (stances, claims, votes, questions)

**Pipeline:**
```
SCRAPE (Browser Rendering) -> PARSE (XML to JSON) -> SUMMARIZE (AI) -> PUBLISH
```

**Automated schedule:** Runs Mon-Fri at 10:00, 14:00, 18:00 AEST

---

## Tech Stack

### Runtime & Infrastructure
| Component | Technology |
|-----------|------------|
| Runtime | Bun (workspaces, testing) |
| HTTP Framework | Hono |
| Database | Cloudflare D1 + Drizzle ORM |
| Storage | Cloudflare R2 + @f0rbit/corpus |
| Infrastructure | SST v3 for Cloudflare |
| Orchestration | Cloudflare Workflows |
| Browser Automation | @cloudflare/puppeteer |

### AI Integration
| Period | AI Technology |
|--------|---------------|
| Initial | OpenAI GPT-4o-mini |
| Dec 2025 | Cloudflare Workers AI (Llama 4 Scout, 131K context) |

### Frontend
| Component | Technology |
|-----------|------------|
| Framework | Next.js 15 (deployed on Cloudflare Pages) |
| Auth | Lucia with GitHub OAuth (via Arctic) |
| UI | shadcn/ui + Radix primitives |
| Styling | Tailwind CSS |

### Languages
- TypeScript throughout (packages + apps)
- Bun as package manager and test runner

---

## Architecture

### Mono-repo Structure
```
chamber/
├── packages/
│   ├── api/          # Cloudflare Worker - Main API & Workflows
│   ├── core/         # Business logic (parsing, summarization)
│   ├── schema/       # Shared types, DB schema, validation
│   └── test-utils/   # Testing utilities & mocks
├── apps/
│   └── website/      # Next.js website on Cloudflare Pages
├── migrations/       # D1 database migrations
└── __tests__/        # Unit & integration tests
```

### Entity System
Tracks 8 entity types:
- person, party, bill, act, committee, electorate, topic, organization

### Observations System
Extracts insights from speeches:
- stance, entity_mention, speech_summary, question
- procedural_motion, claim, constituent_reference, vote

---

## Key Features

### Core Functionality
- **Automated Hansard scraping** - Puppeteer-based browser rendering for APH pages
- **XML parsing** - Structured extraction from Hansard XML format
- **AI summarization** - Generate accessible summaries of parliamentary debates
- **Versioned document storage** - Historical access via @f0rbit/corpus on R2
- **Entity resolution** - Automatic identification and linking of members, bills, topics

### Admin Capabilities
- Workflow dashboard with live logs
- Artifact browser with lineage visualization
- Job management and history
- Publish workflow with version selection

### Public Website
- Report listings by chamber/date
- Report detail with section navigation and entity tags
- Member profiles with speeches and votes
- Bill tracking with mention counts
- Topic browsing with sentiment indicators

---

## Evolution & Major Changes

### Phase 1: Foundation (Apr 2024)
- Initial Next.js + Cloudflare D1 setup
- Authentication experiments (next-auth v4 -> v5 -> Clerk -> Lucia)
- Basic landing page and report concepts

### Phase 2: Core Pipeline (Jul-Sep 2024)
- Testing framework established
- Polling and upload mechanisms
- Parser and summary services
- Docker deployment to VPS (v0.1)

### Phase 3: Cloudflare Migration (Mar-Apr 2025)
- Move from VPS to Cloudflare Workers/Workflows
- SST v3 infrastructure management
- Improved scheduling and orchestration (v0.3-v0.5)

### Phase 4: Intelligence Layer (Dec 2025)
- Entity system with resolution and aliases
- Observations extraction pipeline
- AI model upgrade (GPT-4o-mini -> Llama 4 Scout)
- Comprehensive testing infrastructure
- Electorate boundary mapping

---

## Origin Story Verification

**Regarding "Australia's 2022 federal election" inspiration:**
- No direct references found in git history or documentation
- Project started **April 2024**, ~2 years after the May 2022 election
- The connection may be thematic (political transparency, accountability) rather than directly tied to a specific election event
- Recommend verifying with project owner before including this claim

---

## Statistics

| Metric | Value |
|--------|-------|
| Total commits | 697 |
| Development period | Apr 2024 - Present (20+ months) |
| Version tags | 16 (including testing-framework) |
| Active packages | 4 (api, core, schema, test-utils) |
| Apps | 1 (Next.js website) |

---

## Future Direction (from roadmap)

Near-term priorities:
- Electorate mapping (Mapbox integration)
- Parliamentary career timelines
- Division (voting) intelligence
- Question Time tracking
- Historical Hansard backfill

Long-term vision:
- Promise tracking (election commitments vs. actions)
- Donor-debate nexus analysis
- Committee transcript ingestion
- Media coverage comparison

---

## Limitations & Notes

- No member photos (would require APH permission)
- Batch-oriented processing (not real-time streaming)
- External API dependencies (APH, AEC can change)
- AI costs for advanced features like claim verification

---

## Suggested Portfolio Content

**Accurate description:**
> Chamber is a political transparency tool that monitors Australian Parliament Hansard transcripts, using AI to generate accessible summaries and track how politicians vote, speak, and engage with issues. Built on Cloudflare's edge infrastructure with a Next.js frontend.

**Key talking points:**
- Automated daily scraping of Australian Parliament Hansard
- AI-powered summarization making parliamentary debates accessible
- Entity tracking for members, bills, and topics
- Voting record analysis with floor-crossing detection
- Edge-deployed infrastructure (Cloudflare Workers, D1, R2)
- Open-source document versioning with @f0rbit/corpus
