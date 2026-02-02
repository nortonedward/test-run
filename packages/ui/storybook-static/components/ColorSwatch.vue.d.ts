interface Props {
    /** CSS variable name (e.g. --color-primary) */
    token: string;
    /** Display label */
    label?: string;
    /** Optional description */
    description?: string;
    /** Show border instead of background (for light colors) */
    variant?: 'fill' | 'border';
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    label: string;
    description: string;
    variant: "fill" | "border";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
