interface Props {
    /** Bound checked state for v-model. */
    modelValue?: boolean;
    /** Disables interaction. */
    disabled?: boolean;
    /** Additional classes merged via cn(). */
    class?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLInputElement>;
export default _default;
