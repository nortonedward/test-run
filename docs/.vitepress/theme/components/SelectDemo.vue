<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const items = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
];
</script>

<template>
  <UiSelect v-model="value" :items="items" placeholder="Choose..." class="max-w-xs" />
</template>
