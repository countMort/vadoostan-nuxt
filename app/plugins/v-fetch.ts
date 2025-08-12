export default defineNuxtPlugin(() => {
  const $q = useQuasar()
  const getToken = () => useAuthStore().token

  const vFetch = $fetch.create({
    onRequest({ request, options }) {
      const token = getToken()
      if (import.meta.dev) {
        console.log({ request, options, token })
      }
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: token,
        } as any
      }
    },
    onResponseError({ error, response }) {
      $q.notify({
        message:
          response.status < 500
            ? error?.message || response._data.message
            : "خطایی رخ داد لطفا مجددا تلاش کنید",
        color: "negative",
        progress: true,
      })
    },
  })

  const useVFetch = <R, E>(
    url: Parameters<typeof useFetch<R, E>>[0],
    options?: Omit<Parameters<typeof useFetch<R, E>>[1], "$fetch">
  ) => {
    return useFetch<R, E>(url, {
      $fetch: vFetch,
      ...options,
    })
  }

  return {
    provide: {
      vFetch,
      useVFetch,
    },
  }
})
