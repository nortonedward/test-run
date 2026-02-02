# Icon Button

Icon-only button for actions without text. Import icons from Heroicons and pass the component to the `icon` prop. Same variants as UiButton.

<PropsTable component="UiIconButton" />

See [Storybook](http://localhost:6006/?path=/story/ui-uiiconbutton--default) for a live preview. Use the icon control to toggle between Trash, Plus, Pencil, and Cog.

## Usage

```vue
<script setup>
import { UiIconButton } from '@cursor-run/ui';
import { TrashIcon, PlusIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <UiIconButton :icon="TrashIcon" variant="primary" aria-label="Delete" />
  <UiIconButton :icon="PlusIcon" variant="ghost" size="sm" aria-label="Add" />
</template>
```

**Accessibility:** The `aria-label` prop is required for icon-only buttons so screen readers can announce the action.

## Storybook

[Open in Storybook](http://localhost:6006/?path=/story/ui-uiiconbutton--default) for interactive controls (icon, variant, size).
