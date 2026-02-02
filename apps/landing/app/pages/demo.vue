<template>
  <div class="mx-auto max-w-4xl space-y-16 pb-16">
    <section>
      <UiHeading :level="1" muted="Sanzo Wada–inspired palette. Components and tokens for this app.">
        design system
      </UiHeading>
      <p class="mt-4 max-w-2xl text-lg text-muted">
        Toggle dark mode in the header to see the full palette. Below: alerts, forms, tabs, and the component set.
      </p>
    </section>

    <!-- Alerts -->
    <section>
      <UiHeading :level="2" muted="UiAlert — semantic variants" class="mb-6"> alerts </UiHeading>
      <div class="space-y-4">
        <UiAlert variant="success">Changes saved. Your preferences have been updated.</UiAlert>
        <UiAlert variant="warning">You have unsaved changes. Save before leaving?</UiAlert>
        <UiAlert variant="error">Something went wrong. Please try again or contact support.</UiAlert>
        <UiAlert variant="info">New feature: dark mode is now available. Toggle it in the header.</UiAlert>
      </div>
    </section>

    <!-- UiSelect demo -->
    <section>
      <UiHeading :level="2" muted="UiSelect — custom dropdown with slots" class="mb-6"> select </UiHeading>
      <div class="flex flex-col gap-8 sm:flex-row sm:flex-wrap">
        <div class="min-w-0 flex-1 sm:max-w-xs">
          <p class="mb-2 text-sm text-muted">Default</p>
          <UiSelect
            v-model="form.topic"
            :items="topicItems"
            placeholder="Select topic…"
          />
        </div>
        <div class="min-w-0 flex-1 sm:max-w-xs">
          <p class="mb-2 text-sm text-muted">With item slot (icons)</p>
          <UiSelect
            v-model="form.priority"
            :items="priorityItems"
            placeholder="Priority…"
          >
            <template #item="{ item, selected }">
              <Icon :name="priorityIconNames[item.value]" class="size-5 shrink-0 text-muted" />
              <span class="flex-1">{{ item.label }}</span>
              <span v-if="selected" class="text-xs font-medium text-accent">✓</span>
            </template>
          </UiSelect>
        </div>
        <div class="min-w-0 flex-1 sm:max-w-xs">
          <p class="mb-2 text-sm text-muted">Multiple selection</p>
          <UiSelect
            v-model="form.topics"
            :items="topicItems"
            :multiple="true"
            placeholder="Choose one or more…"
          />
        </div>
      </div>
    </section>

    <!-- Form demo -->
    <section>
      <UiHeading :level="2" muted="UiInput, UiSelect, UiCheckbox, UiRadio" class="mb-6"> form </UiHeading>
      <UiCard class="max-w-md">
        <form class="space-y-4" @submit.prevent>
          <div>
            <label class="mb-1.5 block text-sm font-medium text-foreground">Name</label>
            <UiInput v-model="form.name" placeholder="Your name" />
          </div>
          <div>
            <label class="mb-1.5 block text-sm font-medium text-foreground">Email</label>
            <UiInput v-model="form.email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label class="mb-1.5 block text-sm font-medium text-foreground">Topic</label>
            <UiSelect
              v-model="form.topic"
              :items="topicItems"
              placeholder="Select…"
            />
          </div>
          <div class="flex items-center gap-3">
            <UiCheckbox v-model="form.newsletter" />
            <label class="text-sm text-foreground">Subscribe to updates</label>
          </div>
          <div>
            <span class="mb-2 block text-sm font-medium text-foreground">Preferred contact</span>
            <div class="flex gap-6">
              <label class="flex cursor-pointer items-center gap-2">
                <UiRadio v-model="form.contact" value="email" />
                <span class="text-sm">Email</span>
              </label>
              <label class="flex cursor-pointer items-center gap-2">
                <UiRadio v-model="form.contact" value="phone" />
                <span class="text-sm">Phone</span>
              </label>
            </div>
          </div>
          <div class="flex gap-3 pt-2">
            <UiButton type="submit" variant="primary"> Submit </UiButton>
            <UiButton type="button" variant="secondary"> Cancel </UiButton>
          </div>
        </form>
      </UiCard>
    </section>

    <!-- Tabs -->
    <section>
      <UiHeading :level="2" muted="UiTabs — slot per tab" class="mb-6"> tabs </UiHeading>
      <UiCard>
        <UiTabs v-model="activeTab" :tabs="tabs" variant="underline">
          <template #overview>
            <p class="text-muted">
              Overview content. Each tab uses a named slot. Switch tabs to see different content.
            </p>
          </template>
          <template #components>
            <div class="space-y-3">
              <p class="text-muted">Available components:</p>
              <ul class="list-inside list-disc text-muted">
                <li>UiButton, UiIconButton</li>
                <li>UiInput, UiSelect, UiCheckbox, UiRadio</li>
                <li>UiAlert, UiCard, UiTabs</li>
                <li>UiHeading, UiLink, UiStack, UiContainer</li>
              </ul>
            </div>
          </template>
          <template #tokens>
            <p class="font-mono text-sm text-muted">
              bg-surface · text-foreground · text-muted · border-border · shadow-card
            </p>
          </template>
        </UiTabs>
      </UiCard>
    </section>

    <!-- Buttons -->
    <section>
      <UiHeading :level="2" muted="UiButton — all variants" class="mb-6"> buttons </UiHeading>
      <div class="flex flex-wrap gap-4 rounded-lg border border-border bg-surface p-6 shadow-card">
        <UiButton variant="primary">primary</UiButton>
        <UiButton variant="secondary">secondary</UiButton>
        <UiButton variant="ghost">ghost</UiButton>
        <UiButton variant="success">success</UiButton>
        <UiButton variant="error">error</UiButton>
        <UiButton variant="warning">warning</UiButton>
        <UiButton variant="info">info</UiButton>
      </div>
      <div class="mt-4 flex flex-wrap gap-4">
        <UiButton variant="primary" size="sm"> small </UiButton>
        <UiButton variant="primary" size="md"> medium </UiButton>
        <UiButton variant="primary" size="lg"> large </UiButton>
        <UiButton variant="primary" disabled> disabled </UiButton>
      </div>
    </section>

    <!-- Cards & links -->
    <section>
      <UiHeading :level="2" muted="UiCard, UiLink" class="mb-6"> cards & links </UiHeading>
      <div class="grid gap-4 sm:grid-cols-2">
        <UiCard>
          <UiHeading :level="4" class="mb-2"> Card with link </UiHeading>
          <p class="mb-4 text-muted">Cards use surface, border, and shadow tokens. Hover for shadow lift.</p>
          <UiLink to="/">← Back home</UiLink>
        </UiCard>
        <UiCard>
          <UiHeading :level="4" class="mb-2"> Another card </UiHeading>
          <p class="text-muted">Reusable. Same component, different content.</p>
        </UiCard>
      </div>
    </section>

    <!-- Colors -->
    <section>
      <UiHeading :level="2" muted="Semantic tokens — bg-*, text-*, border-*" class="mb-6"> palette </UiHeading>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        <div
          v-for="swatch in colorSwatches"
          :key="swatch.name"
          class="overflow-hidden rounded-lg border border-border shadow-card"
        >
          <div class="h-16 w-full" :style="{ background: `var(--color-${swatch.cssVar})` }" />
          <div class="bg-surface px-3 py-2">
            <span class="text-base font-medium text-foreground">{{ swatch.name }}</span>
            <p class="font-mono text-xs text-muted">{{ swatch.class }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section>
      <UiHeading :level="2" muted="UiHeading, text utilities" class="mb-6"> type </UiHeading>
      <div class="space-y-4 rounded-lg border border-border bg-surface p-6 shadow-card">
        <UiHeading :level="1">Heading 1</UiHeading>
        <UiHeading :level="2">Heading 2</UiHeading>
        <UiHeading :level="3">Heading 3</UiHeading>
        <p class="text-base text-foreground">Body text — text-base text-foreground</p>
        <p class="text-base text-muted">Muted — text-muted</p>
      </div>
    </section>

    <!-- Reference -->
    <section>
      <UiHeading :level="2" muted="Copy-paste class names" class="mb-6"> token reference </UiHeading>
      <UiCard class="font-mono text-sm">
        <pre class="whitespace-pre-wrap text-muted">{{ cheatSheet }}</pre>
      </UiCard>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  topic: '',
  topics: [] as string[],
  priority: '',
  newsletter: false,
  contact: 'email',
});

