import { routes } from "~/constants/routes.cons"

export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  const authStore = useAuthStore()

  watch(
    () => authStore.isAuthenticated,
    (isAuth) => {
      const route = useRoute()
      const middlewares = Array.isArray(route.meta.middleware)
        ? route.meta.middleware
        : [route.meta.middleware]

      if (isAuth && middlewares.includes("not-authenticated")) {
        navigateTo(routes.experiences.index)
      }

      if (!isAuth && middlewares.includes("authenticated")) {
        authStore.redirect = route
        navigateTo(routes.auth.login)
      }
    },
    { immediate: true }
  )
})
