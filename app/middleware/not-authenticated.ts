import { routes } from "~/constants/routes.cons"

export default defineNuxtRouteMiddleware((_) => {
  const authStore = useAuthStore()
  if (authStore.isAuthenticated) {
    return navigateTo(routes.experiences.index)
  }

  //   if (to.params.id === "1") {
  //     return abortNavigation()
  //   }
})
