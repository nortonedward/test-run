<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../utils/cn';

interface Tab {
  id: string;
  label: string;
}

interface Props {
  /** Array of tab definitions. */
  tabs: Tab[];
  /** Bound active tab id for v-model. */
  modelValue?: string;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
});

const emit = defineEmits<{
  'update:modelValue': [id: string];
}>();

const activeId = computed(() => props.modelValue || props.tabs[0]?.id);

function select(id: string) {
  emit('update:modelValue', id);
}

const baseTabClasses =
  'px-4 py-2 rounded-lg font-medium transition-all duration-[var(--duration-normal)] [transition-timing-function:var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
</script>

<template>
  <div :class="cn('flex flex-col', props.class)">
    <div class="flex gap-1 border-b border-border p-1" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        :aria-selected="activeId === tab.id"
        :class="
          cn(
            baseTabClasses,
            activeId === tab.id ? 'bg-surface text-foreground shadow-[var(--shadow-button)]' : 'hover:bg-surface/50 text-muted hover:text-foreground',
          )
        "
        @click="select(tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="mt-4" role="tabpanel">
      <slot :name="activeId" />
    </div>
  </div>
</template>
