<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '../utils/cn';
import UiAvatar from './UiAvatar.vue';

interface Props {
  /** Current image URL or data URL (for v-model). */
  modelValue?: string;
  /** Display name for initials fallback. */
  name?: string;
  /** Size of the avatar. */
  size?: 'sm' | 'md' | 'lg';
  /** Max file size in bytes (default: 500KB for avatars). */
  maxSize?: number;
  /** Disables interaction. */
  disabled?: boolean;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  maxSize: 512 * 1024,
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  error: [message: string];
}>();

const inputRef = ref<HTMLInputElement | null>(null);

const sizeClasses = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
};

const resizeImage = (dataUrl: string, maxSize: number): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(dataUrl);
        return;
      }
      const dim = Math.min(img.width, img.height, maxSize);
      canvas.width = dim;
      canvas.height = dim;
      const sx = (img.width - dim) / 2;
      const sy = (img.height - dim) / 2;
      ctx.drawImage(img, sx, sy, dim, dim, 0, 0, dim, dim);
      resolve(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
};

const handleFile = async (file: File | null) => {
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    emit('error', 'Please select an image file.');
    return;
  }
  if (file.size > props.maxSize) {
    emit('error', `Image must be under ${Math.round(props.maxSize / 1024)}KB.`);
    return;
  }
  const reader = new FileReader();
  reader.onload = async () => {
    const dataUrl = reader.result as string;
    const resized = await resizeImage(dataUrl, props.size === 'sm' ? 64 : props.size === 'md' ? 128 : 192);
    emit('update:modelValue', resized);
  };
  reader.readAsDataURL(file);
};

const onInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  handleFile(file ?? null);
  input.value = '';
};

const triggerInput = () => {
  if (props.disabled) return;
  inputRef.value?.click();
};
</script>

<template>
  <div
    :class="cn('group relative inline-block', sizeClasses[size], props.class)"
    role="button"
    tabindex="0"
    :aria-label="modelValue ? 'Change avatar' : 'Upload avatar'"
    @click="triggerInput"
    @keydown.enter.space.prevent="triggerInput"
  >
    <input
      ref="inputRef"
      type="file"
      accept="image/*"
      class="sr-only"
      aria-hidden
      @input="onInput"
    />
    <UiAvatar
      :src="modelValue"
      :name="name"
      :size="size"
      class="ring-2 ring-surface"
    />
    <div
      :class="[
        'absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100',
        props.disabled && 'pointer-events-none',
      ]"
      aria-hidden
    >
      <span class="text-white/90" aria-hidden>
        <slot name="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="size === 'sm' ? 'size-4' : size === 'md' ? 'size-5' : 'size-6'"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
        </slot>
      </span>
    </div>
  </div>
</template>
