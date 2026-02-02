<script setup lang="ts">
interface Props {
  headline: string;
  subtext?: string;
  cta?: { label: string; to?: string; href?: string };
}

defineProps<Props>();
</script>

<template>
  <section class="border-t border-border bg-primary-accent/15 py-16 sm:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <UiHeading :level="2" :muted="subtext" class="mb-8">
        {{ headline }}
      </UiHeading>
      <UiButton v-if="cta" :to="cta.to" :href="cta.href" variant="primary">
        {{ cta.label }}
      </UiButton>
    </div>
  </section>
</template>
