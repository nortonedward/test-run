<template>
  <div class="mx-auto max-w-4xl space-y-16 pb-16">
    <UiHeading :level="1" muted="theme tokens and components for building on this app."> theme reference </UiHeading>

    <!-- Colors -->
    <section>
      <UiHeading :level="2" muted="semantic tokens — use bg-*, text-*, border-*" class="mb-6"> colors </UiHeading>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        <div v-for="swatch in colorSwatches" :key="swatch.name" class="overflow-hidden rounded-lg border border-border shadow-card">
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
      <UiHeading :level="2" muted="text-base, text-lg, text-xl, text-2xl" class="mb-6"> type </UiHeading>
      <div class="space-y-4 rounded-lg border border-border bg-surface p-6 shadow-card">
        <div>
          <UiHeading :level="1">heading 1</UiHeading>
          <p class="mt-1 font-mono text-xs text-muted">UiHeading :level="1"</p>
        </div>
        <div>
          <UiHeading :level="2">heading 2</UiHeading>
          <p class="mt-1 font-mono text-xs text-muted">UiHeading :level="2"</p>
        </div>
        <div>
          <UiHeading :level="3">heading 3</UiHeading>
          <p class="mt-1 font-mono text-xs text-muted">UiHeading :level="3"</p>
        </div>
        <div>
          <p class="text-base text-foreground">body — text-base text-foreground</p>
        </div>
        <p class="text-base text-muted">muted — text-muted</p>
      </div>
    </section>

    <!-- Buttons -->
    <section>
      <UiHeading :level="2" muted="UiButton — to, href, or native button" class="mb-6"> buttons </UiHeading>
      <div class="flex flex-wrap gap-4 rounded-lg border border-border bg-surface p-6 shadow-card">
        <UiButton variant="primary">primary</UiButton>
        <UiButton variant="secondary">secondary</UiButton>
        <UiButton variant="primary" to="#"> link (to) </UiButton>
      </div>
    </section>

    <!-- Links -->
    <section>
      <UiHeading :level="2" muted="UiLink — accent, hover state" class="mb-6"> links </UiHeading>
      <div class="rounded-lg border border-border bg-surface p-6 shadow-card">
        <UiLink to="/">go home</UiLink>
        <span class="mx-2 text-muted">·</span>
        <UiLink href="#">external</UiLink>
      </div>
    </section>

    <!-- Cards -->
    <section>
      <UiHeading :level="2" muted="UiCard — surface, border, shadow, hover" class="mb-6"> cards </UiHeading>
      <div class="grid gap-4 sm:grid-cols-2">
        <UiCard>
          <UiHeading :level="4" class="mb-2"> card title </UiHeading>
          <p class="text-base text-muted">slot content. rounded-xl, shadow-card, hover:shadow-card-hover.</p>
        </UiCard>
        <UiCard>
          <UiHeading :level="4" class="mb-2"> another card </UiHeading>
          <p class="text-base text-muted">same component, reusable.</p>
        </UiCard>
      </div>
    </section>

    <!-- Quick reference -->
    <section>
      <UiHeading :level="2" muted="copy-paste class names" class="mb-6"> token cheat sheet </UiHeading>
      <UiCard class="font-mono text-base">
        <pre class="whitespace-pre-wrap text-muted">{{ cheatSheet }}</pre>
      </UiCard>
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

text-base  text-lg  text-xl  text-2xl
font-sans

shadow-card  shadow-card-hover  shadow-button
rounded-lg  rounded-xl`;
</script>
