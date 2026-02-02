import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UiButton from './UiButton.vue';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  title: 'UI/UiButton',
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Button</UiButton>',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { UiButton },
    template: `
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary">Primary</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
        <UiButton variant="ghost">Ghost</UiButton>
        <UiButton variant="success">Success</UiButton>
        <UiButton variant="error">Error</UiButton>
        <UiButton variant="warning">Warning</UiButton>
        <UiButton variant="info">Info</UiButton>
      </div>
    `,
  }),
};
