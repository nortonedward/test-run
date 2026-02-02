<script setup lang="ts">
import { cn } from '../utils/cn';

interface Props {
  /** Bound value for v-model. */
  modelValue?: string;
  /** Disables interaction. */
  disabled?: boolean;
  /** Additional classes merged via cn(). */
  class?: string;
}

defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const baseClasses =
  'w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground shadow-[var(--shadow-button)] transition-shadow duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 appearance-none bg-no-repeat';
</script>

<template>
  <select
    :value="modelValue"
    :disabled="disabled"
    :class="cn(baseClasses, 'ui-select-chevron', $props.class)"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <slot />
  </select>
</template>
