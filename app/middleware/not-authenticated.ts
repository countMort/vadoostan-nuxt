export default defineNuxtRouteMiddleware((_) => {
  const authStore = useAuthStore()
  if (authStore.isAuthenticated) {
    return navigateTo("/")
  }

  //   if (to.params.id === "1") {
  //     return abortNavigation()
  //   }
})
