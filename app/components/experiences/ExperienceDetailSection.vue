<template>
  <section class="flex flex-col">
    <h2 class="!font-extrabold !text-base mb-1">{{ title }}</h2>
    <slot>
      <p class="!m-0">{{ description }}</p>
    </slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>
