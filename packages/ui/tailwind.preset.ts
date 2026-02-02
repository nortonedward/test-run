import type { Config } from 'tailwindcss';

export const uiTailwindPreset: Partial<Config> = {
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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        button: 'var(--shadow-button)',
        'button-hover': 'var(--shadow-button-hover)',
        header: '0 1px 3px rgb(0 0 0 / 0.04)',
        'header-dark': '0 1px 3px rgb(0 0 0 / 0.2)',
      },
      transitionDuration: {
        DEFAULT: 'var(--duration-normal)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease-out)',
      },
    },
  },
};
