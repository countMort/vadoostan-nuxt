import type { ApiResponse } from "."

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
  phoneNumber: string
  firstName: string
  lastName: string
}

export type FetchUserResponse = ApiResponse<User>
