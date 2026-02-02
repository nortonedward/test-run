import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  title: 'UI/UiButton',
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
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
