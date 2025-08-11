export type SendCodeRequest =
  | {
      type: "login"
      mobileNumber: string
      client: string
    }
  | {
      type: "signup"
      mobileNumber: string
      firstName: string
      lastName: string
      client: string
    }
