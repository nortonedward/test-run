# Button

Text buttons with semantic variants and size options. Uses design tokens (和色) for primary, secondary, ghost, and semantic states.

<PropsTable component="UiButton" />

## Live preview

<UiStack gap="4" direction="vertical">
  <UiStack gap="4" direction="horizontal" class="flex-wrap">
    <UiButton variant="primary">Primary</UiButton>
    <UiButton variant="secondary">Secondary</UiButton>
    <UiButton variant="ghost">Ghost</UiButton>
    <UiButton variant="success">Success</UiButton>
    <UiButton variant="error">Error</UiButton>
    <UiButton variant="warning">Warning</UiButton>
    <UiButton variant="info">Info</UiButton>
  </UiStack>
  <UiStack gap="4" direction="horizontal" class="flex-wrap">
    <UiButton variant="primary" size="sm">Small</UiButton>
    <UiButton variant="primary" size="md">Medium</UiButton>
    <UiButton variant="primary" size="lg">Large</UiButton>
  </UiStack>
</UiStack>

## Usage

```vue
<UiButton variant="primary">Submit</UiButton>
<UiButton variant="secondary" size="sm">Cancel</UiButton>
<UiButton variant="ghost">Minimal</UiButton>
<UiButton variant="error">Delete</UiButton>
<UiButton variant="primary" class="w-full">Full width</UiButton>
```

## Storybook

[Open in Storybook](http://localhost:6006/?path=/story/ui-uibutton--default) for interactive controls (variant, size, disabled).
