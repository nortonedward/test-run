<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3 shadow-header backdrop-blur-sm dark:shadow-header-dark sm:px-6">
      <AppLink
        to="/"
        class="text-lg font-semibold"
      >
        {{ siteName }}
      </AppLink>
      <div class="flex items-center gap-2">
        <AppButton
          to="/demo"
          variant="secondary"
          class="py-2 text-sm"
        >
          demo
        </AppButton>
        <AppButton
          variant="secondary"
          class="p-2.5"
          aria-label="Toggle dark mode"
          @click="toggle"
        >
          <Icon
            :name="isDark ? 'lucide:sun' : 'lucide:moon'"
            class="size-5"
            aria-hidden
          />
        </AppButton>
      </div>
    </header>
    <main class="flex-1 px-4 py-6 sm:px-6">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from '~/composables/useDarkMode';

const siteName = 'App';
const { isDark, toggle } = useDarkMode();
</script>
