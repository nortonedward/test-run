import { onMounted, ref } from 'vue';

const STORAGE_KEY = 'app-theme';

type Theme = 'light' | 'dark';

function getStoredTheme(): Theme | null {
  if (import.meta.server) return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === 'light' || raw === 'dark') return raw;
  return null;
}

function getSystemPreference(): Theme {
  if (import.meta.server) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  if (import.meta.server) return;
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  root.setAttribute('data-theme', theme);
}

export function useDarkMode() {
  const isDark = ref(false);

  function setTheme(theme: Theme) {
    isDark.value = theme === 'dark';
    applyTheme(theme);
    if (!import.meta.server) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }

  function toggle() {
    setTheme(isDark.value ? 'light' : 'dark');
  }

  onMounted(() => {
    isDark.value = document.documentElement.classList.contains('dark');
    const stored = getStoredTheme();
    if (!stored && !import.meta.server) {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      media.addEventListener('change', (e) => {
        const next: Theme = e.matches ? 'dark' : 'light';
        setTheme(next);
      });
    }
  });

  return { isDark, setTheme, toggle };
}
