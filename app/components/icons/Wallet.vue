<template>
  <svg
    :width="`${size / 4}rem`"
    :height="`${size / 4}rem`"
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38.7105 11.8831L33.1096 4.00035C31.6012 1.87741 28.7843 1.36811 26.6925 2.8401L13.6758 12"
      :stroke="color"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M38.7106 23.25H44.6317C45.9398 23.25 47.0001 24.3693 47.0001 25.75V33.25C47.0001 34.6307 45.9398 35.75 44.6317 35.75H38.7106C35.4405 35.75 32.7896 32.9518 32.7896 29.5V29.5C32.7896 26.0482 35.4405 23.25 38.7106 23.25V23.25Z"
      :stroke="color"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.6318 23.25V18.25C44.6318 14.7982 41.9808 12 38.7107 12H7.92108C4.65096 12 2 14.7982 2 18.25V40.75C2 44.2018 4.65096 47 7.92108 47H38.7107C41.9808 47 44.6318 44.2018 44.6318 40.75V35.75"
      :stroke="color"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup lang="ts">
const { size = 6.5, color = "#000001" } = defineProps<{
  size?: number
  color?: string
}>()
</script>
