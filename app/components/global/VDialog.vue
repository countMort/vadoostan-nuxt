<template>
  <QDialog
    v-model="dialog"
    position="bottom"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <QCard class="!w-full !rounded-t-2xl">
      <div class="relative pt-5 flex justify-center">
        <QBtn
          v-close-popup
          flat
          icon="close"
          class="!text-black left-3 absolute"
          size="sm"
          dense
        />
        <span class="text-xl font-semibold">{{ title }}</span>
      </div>
      <slot />
    </QCard>
  </QDialog>
</template>

<script setup lang="ts">
const dialog = defineModel<boolean>()
defineProps<{
  title: string
}>()
</script>
