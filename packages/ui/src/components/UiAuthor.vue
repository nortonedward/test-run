<script setup lang="ts">
import { cn } from '../utils/cn';

interface Props {
  /** Avatar image URL. Falls back to initials from name when absent. */
  avatar?: string;
  /** Display name (e.g. username or "John Doe"). */
  name: string;
  /** Optional subtitle (e.g. timestamp, role). */
  subtitle?: string;
  /** Size of avatar and text scale. */
  size?: 'sm' | 'md' | 'lg';
  /** Additional classes merged via cn(). */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const sizeClasses = {
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
};

const textSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};
</script>

<template>
  <div :class="cn('flex items-center', sizeClasses[size], props.class)">
    <UiAvatar
      :src="avatar"
      :name="name"
      :size="size"
    />
    <div class="min-w-0 flex-1">
      <p :class="cn('truncate font-medium text-foreground', textSizeClasses[size])">
        {{ name }}
      </p>
      <p
        v-if="subtitle"
        :class="cn('truncate text-muted', textSizeClasses[size])"
      >
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>
