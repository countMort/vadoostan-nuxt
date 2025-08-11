<template>
  <div class="row gap-x-3.5 justify-center" dir="ltr">
    <QInput
      v-for="i in length"
      :key="i"
      ref="fields"
      v-model="fieldValues[i - 1]"
      v-bind="$attrs"
      maxlength="1"
      input-class="text-center"
      class="w-[55px] h-[55px]"
      name="otp-input"
      @keyup="onKeyUp($event, i - 1)"
      @update:model-value="onUpdate($event, i - 1)"
    />
  </div>
</template>
<script setup lang="ts">
import type { QInput } from "quasar"

const { inputLength = 4 } = defineProps<{
  inputLength?: number
  modelValue: string
}>()

const emit = defineEmits(["update:modelValue"])

const fields = useTemplateRef<QInput[]>("fields")
const fieldValues = ref<string[]>(Array(inputLength).fill(""))

const length = computed(() => inputLength)

const composite = computed(() => {
  const nonNullFields = fieldValues.value.filter((value) => value)
  if (length.value !== nonNullFields.length) {
    return ""
  }
  return nonNullFields.join("")
})

watch(composite, () => {
  if (composite.value) {
    emit("update:modelValue", composite.value)
  } else {
    emit("update:modelValue", "")
  }
})

const focus = (index: number) => {
  if (index >= 0) {
    if (index < length.value) {
      fields.value?.[index]?.focus()
    } else if (composite.value) {
      fields.value?.[index - 1]?.blur()
    }
  }
}

const onUpdate = (value: string | number | null, index: number) => {
  if (typeof value === "string") {
    fieldValues.value[index] = value
  }
  if (value) {
    focus(index + 1)
  }
}

const onKeyUp = (evnt: KeyboardEvent, index: number) => {
  const key = evnt.key

  if (["Tab", "Shift", "Meta", "Control", "Alt", "Delete"].includes(key)) {
    return
  }

  if (key === "ArrowLeft" || key === "Backspace") {
    focus(index - 1)
  } else if (key === "ArrowRight") {
    focus(index + 1)
  }
}
</script>
