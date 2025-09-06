<template>
  <div class="flex flex-col items-center">
    <NuxtImg src="/images/fail.png" alt="404" class="w-14" />
    <div class="mt-6 mb-1 font-black text-lg">
      متأسفیم، در این شهر تجربه فعال نداریم
    </div>
    <span class="text-xs font-semibold">
      خیلی زود تجربه‌های جدید در این شهر اضافه می‌کنیم.
    </span>
    <QBtn
      class="!mt-3 !py-3 px-8 !min-h-0"
      label="انتخاب شهر دیگر"
      @click="emit('another-city')"
    />
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: "another-city"): void
}>()
</script>
