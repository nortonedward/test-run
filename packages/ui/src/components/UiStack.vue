<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../utils/cn';

interface Props {
  /** Vertical or horizontal layout. */
  direction?: 'vertical' | 'horizontal';
  /** Gap between children (uses --space-* tokens). */
  gap?: 2 | 4 | 6 | 8 | 12 | 16 | string | number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'vertical',
  gap: 4,
});

const gapNum = computed((): 2 | 4 | 6 | 8 | 12 | 16 => {
  const g = props.gap;
  const n = typeof g === 'string' ? parseInt(g, 10) : Number(g);
  const valid = [2, 4, 6, 8, 12, 16];
  return (valid.includes(n) ? n : 4) as 2 | 4 | 6 | 8 | 12 | 16;
});

const directionClasses = {
  vertical: 'flex flex-col',
  horizontal: 'flex flex-row',
};

const gapClasses: Record<number, string> = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
  12: 'gap-12',
  16: 'gap-16',
};
</script>

<template>
  <div :class="cn(directionClasses[props.direction], gapClasses[gapNum] ?? 'gap-4', props.class)">
    <slot />
  </div>
</template>
