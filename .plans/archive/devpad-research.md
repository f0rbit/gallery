# Devpad Project Research Summary

## Executive Summary

**devpad** is a project management suite focused on tracking and managing `@todo` and `// TODO:` comments within codebases. It has been in active development for over **3 years** (October 2022 - present), with nearly **1,000 commits**. The project has evolved through multiple major rewrites and is now a sophisticated monorepo with published npm packages.

---

## Project Timeline

### Key Dates

| Date | Milestone |
|------|-----------|
| **October 19, 2022** | First commit - Project inception |
| October 2022 | Initial build using `create-t3-app` (Next.js stack) |
| Late 2022 - Early 2023 | Todo dashboard, task management, tag system |
| Early 2023 | University assignment tracking features added |
| Mid 2023 | API development, project visibility controls |
| **March 24, 2024** | Major rewrite - Migration to Astro + SolidJS |
| May 2024 | UI redesign, task/project structure overhaul |
| Late 2024 | Tag system implementation, task views |
| **January 27, 2025** | v0.1.0 - First version tag, VPS deployment |
| **September 8-10, 2025** | MCP server and CLI packages created |
| **September 10, 2025** | Monorepo restructure, decoupled architecture |
| **September 15, 2025** | v1.0.1 - First stable npm package release |
| December 2025 | v1.2.x - Cross-domain auth, UI improvements |

### Commit Statistics

- **Total Commits:** ~986
- **First Commit:** October 19, 2022
- **Most Recent Commit:** December 31, 2025 (ongoing development)
- **Duration:** 3+ years of continuous development

---

## Tech Stack

### Current Stack (Post-2024 Rewrite)

| Layer | Technology |
|-------|------------|
| **Runtime** | Bun |
| **Frontend** | Astro 5.x + SolidJS |
| **Backend** | Hono (via hono-astro-adapter) |
| **Database** | SQLite + Drizzle ORM |
| **Authentication** | Lucia + Arctic (OAuth) |
| **Testing** | Playwright (E2E), Bun test (unit/integration) |
| **Code Quality** | Biome (formatting/linting) |
| **Deployment** | Docker, VPS |
| **Language** | TypeScript (strict mode) |

### Published Packages

| Package | Description |
|---------|-------------|
| `@devpad/api` | TypeScript API client with Result types |
| `@devpad/cli` | Command-line interface for task management |
| `@devpad/mcp` | Model Context Protocol server for AI assistants |

---

## Core Features

### Project Management
- Track multiple projects with descriptions, specifications
- Project versioning and status tracking (Development, Paused, Released, Live, Abandoned)
- Tech stack information and visibility controls
- GitHub repository linking
- Update/revision history timeline

### Task Tracker
- **Codebase scanning** for `@todo` and `// TODO:` comments
- Manual task creation and management
- Task priority levels (Low, Medium, High)
- Start/end dates
- Tag-based organization
- Search and filtering

### Goal & Milestone System
- Assign goals and milestones to projects
- Track progress toward project completion
- Automatic version updates based on reaching goals

### API
- RESTful API at `devpad.tools/api/v0`
- API key authentication
- Public visibility support for portfolio integration
- TypeScript client library

### MCP Integration
- Model Context Protocol server for AI assistants
- Compatible with Claude Desktop
- Exposes all API functionality as tools

---

## Project Evolution

### Era 1: T3 Stack (Oct 2022 - Mar 2024)
- Started with `create-t3-app` (Next.js + tRPC + Prisma)
- Built initial todo dashboard and task management
- Added university assignment tracking (personal use case)
- Developed API key system and basic auth

### Era 2: Astro Rewrite (Mar 2024 - Sep 2025)
- Major migration to Astro + SolidJS
- Switched from Prisma to Drizzle ORM
- Redesigned UI with minimalist philosophy
- Added project scanning via custom `todo-tracker` binary
- Implemented codebase task detection and approval workflow

### Era 3: Monorepo & Packages (Sep 2025 - Present)
- Restructured as a monorepo with separate packages
- Published npm packages (`@devpad/api`, `@devpad/cli`, `@devpad/mcp`)
- Added MCP server for AI assistant integration
- Implemented cross-domain authentication
- VPS deployment with Docker

---

## Architecture

```
devpad/
├── packages/
│   ├── api/       # TypeScript API client library
│   ├── app/       # Astro frontend + SolidJS components
│   ├── cli/       # Command-line interface
│   ├── core/      # Business logic (projects, tasks, scanning)
│   ├── mcp/       # Model Context Protocol server
│   ├── schema/    # Drizzle schema, types, validation
│   └── server/    # Hono API server
├── tests/
│   ├── integration/
│   ├── unit/
│   └── e2e/
└── deployment/    # Docker, CI/CD configurations
```

---

## What Makes It Interesting

1. **Dogfooding at its finest** - The project tracks its own TODOs through the very system it builds

2. **Long-term personal project** - 3+ years of continuous development shows dedication and iterative improvement

3. **Multiple major rewrites** - Evolved from T3 stack to Astro, demonstrating willingness to adopt better technologies

4. **AI-first integration** - One of the early projects to include MCP server support for AI assistants

5. **Published packages** - Matured from personal tool to published npm ecosystem

6. **Codebase scanning** - Unique feature that scans repos for TODO comments and manages them as first-class tasks

---

## Key URLs

- **Live Site:** https://devpad.tools
- **Repository:** https://github.com/f0rbit/devpad
- **npm Packages:**
  - https://www.npmjs.com/package/@devpad/api
  - https://www.npmjs.com/package/@devpad/cli
  - https://www.npmjs.com/package/@devpad/mcp

---

## Suggested Portfolio Description

> **devpad** - A project management suite I've been building since October 2022. It started as a simple TODO tracker and evolved into a full-featured system that scans codebases for TODO comments and manages them alongside manual tasks. Built with Astro + SolidJS, featuring published npm packages for API access, CLI tools, and even an MCP server for AI assistant integration. Nearly 1,000 commits over 3+ years of continuous development.

---

## Version History (Tags)

| Version | Notes |
|---------|-------|
| v0.1.0 | First tagged release, VPS deployment (Jan 2025) |
| v1.0.1 | First npm package release (Sep 2025) |
| v1.1.x | Feature additions and fixes |
| v1.2.x | Cross-domain auth, UI improvements (Dec 2025) |
