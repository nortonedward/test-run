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
      <AppHeading
        :level="1"
        :muted="subtext"
        class="mb-8"
      >
        {{ headline }}
      </AppHeading>
      <div
        v-if="primaryCta ?? secondaryCta"
        class="flex flex-wrap items-center justify-center gap-4"
      >
        <AppButton
          v-if="primaryCta"
          :to="primaryCta.to"
          :href="primaryCta.href"
          variant="primary"
        >
          {{ primaryCta.label }}
        </AppButton>
        <AppButton
          v-if="secondaryCta"
          :to="secondaryCta.to"
          :href="secondaryCta.href"
          variant="secondary"
        >
          {{ secondaryCta.label }}
        </AppButton>
      </div>
    </div>
  </section>
</template>
