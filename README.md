# cursor-run

Monorepo: Vue 3.5 component library (`@cursor-run/ui`) + Nuxt 4 apps.

## Structure

- **packages/ui** — Component library (UiButton, UiAlert, UiCard, etc.) with Storybook
- **packages/nuxt-ui** — Nuxt module for auto-importing the library
- **apps/landing** — Landing app (hero, features, CTA) using the library
- **apps/playground** — Demo app for the component library
- **docs/** — VitePress documentation

## Setup

```bash
pnpm install
```

## Commands

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `pnpm dev`            | Landing app at http://localhost:3000 |
| `pnpm dev:landing`    | Same as above                        |
| `pnpm dev:playground` | Playground app                       |
| `pnpm story:dev`      | Storybook at http://localhost:6006   |
| `pnpm docs:dev`       | VitePress docs                       |
| `pnpm build`          | Build all packages                   |
| `pnpm format`         | Prettier format                      |
