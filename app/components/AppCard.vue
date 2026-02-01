<script setup lang="ts">
import { cn } from '~/utils/cn';

interface Props {
  class?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-border bg-surface p-4 shadow-card transition-shadow duration-200 hover:shadow-card-hover sm:p-6',
        $props.class,
      )
    "
  >
    <slot />
  </div>
</template>
