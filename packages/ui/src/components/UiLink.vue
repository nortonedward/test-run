<script setup lang="ts">
import { cn } from '../utils/cn';

interface Props {
  /** Internal link destination. */
  to?: string;
  /** External link URL. */
  href?: string;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = defineProps<Props>();

const baseClasses =
  'text-accent transition-colors duration-[var(--duration-normal)] [transition-timing-function:var(--ease-out)] hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
</script>

<template>
  <a :href="props.href ?? props.to ?? '#'" :class="cn(baseClasses, props.class)">
    <slot />
  </a>
</template>
