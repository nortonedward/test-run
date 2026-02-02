# Tabs

Tab navigation with slot-based content. Supports multiple visual variants (underline with sliding indicator, lift, box), sizes, and custom tab slots.

<PropsTable component="UiTabs" />

## Live preview

<TabsDemo />

## Variants

- **underline** (default) — Sliding accent indicator under the active tab, like Vuetify or Material Design
- **lift** — Raised active tab with shadow, similar to DaisyUI tabs-lift
- **box** — Tabs sit in a rounded container with muted background

## Usage

```vue
<UiTabs v-model="active" :tabs="tabs" variant="underline">
  <template #overview>
    <p>Overview content.</p>
  </template>
  <template #details>
    <p>Details content.</p>
  </template>
</UiTabs>
```

## Custom tab content

Use the `#tab` slot to customize each tab button. It receives `{ tab, active }`:

```vue
<UiTabs v-model="active" :tabs="tabs">
  <template #tab="{ tab, active }">
    <span :class="active ? 'font-semibold' : ''">{{ tab.label }}</span>
  </template>
  <template #one>...</template>
</UiTabs>
```

## Storybook

[Open in Storybook](http://localhost:6006/?path=/story/ui-uitabs--default) for interactive controls.
