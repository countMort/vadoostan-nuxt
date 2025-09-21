<template>
  <QInput v-bind="$attrs" v-model="_model" @update:model-value="normalize" />
</template>

<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(["update:modelValue"])

const _model = ref("")

function normalize(val: string | number | null) {
  if (!val) {
    _model.value = ""
    return
  }

  const normalized = parseFaNumber(val.toString().replace(/[^\p{Nd}]/gu, ""))
  _model.value = normalized ? normalized.toLocaleString("fa-IR") : ""
}

watch(
  () => modelValue,
  (val, oldVal) => {
    if (val === oldVal) return
    _model.value = parseFaNumber(
      (val || "").toString().replace(/[^\p{Nd}]/gu, "")
    ).toLocaleString("fa-IR")
  }
)
watch(
  () => _model.value,
  (val, oldVal) => {
    if (val === oldVal) return
    emit(
      "update:modelValue",
      parseFaNumber(
        (val || "").toString().replace(/[^\p{Nd}]/gu, "")
      ).toString()
    )
  }
)
</script>
