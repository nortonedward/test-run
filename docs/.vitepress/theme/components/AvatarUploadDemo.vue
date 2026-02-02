<script setup lang="ts">
import { ref } from 'vue';

const avatarUrl = ref('');
</script>

<template>
  <UiAvatarUpload v-model="avatarUrl" name="You" size="lg" />
</template>
