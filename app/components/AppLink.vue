<script setup lang="ts">
import { cn } from '~/utils/cn';

interface Props {
  to?: string;
  href?: string;
  class?: string;
}

const props = defineProps<Props>();

const baseClasses =
  'text-accent transition-colors duration-200 ease-out hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="cn(baseClasses, props.class)"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="cn(baseClasses, props.class)"
  >
    <slot />
  </a>
</template>
