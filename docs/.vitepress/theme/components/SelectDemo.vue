<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <UiSelect v-model="value" class="max-w-xs">
    <option value="" disabled>Choose...</option>
    <option value="a">Option A</option>
    <option value="b">Option B</option>
    <option value="c">Option C</option>
  </UiSelect>
</template>
