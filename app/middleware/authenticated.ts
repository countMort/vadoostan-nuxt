import { routes } from "~/constants/routes.cons"

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated) {
    authStore.redirect = from
    return navigateTo(routes.auth.login)
  }

  //   if (to.params.id === "1") {
  //     return abortNavigation()
  //   }
})
