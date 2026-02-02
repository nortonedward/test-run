<script setup lang="ts">
import { computed, ref } from 'vue';
import { cn } from '../utils/cn';

export type ImagePickerSource = 'upload' | 'url' | 'samples';

interface Props {
  /** Current image URL or data URL (for v-model). */
  modelValue?: string;
  /** Which sources to show: upload, url, samples. */
  sources?: ImagePickerSource[];
  /** Optional sample URLs to pick from. */
  samples?: string[];
  /** Aspect ratio for preview/upload area. */
  aspect?: 'square' | 'wide' | 'tall' | 'free';
  /** Max file size in bytes (default: 2MB). */
  maxSize?: number;
  /** When set, resize uploaded images to fit within this dimension (for avatars). */
  maxDimension?: number;
  /** Preview shape: rounded (default) or circle (for avatars). */
  previewShape?: 'rounded' | 'circle';
  /** Disables interaction. */
  disabled?: boolean;
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  sources: () => ['upload', 'url', 'samples'],
  aspect: 'free',
  maxSize: 2 * 1024 * 1024,
  previewShape: 'rounded',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  error: [message: string];
}>();

const activeSource = ref<ImagePickerSource>(props.sources[0] ?? 'upload');
const urlInput = ref('');
const uploadError = ref('');

const tabItems = computed(() => {
  const labels: Record<ImagePickerSource, string> = {
    upload: 'Upload',
    url: 'URL',
    samples: 'Samples',
  };
  return props.sources.map((id) => ({ id, label: labels[id] }));
});

const showTabs = computed(() => props.sources.length > 1);

const resizeImage = (dataUrl: string, maxDim: number): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(dataUrl);
        return;
      }
      const scale = Math.min(maxDim / img.width, maxDim / img.height, 1);
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
};

const setValue = async (value: string) => {
  let result = value;
  if (props.maxDimension && value.startsWith('data:')) {
    result = await resizeImage(value, props.maxDimension);
  }
  emit('update:modelValue', result);
  uploadError.value = '';
};

const onUpload = (value: string) => {
  setValue(value);
};

const onUrlSubmit = () => {
  const url = urlInput.value.trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) {
    emit('error', 'Please enter a valid URL starting with http:// or https://');
    return;
  }
  setValue(url);
};

const onSampleSelect = (url: string) => {
  setValue(url);
};

const onUploadError = (msg: string) => {
  uploadError.value = msg;
  emit('error', msg);
};
</script>

<template>
  <div :class="cn('space-y-4', props.class)">
    <!-- Preview when we have a value -->
    <div
      v-if="modelValue"
      class="relative overflow-hidden border border-border bg-muted/10"
      :class="[
        previewShape === 'circle' ? 'aspect-square max-w-[8rem] rounded-full' : 'rounded-lg',
        {
          'aspect-square max-w-[12rem]': aspect === 'square' && previewShape !== 'circle',
          'aspect-video': aspect === 'wide',
          'aspect-[3/4]': aspect === 'tall',
        },
      ]"
    >
      <img :src="modelValue" alt="Selected" class="size-full object-cover" />
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100"
      >
        <span class="rounded-lg bg-surface/90 px-3 py-1.5 text-sm font-medium text-foreground">
          Change below
        </span>
      </div>
    </div>

    <!-- With tabs: use UiTabs slots -->
    <UiTabs
      v-if="showTabs"
      v-model="activeSource"
      :tabs="tabItems"
      variant="box"
      size="sm"
    >
      <template v-if="sources.includes('upload')" #upload>
        <UiImageUpload
          :model-value="modelValue ? undefined : modelValue"
          :aspect="aspect"
          :max-size="maxSize"
          :disabled="disabled"
          @update:model-value="onUpload"
          @error="onUploadError"
        />
      </template>
      <template v-if="sources.includes('url')" #url>
        <div class="flex gap-2">
          <UiInput
            v-model="urlInput"
            type="url"
            placeholder="https://example.com/image.jpg"
            :disabled="disabled"
            class="min-w-0 flex-1"
            @keydown.enter="onUrlSubmit"
          />
          <UiButton variant="secondary" size="md" :disabled="disabled || !urlInput.trim()" @click="onUrlSubmit">
            Add
          </UiButton>
        </div>
      </template>
      <template v-if="sources.includes('samples')" #samples>
        <div v-if="$slots.samples" class="grid gap-2">
          <slot name="samples" />
        </div>
        <div v-else-if="samples?.length" class="flex flex-wrap gap-2">
          <button
            v-for="(url, i) in samples"
            :key="i"
            type="button"
            :class="[
              'overflow-hidden rounded-lg ring-2 transition-all',
              aspect === 'square' ? 'size-14 rounded-full' : 'aspect-video w-24',
              modelValue === url ? 'ring-accent ring-offset-2' : 'ring-transparent hover:ring-border',
            ]"
            :disabled="disabled"
            @click="onSampleSelect(url)"
          >
            <img :src="url" :alt="`Sample ${i + 1}`" class="size-full object-cover" loading="lazy" />
          </button>
        </div>
      </template>
    </UiTabs>

    <!-- Single source: no tabs -->
    <template v-else>
      <div v-if="sources.includes('upload')">
        <UiImageUpload
          :model-value="modelValue ? undefined : modelValue"
          :aspect="aspect"
          :max-size="maxSize"
          :disabled="disabled"
          @update:model-value="onUpload"
          @error="onUploadError"
        />
      </div>
      <div v-else-if="sources.includes('url')" class="flex gap-2">
        <UiInput
          v-model="urlInput"
          type="url"
          placeholder="https://example.com/image.jpg"
          :disabled="disabled"
          class="min-w-0 flex-1"
          @keydown.enter="onUrlSubmit"
        />
        <UiButton variant="secondary" size="md" :disabled="disabled || !urlInput.trim()" @click="onUrlSubmit">
          Add
        </UiButton>
      </div>
      <div v-else-if="sources.includes('samples')">
        <div v-if="$slots.samples" class="grid gap-2">
          <slot name="samples" />
        </div>
        <div v-else-if="samples?.length" class="flex flex-wrap gap-2">
          <button
            v-for="(url, i) in samples"
            :key="i"
            type="button"
            :class="[
              'overflow-hidden rounded-lg ring-2 transition-all',
              aspect === 'square' ? 'size-14 rounded-full' : 'aspect-video w-24',
              modelValue === url ? 'ring-accent ring-offset-2' : 'ring-transparent hover:ring-border',
            ]"
            :disabled="disabled"
            @click="onSampleSelect(url)"
          >
            <img :src="url" :alt="`Sample ${i + 1}`" class="size-full object-cover" loading="lazy" />
          </button>
        </div>
      </div>
    </template>
  </div>
</template>
