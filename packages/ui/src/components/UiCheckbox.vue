<script setup lang="ts">
import { cn } from '../utils/cn';

interface Props {
  /** Bound checked state for v-model. */
  modelValue?: boolean;
  /** Disables interaction. */
  disabled?: boolean;
  /** Additional classes merged via cn(). */
  class?: string;
}

defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const baseClasses =
  'h-5 w-5 rounded border-2 border-border bg-surface accent-accent shadow-[var(--shadow-button)] transition-all duration-[var(--duration-normal)] focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
</script>

<template>
  <input
    type="checkbox"
    :checked="modelValue"
    :disabled="disabled"
    :class="cn(baseClasses, $props.class)"
    @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
  />
</template>
