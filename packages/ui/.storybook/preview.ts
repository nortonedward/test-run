import type { Preview } from '@storybook/vue3-vite';
import '@cursor-run/ui/styles';
import '../styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
