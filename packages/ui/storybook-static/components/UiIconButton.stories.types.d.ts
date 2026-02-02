import { Component } from 'vue';
import { ButtonVariant } from '../types/button';
export declare const iconMap: {
    readonly TrashIcon: import('vue').FunctionalComponent<import('vue').HTMLAttributes & import('vue').VNodeProps, {}, any, {}>;
    readonly PlusIcon: import('vue').FunctionalComponent<import('vue').HTMLAttributes & import('vue').VNodeProps, {}, any, {}>;
    readonly PencilSquareIcon: import('vue').FunctionalComponent<import('vue').HTMLAttributes & import('vue').VNodeProps, {}, any, {}>;
    readonly Cog6ToothIcon: import('vue').FunctionalComponent<import('vue').HTMLAttributes & import('vue').VNodeProps, {}, any, {}>;
};
export type IconName = keyof typeof iconMap;
export declare const iconOptions: IconName[];
export type IconButtonStoryArgs = {
    icon: IconName;
    variant?: ButtonVariant;
    size?: 'sm' | 'md' | 'lg';
    ariaLabel: string;
    disabled?: boolean;
};
export type ResolvedIcon = (typeof iconMap)[IconName];
/** Resolves story arg (string key) to icon component. Uses markRaw so Vue doesn't proxy it (which causes [object Object]). */
export declare function resolveIconArg(icon: unknown): ResolvedIcon;
/** Storybook expects icon: Component; we use icon: IconName. This centralizes the assertion. */
type StorybookIconArgs = Omit<IconButtonStoryArgs, 'icon'> & {
    icon?: Component;
};
/**
 * Typed args for Storybook. Centralizes the type assertion needed because Storybook
 * infers args from component props (icon: Component) while we use string keys (icon: IconName).
 */
export declare function asStoryArgs(args: IconButtonStoryArgs): StorybookIconArgs;
export {};
