<template>
  <UiContainer>
    <UiStack gap="8">
      <UiHeading level="1"> Component Library </UiHeading>
      <UiHeading level="2" muted="Japanese-inspired design system" />
      <UiCard>
        <UiStack gap="4">
          <p class="text-foreground">Welcome to the docs. Built with @cursor-run/ui.</p>
          <div class="flex flex-wrap gap-4">
            <UiButton variant="primary"> Primary </UiButton>
            <UiButton variant="secondary"> Secondary </UiButton>
            <UiButton variant="primary" size="sm"> Small </UiButton>
            <UiButton variant="primary" size="lg"> Large </UiButton>
          </div>
        </UiStack>
      </UiCard>
      <UiCard>
        <UiStack gap="4">
          <UiHeading level="3"> Input </UiHeading>
          <UiInput v-model="inputValue" placeholder="Type something..." />
        </UiStack>
      </UiCard>
    </UiStack>
  </UiContainer>
</template>

<script setup lang="ts">
const inputValue = ref('');
</script>
