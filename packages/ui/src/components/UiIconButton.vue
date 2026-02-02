<script setup lang="ts">
import type { Component } from 'vue';
import { cn } from '../utils/cn';
import type { ButtonVariant } from '../types/button';

interface Props {
  /** Icon component to render. Import from @heroicons/vue/24/outline (e.g. TrashIcon, PlusIcon). */
  icon: Component;
  /** Visual style; matches UiButton variants. */
  variant?: ButtonVariant;
  /** Size affects padding and icon scale. */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label for screen readers (required for icon-only buttons). */
  ariaLabel: string;
  /** Button type when rendered as native button. */
  type?: 'button' | 'submit';
  /** Disables interaction and reduces opacity. */
  disabled?: boolean;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
});

const baseClasses =
  'inline-flex items-center justify-center rounded-lg transition-all duration-[var(--duration-normal)] [transition-timing-function:var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0';

const sizeClasses = {
  sm: 'size-9 [&_svg]:size-4',
  md: 'size-11 [&_svg]:size-5',
  lg: 'size-[3.25rem] [&_svg]:size-6',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[linear-gradient(to_bottom,var(--color-accent-top),var(--color-accent))] text-accent-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-[linear-gradient(to_bottom,var(--color-accent-hover-top),var(--color-accent-hover))] hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px',
  secondary:
    'border border-border bg-surface text-foreground shadow-[var(--shadow-button)] hover:border-muted hover:shadow-[var(--shadow-button-hover)] active:translate-y-px',
  ghost:
    'border border-transparent bg-transparent text-foreground hover:bg-muted/15 hover:border-muted/30 active:translate-y-px',
  success:
    'bg-success text-success-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-success-hover hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px',
  error:
    'bg-error text-error-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-error-hover hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px',
  warning:
    'bg-warning text-warning-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-warning-hover hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px',
  info:
    'bg-info text-info-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-info-hover hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px',
};
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :class="cn(baseClasses, sizeClasses[size], variantClasses[variant], props.class)"
  >
    <component :is="icon" />
  </button>
</template>
