<template>
  <div
    class="bg-primary rounded-full mx-1.5"
    :style="{ width: `${size / 4}rem`, height: `${size / 4}rem` }"
  />
</template>

<script setup lang="ts">
const { size = 1.25 } = defineProps<{
  size?: number
}>()
</script>
