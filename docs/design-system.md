# Design System — Japanese-Inspired Component Library

This document is the contract for the component library. No code yet; it defines philosophy, tokens, and motion principles.

---

## Philosophy

### Japanese inspiration (和色, MA, wabi-sabi, Seijaku)

The design system is informed by Japanese aesthetic tradition. The **API stays product-facing**—no literal element names (Wood, Fire, etc.) in code. The palette and motion values are derived from these principles and documented here.

- **和色 (wa-iro):** Traditional Japanese colors. Warm neutrals (和紙 washi, 墨 sumi), vermillion accent (朱 shu), deeper reds (蘇芳 su'ō). Palette origin for semantic tokens.
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

| Token                                | Role                    | 和色-inspired source            | Notes                             |
| ------------------------------------ | ----------------------- | ------------------------------- | --------------------------------- |
| `--color-primary` / `--color-accent` | Main CTA                | 朱 shu (vermillion)             | Keep strong; WCAG AA minimum      |
| `--color-secondary`                  | Muted / outline actions | Muted 墨 or 青磁 seiji          | Distinct from primary             |
| `--color-success`                    | Positive, done          | 若緑 wakamidori / 青緑 aomidori | Green                             |
| `--color-error`                      | Danger, invalid         | 蘇芳 su'ō                       | Deeper red; distinct from primary |
| `--color-warning`                    | Caution                 | 山吹 yamabuki / 黄 ki           | Yellow/amber                      |
| `--color-info`                       | Neutral info            | 青 ao / 青磁 seiji              | Blue/blue-green                   |
| `--color-surface`                    | Cards, panels           | 和紙 washi                      | Warm paper                        |
| `--color-background`                 | Page background         | 和紙 washi                      | Warm paper                        |
| `--color-foreground`                 | Primary text            | 墨 sumi                         | Ink                               |
| `--color-muted`                      | Secondary text          | 茶 cha                          | Brown, readable                   |
| `--color-border`                     | Borders, dividers       | Warm gray                       | Soft, not harsh                   |

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
