import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { markRaw } from 'vue';
import { TrashIcon, PlusIcon, PencilSquareIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';
import UiIconButton from './UiIconButton.vue';
import { iconMap, asStoryArgs, type IconName } from './UiIconButton.stories.types';

const iconOptions = Object.keys(iconMap) as IconName[];

/** Mapping from string keys (control values) to icon components. Uses markRaw to avoid [object Object] display. */
const iconMapping: Record<string, unknown> = {};
for (const key of iconOptions) {
  iconMapping[key] = markRaw(iconMap[key]);
}

const meta: Meta<typeof UiIconButton> = {
  component: UiIconButton,
  title: 'UI/UiIconButton',
  parameters: {
    docs: {
      description: {
        component:
          'Icon-only button. Import icons from `@heroicons/vue/24/outline` and pass the component to the `icon` prop. Use the controls to toggle between Trash, Plus, Pencil, and Cog icons.',
      },
    },
  },
  argTypes: {
    icon: {
      control: 'select',
      options: iconOptions,
      mapping: iconMapping,
    },
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

const variants = ['primary', 'secondary', 'ghost', 'success', 'error', 'warning', 'info'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export const Default: Story = {
  args: asStoryArgs({
    icon: 'TrashIcon',
    variant: 'primary',
    size: 'md',
    ariaLabel: 'Delete',
    disabled: false,
  }),
  render: (args) => ({
    components: { UiIconButton },
    setup() {
      return { args };
    },
    template: '<UiIconButton v-bind="args" />',
  }),
};

export const Variants: Story = {
  args: asStoryArgs({
    icon: 'TrashIcon',
    ariaLabel: 'Action',
  }),
  render: (args) => ({
    components: { UiIconButton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-wrap gap-4 items-center">
        <UiIconButton v-for="v in variants" :key="v" v-bind="args" :variant="v" />
      </div>
    `,
    data: () => ({ variants }),
  }),
};

export const Sizes: Story = {
  args: asStoryArgs({
    icon: 'PlusIcon',
    variant: 'primary',
    ariaLabel: 'Add',
  }),
  render: (args) => ({
    components: { UiIconButton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-wrap gap-4 items-center">
        <UiIconButton v-for="s in sizes" :key="s" v-bind="args" :size="s" />
      </div>
    `,
    data: () => ({ sizes }),
  }),
};

export const WithControls: Story = {
  args: asStoryArgs({
    icon: 'Cog6ToothIcon',
    variant: 'primary',
    size: 'md',
    ariaLabel: 'Settings',
    disabled: false,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Use the icon and variant controls to see the button update instantly.',
      },
    },
  },
  render: (args) => ({
    components: { UiIconButton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-wrap gap-4 items-center">
        <UiIconButton v-bind="args" />
        <span class="text-sm text-muted-foreground">Toggle the icon or variant control to see it change instantly.</span>
      </div>
    `,
  }),
};
