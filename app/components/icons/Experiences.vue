<template>
  <svg
    :width="`${size / 4}rem`"
    :height="`${size / 4}rem`"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.714 11.2715H16.4283C15.8563 11.2715 15.3926 11.7352 15.3926 12.3072V24.7358C15.3926 25.3078 15.8563 25.7715 16.4283 25.7715H24.714C25.286 25.7715 25.7497 25.3078 25.7497 24.7358V12.3072C25.7497 11.7352 25.286 11.2715 24.714 11.2715Z"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.714 1.03613H16.4283C15.8563 1.03613 15.3926 1.49984 15.3926 2.07185V6.23542C15.3926 6.80743 15.8563 7.27113 16.4283 7.27113H24.714C25.286 7.27113 25.7497 6.80743 25.7497 6.23542V2.07185C25.7497 1.49984 25.286 1.03613 24.714 1.03613Z"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.3571 1.03613H2.07136C1.49935 1.03613 1.03564 1.49984 1.03564 2.07185V14.5004C1.03564 15.0724 1.49935 15.5361 2.07136 15.5361H10.3571C10.9291 15.5361 11.3928 15.0724 11.3928 14.5004V2.07185C11.3928 1.49984 10.9291 1.03613 10.3571 1.03613Z"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.3571 19.5361H2.07136C1.49935 19.5361 1.03564 19.9998 1.03564 20.5718V24.7354C1.03564 25.3074 1.49935 25.7711 2.07136 25.7711H10.3571C10.9291 25.7711 11.3928 25.3074 11.3928 24.7354V20.5718C11.3928 19.9998 10.9291 19.5361 10.3571 19.5361Z"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script lang="ts" setup>
const { size = 6.5, color = "black" } = defineProps<{
  size?: number
  color?: string
}>()
</script>
