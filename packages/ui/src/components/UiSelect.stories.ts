import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiSelect from './UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  title: 'UI/UiSelect',
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
    components: { UiSelect },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <UiSelect v-model="value" :disabled="args.disabled" class="max-w-xs">
        <option value="" disabled>Choose...</option>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </UiSelect>
    `,
  }),
};
