<template>
  <div class="flex min-h-screen flex-col">
    <header class="bg-surface/80 flex items-center justify-between border-b border-border px-4 py-3 shadow-header backdrop-blur-sm sm:px-6">
      <NuxtLink to="/" class="text-lg font-semibold text-foreground"> UI Library </NuxtLink>
      <div class="flex items-center gap-2">
        <UiButton to="/demo" variant="secondary" size="sm"> Demo </UiButton>
        <button
          type="button"
          class="rounded-lg border border-border bg-surface p-2.5 shadow-button hover:border-muted"
          aria-label="Toggle dark mode"
          @click="toggle"
        >
          <Icon :name="isDark ? 'lucide:sun' : 'lucide:moon'" class="size-5" aria-hidden />
        </button>
      </div>
    </header>
    <main class="flex-1 px-4 py-6 sm:px-6">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const { isDark, toggle } = useDarkMode();
</script>
