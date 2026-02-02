# Install

## Vue 3

```bash
pnpm add @cursor-run/ui
```

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import CursorRunUi from '@cursor-run/ui';
import '@cursor-run/ui/styles';

const app = createApp(App);
app.use(CursorRunUi);
app.mount('#app');
```

```vue
<template>
  <UiButton variant="primary">Submit</UiButton>
</template>
```

## Nuxt

Add the module to your Nuxt config:

```bash
pnpm add @cursor-run/ui @cursor-run/nuxt-ui
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@cursor-run/nuxt-ui'],
});
```

The module injects CSS, registers components globally, and auto-imports `useDarkMode`. Use components directly:

```vue
<template>
  <UiButton variant="primary" to="/dashboard">Go</UiButton>
</template>
```

### Module options

| Option   | Type     | Default | Description           |
| -------- | -------- | ------- | --------------------- |
| `prefix` | `string` | `'Ui'`  | Component name prefix |

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@cursor-run/nuxt-ui'],
  cursorRunUi: {
    prefix: 'Ui',
  },
});
```
