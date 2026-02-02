# Colors & Themes

The palette is informed by 和色 (wa-iro) tradition. All tokens use **semantic names**—no literal element names in the API.

## Light theme

### Surfaces

<UiStack gap="4" direction="horizontal" class="flex-wrap">
  <ColorSwatch name="Background" token="--color-background" description="和紙 washi — page background" />
  <ColorSwatch name="Surface" token="--color-surface" description="Cards, panels" />
  <ColorSwatch name="Foreground" token="--color-foreground" description="墨 sumi — primary text" />
  <ColorSwatch name="Muted" token="--color-muted" description="茶 cha — secondary text" />
  <ColorSwatch name="Border" token="--color-border" description="Dividers, outlines" />
</UiStack>

### Primary & accent

<UiStack gap="4" direction="horizontal" class="flex-wrap">
  <ColorSwatch name="Primary / Accent" token="--color-accent" description="朱 shu — main CTA" />
  <ColorSwatch name="Accent Hover" token="--color-accent-hover" />
  <ColorSwatch name="Accent Foreground" token="--color-accent-foreground" description="Text on accent" />
</UiStack>

### Semantic colors

<UiStack gap="4" direction="horizontal" class="flex-wrap">
  <ColorSwatch name="Success" token="--color-success" description="若緑 wakamidori" />
  <ColorSwatch name="Error" token="--color-error" description="蘇芳 su'ō" />
  <ColorSwatch name="Warning" token="--color-warning" description="山吹 yamabuki" />
  <ColorSwatch name="Info" token="--color-info" description="青磁 seiji" />
  <ColorSwatch name="Secondary" token="--color-secondary" description="Muted actions" />
</UiStack>

### In context

<UiStack gap="6">
  <UiAlert variant="success">Success — 若緑</UiAlert>
  <UiAlert variant="warning">Warning — 山吹</UiAlert>
  <UiAlert variant="error">Error — 蘇芳</UiAlert>
  <UiAlert variant="info">Info — 青磁</UiAlert>
  <UiStack gap="4" direction="horizontal" class="flex-wrap">
    <UiButton variant="primary">Primary</UiButton>
    <UiButton variant="secondary">Secondary</UiButton>
  </UiStack>
</UiStack>

## Dark theme

Toggle dark mode in the nav bar to see the dark palette. The same semantic tokens apply; values shift for contrast and readability.

| Token      | Light     | Dark      |
| ---------- | --------- | --------- |
| Background | `#f7f4f0` | `#171412` |
| Surface    | `#fffefc` | `#252019` |
| Foreground | `#27221f` | `#f5f0e8` |
| Accent     | `#b54a3a` | `#d45a4a` |

## Overriding

Override tokens via CSS variables on `:root` or `.dark`:

```css
:root {
  --color-accent: #c44;
  --color-surface: #faf9f7;
}
```
