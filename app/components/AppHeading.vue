<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '~/utils/cn';

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Optional muted subtext shown below the heading */
  muted?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), { level: 1 });

const sizeClasses: Record<number, string> = {
  1: 'text-fluid-2xl font-bold',
  2: 'text-fluid-xl font-bold',
  3: 'text-fluid-lg font-semibold',
  4: 'text-fluid-base font-semibold',
  5: 'text-fluid-base font-medium',
  6: 'text-sm font-medium',
};

const tag = computed(() => `h${props.level}`);
</script>

<template>
  <div>
    <component
      :is="tag"
      :class="cn('text-foreground', sizeClasses[props.level], props.class)"
    >
      <slot />
    </component>
    <p
      v-if="props.muted ?? $slots.muted"
      class="mt-1 text-fluid-base text-muted"
    >
      <slot name="muted">{{ props.muted }}</slot>
    </p>
  </div>
</template>
