<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { cn } from '../utils/cn';

export interface Tab {
  id: string;
  label: string;
  /** Disables this tab. */
  disabled?: boolean;
}

type TabVariant = 'underline' | 'lift' | 'box';
type TabSize = 'sm' | 'md' | 'lg';

interface Props {
  /** Array of tab definitions. */
  tabs: Tab[];
  /** Bound active tab id for v-model. */
  modelValue?: string;
  /** Visual style: underline (sliding indicator), lift (raised active), box (contained). */
  variant?: TabVariant;
  /** Size of tab buttons. */
  size?: TabSize;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  variant: 'underline',
  size: 'md',
});

const emit = defineEmits<{
  'update:modelValue': [id: string];
}>();

const activeId = computed(() => props.modelValue || props.tabs[0]?.id);
const tabRefs = ref<Record<string, HTMLElement | null>>({});
const listRef = ref<HTMLElement | null>(null);
const indicatorStyle = ref<{ left: string; width: string } | null>(null);

function select(id: string) {
  const tab = props.tabs.find((t) => t.id === id);
  if (tab?.disabled) return;
  emit('update:modelValue', id);
}

function setTabRef(id: string, el: HTMLElement | null) {
  tabRefs.value[id] = el;
}

function updateIndicator() {
  if (props.variant !== 'underline') return;
  const el = tabRefs.value[activeId.value];
  const list = listRef.value;
  if (!el || !list) {
    indicatorStyle.value = null;
    return;
  }
  const listRect = list.getBoundingClientRect();
  const tabRect = el.getBoundingClientRect();
  indicatorStyle.value = {
    left: `${tabRect.left - listRect.left}px`,
    width: `${tabRect.width}px`,
  };
}

watch(activeId, () => {
  nextTick(updateIndicator);
});

watch(
  () => props.tabs,
  () => nextTick(updateIndicator),
  { deep: true },
);

let resizeObserver: ResizeObserver | null = null;
let observedEl: HTMLElement | null = null;
onMounted(() => {
  nextTick(() => {
    updateIndicator();
    resizeObserver = new ResizeObserver(updateIndicator);
    if (listRef.value) {
      observedEl = listRef.value;
      resizeObserver.observe(observedEl);
    }
  });
});
onUnmounted(() => {
  if (resizeObserver && observedEl) resizeObserver.unobserve(observedEl);
});

const sizeClasses: Record<TabSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-5 py-3 text-lg',
};

const baseTabClasses =
  'relative flex items-center justify-center gap-2 font-medium transition-all duration-[var(--duration-normal)] [transition-timing-function:var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50';
</script>

<template>
  <div :class="cn('flex flex-col', props.class)">
    <!-- Tab list -->
    <div
      ref="listRef"
      class="relative flex"
      :class="{
        'border-b border-border': variant === 'underline',
        'gap-1 rounded-lg border border-border bg-muted/20 p-1': variant === 'box',
        'gap-0.5': variant === 'lift',
      }"
      role="tablist"
    >
      <!-- Underline variant: sliding indicator -->
      <div
        v-if="variant === 'underline' && indicatorStyle"
        class="ui-tabs-indicator absolute bottom-0 h-0.5 bg-accent transition-all duration-[var(--duration-normal)] [transition-timing-function:var(--ease-out)]"
        :style="indicatorStyle"
        aria-hidden="true"
      />

      <button
        v-for="tab in tabs"
        :key="tab.id"
        :id="`tab-${tab.id}`"
        type="button"
        role="tab"
        :aria-selected="activeId === tab.id"
        :aria-disabled="tab.disabled"
        :disabled="tab.disabled"
        :ref="(el) => setTabRef(tab.id, el as HTMLElement | null)"
        :class="
          cn(
            baseTabClasses,
            sizeClasses[size],
            variant === 'underline' && [
              'rounded-t-md',
              activeId === tab.id ? 'text-foreground' : 'text-muted hover:text-foreground',
            ],
            variant === 'lift' && [
              'rounded-lg',
              activeId === tab.id
                ? 'bg-surface text-foreground shadow-[var(--shadow-button)]'
                : 'text-muted hover:bg-surface/50 hover:text-foreground',
            ],
            variant === 'box' && [
              'rounded-md',
              activeId === tab.id
                ? 'bg-surface text-foreground shadow-[var(--shadow-button)]'
                : 'text-muted hover:bg-surface/50 hover:text-foreground',
            ],
          )
        "
        @click="select(tab.id)"
      >
        <slot name="tab" :tab="tab" :active="activeId === tab.id">
          {{ tab.label }}
        </slot>
      </button>
    </div>

    <!-- Tab panel with transition -->
    <Transition
      name="ui-tabs-panel"
      mode="out-in"
    >
      <div
        :key="activeId"
        class="mt-4"
        role="tabpanel"
        :aria-labelledby="`tab-${activeId}`"
      >
        <slot :name="activeId" />
      </div>
    </Transition>
  </div>
</template>
