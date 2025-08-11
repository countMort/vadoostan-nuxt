<template>
  <q-field v-model="model" v-bind="props" borderless :rules="rules">
    <template #control>
      <q-checkbox v-model="model" :label="label" v-bind="checkboxProps" />
    </template>
  </q-field>
</template>
<script setup lang="ts">
import type { QCheckboxProps, QFieldProps } from "quasar"

const {
  label,
  modelValue,
  checkboxProps = {},
  ...props
} = defineProps<
  QFieldProps & { checkboxProps?: Omit<QCheckboxProps, "modelValue"> }
>()
const emit = defineEmits(["update:modelValue"])

const model = computed({
  get: () => modelValue,
  set: (val) => emit("update:modelValue", val),
})
</script>
<style>
.q-field__control.text-negative .q-checkbox__label {
  color: var(--q-negative) !important;
}

.q-field__control.text-negative .q-checkbox__inner {
  color: var(--q-negative) !important;
}

.q-field__control.text-positive .q-checkbox__label {
  color: var(--q-positive) !important;
}
</style>
