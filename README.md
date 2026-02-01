# cursor-run

Nuxt 4 + Vue 3.5 + TypeScript + Tailwind + Pinia + VueUse + Zod. Minimal landing-style app with a custom theme and dark mode.

## How it works

- **Pages:** `app/pages/` — `index.vue` is the landing (hero, features, CTA); `demo.vue` is a theme demo. Both use the default layout.
- **Layout:** `app/layouts/default.vue` — header with site name, “demo” link, and dark-mode toggle. Renders the page via `<slot />`.
- **Theme:** `app/plugins/theme.client.ts` applies light/dark before first paint (localStorage + system preference). `useDarkMode()` in the layout drives the toggle and persists choice.
- **Styling:** Tailwind via `app/assets/css/main.css`; design tokens (e.g. lavender accent) and dark variants live there. Plus Jakarta Sans via `@nuxt/fonts`.
- **Components:** Reusable UI under `app/components/` (e.g. `AppButton`, `AppLink`, `AppHeading`, `AppCard`) plus landing blocks (`LandingHero`, `LandingFeatures`, `LandingCta`).

Source lives under `app/` (see `nuxt.config.ts` `srcDir`).

## Setup

```bash
pnpm install
```

## Commands

| Command   | Description                    |
| --------- | ------------------------------ |
| `pnpm dev`      | Dev server at http://localhost:3000 |
| `pnpm build`    | Production build               |
| `pnpm preview`  | Preview production build       |
| `pnpm generate` | Static site generation         |
| `pnpm format`   | Prettier format                |

See [Nuxt 4 docs](https://nuxt.com/docs/4.x/getting-started/introduction) and [deployment](https://nuxt.com/docs/getting-started/deployment).
