# Compose Bar

Layout for compose inputs: avatar slot, main content, and actions. Used for personalized composition (posting as current user).

<PropsTable component="UiComposeBar" />

## Live preview

<UiComposeBar>
  <template #avatar>
    <UiAvatar name="you" size="md" />
  </template>
  <UiInput placeholder="Share a snippet…" class="min-h-[2.75rem]" />
  <template #actions>
    <UiButton variant="primary">Post</UiButton>
  </template>
</UiComposeBar>

## Usage

```vue
<UiComposeBar>
  <template #avatar>
    <UiAvatar :name="currentUser.name" size="md" />
  </template>
  <UiInput v-model="content" placeholder="What's on your mind?" />
  <template #actions>
    <UiButton variant="primary" @click="submit">Post</UiButton>
  </template>
</UiComposeBar>
```
