export const routes = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    otp: "/auth/otp",
  },
  home: "/",
  experiences: {
    index: "/experiences",
    details: (id: string) => `/experiences/${id}`,
    ticket: (id: string) => `/experiences/${id}/ticket`,
  },
  profile: {
    index: "/profile",
    pastExperiences: "/profile/past-experiences",
    wallet: "/profile/wallet",
    transactionSuccess: "/profile/wallet/transaction-success",
    transactionFailed: "/profile/wallet/transaction-failed",
    walletHistory: "/profile/wallet/history",
  },
  placeOrder: {
    index: "/place-order",
  },
}
