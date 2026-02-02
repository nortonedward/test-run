import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import CursorRunUi from '@cursor-run/ui';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const cursorRunUi = (config.public as Record<string, unknown>).cursorRunUi as { prefix?: string } | undefined;
  nuxtApp.vueApp.use(CursorRunUi, { prefix: cursorRunUi?.prefix ?? 'Ui' });
});
