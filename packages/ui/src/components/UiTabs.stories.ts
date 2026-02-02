import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiTabs from './UiTabs.vue';

const tabs = [
  { id: 'one', label: 'Tab One' },
  { id: 'two', label: 'Tab Two' },
  { id: 'three', label: 'Tab Three' },
];

const meta: Meta<typeof UiTabs> = {
  component: UiTabs,
  title: 'UI/UiTabs',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { UiTabs },
    setup() {
      const active = ref('one');
      return { active, tabs };
    },
    template: `
      <UiTabs v-model="active" :tabs="tabs" class="max-w-md">
        <template #one>
          <p>Content for tab one.</p>
        </template>
        <template #two>
          <p>Content for tab two.</p>
        </template>
        <template #three>
          <p>Content for tab three.</p>
        </template>
      </UiTabs>
    `,
  }),
};
