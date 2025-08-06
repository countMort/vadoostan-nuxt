<template>
  <div class="flex flex-col gap-3 px-10 md:px-8">
    <AppHeader title="ثبت نام" class="pb-10.5" />
    <QForm class="flex gap-3">
      <QInput
        v-model="formData.name"
        label="نام"
        class="min-w-40 grow !text-inherit"
        standout="bg-transparent"
        :rules="[
          (v) => !!v || 'نام را وارد کنید',
          farsiRule('نام باید فارسی باشد.'),
        ]"
      />
      <QInput
        v-model="formData.surname"
        label="نام خانوادگی"
        standout="bg-transparent"
        class="min-w-40 grow"
        :rules="[
          (v) => !!v || 'نام خانوادگی را وارد کنید',
          farsiRule('نام خانوادگی باید فارسی باشد.'),
        ]"
      />
      <QInput
        v-model="formData.phone"
        label="شماره تماس"
        mask="####-###-####"
        unmasked-value
        dir="ltr"
        standout="bg-transparent"
        class="min-w-40 grow !rounded-2xl"
        lazy-rules
        :rules="[
          (v) => !!v || 'شماره تماس را وارد کنید',
          (v) =>
            (v.length > 1 && v.startsWith('09')) ||
            'شماره تماس باید با ۰۹ شروع شود.',
          (v) => v.length === 11 || 'شماره تماس باید 11 رقم باشد.',
        ]"
      />
      <QCheckbox
        v-model="formData.plus18"
        color="green-8"
        label="تأیید می‌کنم که حداقل ۱۸ سال سن دارم"
        class="font-semibold"
        :class="formData.plus18 ? 'text-green-800' : ''"
      />
      <QBtn
        label="ادامه"
        class="!w-full md:!w-auto mx-auto !font-bold !text-lg"
        text-color="primary"
        color="secondary"
        rounded
        unelevated
        @click="register"
      />
    </QForm>
  </div>
</template>

<script setup lang="ts">
import { farsiRule } from "~/constants/formRules"
import AppHeader from "../components/layout/AppHeader.vue"
defineOptions({ name: "RegisterPage" })
const formData = reactive({
  name: "",
  surname: "",
  phone: "",
  plus18: false,
})

const register = () => {
  console.log(formData)
}
</script>

<style scoped></style>
