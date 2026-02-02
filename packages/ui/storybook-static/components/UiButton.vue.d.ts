import { ButtonVariant } from '../types/button';
interface Props {
    /** Visual style; primary is main CTA, ghost is minimal. */
    variant?: ButtonVariant;
    /** Size affects padding and text scale. */
    size?: 'sm' | 'md' | 'lg';
    /** Button type when rendered as native button. */
    type?: 'button' | 'submit';
    /** Internal link destination (used as href when no router). */
    to?: string;
    /** External link destination. */
    href?: string;
    /** Disables interaction and reduces opacity. */
    disabled?: boolean;
    /** Additional classes merged via cn(). */
    class?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: ButtonVariant;
    size: "sm" | "md" | "lg";
    type: "button" | "submit";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
