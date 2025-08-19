<template>
  <NuxtLink
    class="rounded-lg bg-disabled flex flex-col gap-y-2.5 items-center justify-center h-31"
    :to="to"
  >
    <slot />
    <span class="font-bold">{{ title }}</span>
  </NuxtLink>
</template>
<script lang="ts" setup>
const { title, to } = defineProps<{
  title: string
  to: string
}>()
</script>
