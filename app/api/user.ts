import type { ApiResponse } from "~/types/api"
import type {
  SendCodeRequest,
  VerifyOtpRequest,
  VerifyOtpResponse,
  FetchUserResponse,
  GetWalletResponse,
  UseFetchOptions,
  WithdrawRequest,
  WithdrawResponse,
  GetWalletHistoryResponse,
} from "~/types/api/auth"
import type { FetchError } from "ofetch"

export function useUserApi() {
  const { $vFetch, $useVFetch } = useNuxtApp()
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

  function getWallet(options?: UseFetchOptions<GetWalletResponse, FetchError>) {
    const result = $useVFetch<GetWalletResponse>("/api/wallet", options)
    return result
  }

  function withdraw(payload: WithdrawRequest) {
    const result = $vFetch<WithdrawResponse>("/api/wallet/withdrawals", {
      method: "POST",
      body: payload,
    })
    return result
  }

  function getWalletHistory(
    options?: UseFetchOptions<GetWalletHistoryResponse, FetchError>
  ) {
    const result = $useVFetch<GetWalletHistoryResponse>(
      "/api/wallet/transactions/me",
      options
    )
    return result
  }

  return {
    sendCode,
    verifyOtp,
    fetchUser,
    getWallet,
    withdraw,
    getWalletHistory,
  }
}
