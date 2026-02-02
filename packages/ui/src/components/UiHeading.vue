<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../utils/cn';

interface Props {
  /** Heading level 1–6. */
  level?: 1 | 2 | 3 | 4 | 5 | 6 | string | number;
  /** Optional muted subtext shown below the heading. */
  muted?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), { level: 1 });

const levelNum = computed(() => {
  const l = props.level;
  const n = typeof l === 'string' ? parseInt(l, 10) : l;
  return (Number.isNaN(n) ? 1 : Math.max(1, Math.min(6, n))) as 1 | 2 | 3 | 4 | 5 | 6;
});

const sizeClasses: Record<number, string> = {
  1: 'text-2xl sm:text-3xl font-bold',
  2: 'text-xl sm:text-2xl font-bold',
  3: 'text-lg sm:text-xl font-semibold',
  4: 'text-base font-semibold',
  5: 'text-base font-medium',
  6: 'text-sm font-medium',
};

const tag = computed(() => `h${levelNum.value}`);
</script>

<template>
  <div>
    <component :is="tag" :class="cn('text-foreground', sizeClasses[levelNum], props.class)">
      <slot />
    </component>
    <p v-if="props.muted ?? $slots.muted" class="mt-1 text-base text-muted">
      <slot name="muted">{{ props.muted }}</slot>
    </p>
  </div>
</template>
