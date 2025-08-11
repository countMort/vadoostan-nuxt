<template>
  <div class="flex flex-col gap-3 px-10 md:px-8">
    <AppHeader title="ثبت نام" class="pb-10.5" />
    <QForm class="flex gap-3" @submit="register">
      <QInput
        v-model="state.formData.name"
        label="نام"
        class="min-w-40 grow !text-inherit"
        standout="bg-transparent"
        :rules="[
          (v) => !!v || 'نام را وارد کنید',
          farsiRule('نام باید فارسی باشد.'),
        ]"
      />
      <QInput
        v-model="state.formData.surname"
        label="نام خانوادگی"
        standout="bg-transparent"
        class="min-w-40 grow"
        :rules="[
          (v) => !!v || 'نام خانوادگی را وارد کنید',
          farsiRule('نام خانوادگی باید فارسی باشد.'),
        ]"
      />
      <QInput
        v-model="state.formData.phone"
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
      <VCheckbox
        v-model="state.plus18"
        :color="state.plus18 ? 'positive' : ''"
        label="تأیید می‌کنم که حداقل ۱۸ سال سن دارم"
        class="font-semibold"
        :checkbox-props="{
          color: 'positive',
        }"
        :rules="[(v) => v || '']"
      />
      <QBtn
        label="ادامه"
        class="!w-full md:!w-auto mx-auto !font-bold !text-lg"
        text-color="primary"
        color="secondary"
        rounded
        unelevated
        type="submit"
        :loading="state.loading"
      />
    </QForm>
  </div>
</template>

<script setup lang="ts">
import { farsiRule } from "~/constants/formRules"
import AppHeader from "~/components/layout/AppHeader.vue"
import { useAuthApi } from "~/api/auth"
defineOptions({ name: "RegisterPage" })
const state = useRegisterStore()
const { sendCode } = useAuthApi()
const router = useRouter()

const register = async () => {
  try {
    state.loading = true
    await sendCode({
      type: "signup",
      mobileNumber: state.formData.phone,
      firstName: state.formData.name,
      lastName: state.formData.surname,
      client: "web",
    })
    router.push("/auth/otp")
  } catch (error) {
    console.log(error)
  } finally {
    state.loading = false
  }
}
</script>

<style scoped></style>
