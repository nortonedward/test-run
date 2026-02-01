<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3 shadow-header backdrop-blur-sm dark:shadow-header-dark sm:px-6">
      <AppLink
        to="/"
        class="text-lg font-semibold"
      >
        {{ siteName }}
      </AppLink>
      <div class="flex items-center gap-1">
        <AppButton
          to="/demo"
          variant="secondary"
          class="py-2 text-sm"
        >
          demo
        </AppButton>
        <button
          type="button"
          aria-label="Toggle dark mode"
          class="rounded-md p-2 text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          @click="toggle"
        >
          <Icon
            :name="isDark ? 'lucide:sun' : 'lucide:moon'"
            class="size-5"
            aria-hidden
          />
        </button>
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
