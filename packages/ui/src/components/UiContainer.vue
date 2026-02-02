<script setup lang="ts">
import { cn } from '../utils/cn';

interface Props {
  /** Additional classes merged via cn(). */
  class?: string;
}

defineProps<Props>();
</script>

<template>
  <div :class="cn('mx-auto max-w-3xl px-4 sm:px-6', $props.class)">
    <slot />
  </div>
</template>
