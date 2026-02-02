<script setup lang="ts">
interface ColorDef {
  label: string;
  hex: string;
  wada?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  colors: ColorDef[];
}

defineProps<Props>();
</script>

<template>
  <div class="space-y-4">
    <div>
      <h3 class="text-base font-semibold text-foreground">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-muted mt-0.5">{{ subtitle }}</p>
    </div>
    <div class="flex flex-wrap gap-3">
      <div
        v-for="c in colors"
        :key="c.label"
        class="flex flex-col gap-1 min-w-[7rem]"
      >
        <div
          class="h-12 rounded-lg border border-black/8"
          :style="{ backgroundColor: c.hex }"
        />
        <div class="text-xs font-medium text-foreground">{{ c.label }}</div>
        <div v-if="c.wada" class="text-[10px] text-muted">{{ c.wada }}</div>
        <code class="text-[10px] text-muted font-mono">{{ c.hex }}</code>
      </div>
    </div>
  </div>
</template>
