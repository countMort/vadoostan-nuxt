<template>
  <div
    class="bg-primary rounded-full mx-1.5"
    :style="{ width: `${size}rem`, height: `${size}rem` }"
  />
</template>

<script setup lang="ts">
const { size = 0.3125 } = defineProps<{
  size?: number
}>()
</script>
