<script setup lang="ts">
import { cn } from '../utils/cn';

interface Props {
  /** Semantic variant (success, warning, error, info). */
  variant?: 'success' | 'warning' | 'error' | 'info';
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
});

const variantClasses = {
  success: 'border-success text-success [background:var(--color-success-bg)]',
  warning: 'border-warning text-warning [background:var(--color-warning-bg)]',
  error: 'border-error text-error [background:var(--color-error-bg)]',
  info: 'border-info text-info [background:var(--color-info-bg)]',
};

const baseClasses = 'rounded-lg border px-4 py-3 shadow-[var(--shadow-card)] transition-colors duration-[var(--duration-normal)]';
</script>

<template>
  <div :class="cn(baseClasses, variantClasses[props.variant], props.class)" role="alert">
    <slot />
  </div>
</template>
