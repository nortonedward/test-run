<script setup lang="ts">
import { cn } from '~/utils/cn';

interface Props {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  to?: string;
  href?: string;
  class?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
});

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 min-h-[2.75rem] text-fluid-base font-medium leading-tight transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50';

const variantClasses = {
  primary:
    'bg-[linear-gradient(to_bottom,var(--color-accent-top),var(--color-accent))] text-foreground shadow-button border border-black/10 hover:bg-[linear-gradient(to_bottom,var(--color-accent-hover-top),var(--color-accent-hover))] hover:shadow-button-hover active:shadow-button active:translate-y-px',
  secondary:
    'border border-border bg-surface text-foreground shadow-button hover:bg-surface hover:border-muted hover:shadow-button-hover active:translate-y-px',
};
</script>

<template>
  <NuxtLink
    v-if="to && !disabled"
    :to="to"
    :class="cn(baseClasses, variantClasses[variant], props.class)"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href && !disabled"
    :href="href"
    :class="cn(baseClasses, variantClasses[variant], props.class)"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="cn(baseClasses, variantClasses[variant], props.class)"
  >
    <slot />
  </button>
</template>
