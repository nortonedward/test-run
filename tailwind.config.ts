import type { Config } from 'tailwindcss';

export default {
  content: [],
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
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-base': [
          'clamp(1rem, 0.65rem + 1.75vw, 1.125rem)',
          { lineHeight: '1.6' },
        ],
        'fluid-lg': [
          'clamp(1.125rem, 0.875rem + 1.25vw, 1.5rem)',
          { lineHeight: '1.3' },
        ],
        'fluid-xl': [
          'clamp(1.25rem, 1rem + 1.25vw, 1.875rem)',
          { lineHeight: '1.25' },
        ],
        'fluid-2xl': [
          'clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)',
          { lineHeight: '1.2' },
        ],
      },
      boxShadow: {
        surface: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        header: '0 1px 3px rgb(0 0 0 / 0.04)',
        'header-dark': '0 1px 3px rgb(0 0 0 / 0.2)',
        card: '0 1px 3px rgb(0 0 0 / 0.06), 0 4px 6px -2px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.03)',
        'card-hover': '0 4px 6px -2px rgb(0 0 0 / 0.07), 0 10px 15px -3px rgb(0 0 0 / 0.06)',
        button:
          '0 1px 2px rgb(0 0 0 / 0.05), 0 2px 4px rgb(0 0 0 / 0.08)',
        'button-hover': '0 2px 4px rgb(0 0 0 / 0.06), 0 4px 8px rgb(0 0 0 / 0.1)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
