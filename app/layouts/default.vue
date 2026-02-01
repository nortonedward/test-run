<template>
  <div class="flex min-h-screen flex-col bg-gray-50 text-gray-900">
    <header class="border-b border-gray-200 px-4 py-3 sm:px-6">
      <NuxtLink to="/" class="text-lg font-semibold transition-opacity hover:opacity-80">
        {{ siteName }}
      </NuxtLink>
    </header>
    <main class="flex-1 px-4 py-6 sm:px-6">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const siteName = 'App';
</script>