const topicItems = [
  { value: 'general', label: 'General' },
  { value: 'support', label: 'Support' },
  { value: 'feedback', label: 'Feedback' },
];

const priorityItems = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const priorityIconNames: Record<string, string> = {
  low: 'lucide:flag',
  medium: 'lucide:alert-triangle',
  high: 'lucide:check-circle',
};

const activeTab = ref('overview');
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'components', label: 'Components' },
  { id: 'tokens', label: 'Tokens' },
];

const colorSwatches = [
  { name: 'background', cssVar: 'background', class: 'bg-background' },
  { name: 'surface', cssVar: 'surface', class: 'bg-surface' },
  { name: 'foreground', cssVar: 'foreground', class: 'text-foreground' },
  { name: 'muted', cssVar: 'muted', class: 'text-muted' },
  { name: 'border', cssVar: 'border', class: 'border-border' },
  { name: 'primary', cssVar: 'primary', class: 'bg-primary' },
  { name: 'secondary', cssVar: 'secondary', class: 'bg-secondary' },
  { name: 'success', cssVar: 'success', class: 'bg-success' },
  { name: 'error', cssVar: 'error', class: 'bg-error' },
];

const cheatSheet = `bg-background  bg-surface  text-foreground  text-muted
border-border  bg-primary  bg-secondary  bg-success  bg-error

text-base  text-lg  text-xl  text-2xl  font-sans
shadow-card  shadow-card-hover  shadow-button
rounded-lg  rounded-xl`;
</script>
