<template>
  <div class="flex flex-col gap-4 px-10 md:px-8">
    <AppHeader title="تایید شماره موبایل" class="pb-9.5" />
    <div class="text-center font-bold text-base">کد ارسال شده را وارد کنید</div>
    <div
      class="text-center font-semibold mx-auto bg-bg-input rounded-lg px-2.5 py-1"
    >
      {{ toPersianDigits(mobileNumber) }}
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
    <QBtn :loading="loading" @click="verifyOtp">
      تایید و {{ isLogin ? "ورود" : "ثبت نام" }}
    </QBtn>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/layout/AppHeader.vue"
import OTP from "~/components/auth/OTP.vue"
import { useAuthApi } from "~/api/auth"
defineOptions({ name: "OtpPage" })
const { mobileNumber } = useLoginStore()
const state = useOtpStore()
const otp = ref<string>("")
const router = useRouter()
const isLogin = computed(() => Boolean(mobileNumber))
const { signIn } = useAuth()
const loading = ref(false)
const { sendCode: sendLoginCode } = useAuthApi()
const $q = useQuasar()

onBeforeMount(() => {
  if (!isLogin.value) {
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
    await sendLoginCode({
      type: "login",
      mobileNumber: mobileNumber,
      client: "web",
    })
  } catch (error) {
    console.log(error)
  }
}

const verifyOtp = async () => {
  try {
    loading.value = true
    await signIn({
      mobileNumber: mobileNumber,
      otp: otp.value,
      client: "web",
    })
  } catch (error) {
    console.log(error)
    $q.notify({
      message: "کد وارد شده صحیح نمی‌باشد",
      color: "negative",
      progress: true,
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
