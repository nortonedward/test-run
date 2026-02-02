# Tabs

Tab navigation with slot-based content.

<PropsTable component="UiTabs" />

## Live preview

<TabsDemo />

## Usage

```vue
<UiTabs v-model="active" :tabs="tabs">
  <template #overview>
    <p>Overview content.</p>
  </template>
  <template #details>
    <p>Details content.</p>
  </template>
</UiTabs>
```

## Storybook

[Open in Storybook](http://localhost:6006/?path=/story/ui-uitabs--default) for interactive controls.
