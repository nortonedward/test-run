<script setup lang="ts">
import { ref } from 'vue';

const imageUrl = ref('');
</script>

<template>
  <UiImageUpload v-model="imageUrl" aspect="square" class="max-w-xs" />
</template>
