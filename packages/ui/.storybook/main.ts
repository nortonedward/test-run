import type { StorybookConfig } from '@storybook/vue3-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|vue)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    Object.assign(config.resolve.alias, {
      '@': resolve(__dirname, '../src'),
    });
    return config;
  },
};

export default config;
