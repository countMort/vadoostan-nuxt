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
  },
  profile: {
    index: "/profile",
  },
}
