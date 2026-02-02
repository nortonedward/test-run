<script setup lang="ts">
defineProps<{
  name: string;
  token: string;
  description?: string;
}>();
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-border shadow-[var(--shadow-card)]">
    <div class="h-16 sm:h-20" :style="{ background: `var(${token})` }" />
    <div class="bg-surface px-3 py-2">
      <div class="font-medium text-foreground">{{ name }}</div>
      <div class="font-mono text-sm text-muted">{{ token }}</div>
      <p v-if="description" class="mt-1 text-sm text-muted">{{ description }}</p>
    </div>
  </div>
</template>
