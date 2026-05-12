# NusaUI

[![CI](https://github.com/codewithmehmet/nusa-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/codewithmehmet/nusa-ui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6)](https://www.typescriptlang.org/)

A beautiful component library built with Radix UI and Tailwind CSS. Install components directly into your project.

**[Documentation](https://nusa-ui.vercel.app)** | **[Components](https://nusa-ui.vercel.app/docs/components)**

---

## Quick Start

### Install a component

```bash
npx shadcn@latest add https://nusa-ui.vercel.app/r/button.json
```

### With registry namespace (recommended)

Add to your `components.json`:

```json
{
  "registries": {
    "@nusa-ui": "https://nusa-ui.vercel.app/r/{name}.json"
  }
}
```

Then install components:

```bash
npx shadcn@latest add @nusa-ui/button
npx shadcn@latest add @nusa-ui/card
```

---

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build
pnpm build

# Run all checks
pnpm check
```

## Project Structure

```
nusa-ui/
├── registry/new-york/       # Component source (single source of truth)
│   ├── ui/                  # UI components
│   ├── hooks/               # Custom hooks
│   └── lib/                 # Utilities (utils.ts)
├── public/r/                # Generated JSON files (shadcn build)
├── content/docs/            # MDX documentation
│   └── components/          # Per-component docs
├── registry.json            # Registry manifest
└── components.json          # shadcn config
```

---

## Adding a New Component

### Step 1: Install the component

```bash
npx shadcn@latest add <component-name>
```

The component will be installed in `registry/new-york/ui/`.

### Step 2: Add to registry.json

Open `registry.json` and add an entry to the `items` array:

```json
{
  "name": "component-name",
  "type": "registry:ui",
  "title": "Component Name",
  "description": "Short description of the component.",
  "dependencies": ["@radix-ui/react-xxx"],
  "registryDependencies": ["utils"],
  "files": [
    {
      "path": "registry/new-york/ui/component-name.tsx",
      "type": "registry:ui"
    }
  ]
}
```

**Notes:**

- `dependencies`: npm packages required (check component imports)
- `registryDependencies`: other registry components required (e.g., `["utils", "button"]`)

### Step 3: Rebuild the registry

```bash
pnpm registry:build
```

This generates `public/r/component-name.json`.

### Step 4: Create MDX documentation

Create `content/docs/components/component-name.mdx`:

```mdx
---
title: Component Name
description: Short description of the component.
---

## Installation

\`\`\`bash
npx shadcn@latest add https://nusa-ui.vercel.app/r/component-name.json
\`\`\`

## Usage

\`\`\`tsx
import { ComponentName } from "@/components/ui/component-name"
\`\`\`

\`\`\`tsx

<ComponentName>Example</ComponentName>
\`\`\`
```

### Step 5: Add to navigation

Open `content/docs/components/meta.json` and add the component name:

```json
{
  "title": "Components",
  "pages": ["button", "card", "component-name"]
}
```

### Step 6: Test

```bash
# Rebuild and verify
pnpm build

# Test installation from another project
npx shadcn@latest add http://localhost:3000/r/component-name.json
```

---

## Commands

| Command                  | Description                              |
| ------------------------ | ---------------------------------------- |
| `pnpm dev`               | Start development server                 |
| `pnpm build`             | Full build (auto: registry + next build) |
| `pnpm check`             | Lint + format check + types + registry   |
| `pnpm prerelease`        | Full validation before release           |
| `pnpm registry:generate` | Generate `registry/__index__.tsx`        |
| `pnpm registry:build`    | Generate `public/r/*.json` files         |
| `pnpm registry:validate` | Type-check registry components           |

---

## Workflow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Develop   │────▶│   Commit    │────▶│   CI + Deploy │──▶│   Release   │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
    pnpm dev         git commit          GitHub Actions      ./scripts/release.sh
                     (lint-staged)       Vercel auto
```

### 1. Development

```bash
pnpm dev
```

### 2. Commit

```bash
git add .
git commit -m "feat(components): add tooltip"
# └─ Pre-commit hook: lint-staged (ESLint + Prettier)
```

### 3. Push (CI + Deploy)

```bash
git push
# └─ GitHub Actions: lint → format → types → registry → build
# └─ Vercel: auto-deploy on success
```

### 4. Release

```bash
./scripts/release.sh 0.7.0
# └─ Updates CHANGELOG.md and package.json
# └─ Creates commit, tag, and GitHub release
```

---

## Stack

- [Next.js 16](https://nextjs.org/)
- [Fumadocs](https://fumadocs.dev/) - Documentation
- [shadcn/ui](https://ui.shadcn.com/) - Components
- [Radix UI](https://www.radix-ui.com/) - Primitives
- [Tailwind CSS v4](https://tailwindcss.com/)

---

## License

[MIT](LICENSE)
