<template>
  <QBtn v-slots="slots" v-bind="props" v-on="$attrs" />
</template>

<script setup lang="ts">
import type { QBtnProps, QBtnSlots } from "quasar"
defineOptions({ name: "VButton" })
const props = defineProps<QBtnProps>()
const slots = defineSlots<QBtnSlots>()
</script>

<style scoped></style>
