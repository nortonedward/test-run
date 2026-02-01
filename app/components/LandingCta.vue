<script setup lang="ts">
interface Props {
  headline: string;
  subtext?: string;
  cta?: { label: string; to?: string; href?: string };
}

defineProps<Props>();
</script>

<template>
  <section class="border-t border-border py-16 sm:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <AppHeading
        :level="2"
        :muted="subtext"
        class="mb-8"
      >
        {{ headline }}
      </AppHeading>
      <AppButton
        v-if="cta"
        :to="cta.to"
        :href="cta.href"
        variant="primary"
      >
        {{ cta.label }}
      </AppButton>
    </div>
  </section>
</template>
