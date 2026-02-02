import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/vue/24/outline';
import UiSelect from './UiSelect.vue';
import type { SelectItem } from './UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  title: 'UI/UiSelect',
  argTypes: {
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const simpleItems: SelectItem[] = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
];

export const Default: Story = {
  args: {
    disabled: false,
    placeholder: 'Choose...',
    items: simpleItems,
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <UiSelect v-model="value" :items="args.items" :placeholder="args.placeholder" :disabled="args.disabled" class="max-w-xs" />
    `,
  }),
};

const itemsWithIcons: SelectItem[] = [
  { value: 'profile', label: 'Profile' },
  { value: 'settings', label: 'Settings' },
  { value: 'signout', label: 'Sign out' },
];

export const WithItemSlot: Story = {
  args: {
    items: itemsWithIcons,
    placeholder: 'Account actions...',
  },
  render: (args) => ({
    components: { UiSelect, UserCircleIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon },
    setup() {
      const value = ref('');
      const iconMap: Record<string, typeof UserCircleIcon> = {
        profile: UserCircleIcon,
        settings: Cog6ToothIcon,
        signout: ArrowRightOnRectangleIcon,
      };
      return { args, value, iconMap };
    },
    template: `
      <UiSelect v-model="value" :items="args.items" :placeholder="args.placeholder" class="max-w-xs">
        <template #item="{ item, selected }">
          <component :is="iconMap[item.value]" class="size-5 shrink-0 text-muted" />
          <span class="flex-1">{{ item.label }}</span>
          <span v-if="selected" class="text-accent text-xs font-medium">Selected</span>
        </template>
      </UiSelect>
    `,
  }),
};

export const Multiple: Story = {
  args: {
    items: simpleItems,
    placeholder: 'Choose one or more...',
    multiple: true,
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref<string[]>([]);
      return { args, value };
    },
    template: `
      <UiSelect v-model="value" :items="args.items" :placeholder="args.placeholder" :multiple="args.multiple" class="max-w-xs" />
    `,
  }),
};

export const WithTriggerSlot: Story = {
  args: {
    items: simpleItems,
    placeholder: 'Pick one...',
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref('b');
      return { args, value };
    },
    template: `
      <UiSelect v-model="value" :items="args.items" :placeholder="args.placeholder" class="max-w-xs">
        <template #trigger="{ label, selected }">
          <span class="font-medium">{{ label }}</span>
          <span v-if="selected" class="text-xs text-muted">({{ selected.value }})</span>
        </template>
      </UiSelect>
    `,
  }),
};

const statusItems: SelectItem[] = [
  { value: 'draft', label: 'Draft', color: 'text-muted' },
  { value: 'active', label: 'Active', color: 'text-success' },
  { value: 'archived', label: 'Archived', color: 'text-warning' },
];

export const CustomItemContent: Story = {
  args: {
    items: statusItems,
    placeholder: 'Select status...',
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <UiSelect v-model="value" :items="args.items" :placeholder="args.placeholder" class="max-w-xs">
        <template #item="{ item, selected }">
          <span :class="[item.color, 'flex-1 font-medium']">{{ item.label }}</span>
          <span v-if="selected" class="rounded bg-accent/20 px-2 py-0.5 text-xs text-accent">Current</span>
        </template>
      </UiSelect>
    `,
  }),
};
