<template>
  <header class="pt-15 text-base">
    <div class="flex items-center gap-2 w-full relative">
      <div
        class="absolute -right-2.25 cursor-pointer rounded-full bg-bg-light w-7 h-7 flex items-center justify-center"
        @click="navigate"
      >
        <ArrowRight :size="3.5" />
      </div>
      <span class="mx-auto font-extrabold">{{ title }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { routes } from "~/constants/routes.cons"
import ArrowRight from "../icons/ArrowRight.vue"
const {
  title = "",
  backProps = {
    to: routes.experiences.index,
    onClick: () => {},
    back: false,
  },
} = defineProps<{
  title?: string
  backProps?: {
    to?: string
    onClick?: () => void
    back?: boolean
  }
}>()

const { back } = useRouter()
const navigate = async () => {
  if (backProps.back) {
    back()
  } else if (backProps.onClick) {
    backProps.onClick()
  } else {
    await navigateTo(backProps.to, { replace: true })
  }
}
</script>
