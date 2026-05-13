# NusaUI

[![CI](https://github.com/codewithmehmet/nusa-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/codewithmehmet/nusa-ui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6)](https://www.typescriptlang.org/)

NusaUI is a registry-first component system for product teams that want to own the source, adapt it quickly, and keep the implementation close to the app.

**[Documentation](https://nusa-ui.vercel.app)** | **[Components](https://nusa-ui.vercel.app/docs/components)** | **[Get Started](https://nusa-ui.vercel.app/docs/get-started)**

The docs site currently covers the core component catalog, get-started flow, and styling guidance. Registry blocks stay in source under `registry/new-york/blocks/`, but they are not exposed in the docs navigation.

---

## Quick Start

### Install a component from the registry

```bash
npx shadcn@latest add https://nusa-ui.vercel.app/r/button.json
```

### Use the registry alias

Add the NusaUI registry to `components.json`:

```json
{
  "registries": {
    "nusa-ui": "https://nusa-ui.vercel.app/r/{name}.json"
  }
}
```

Then install components with the shorter alias:

```bash
npx shadcn@latest add nusa-ui/button
```

---

## What’s in the repo

- `registry/new-york/` - source for the registry, UI components, hooks, and utilities
- `registry/new-york/blocks/` - registry blocks kept in source, even though they are not exposed in docs
- `public/r/` - generated JSON files for registry installation
- `content/docs/` - Fumadocs documentation
- `src/` - app shell, docs rendering, and shared UI helpers

The changelog starts from the NusaUI rebrand baseline at `0.1.0`.

---

## Development

```bash
pnpm install
pnpm dev
pnpm build
pnpm check
```

## Adding a Component

1. Add or update the component in `registry/new-york/ui/`.
1. Register it in `registry.json` with the dependencies it needs.
1. Run `pnpm registry:build` to generate `public/r/<name>.json`.
1. Add or update the matching doc page in `content/docs/components/`.
1. Rebuild with `pnpm build` and verify the generated output.

## Commands

| Command                  | Description                                       |
| ------------------------ | ------------------------------------------------- |
| `pnpm dev`               | Start the development server                      |
| `pnpm build`             | Build registry output and Next.js app             |
| `pnpm check`             | Run lint, format, type, registry, and test checks |
| `pnpm registry:generate` | Generate `registry/__index__.tsx`                 |
| `pnpm registry:build`    | Generate `public/r/*.json` files                  |
| `pnpm registry:validate` | Type-check registry components                    |

## Stack

- [Next.js 16](https://nextjs.org/)
- [Fumadocs](https://fumadocs.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## License

[MIT](LICENSE)
