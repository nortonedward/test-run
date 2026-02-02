<script setup lang="ts">
import { ref } from 'vue';

const active = ref('one');
const tabs = [
  { id: 'one', label: 'One' },
  { id: 'two', label: 'Two' },
];
</script>

<template>
  <UiTabs v-model="active" :tabs="tabs" class="max-w-md">
    <template #one>
      <p>Content for tab one.</p>
    </template>
    <template #two>
      <p>Content for tab two.</p>
    </template>
  </UiTabs>
</template>
