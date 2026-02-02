<script setup lang="ts">
import { computed } from 'vue';
import docgen from '../../docgen.json';

interface Prop {
  name: string;
  type: string;
  default: string;
  description: string;
}

const props = defineProps<{
  component: string;
}>();

const componentProps = computed(() => {
  const data = docgen[props.component as keyof typeof docgen];
  return (data?.props || []) as Prop[];
});
</script>

<template>
  <div v-if="componentProps.length" class="doc-table-wrapper my-4 overflow-x-auto">
    <table class="doc-table w-full border-collapse text-sm">
      <thead>
        <tr class="border-b border-[var(--vp-c-divider)]">
          <th class="px-4 py-2 text-left font-medium">Prop</th>
          <th class="px-4 py-2 text-left font-medium">Type</th>
          <th class="px-4 py-2 text-left font-medium">Default</th>
          <th class="px-4 py-2 text-left font-medium">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in componentProps" :key="p.name" class="border-b border-[var(--vp-c-divider)]">
          <td class="px-4 py-2 font-mono text-accent">{{ p.name }}</td>
          <td class="px-4 py-2 font-mono text-muted">{{ p.type }}</td>
          <td class="px-4 py-2 font-mono text-muted">{{ p.default }}</td>
          <td class="px-4 py-2 text-muted">{{ p.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
