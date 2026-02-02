import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import UiTabs from './UiTabs.vue';
import type { Tab } from './UiTabs.vue';

const tabs: Tab[] = [
  { id: 'one', label: 'Tab One' },
  { id: 'two', label: 'Tab Two' },
  { id: 'three', label: 'Tab Three' },
];

const tabsWithDisabled: Tab[] = [
  { id: 'one', label: 'Tab One' },
  { id: 'two', label: 'Tab Two', disabled: true },
  { id: 'three', label: 'Tab Three' },
];

const meta: Meta<typeof UiTabs> = {
  component: UiTabs,
  title: 'UI/UiTabs',
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'lift', 'box'],
      description: 'Visual style of the tab bar',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of tab buttons',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'underline',
    size: 'md',
  },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      const active = ref('one');
      return { active, tabs, args };
    },
    template: `
      <UiTabs v-model="active" :tabs="tabs" v-bind="args" class="max-w-md">
        <template #one>
          <p>Content for tab one. The underline slides smoothly when switching tabs.</p>
        </template>
        <template #two>
          <p>Content for tab two. Panel content fades and slides on change.</p>
        </template>
        <template #three>
          <p>Content for tab three.</p>
        </template>
      </UiTabs>
    `,
  }),
};

export const Underline: Story = {
  args: { variant: 'underline' },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      const active = ref('one');
      return { active, tabs, args };
    },
    template: `
      <UiTabs v-model="active" :tabs="tabs" v-bind="args" class="max-w-md">
        <template #one><p>Underline variant with sliding accent indicator.</p></template>
        <template #two><p>Like Vuetify or Material Design tabs.</p></template>
        <template #three><p>Clear visual feedback when switching.</p></template>
      </UiTabs>
    `,
  }),
};

export const Lift: Story = {
  args: { variant: 'lift' },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      const active = ref('one');
      return { active, tabs, args };
    },
    template: `
      <UiTabs v-model="active" :tabs="tabs" v-bind="args" class="max-w-md">
        <template #one><p>Lift variant — active tab is raised with shadow.</p></template>
        <template #two><p>Similar to DaisyUI tabs-lift.</p></template>
        <template #three><p>Good for contained card-style layouts.</p></template>
      </UiTabs>
    `,
  }),
};

export const Box: Story = {
  args: { variant: 'box' },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      const active = ref('one');
      return { active, tabs, args };
    },
    template: `
      <UiTabs v-model="active" :tabs="tabs" v-bind="args" class="max-w-md">
        <template #one><p>Box variant — tabs sit in a rounded container.</p></template>
        <template #two><p>Active tab has background and shadow.</p></template>
        <template #three><p>Compact, contained look.</p></template>
      </UiTabs>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { UiTabs },
    setup() {
      const activeSm = ref('one');
      const activeMd = ref('one');
      const activeLg = ref('one');
      return { activeSm, activeMd, activeLg, tabs };
    },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <p class="mb-2 text-sm text-muted">Small</p>
          <UiTabs v-model="activeSm" :tabs="tabs" size="sm" class="max-w-md">
            <template #one><p>Small tabs.</p></template>
            <template #two><p>Content.</p></template>
            <template #three><p>Content.</p></template>
          </UiTabs>
        </div>
        <div>
          <p class="mb-2 text-sm text-muted">Medium (default)</p>
          <UiTabs v-model="activeMd" :tabs="tabs" size="md" class="max-w-md">
            <template #one><p>Medium tabs.</p></template>
            <template #two><p>Content.</p></template>
            <template #three><p>Content.</p></template>
          </UiTabs>
        </div>
        <div>
          <p class="mb-2 text-sm text-muted">Large</p>
          <UiTabs v-model="activeLg" :tabs="tabs" size="lg" class="max-w-md">
            <template #one><p>Large tabs.</p></template>
            <template #two><p>Content.</p></template>
            <template #three><p>Content.</p></template>
          </UiTabs>
        </div>
      </div>
    `,
  }),
};

export const WithDisabled: Story = {
  render: () => ({
    components: { UiTabs },
    setup() {
      const active = ref('one');
      return { active, tabsWithDisabled };
    },
    template: `
      <UiTabs v-model="active" :tabs="tabsWithDisabled" class="max-w-md">
        <template #one><p>First tab.</p></template>
        <template #two><p>This tab is disabled.</p></template>
        <template #three><p>Third tab.</p></template>
      </UiTabs>
    `,
  }),
};

export const CustomTabSlot: Story = {
  render: () => ({
    components: { UiTabs },
    setup() {
      const active = ref('one');
      return { active, tabs };
    },
    template: `
      <UiTabs v-model="active" :tabs="tabs" class="max-w-md">
        <template #tab="{ tab, active: isActive }">
          <span :class="isActive ? 'font-semibold' : ''">{{ tab.label }}</span>
          <span v-if="isActive" class="text-accent">●</span>
        </template>
        <template #one><p>Custom tab slot with active indicator.</p></template>
        <template #two><p>Use the #tab slot to customize tab content.</p></template>
        <template #three><p>Receives tab and active props.</p></template>
      </UiTabs>
    `,
  }),
};
