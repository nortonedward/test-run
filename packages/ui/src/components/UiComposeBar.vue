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
        'flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4',
        $props.class,
      )
    "
  >
    <div v-if="$slots.avatar" class="shrink-0 sm:flex sm:items-end">
      <slot name="avatar" />
    </div>
    <div class="min-w-0 flex-1">
      <slot />
    </div>
    <div v-if="$slots.actions" class="shrink-0">
      <slot name="actions" />
    </div>
  </div>
</template>
