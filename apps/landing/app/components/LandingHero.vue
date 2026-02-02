<script setup lang="ts">
interface Props {
  headline: string;
  subtext?: string;
  primaryCta?: { label: string; to?: string; href?: string };
  secondaryCta?: { label: string; to?: string; href?: string };
}

defineProps<Props>();
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-3xl text-center">
      <UiHeading :level="1" :muted="subtext" class="mb-8">
        {{ headline }}
      </UiHeading>
      <div v-if="primaryCta ?? secondaryCta" class="flex flex-wrap items-center justify-center gap-4">
        <UiButton v-if="primaryCta" :to="primaryCta.to" :href="primaryCta.href" variant="primary">
          {{ primaryCta.label }}
        </UiButton>
        <UiButton v-if="secondaryCta" :to="secondaryCta.to" :href="secondaryCta.href" variant="secondary">
          {{ secondaryCta.label }}
        </UiButton>
      </div>
    </div>
  </section>
</template>
