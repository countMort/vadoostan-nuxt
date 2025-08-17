<template>
  <header class="pt-15 text-base">
    <div class="flex items-center gap-2 w-full relative">
      <ArrowRight
        class="absolute right-0 cursor-pointer"
        :size="3.5"
        @click="navigateTo(to, { replace: true })"
      />
      <span class="mx-auto font-extrabold">{{ title }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { routes } from "~/constants/routes.cons"
import ArrowRight from "../icons/ArrowRight.vue"
const { to = routes.experiences.index, title = "" } = defineProps<{
  title?: string
  to?: string
}>()
</script>
