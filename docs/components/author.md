# Author

Avatar plus display name and optional subtitle. For snippet cards, compose bars, and "posted by" contexts.

<PropsTable component="UiAuthor" />

## Live preview

<UiStack gap="6" direction="vertical">
  <UiAuthor name="alex" subtitle="2m ago" size="sm" />
  <UiAuthor name="Jordan Taylor" subtitle="1h ago" size="md" />
  <UiAuthor name="Sam" size="lg" />
</UiStack>

## Usage

```vue
<UiAuthor name="alex" subtitle="2m ago" size="sm" />
<UiAuthor name="Jordan" avatar="/jordan.jpg" size="md" />
```
