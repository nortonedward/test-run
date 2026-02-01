<template>
  <div class="mx-auto max-w-4xl space-y-16 pb-16">
    <AppHeading
      :level="1"
      muted="theme tokens and components for building on this app."
    >
      theme reference
    </AppHeading>

    <!-- Colors -->
    <section>
      <AppHeading
        :level="2"
        muted="semantic tokens — use bg-*, text-*, border-*"
        class="mb-6"
      >
        colors
      </AppHeading>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        <div
          v-for="swatch in colorSwatches"
          :key="swatch.name"
          class="overflow-hidden rounded-lg border border-border shadow-card"
        >
          <div
            class="h-16 w-full"
            :style="{ background: `var(--color-${swatch.cssVar})` }"
          />
          <div class="bg-surface px-3 py-2">
            <span class="text-fluid-base font-medium text-foreground">{{
              swatch.name
            }}</span>
            <p class="font-mono text-xs text-muted">{{ swatch.class }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section>
      <AppHeading
        :level="2"
        muted="fluid-base, fluid-lg, fluid-xl, fluid-2xl"
        class="mb-6"
      >
        type
      </AppHeading>
      <div class="space-y-4 rounded-lg border border-border bg-surface p-6 shadow-card">
        <div>
          <AppHeading :level="1">heading 1</AppHeading>
          <p class="mt-1 font-mono text-xs text-muted">AppHeading :level="1"</p>
        </div>
        <div>
          <AppHeading :level="2">heading 2</AppHeading>
          <p class="mt-1 font-mono text-xs text-muted">AppHeading :level="2"</p>
        </div>
        <div>
          <AppHeading :level="3">heading 3</AppHeading>
          <p class="mt-1 font-mono text-xs text-muted">AppHeading :level="3"</p>
        </div>
        <div>
          <p class="text-fluid-base text-foreground">
            body — text-fluid-base text-foreground
          </p>
        </div>
        <p class="text-fluid-base text-muted">
          muted — text-muted
        </p>
      </div>
    </section>

    <!-- Buttons -->
    <section>
      <AppHeading
        :level="2"
        muted="AppButton — to, href, or native button"
        class="mb-6"
      >
        buttons
      </AppHeading>
      <div class="flex flex-wrap gap-4 rounded-lg border border-border bg-surface p-6 shadow-card">
        <AppButton variant="primary">primary</AppButton>
        <AppButton variant="secondary">secondary</AppButton>
        <AppButton
          variant="primary"
          to="#"
        >
          link (to)
        </AppButton>
      </div>
    </section>

    <!-- Links -->
    <section>
      <AppHeading
        :level="2"
        muted="AppLink — accent, hover state"
        class="mb-6"
      >
        links
      </AppHeading>
      <div class="rounded-lg border border-border bg-surface p-6 shadow-card">
        <AppLink to="/">go home</AppLink>
        <span class="mx-2 text-muted">·</span>
        <AppLink href="#">external</AppLink>
      </div>
    </section>

    <!-- Cards -->
    <section>
      <AppHeading
        :level="2"
        muted="AppCard — surface, border, shadow, hover"
        class="mb-6"
      >
        cards
      </AppHeading>
      <div class="grid gap-4 sm:grid-cols-2">
        <AppCard>
          <AppHeading
            :level="4"
            class="mb-2"
          >
            card title
          </AppHeading>
          <p class="text-fluid-base text-muted">
            slot content. rounded-xl, shadow-card, hover:shadow-card-hover.
          </p>
        </AppCard>
        <AppCard>
          <AppHeading
            :level="4"
            class="mb-2"
          >
            another card
          </AppHeading>
          <p class="text-fluid-base text-muted">
            same component, reusable.
          </p>
        </AppCard>
      </div>
    </section>

    <!-- Quick reference -->
    <section>
      <AppHeading
        :level="2"
        muted="copy-paste class names"
        class="mb-6"
      >
        token cheat sheet
      </AppHeading>
      <AppCard class="font-mono text-fluid-base">
        <pre class="whitespace-pre-wrap text-muted">{{ cheatSheet }}</pre>
      </AppCard>
    </section>
  </div>
</template>

<script setup lang="ts">
const colorSwatches = [
  { name: 'background', cssVar: 'background', class: 'bg-background' },
  { name: 'surface', cssVar: 'surface', class: 'bg-surface' },
  { name: 'foreground', cssVar: 'foreground', class: 'text-foreground' },
  { name: 'muted', cssVar: 'muted', class: 'text-muted' },
  { name: 'border', cssVar: 'border', class: 'border-border' },
  { name: 'accent', cssVar: 'accent', class: 'bg-accent' },
  { name: 'success', cssVar: 'success', class: 'bg-success' },
];

const cheatSheet = `bg-background  bg-surface  text-foreground  text-muted
border-border  bg-accent  text-accent  bg-success  text-success

text-fluid-base  text-fluid-lg  text-fluid-xl  text-fluid-2xl
font-sans

shadow-surface  shadow-card  shadow-card-hover  shadow-button
rounded-lg  rounded-xl`;
</script>
