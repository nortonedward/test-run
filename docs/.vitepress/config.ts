import { defineConfig } from 'vitepress';
import { resolve } from 'path';

export default defineConfig({
  title: 'UI Library',
  description: 'Japanese-inspired Vue/Nuxt component library',
  ignoreDeadLinks: true, // Storybook links (localhost:6006) are unavailable during docs build
  vite: {
    resolve: {
      alias: [
        {
          find: '@cursor-run/ui/styles',
          replacement: resolve(__dirname, '../../packages/ui/styles/tokens.css'),
        },
        {
          find: '@cursor-run/ui',
          replacement: resolve(__dirname, '../../packages/ui/src/index.ts'),
        },
      ],
    },
  },
  themeConfig: {
    nav: [
      { text: 'Philosophy', link: '/philosophy' },
      { text: 'Tokens', link: '/tokens' },
      { text: 'Colors & Themes', link: '/colors-themes' },
      { text: 'Components', link: '/components/button' },
      { text: 'Install', link: '/install' },
      { text: 'Storybook', link: 'http://localhost:6006', target: '_blank' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Philosophy', link: '/philosophy' },
          { text: 'Tokens', link: '/tokens' },
          { text: 'Colors & Themes', link: '/colors-themes' },
          { text: 'Install', link: '/install' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Alert', link: '/components/alert' },
          { text: 'Button', link: '/components/button' },
          { text: 'Icon Button', link: '/components/icon-button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Container', link: '/components/container' },
          { text: 'Heading', link: '/components/heading' },
          { text: 'Input', link: '/components/input' },
          { text: 'Link', link: '/components/link' },
          { text: 'Radio', link: '/components/radio' },
          { text: 'Select', link: '/components/select' },
          { text: 'Stack', link: '/components/stack' },
          { text: 'Tabs', link: '/components/tabs' },
        ],
      },
    ],
  },
});
