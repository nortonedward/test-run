# Input

Text input with token-based styling.

<PropsTable component="UiInput" />

## Live preview

<UiStack gap="4" class="max-w-sm">
  <UiInput placeholder="Enter text..." />
  <UiInput type="email" placeholder="Email address" />
</UiStack>

## Usage

```vue
<UiInput v-model="value" placeholder="Enter text..." />
<UiInput type="email" placeholder="Email" disabled />
```

## Storybook

[Open in Storybook](http://localhost:6006/?path=/story/ui-uiinput--default) for interactive controls.
