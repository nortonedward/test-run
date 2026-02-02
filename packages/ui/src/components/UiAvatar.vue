<script setup lang="ts">
import { computed, ref } from 'vue';
import { cn } from '../utils/cn';

interface Props {
  /** Image URL. When absent, falls back to initials. */
  src?: string;
  /** Alt text for the image. */
  alt?: string;
  /** Display name — used to derive initials when src is absent (e.g. "John Doe" → "JD"). */
  name?: string;
  /** Explicit initials when name is not suitable (e.g. "JD"). Overrides name-derived initials. */
  initials?: string;
  /** Size of the avatar. */
  size?: 'sm' | 'md' | 'lg';
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const imgError = ref(false);

const derivedInitials = computed(() => {
  if (props.initials) return props.initials.slice(0, 2).toUpperCase();
  if (!props.name?.trim()) return '?';
  const parts = props.name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
});

const sizeClasses = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
};

const baseClasses =
  'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-accent font-medium text-foreground ring-2 ring-surface';
</script>

<template>
  <div
    :class="cn(baseClasses, sizeClasses[size], props.class)"
    role="img"
    :aria-label="alt || name || 'User avatar'"
  >
    <span
      :class="[
        'flex size-full items-center justify-center font-medium',
        src && !imgError ? 'hidden' : '',
      ]"
    >
      {{ derivedInitials }}
    </span>
    <img
      v-if="src"
      :src="src"
      :alt="alt ?? name ?? ''"
      :class="[imgError ? 'hidden' : '', 'size-full object-cover']"
      @error="imgError = true"
    />
  </div>
</template>
