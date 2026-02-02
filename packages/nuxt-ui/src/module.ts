import { addPlugin, createResolver, addImports } from '@nuxt/kit';
import { defineNuxtModule } from '@nuxt/kit';

export interface ModuleOptions {
  /** Component name prefix. Default: Ui */
  prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@cursor-run/nuxt-ui',
    configKey: 'cursorRunUi',
  },
  defaults: {
    prefix: 'Ui',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.css = nuxt.options.css || [];
    nuxt.options.css.push('@cursor-run/ui/styles');

    nuxt.options.runtimeConfig.public = nuxt.options.runtimeConfig.public || {};
    (nuxt.options.runtimeConfig.public as Record<string, unknown>).cursorRunUi = {
      prefix: options.prefix,
    };

    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      mode: 'all',
    });

    addPlugin({
      src: resolver.resolve('./runtime/theme.client'),
      mode: 'client',
    });

    addImports({
      name: 'useDarkMode',
      from: '@cursor-run/ui',
    });
  },
});
