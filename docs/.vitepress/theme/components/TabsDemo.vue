<script setup lang="ts">
import { ref } from 'vue';

const active = ref('one');
const tabs = [
  { id: 'one', label: 'One' },
  { id: 'two', label: 'Two' },
];
</script>

<template>
  <UiTabs v-model="active" :tabs="tabs" variant="underline" class="max-w-md">
    <template #one>
      <p>Content for tab one. The underline slides when switching.</p>
    </template>
    <template #two>
      <p>Content for tab two.</p>
    </template>
  </UiTabs>
</template>
