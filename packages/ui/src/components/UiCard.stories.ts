import type { Meta, StoryObj } from '@storybook/vue3';
import UiCard from './UiCard.vue';

const meta: Meta<typeof UiCard> = {
  component: UiCard,
  title: 'UI/UiCard',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { UiCard },
    template: '<UiCard><p>Card content with default slot.</p></UiCard>',
  }),
};
