<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
</script>

<template>
  <label class="flex cursor-pointer items-center gap-2">
    <UiCheckbox v-model="checked" />
    <span>Accept terms</span>
  </label>
</template>
