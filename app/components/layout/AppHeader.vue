<template>
  <header class="pt-15 text-base">
    <div class="flex items-center gap-2 w-full relative">
      <ArrowRight
        class="absolute right-0"
        :size="3.5"
        @click="router.replace(to || '/')"
      />
      <span class="mx-auto font-extrabold">{{ title }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import ArrowRight from "../icons/ArrowRight.vue"
const router = useRouter()
const { to = "/" } = defineProps<{
  title: string
  to?: string
}>()
</script>
