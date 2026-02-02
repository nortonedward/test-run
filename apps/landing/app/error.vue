<script setup lang="ts">
import { computed } from 'vue';
import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError }>();

const status = computed(() => props.error?.status ?? props.error?.statusCode ?? 500);
const message = computed(
  () => props.error?.statusText ?? props.error?.statusMessage ?? props.error?.message ?? 'Something went wrong',
);
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
    <h1 class="text-4xl font-bold text-foreground">{{ status }}</h1>
    <p class="text-muted">{{ message }}</p>
    <UiButton to="/" variant="primary">Go home</UiButton>
  </div>
</template>
