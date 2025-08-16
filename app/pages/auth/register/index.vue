<template>
  <div class="flex flex-col gap-3 px-10 md:px-8">
    <AppHeader title="ثبت نام" class="pb-10.5" />
    <QForm class="grid grid-cols-2 gap-x-3 gap-y-1" @submit="register">
      <QInput
        v-model="state.formData.firstName"
        name="firstName"
        label="نام"
        :rules="[
          (v) => !!v || 'نام را وارد کنید',
          farsiRule('نام باید فارسی باشد.'),
        ]"
      />
      <QInput
        v-model="state.formData.lastName"
        name="lastName"
        label="نام خانوادگی"
        :rules="[
          (v) => !!v || 'نام خانوادگی را وارد کنید',
          farsiRule('نام خانوادگی باید فارسی باشد.'),
        ]"
      />
      <QInput
        v-model="state.formData.mobileNumber"
        name="mobileNumber"
        label="شماره تماس"
        dir="ltr"
        class="col-span-2"
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
        class="font-semibold col-span-2"
        :checkbox-props="{
          color: 'positive',
        }"
        :rules="[(v) => v || '']"
      />
      <QBtn
        label="ادامه"
        class="col-span-2 !font-bold !text-lg"
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
import { SignType } from "~/types/api/auth"
defineOptions({ name: "RegisterPage" })
definePageMeta({ middleware: "not-authenticated" })
const state = useRegisterStore()
const { sendCode } = useAuthApi()
const router = useRouter()
const otpStore = useOtpStore()

const register = async () => {
  try {
    state.loading = true
    await sendCode({
      type: SignType.SIGNUP,
      mobileNumber: state.formData.mobileNumber,
      firstName: state.formData.firstName,
      lastName: state.formData.lastName,
      client: "web",
    })
    otpStore.signType = SignType.SIGNUP
    router.push("/auth/otp")
  } catch (error) {
    console.log(error)
  } finally {
    state.loading = false
  }
}
</script>

<style scoped></style>
