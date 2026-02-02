import { Component } from 'vue';
import { ButtonVariant } from '../types/button';
interface Props {
    /** Icon component to render. Import from @heroicons/vue/24/outline (e.g. TrashIcon, PlusIcon). */
    icon: Component;
    /** Visual style; matches UiButton variants. */
    variant?: ButtonVariant;
    /** Size affects padding and icon scale. */
    size?: 'sm' | 'md' | 'lg';
    /** Accessible label for screen readers (required for icon-only buttons). */
    ariaLabel: string;
    /** Button type when rendered as native button. */
    type?: 'button' | 'submit';
    /** Disables interaction and reduces opacity. */
    disabled?: boolean;
    /** Additional classes merged via cn(). */
    class?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: ButtonVariant;
    type: "button" | "submit";
    size: "sm" | "md" | "lg";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;
