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
        error: {
          DEFAULT: 'var(--color-error)',
          hover: 'var(--color-error-hover)',
          accent: 'var(--color-error-accent)',
          foreground: 'var(--color-error-foreground)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          hover: 'var(--color-warning-hover)',
          accent: 'var(--color-warning-accent)',
          foreground: 'var(--color-warning-foreground)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          hover: 'var(--color-info-hover)',
          accent: 'var(--color-info-accent)',
          foreground: 'var(--color-info-foreground)',
        },
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
