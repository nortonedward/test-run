interface Props {
    /** Bound value for v-model. */
    modelValue?: string;
    /** Input type (text, email, password, etc.). */
    type?: string;
    /** Placeholder text. */
    placeholder?: string;
    /** Disables interaction. */
    disabled?: boolean;
    /** Additional classes merged via cn(). */
    class?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    type: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLInputElement>;
export default _default;
