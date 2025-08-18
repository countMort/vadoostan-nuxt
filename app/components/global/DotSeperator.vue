<template>
  <div
    class="rounded-full mx-1.5"
    :style="{
      width: `${size / 4}rem`,
      height: `${size / 4}rem`,
      backgroundColor: color,
    }"
  />
</template>

<script setup lang="ts">
const { size = 1.25, color = "var(--q-primary)" } = defineProps<{
  size?: number
  color?: string
}>()
</script>
