import type { ApiResponse } from "~/types/api"
import type {
  SendCodeRequest,
  VerifyOtpRequest,
  VerifyOtpResponse,
  FetchUserResponse,
} from "~/types/api/auth"

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
      return res
    })
    return result
  }

  function verifyOtp(payload: VerifyOtpRequest) {
    const result = $vFetch<VerifyOtpResponse>(`/api/auth/verify-otp`, {
      method: "POST",
      body: payload,
    })
    return result
  }

  function fetchUser() {
    const result = $vFetch<FetchUserResponse>("/api/users/me")
    return result
  }

  return { sendCode, verifyOtp, fetchUser }
}
