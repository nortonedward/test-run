import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  title: 'UI/UiInput',
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    disabled: false,
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      const modelValue = ref('');
      return { args, modelValue };
    },
    template: `
      <UiInput
        v-model="modelValue"
        :placeholder="args.placeholder"
        :disabled="args.disabled"
      />
    `,
  }),
};
