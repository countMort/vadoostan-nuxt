<template>
  <div class="flex flex-col items-center w-64 text-center px-6">
    <NuxtImg
      :src="type === 'success' ? '/images/congrats.png' : '/images/fail.png'"
      class="w-14 h-14 mb-5.5"
    />
    <div class="text-lg font-black">{{ title }}</div>
    <div class="text-xs font-medium mt-2">
      {{ subtitle }}
    </div>
    <div v-if="code" class="mt-5.5 text-xs font-extrabold" @click="copyCode">
      {{ code }}
      <QIcon name="content_copy" size="1rem" class="mr-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
const $q = useQuasar()
const { code, type = "success" } = defineProps<{
  title: string
  subtitle: string
  type?: "success" | "failed"
  code?: string
}>()

const copyCode = () => {
  if (!code) return
  navigator.clipboard.writeText(code)
  $q.notify({
    message: "کد پیگیری کپی شد",
  })
}
</script>
