<template>
  <div class="flex flex-col gap-4">
    <div class="text-center font-bold text-base">کد ارسال شده را وارد کنید</div>
    <div
      class="text-center font-semibold mx-auto bg-bg-input rounded-lg px-2.5 py-1"
    >
      {{ toPersianDigits(loginStore.mobileNumber) }}
    </div>
    <OTP v-model="otp" />
    <div
      class="text-center font-semibold text-gray-500"
      :class="!state.intervalId ? 'text-red' : ''"
      @click="resendCode"
    >
      {{ `دریافت مجدد کد${!state.intervalId ? "" : ":"}` }}
      <span v-if="state.intervalId" class="text-black">{{
        state.formattedTime
      }}</span>
    </div>
    <QBtn :loading="authStore.loading" @click="verifyOtp">
      تایید و {{ state.signType === SignType.LOGIN ? "ورود" : "ثبت نام" }}
    </QBtn>
  </div>
</template>

<script setup lang="ts">
import OTP from "~/components/auth/OTP.vue"
import { useAuthApi } from "~/api/auth"
import { SignType, type SendCodeRequest } from "~/types/api/auth"
defineOptions({ name: "OtpPage" })
definePageMeta({
  middleware: "not-authenticated",
  appHeader: { title: "تایید شماره موبایل", class: "pb-9.5" },
})
const loginStore = useLoginStore()
const registerStore = useRegisterStore()
const state = useOtpStore()
const otp = ref<string>("")
const router = useRouter()
const authStore = useAuthStore()
const { sendCode } = useAuthApi()
const $q = useQuasar()

onBeforeMount(() => {
  if (
    !state.signType ||
    (state.signType === SignType.LOGIN && !loginStore.mobileNumber) ||
    (state.signType === SignType.SIGNUP && !registerStore.formData.mobileNumber)
  ) {
    router.back()
  }
})

watch(otp, () => {
  if (otp.value.length) {
    verifyOtp()
  }
})

const resendCode = async () => {
  try {
    const body: SendCodeRequest =
      state.signType === SignType.LOGIN
        ? {
            type: SignType.LOGIN,
            mobileNumber: loginStore.mobileNumber,
            client: "web",
          }
        : {
            type: SignType.SIGNUP,
            mobileNumber: registerStore.formData.mobileNumber,
            firstName: registerStore.formData.firstName,
            lastName: registerStore.formData.lastName,
            client: "web",
          }
    await sendCode(body)
  } catch (error) {
    console.log(error)
  }
}

const verifyOtp = async () => {
  try {
    await authStore.login(loginStore.mobileNumber, otp.value)
  } catch (error) {
    console.log(error)
    $q.notify({
      message: "کد وارد شده صحیح نمی‌باشد",
      color: "negative",
      progress: true,
    })
  }
}
</script>

<style scoped></style>
