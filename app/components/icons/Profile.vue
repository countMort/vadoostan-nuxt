<template>
  <svg
    :width="`${size / 4}rem`"
    :height="`${size / 4}rem`"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_2378)">
      <path
        d="M13.5003 13.4996C16.9619 13.4996 19.7681 10.6934 19.7681 7.23172C19.7681 3.77008 16.9619 0.963867 13.5003 0.963867C10.0386 0.963867 7.23242 3.77008 7.23242 7.23172C7.23242 10.6934 10.0386 13.4996 13.5003 13.4996Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.4187 26.0351C24.609 23.5104 23.0185 21.3079 20.8765 19.7454C18.7344 18.1828 16.1515 17.3408 13.5001 17.3408C10.8487 17.3408 8.26579 18.1828 6.12375 19.7454C3.9817 21.3079 2.3912 23.5104 1.58154 26.0351H25.4187Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_2378">
        <rect width="27" height="27" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
<script lang="ts" setup>
const { size = 6.75, color = "#FF7118" } = defineProps<{
  size?: number
  color?: string
}>()
</script>
