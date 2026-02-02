<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  /** CSS variable name (e.g. --color-primary) */
  token: string;
  /** Display label */
  label?: string;
  /** Optional description */
  description?: string;
  /** Show border instead of background (for light colors) */
  variant?: 'fill' | 'border';
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  description: undefined,
  variant: 'fill',
});

const displayLabel = computed(() => props.label ?? props.token.replace('--color-', '').replace(/-/g, ' '));
</script>

<template>
  <div class="flex flex-col gap-1 min-w-[8rem]">
    <div
      class="h-14 rounded-lg transition-colors"
      :style="
        variant === 'fill'
          ? { backgroundColor: `var(${token})`, border: '1px solid var(--color-border)' }
          : { backgroundColor: 'var(--color-surface)', border: `3px solid var(${token})` }
      "
    />
    <div class="text-sm font-medium text-foreground">{{ displayLabel }}</div>
    <div v-if="description" class="text-xs text-muted">{{ description }}</div>
    <code class="text-xs text-muted font-mono truncate" :title="token">{{ token }}</code>
  </div>
</template>
