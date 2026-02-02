<script setup lang="ts">
import { cn } from '../utils/cn';
import type { ButtonVariant } from '../types/button';

interface Props {
  /** Visual style; primary is main CTA, ghost is minimal. */
  variant?: ButtonVariant;
  /** Size affects padding and text scale. */
  size?: 'sm' | 'md' | 'lg';
  /** Button type when rendered as native button. */
  type?: 'button' | 'submit';
  /** Internal link destination (used as href when no router). */
  to?: string;
  /** External link destination. */
  href?: string;
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
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium leading-tight transition-all duration-[var(--duration-normal)] [transition-timing-function:var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50';

const sizeClasses = {
  sm: 'min-h-[2.25rem] px-3 py-1.5 text-sm',
  md: 'min-h-[2.75rem] px-4 py-2.5 text-base',
  lg: 'min-h-[3.25rem] px-5 py-3 text-lg',
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
  <a v-if="(to || href) && !disabled" :href="href ?? to ?? '#'" :class="cn(baseClasses, sizeClasses[size], variantClasses[variant], props.class)">
    <slot />
  </a>
  <button v-else :type="type" :disabled="disabled" :class="cn(baseClasses, sizeClasses[size], variantClasses[variant], props.class)">
    <slot />
  </button>
</template>
