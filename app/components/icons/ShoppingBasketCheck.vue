<template>
  <svg
    :width="`${size / 4}rem`"
    :height="`${size / 4}rem`"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.5002 25.6673C18.9218 25.6673 16.8335 23.5778 16.8335 21.0007C16.8335 18.4235 18.9218 16.334 21.5002 16.334C24.0773 16.334 26.1668 18.4235 26.1668 21.0007C26.1668 23.5778 24.0773 25.6673 21.5002 25.6673"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.3333 24.4993H6.33333C5.04417 24.4993 4 23.4552 4 22.166V9.91602C4 8.95002 4.784 8.16602 5.75 8.16602H20.9167C21.8827 8.16602 22.6667 8.95002 22.6667 9.91602V12.8327"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.6665 7.875V7.875C8.6665 5.45883 10.6253 3.5 13.0415 3.5H13.6248C16.041 3.5 17.9998 5.45883 17.9998 7.875V7.875"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.9998 7.875V8.16667"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.3152 20.0918L21.0461 22.361L19.6846 20.9995"
      :stroke="color"
      stroke-width="1.5"
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
