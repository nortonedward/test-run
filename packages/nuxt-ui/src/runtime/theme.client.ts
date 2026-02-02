import { defineNuxtPlugin } from '#imports';

const STORAGE_KEY = 'ui-theme';

function getStoredTheme(): 'light' | 'dark' | null {
  if (import.meta.server) return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === 'light' || raw === 'dark') return raw;
  return null;
}

function getSystemPreference(): 'light' | 'dark' {
  if (import.meta.server) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default defineNuxtPlugin(() => {
  const stored = getStoredTheme();
  const theme = stored ?? getSystemPreference();
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  document.documentElement.setAttribute('data-theme', theme);
});
