<script setup lang="ts">
import { ref } from 'vue';

const value = ref('a');
</script>

<template>
  <UiStack gap="2">
    <label class="flex cursor-pointer items-center gap-2">
      <UiRadio v-model="value" value="a" />
      <span>Option A</span>
    </label>
    <label class="flex cursor-pointer items-center gap-2">
      <UiRadio v-model="value" value="b" />
      <span>Option B</span>
    </label>
  </UiStack>
</template>
