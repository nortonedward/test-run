import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import UiRadio from './UiRadio.vue';

const meta: Meta<typeof UiRadio> = {
  component: UiRadio,
  title: 'UI/UiRadio',
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
    components: { UiRadio },
    setup() {
      const value = ref('a');
      return { args, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="a" :disabled="args.disabled" />
          <span>Option A</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="b" :disabled="args.disabled" />
          <span>Option B</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="c" :disabled="args.disabled" />
          <span>Option C</span>
        </label>
      </div>
    `,
  }),
};
