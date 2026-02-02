import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UiAlert from './UiAlert.vue';

const meta: Meta<typeof UiAlert> = {
  component: UiAlert,
  title: 'UI/UiAlert',
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: `
      <UiAlert v-bind="args" class="max-w-md">
        <p>This is an alert message.</p>
      </UiAlert>
    `,
  }),
};
