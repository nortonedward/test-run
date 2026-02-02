import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '../..');

/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    'flex',
    'flex-col',
    'flex-row',
    'flex-wrap',
    'gap-1',
    'gap-2',
    'gap-4',
    'gap-6',
    'rounded-lg',
    'border',
    'px-4',
    'py-3',
    'py-2',
    'py-2.5',
    'text-success',
    'text-warning',
    'text-error',
    'text-info',
    'border-success',
    'border-warning',
    'border-error',
    'border-info',
  ],
  content: [
    resolve(root, 'docs/components/**/*.md'),
    resolve(root, 'docs/*.md'),
    resolve(root, 'docs/.vitepress/**/*.{vue,ts,css}'),
    resolve(root, 'packages/ui/src/**/*.{vue,ts}'),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          foreground: 'var(--color-accent-foreground)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        button: 'var(--shadow-button)',
        'button-hover': 'var(--shadow-button-hover)',
      },
    },
  },
  plugins: [],
};
