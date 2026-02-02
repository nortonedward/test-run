# Select

Custom dropdown select with token-based styling. Supports slots for custom item and trigger content (icons, badges, etc.).

<PropsTable component="UiSelect" />

## Live preview

<SelectDemo />

## Usage

```vue
<UiSelect v-model="value" :items="items" placeholder="Choose..." />
```

Multiple selection (`v-model` binds to `string[]`):

```vue
<UiSelect v-model="selected" :items="items" :multiple="true" placeholder="Choose one or more..." />
```

With custom item slot (icons, badges):

```vue
<UiSelect v-model="value" :items="items" placeholder="Choose...">
  <template #item="{ item, selected }">
    <IconComponent class="size-5" />
    <span class="flex-1">{{ item.label }}</span>
    <span v-if="selected">✓</span>
  </template>
</UiSelect>
```

## Storybook

[Open in Storybook](http://localhost:6006/?path=/story/ui-uiselect--default) for interactive controls.
