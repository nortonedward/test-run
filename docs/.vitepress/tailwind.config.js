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
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          accent: 'var(--color-primary-accent)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          accent: 'var(--color-secondary-accent)',
          foreground: 'var(--color-secondary-foreground)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          hover: 'var(--color-success-hover)',
          accent: 'var(--color-success-accent)',
          foreground: 'var(--color-success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          hover: 'var(--color-warning-hover)',
          accent: 'var(--color-warning-accent)',
          foreground: 'var(--color-warning-foreground)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          hover: 'var(--color-error-hover)',
          accent: 'var(--color-error-accent)',
          foreground: 'var(--color-error-foreground)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          hover: 'var(--color-info-hover)',
          accent: 'var(--color-info-accent)',
          foreground: 'var(--color-info-foreground)',
        },
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
