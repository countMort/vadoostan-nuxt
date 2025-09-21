import type { ApiResponse } from "."

export type UseFetchUrl<R, E> = Parameters<typeof useFetch<R, E>>[0]
export type UseFetchOptions<R, E> = NonNullable<
  Parameters<typeof useFetch<R, E>>[1]
>

export enum SignType {
  LOGIN = "login",
  SIGNUP = "signup",
}

export type SendCodeRequest =
  | {
      type: SignType.LOGIN
      mobileNumber: string
      client: string
    }
  | {
      type: SignType.SIGNUP
      mobileNumber: string
      firstName: string
      lastName: string
      client: string
    }

export type VerifyOtpRequest = {
  mobileNumber: string
  otp: string
  client: string
}

export type VerifyOtpResponse = ApiResponse<{
  token: string
}>

export type User = {
  userId: string
  mobileNumber: string
  firstName: string
  lastName: string
}

export type FetchUserResponse = ApiResponse<User>

export type GetWalletResponse = ApiResponse<{
  balance: number
}>

export type WithdrawRequest = {
  amount: number
  cardNumber: string
}

export type WithdrawResponse = ApiResponse<{
  trackId: string
  balance: number
}>
