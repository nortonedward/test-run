# Avatar

User avatar with image or initials fallback. Supports `src` for images; falls back to initials derived from `name` or explicit `initials`.

<PropsTable component="UiAvatar" />

## Live preview

<UiStack gap="4" direction="horizontal" class="flex-wrap items-end">
  <UiAvatar name="Alex Chen" size="sm" />
  <UiAvatar name="Jordan" size="md" />
  <UiAvatar name="Sam Taylor" size="lg" />
  <UiAvatar initials="JD" size="md" />
</UiStack>

## Usage

```vue
<UiAvatar name="John Doe" size="md" />
<UiAvatar src="/avatar.jpg" alt="John" size="lg" />
<UiAvatar initials="JD" size="sm" />
```
