import type { Component } from 'vue';
import { markRaw } from 'vue';
import { TrashIcon, PlusIcon, PencilSquareIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';
import type { ButtonVariant } from '../types/button';

export const iconMap = {
  TrashIcon,
  PlusIcon,
  PencilSquareIcon,
  Cog6ToothIcon,
} as const;

export type IconName = keyof typeof iconMap;

export const iconOptions: IconName[] = Object.keys(iconMap) as IconName[];

export type IconButtonStoryArgs = {
  icon: IconName;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
  disabled?: boolean;
};

export type ResolvedIcon = (typeof iconMap)[IconName];

/** Resolves story arg (string key) to icon component. Uses markRaw so Vue doesn't proxy it (which causes [object Object]). */
export function resolveIconArg(icon: unknown): ResolvedIcon {
  if (icon == null || typeof iconMap === 'undefined') {
    return markRaw(TrashIcon);
  }
  if (typeof icon === 'string' && Object.hasOwn(iconMap, icon)) {
    return markRaw(iconMap[icon as IconName]);
  }
  return markRaw((icon as ResolvedIcon) ?? TrashIcon);
}

/** Storybook expects icon: Component; we use icon: IconName. This centralizes the assertion. */
type StorybookIconArgs = Omit<IconButtonStoryArgs, 'icon'> & { icon?: Component };

/**
 * Typed args for Storybook. Centralizes the type assertion needed because Storybook
 * infers args from component props (icon: Component) while we use string keys (icon: IconName).
 */
export function asStoryArgs(args: IconButtonStoryArgs): StorybookIconArgs {
  return args as unknown as StorybookIconArgs;
}

