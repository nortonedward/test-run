<template>
  <div>
    <LandingHero
      headline="getting started"
      subtext="working on this app! not sure where we're going yet. nuxt + vue + tailwind for now."
      :primary-cta="{ label: 'get started', to: '#' }"
      :secondary-cta="{ label: 'theme demo', to: '/demo' }"
    />
    <LandingFeatures
      heading="what's in the stack"
      subtext="stuff i'm using so far."
      :features="features"
    />
    <LandingCta
      headline="that's it for now"
      subtext="more to come maybe."
      :cta="{ label: 'repo', href: '#' }"
    />
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'fast',
    description:
      'vite + nuxt. hot reload, decent build times. feels good so far.',
  },
  {
    title: 'typed',
    description:
      'typescript + zod. trying to keep things type-safe without going overboard.',
  },
  {
    title: 'theme',
    description:
      'custom theme with dark mode. still tweaking the lavender.',
  },
];
</script>
