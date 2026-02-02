<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '../utils/cn';

interface Props {
  /** Current image URL or data URL (for v-model). */
  modelValue?: string;
  /** Accept attribute for file input (default: image/*). */
  accept?: string;
  /** Max file size in bytes (default: 2MB). */
  maxSize?: number;
  /** Aspect ratio hint: 'square' | 'wide' | 'tall' | 'free'. */
  aspect?: 'square' | 'wide' | 'tall' | 'free';
  /** Disables interaction. */
  disabled?: boolean;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  accept: 'image/*',
  maxSize: 2 * 1024 * 1024,
  aspect: 'free',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  error: [message: string];
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);

const handleFile = (file: File | null) => {
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    emit('error', 'Please select an image file.');
    return;
  }
  if (file.size > props.maxSize) {
    emit('error', `Image must be under ${Math.round(props.maxSize / 1024 / 1024)}MB.`);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const result = reader.result as string;
    emit('update:modelValue', result);
  };
  reader.readAsDataURL(file);
};

const onInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  handleFile(file ?? null);
  input.value = '';
};

const onDrop = (e: DragEvent) => {
  isDragging.value = false;
  e.preventDefault();
  if (props.disabled) return;
  const file = e.dataTransfer?.files?.[0];
  handleFile(file ?? null);
};

const onDragOver = (e: DragEvent) => {
  e.preventDefault();
  if (props.disabled) return;
  isDragging.value = true;
};

const onDragLeave = () => {
  isDragging.value = false;
};

const triggerInput = () => {
  if (props.disabled) return;
  inputRef.value?.click();
};

const baseClasses =
  'relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed transition-colors duration-[var(--duration-normal)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50';

const aspectClasses = {
  square: 'aspect-square',
  wide: 'aspect-video',
  tall: 'aspect-[3/4]',
  free: '',
};
</script>

<template>
  <div
    :class="[
      baseClasses,
      aspectClasses[aspect],
      isDragging ? 'border-accent bg-primary-accent/20' : 'border-border bg-muted/10 hover:border-muted hover:bg-muted/20',
      props.class,
    ]"
    role="button"
    tabindex="0"
    :aria-label="modelValue ? 'Change image' : 'Upload image'"
    @click="triggerInput"
    @keydown.enter.space.prevent="triggerInput"
    @drop="onDrop"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
  >
    <input
      ref="inputRef"
      type="file"
      :accept="accept"
      class="sr-only"
      aria-hidden
      @input="onInput"
    />
    <template v-if="modelValue">
      <img
        :src="modelValue"
        alt="Preview"
        class="size-full object-cover"
      />
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100"
        aria-hidden
      >
        <span class="rounded-lg bg-surface/90 px-3 py-1.5 text-sm font-medium text-foreground">
          Change
        </span>
      </div>
    </template>
    <template v-else>
      <span class="text-muted" aria-hidden>
        <slot name="empty">
          Drop image or click to upload
        </slot>
      </span>
    </template>
  </div>
</template>
