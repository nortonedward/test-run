import { App } from 'vue';
export interface UiPluginOptions {
    prefix?: string;
}
declare const _default: {
    install(app: App, options?: UiPluginOptions): void;
};
export default _default;
