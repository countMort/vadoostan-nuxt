export const routes = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    otp: "/auth/otp",
  },
  home: "/",
  experiences: {
    list: "/experiences",
    details: (id: string) => `/experiences/${id}`,
  },
}
