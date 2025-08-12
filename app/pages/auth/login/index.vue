<template>
  <div class="flex flex-col gap-3 px-10 md:px-8 max-w-lg mx-auto">
    <AppHeader title="ورود" class="pb-10.5" />
    <QForm class="flex gap-y-1" @submit="login">
      <QInput
        v-model="state.mobileNumber"
        label="شماره تماس"
        name="mobileNumber"
        mask="####-###-####"
        unmasked-value
        dir="ltr"
        class="min-w-40 grow !rounded-2xl"
        :rules="[
          (v) => !!v || 'شماره تماس را وارد کنید',
          (v) =>
            (v.length > 1 && v.startsWith('09')) ||
            'شماره تماس باید با ۰۹ شروع شود.',
          (v) => v.length === 11 || 'شماره تماس باید 11 رقم باشد.',
        ]"
      />
      <QBtn
        label="ادامه"
        color="secondary"
        type="submit"
        rounded
        unelevated
        text-color="primary"
        class="!w-full mx-auto !font-bold !text-lg"
      />
    </QForm>
  </div>
</template>

<script setup lang="ts">
import { useAuthApi } from "~/api/auth"
import AppHeader from "~/components/layout/AppHeader.vue"
import { SignType } from "~/types/api/auth"

defineOptions({ name: "LoginPage" })
definePageMeta({ middleware: "not-authenticated" })
const router = useRouter()
const state = useLoginStore()
const { sendCode } = useAuthApi()
const otpStore = useOtpStore()
const login = async () => {
  try {
    await sendCode({
      type: SignType.LOGIN,
      mobileNumber: state.mobileNumber,
      client: "web",
    })
    otpStore.signType = SignType.LOGIN
    router.push("/auth/otp")
  } catch (error) {
    console.log(error)
  }
}
</script>
