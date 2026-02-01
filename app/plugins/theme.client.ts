/**
 * Apply theme (dark/light) before first paint to avoid flash.
 * Reads localStorage and system preference; sets .dark on <html>.
 */
const STORAGE_KEY = 'app-theme';

function getStoredTheme(): 'light' | 'dark' | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === 'light' || raw === 'dark') return raw;
  return null;
}

function getSystemPreference(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default defineNuxtPlugin(() => {
  const theme = getStoredTheme() ?? getSystemPreference();
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  root.setAttribute('data-theme', theme);
});
