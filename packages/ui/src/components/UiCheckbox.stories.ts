import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiCheckbox from './UiCheckbox.vue';

const meta: Meta<typeof UiCheckbox> = {
  component: UiCheckbox,
  title: 'UI/UiCheckbox',
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => ({
    components: { UiCheckbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <label class="flex items-center gap-2 cursor-pointer">
        <UiCheckbox v-model="checked" :disabled="args.disabled" />
        <span>Accept terms</span>
      </label>
    `,
  }),
};
