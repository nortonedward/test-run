<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isNotFound = computed(() => {
  const slug = route.params.slug
  return Array.isArray(slug) && slug.length > 0 && slug[0] !== ''
});
</script>

<template>
  <div v-if="isNotFound" class="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
    <h1 class="text-4xl font-bold text-foreground">404</h1>
    <p class="text-muted">Page not found</p>
    <UiButton to="/" variant="primary">Go home</UiButton>
  </div>
</template>
