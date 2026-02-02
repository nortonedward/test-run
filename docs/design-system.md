# Design System — Japanese-Inspired Component Library

This document is the contract for the component library. No code yet; it defines philosophy, tokens, and motion principles.

---

## Philosophy

### Japanese inspiration (和色, MA, wabi-sabi, Seijaku)

The design system is informed by Japanese aesthetic tradition. The **API stays product-facing**—no literal element names (Wood, Fire, etc.) in code. The palette and motion values are derived from these principles and documented here.

- **Sanzo Wada Bundle A:** Warm & Earthy. Ivory Buff, Etruscan Red, Ochraceous Salmon — serene, art-forward. Surfaces: Ivory Buff, Fawn, Mineral Gray. Primary: Etruscan Red. Secondary: Ochraceous Salmon.
- **MA (間):** Meaningful emptiness; the "pause" between elements. Spacing favors breathing room; default padding avoids cramped layouts.
- **Wabi-sabi:** Imperfection, natural texture, subtle depth. Soft gradients, layered shadows, organic radii—not flat or harshly geometric.
- **Yūgen:** Subtle depth. Transitions on hover/focus (lift, shadow, color) feel alive but calm.
- **Seijaku:** Tranquility. Motion is dynamic but never frantic; short durations, ease-out, no bounce.

### Semantic tokens only

Public API and tokens use product roles devs expect: `primary`, `secondary`, `surface`, `muted`, `accent`, `success`, `warning`, `error`, `info`, `border`, `foreground`. No literal element names in component props or CSS variable names.

### Bold over muted

Favor bold over totally muted for hierarchy, CTAs, and key UI. Default token values meet at least WCAG AA (prefer AAA for body and CTAs). Primary/accent and semantic colors must be readable and actionable.

---

## Token list (semantic names only)

### Colors

Palette derived from **Sanzo Wada's A Dictionary of Color Combinations Vol. 2** (1935–1938): 72 seasonal palettes + 165 design/fashion combinations. Wada blended traditional Japanese color sense with Western color theory; our tokens map his named swatches to semantic roles.

| Token                                | Role                    | Sanzo Wada source                | Notes                             |
| ------------------------------------ | ----------------------- | -------------------------------- | --------------------------------- |
| `--color-primary` / `--color-accent` | Main CTA                | Etruscan Red                     | Bold, art-forward                  |
| `--color-primary-accent`             | Primary soft variant    | Seashell Pink                    | Backgrounds, borders               |
| `--color-secondary`                  | Muted / outline actions | Ochraceous Salmon               | Warm earth                         |
| `--color-secondary-accent`           | Secondary soft variant  | Light salmon tint               | Backgrounds, borders               |
| `--color-success`                    | Positive, done          | Artemesia Green                 | Calming sage                       |
| `--color-success-accent`             | Success soft variant    | Glaucous Green                  | Backgrounds, borders              |
| `--color-error`                      | Danger, invalid         | Carmine Red                     | Bold                               |
| `--color-error-accent`               | Error soft variant      | Seashell Pink                   | Backgrounds, borders              |
| `--color-warning`                    | Caution                 | Naples Yellow                   | Warm, soft                          |
| `--color-warning-accent`             | Warning soft variant    | Sulpher Yellow                  | Backgrounds, borders               |
| `--color-info`                       | Neutral info            | Violet Blue                     | Serene depth                       |
| `--color-info-accent`                | Info soft variant       | Grayish Lavender A              | Backgrounds, borders              |
| `--color-surface`                    | Cards, panels           | Warm paper                      | Ivory Buff tint                    |
| `--color-background`                 | Page background         | Ivory Buff                      | Warm cream                         |
| `--color-foreground`                 | Primary text            | Vandyke Brown                   | Ink                                |
| `--color-muted`                      | Secondary text          | Mineral Gray                    | Weathered stone                    |
| `--color-border`                     | Borders, dividers       | Fawn                            | Soft, warm                         |

Each semantic color has `-accent`: a lighter (light mode) or darker (dark mode) variant for backgrounds, borders, and highlights. Use `bg-primary-accent`, `border-success-accent`, etc.

Each color has light and dark variants. Hover/active/foreground variants where needed (e.g. `--color-accent-hover`, `--color-accent-foreground`).

### Spacing (MA-based)

Single ratio (e.g. 1.25 or 1.5). Tokens: `--space-2`, `--space-4`, `--space-6`, `--space-8`, `--space-12`, `--space-16`, `--space-24`, `--space-32`, `--space-48`.

### Typography

- **Font families:** `--font-sans` (e.g. Plus Jakarta Sans)
- **Scale:** `--text-sm`, `--text-base`, `--text-lg`, `--text-xl`, `--text-2xl`, etc. (fluid or fixed)
- **Line height:** Per size; readable on paper-like surfaces

### Motion

| Token               | Value       | Use                 |
| ------------------- | ----------- | ------------------- |
| `--duration-fast`   | 150ms       | Micro-interactions  |
| `--duration-normal` | 200ms       | Default transitions |
| `--duration-slow`   | 300ms       | Enter/leave         |
| `--ease-out`        | ease-out    | Default easing      |
| `--ease-in-out`     | ease-in-out | Optional            |

All transitions and keyframes reference these. **Reduced motion:** Override in base CSS; respect `prefers-reduced-motion: reduce` (duration → 0.01ms, iteration-count → 1).

### Shadows and borders

- **Shadows:** Soft, layered; "paper" or "clay" feel. No harsh geometric shadows.
- **Border radius:** Scale (e.g. `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`)

---

## Motion principles

1. **Default:** Short (150–200ms), ease-out; no bounce.
2. **Micro-interactions:** Button press (subtle scale or shadow), link hover (underline or color shift), input focus (ring + shadow), card hover (lift + shadow).
3. **Keyframes:** Enter/leave = fade + slight translateY or scale; focus ring; optional "breathing" (subtle pulse). Namespaced (e.g. `ui-fade-in`).
4. **Transforms:** Gentle `translateY(-1px)` on hover; light scale (0.98) on active; focus ring.
5. **Seijaku:** Dynamic but never frantic. Restrained so UI feels responsive, not gimmicky.
6. **Accessibility:** Every transition and keyframe respects `prefers-reduced-motion`.
