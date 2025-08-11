import type { ApiResponse } from "~/types/api"
import type { SendCodeRequest } from "~/types/api/auth"

export function useAuthApi() {
  const { $vFetch } = useNuxtApp()
  const $q = useQuasar()
  const otpStore = useOtpStore()

  function sendCode({ type, ...payload }: SendCodeRequest) {
    const result = $vFetch<ApiResponse<void>>(`/api/auth/${type}`, {
      method: "POST",
      body: payload,
    }).then((res) => {
      otpStore.startTimer()
      $q.notify({
        message: res?.message,
      })
    })
    return result
  }

  return { sendCode }
}
