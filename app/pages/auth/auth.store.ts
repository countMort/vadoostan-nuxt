import type { RouteLocationNormalizedGeneric } from "vue-router"
import { useAuthApi } from "~/api/auth"

export const useAuthStore = defineStore("auth", () => {
  const token = useCookie<string | null>("token", {
    default: () => null,
    sameSite: "none",
    maxAge: 60 * 60 * 24 * 7,
  })
  const user = ref<any>(null)
  const loading = ref(false)
  const redirect = ref<string | RouteLocationNormalizedGeneric>("/")
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  function saveToken(t: string) {
    token.value = t
  }

  function clearToken() {
    token.value = null
  }

  async function login(mobileNumber: string, otp: string) {
    loading.value = true
    error.value = null
    const { verifyOtp } = useAuthApi()
    try {
      const res = await verifyOtp({ mobileNumber, otp, client: "web" })
      if (!res.result.token) throw new Error("No token returned from server")

      saveToken(res.result.token)
      const user = await fetchUser()
      if (!user) throw new Error()
      navigateTo(redirect.value)
      redirect.value = "/"
    } catch (err: any) {
      error.value = err?.data?.message || err.message || "خطایی رخ داد"
      console.log("login error: ", error.value)
    } finally {
      loading.value = false
    }
  }

  function logout() {
    clearToken()
    user.value = null
    navigateTo("/login")
  }

  async function fetchUser() {
    if (!token.value) return
    loading.value = true
    const { fetchUser: fetchUserApi } = useAuthApi()
    try {
      const res = await fetchUserApi()
      user.value = res.result
      return res.result
    } catch (err: any) {
      console.log("fetchUser error: ", err)
      clearToken()
      user.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    token,
    user,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    fetchUser,
    redirect,
  }
})
