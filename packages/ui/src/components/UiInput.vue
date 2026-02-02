<script setup lang="ts">
import { cn } from '../utils/cn';

interface Props {
  /** Bound value for v-model. */
  modelValue?: string;
  /** Input type (text, email, password, etc.). */
  type?: string;
  /** Placeholder text. */
  placeholder?: string;
  /** Disables interaction. */
  disabled?: boolean;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const baseClasses =
  'w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground shadow-[var(--shadow-button)] transition-shadow duration-[var(--duration-normal)] placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
</script>

<template>
  <input
    :type="props.type"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :class="cn(baseClasses, props.class)"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
