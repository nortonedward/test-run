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
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-5xl">
      <AppHeading
        :level="2"
        :muted="subtext"
        class="mb-12 text-center"
      >
        {{ heading }}
      </AppHeading>
      <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(feature, i) in features"
          :key="i"
        >
          <AppCard>
            <AppHeading
              :level="4"
              class="mb-2"
            >
              {{ feature.title }}
            </AppHeading>
            <p class="text-fluid-base text-muted">
              {{ feature.description }}
            </p>
          </AppCard>
        </li>
      </ul>
    </div>
  </section>
</template>
