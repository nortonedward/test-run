<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { CheckIcon } from '@heroicons/vue/24/solid';
import { cn } from '../utils/cn';

export interface SelectItem {
  value: string;
  label: string;
  /** Optional metadata for custom slots. */
  [key: string]: unknown;
}

interface Props {
  /** Bound value for v-model. Single: string; multiple: string[]. */
  modelValue?: string | string[];
  /** Options to display. Each must have value and label. */
  items: SelectItem[];
  /** Allow selecting multiple items. */
  multiple?: boolean;
  /** Placeholder when nothing selected. */
  placeholder?: string;
  /** Disables interaction. */
  disabled?: boolean;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Choose...',
  multiple: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]];
}>();

const isOpen = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);
const highlightedIndex = ref(-1);

const modelValueArray = computed(() => {
  const v = props.modelValue;
  if (props.multiple) return Array.isArray(v) ? v : typeof v === 'string' ? [v] : [];
  return Array.isArray(v) ? v.slice(0, 1) : typeof v === 'string' ? [v] : [];
});

const selectedItem = computed(() =>
  props.items.find((item) => item.value === props.modelValue),
);

const selectedItems = computed(() =>
  props.items.filter((item) => modelValueArray.value.includes(item.value)),
);

const displayLabel = computed(() => {
  if (props.multiple) {
    const labels = selectedItems.value.map((i) => i.label);
    if (labels.length === 0) return props.placeholder;
    if (labels.length <= 2) return labels.join(', ');
    return `${labels.length} selected`;
  }
  return selectedItem.value?.label ?? props.placeholder;
});

function isSelected(item: SelectItem) {
  return modelValueArray.value.includes(item.value);
}

function open() {
  if (props.disabled) return;
  isOpen.value = true;
  const firstSelected = props.items.findIndex((i) =>
    modelValueArray.value.includes(i.value),
  );
  highlightedIndex.value = firstSelected >= 0 ? firstSelected : 0;
}

function close() {
  isOpen.value = false;
  highlightedIndex.value = -1;
}

function select(item: SelectItem) {
  if (props.multiple) {
    const current = [...modelValueArray.value];
    const idx = current.indexOf(item.value);
    const next =
      idx >= 0 ? current.filter((_, i) => i !== idx) : [...current, item.value];
    emit('update:modelValue', next);
  } else {
    emit('update:modelValue', item.value);
    close();
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      open();
    }
    return;
  }

  switch (e.key) {
    case 'Escape':
      e.preventDefault();
      close();
      break;
    case 'ArrowDown':
      e.preventDefault();
      highlightedIndex.value = Math.min(
        highlightedIndex.value + 1,
        props.items.length - 1,
      );
      break;
    case 'ArrowUp':
      e.preventDefault();
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0);
      break;
    case 'Enter':
      e.preventDefault();
      if (props.items[highlightedIndex.value]) {
        select(props.items[highlightedIndex.value]);
      }
      break;
    case 'Tab':
      close();
      break;
  }
}

function handleClickOutside(e: MouseEvent) {
  const target = e.target as Node;
  if (
    isOpen.value &&
    triggerRef.value &&
    !triggerRef.value.contains(target) &&
    panelRef.value &&
    !panelRef.value.contains(target)
  ) {
    close();
  }
}

watch(isOpen, (open) => {
  if (open) {
    document.addEventListener('click', handleClickOutside, true);
  } else {
    document.removeEventListener('click', handleClickOutside, true);
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside, true);
});

const triggerClasses =
  'w-full flex items-center justify-between gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-left text-foreground shadow-[var(--shadow-button)] transition-shadow duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
const panelClasses =
  'absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-lg border border-border bg-surface py-1 shadow-[var(--shadow-card)] animate-[ui-fade-in_var(--duration-normal)_var(--ease-out)]';
const itemBaseClasses =
  'flex w-full cursor-pointer items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors duration-[var(--duration-fast)] focus:outline-none focus:bg-muted/15';
</script>

<template>
  <div
    :class="cn('relative', $props.class)"
    @keydown="handleKeydown"
  >
    <button
      ref="triggerRef"
      type="button"
      :disabled="disabled"
      :aria-expanded="isOpen"
      :aria-haspopup="'listbox'"
      :aria-label="displayLabel"
      :class="triggerClasses"
      @click="isOpen ? close() : open()"
    >
      <slot
        name="trigger"
        :selected="multiple ? selectedItems : selectedItem"
        :label="displayLabel"
      >
        <span :class="{ 'text-muted': modelValueArray.length === 0 }">{{
          displayLabel
        }}</span>
      </slot>
      <ChevronDownIcon
        :class="cn('size-5 shrink-0 text-muted transition-transform', isOpen && 'rotate-180')"
        aria-hidden
      />
    </button>

    <Transition name="ui-select">
      <ul
        v-show="isOpen"
        ref="panelRef"
        role="listbox"
        :aria-multiselectable="multiple"
        :aria-activedescendant="items[highlightedIndex] ? `ui-select-${items[highlightedIndex].value}` : undefined"
        :class="panelClasses"
      >
        <li
          v-for="(item, index) in items"
          :id="`ui-select-${item.value}`"
          :key="item.value"
          role="option"
          :aria-selected="isSelected(item)"
          :class="
            cn(
              itemBaseClasses,
              'ui-select-item',
              isSelected(item) && 'bg-primary-accent text-foreground',
              highlightedIndex === index && 'ui-select-item-highlighted',
            )
          "
          @click="select(item)"
          @mouseenter="highlightedIndex = index"
        >
          <slot name="item" :item="item" :selected="isSelected(item)">
            <span class="flex-1">{{ item.label }}</span>
            <CheckIcon
              v-if="isSelected(item)"
              class="size-4 shrink-0 text-accent"
              aria-hidden
            />
          </slot>
        </li>
      </ul>
    </Transition>
  </div>
</template>
