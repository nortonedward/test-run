import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import CursorRunUi from '@cursor-run/ui';
import '@cursor-run/ui/styles';
import './style.css';

const themeComponents = import.meta.glob('./components/*.vue', { eager: true });

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(CursorRunUi);
    for (const [path, mod] of Object.entries(themeComponents)) {
      const name = path.split('/').pop()?.replace('.vue', '') ?? '';
      if (name && mod && typeof mod === 'object' && 'default' in mod) {
        app.component(name, (mod as { default: unknown }).default);
      }
    }
  },
} satisfies Theme;
