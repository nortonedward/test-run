# Colors & Themes

The palette is **Sanzo Wada Bundle A: Warm & Earthy** — Ivory Buff, Etruscan Red, Ochraceous Salmon.

## Light theme

### Surfaces

<UiStack gap="4" direction="horizontal" class="flex-wrap">
  <ColorSwatch name="Background" token="--color-background" description="Ivory Buff — page background" />
  <ColorSwatch name="Surface" token="--color-surface" description="Cards, panels" />
  <ColorSwatch name="Foreground" token="--color-foreground" description="Vandyke Brown — primary text" />
  <ColorSwatch name="Muted" token="--color-muted" description="Mineral Gray — secondary text" />
  <ColorSwatch name="Border" token="--color-border" description="Dividers, outlines" />
</UiStack>

### Primary & accent

<UiStack gap="4" direction="horizontal" class="flex-wrap">
  <ColorSwatch name="Primary / Accent" token="--color-accent" description="Etruscan Red — main CTA" />
  <ColorSwatch name="Accent Hover" token="--color-accent-hover" />
  <ColorSwatch name="Accent Foreground" token="--color-accent-foreground" description="Text on accent" />
</UiStack>

### Semantic colors (base + accent)

<UiStack gap="4" direction="horizontal" class="flex-wrap">
  <ColorSwatch name="Primary" token="--color-primary" description="Etruscan Red" />
  <ColorSwatch name="Primary accent" token="--color-primary-accent" description="Seashell Pink" />
  <ColorSwatch name="Secondary" token="--color-secondary" description="Ochraceous Salmon" />
  <ColorSwatch name="Secondary accent" token="--color-secondary-accent" description="Light salmon" />
  <ColorSwatch name="Success" token="--color-success" description="Artemesia Green" />
  <ColorSwatch name="Success accent" token="--color-success-accent" description="Glaucous Green" />
  <ColorSwatch name="Error" token="--color-error" description="Carmine Red" />
  <ColorSwatch name="Error accent" token="--color-error-accent" description="Seashell Pink" />
  <ColorSwatch name="Warning" token="--color-warning" description="Naples Yellow" />
  <ColorSwatch name="Warning accent" token="--color-warning-accent" description="Sulpher Yellow" />
  <ColorSwatch name="Info" token="--color-info" description="Violet Blue" />
  <ColorSwatch name="Info accent" token="--color-info-accent" description="Grayish Lavender A" />
</UiStack>

### Accent usage

Use `-accent` for soft backgrounds, borders, and highlights:

```html
<div class="bg-primary-accent border border-primary rounded-lg p-4">Primary highlight</div>
<div class="bg-success-accent border border-success rounded-lg p-4">Success highlight</div>
```

### In context

<UiStack gap="6">
  <UiAlert variant="success">Success — Artemesia Green</UiAlert>
  <UiAlert variant="warning">Warning — Naples Yellow</UiAlert>
  <UiAlert variant="error">Error — Carmine Red</UiAlert>
  <UiAlert variant="info">Info — Violet Blue</UiAlert>
  <UiStack gap="4" direction="horizontal" class="flex-wrap">
    <UiButton variant="primary">Primary</UiButton>
    <UiButton variant="secondary">Secondary</UiButton>
  </UiStack>
</UiStack>

## Dark theme

Toggle dark mode in the nav bar to see the dark palette. The same semantic tokens apply; values shift for contrast and readability.

| Token      | Light     | Dark      |
| ---------- | --------- | --------- |
| Background | `#ebd999` | `#1a1510` |
| Surface    | `#fffef9` | `#2a241c` |
| Foreground | `#362304` | `#ebe5d8` |
| Accent     | `#c9303e` | `#d9404e` |

## Overriding

Override tokens via CSS variables on `:root` or `.dark`:

```css
:root {
  --color-accent: #c44;
  --color-surface: #faf9f7;
}
```
