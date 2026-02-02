<script setup lang="ts">
interface Feature {
  title: string;
  description: string;
}

interface Props {
  heading?: string;
  subtext?: string;
  features: Feature[];
}

withDefaults(defineProps<Props>(), {
  heading: 'Why this',
  subtext: 'A few reasons to get started.',
});
</script>

<template>
  <section class="bg-secondary-accent/20 py-16 sm:py-24">
    <div class="mx-auto max-w-5xl">
      <UiHeading :level="2" :muted="subtext" class="mb-12 text-center">
        {{ heading }}
      </UiHeading>
      <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(feature, i) in features" :key="i">
          <UiCard>
            <UiHeading :level="4" class="mb-2">
              {{ feature.title }}
            </UiHeading>
            <p class="text-base text-muted">
              {{ feature.description }}
            </p>
          </UiCard>
        </li>
      </ul>
    </div>
  </section>
</template>
