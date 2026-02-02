<script setup lang="ts">
import { cn } from '../utils/cn';

interface Props {
  /** Additional classes merged via cn(). */
  class?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-border bg-surface p-4 shadow-[var(--shadow-card)] transition-shadow duration-[var(--duration-normal)] hover:shadow-[var(--shadow-card-hover)] sm:p-6',
        $props.class,
      )
    "
  >
    <slot />
  </div>
</template>
