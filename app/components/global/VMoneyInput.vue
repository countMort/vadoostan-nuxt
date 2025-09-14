<script setup lang="ts">
const props = defineProps({
  modelValue: { type: [Number, String, null], default: null },
  precision: { type: Number, default: 2 },
  locale: {
    type: String,
    default: typeof navigator !== "undefined" ? navigator.language : "en-US",
  },
  currency: { type: String, default: "" },
  prefix: { type: String, default: "" },
  suffix: { type: String, default: "" },
  allowNegative: { type: Boolean, default: false },
  placeholder: { type: String, default: "" },
  inputProps: { type: Object, default: () => ({}) },
  id: { type: String, default: undefined },
})

const emit = defineEmits<{
  (e: "update:modelValue", value: number | null): void
}>()

const display = ref("")

// format number
function formatNumber(value: number | null): string {
  if (value === null || isNaN(value)) return ""
  return new Intl.NumberFormat(props.locale, {
    minimumFractionDigits: props.precision,
    maximumFractionDigits: props.precision,
    useGrouping: true,
  }).format(value)
}

// parse string
function parseToNumber(raw: string): number | null {
  if (!raw) return null

  const example = 12345.6
  const nf = new Intl.NumberFormat(props.locale)
  const parts = nf.formatToParts(example)
  const decimal = parts.find((p) => p.type === "decimal")?.value ?? "."
  const group = parts.find((p) => p.type === "group")?.value ?? ","

  let cleaned = raw
    .replace(new RegExp(`\\${group}`, "g"), "")
    .replace(new RegExp(`[^0-9\\${decimal}\\-]`, "g"), "")

  if (decimal !== ".") cleaned = cleaned.replace(decimal, ".")

  const n = parseFloat(cleaned)
  if (isNaN(n)) return null

  if (!props.allowNegative && n < 0) return Math.abs(n)

  return n
}

// update when external model changes
watch(
  () => props.modelValue,
  (val) => {
    if (val === null || val === undefined || val === "") {
      display.value = ""
    } else {
      const num = typeof val === "string" ? parseFloat(val) : (val as number)
      display.value = formatNumber(Number.isFinite(num) ? num : null)
    }
  },
  { immediate: true }
)

// handle typing
function onUpdate(val: string | number | null) {
  if (val === null) {
    emit("update:modelValue", null)
    display.value = ""
  } else {
    const parsed = parseToNumber(val.toString())!
    // round to precision
    const pow = Math.pow(10, props.precision)
    const normalized = Math.round(parsed * pow) / pow
    emit("update:modelValue", normalized)
    display.value = formatNumber(normalized)
  }
}
</script>

<template>
  <q-input
    :id="id"
    v-model="display"
    clearable
    :placeholder="placeholder"
    v-bind="inputProps"
    class="money-input"
    :suffix="suffix ? suffix : ''"
    :prefix="prefix ? prefix || currency : ''"
    @update:model-value="onUpdate"
  />
</template>

<style scoped>
.money-input >>> input {
  text-align: right;
}
</style>
