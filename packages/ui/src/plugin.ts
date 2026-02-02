import type { App } from 'vue';
import * as components from './components';

export interface UiPluginOptions {
  prefix?: string;
}

export default {
  install(app: App, options: UiPluginOptions = {}) {
    const prefix = options.prefix ?? 'Ui';
    for (const [name, component] of Object.entries(components)) {
      if (component && name.startsWith('Ui')) {
        const registeredName = prefix === 'Ui' ? name : name.replace('Ui', prefix);
        app.component(registeredName, component);
      }
    }
  },
};
