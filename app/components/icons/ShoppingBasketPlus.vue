<template>
  <svg
    :width="`${size / 4}rem`"
    :height="`${size / 4}rem`"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.668 23.3339H8.66683C5.44566 23.3339 2.8335 20.7217 2.8335 17.5006V8.9069C2.8335 8.2629 3.35616 7.74023 4.00016 7.74023H22.6668C23.3108 7.74023 23.8335 8.2629 23.8335 8.9069V15.1696"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.9998 10.5007V4.66732C17.9998 3.37815 16.9557 2.33398 15.6665 2.33398H10.9998C9.71067 2.33398 8.6665 3.37815 8.6665 4.66732V10.5007"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.4581 15.7085C26.7362 17.9866 26.7362 21.6801 24.4581 23.9581C22.1801 26.2362 18.4866 26.2362 16.2085 23.9581C13.9305 21.6801 13.9305 17.9866 16.2085 15.7085C18.4866 13.4305 22.1801 13.4305 24.4581 15.7085"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.3333 17.5V22.1667"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.6667 19.8333H18"
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
