import type { UseFetchOptions, UseFetchUrl } from "~/types/api/auth"
import type { FetchError } from "ofetch"
import type { apiKeys } from "~/constants/api.cons"
import type { AsyncDataOptions } from "#app"
// Useless
export const useVFetch = <R = any, E = FetchError>(
  key: (typeof apiKeys)[keyof typeof apiKeys],
  url: UseFetchUrl<R, E>,
  options: Omit<UseFetchOptions<R, E>, "$fetch"> & {
    staleTime?: number // ms
  } = {
    staleTime: 1000 * 60 * 5 // 5 minutes
  }
) => {
  const { $useVFetch } = useNuxtApp()
  const cached = useNuxtData<R>(key)
  const lastFetched = useState<number>(`${key}:fetched`, () => 0)

  const now = Date.now()
  const isStale =
    options?.staleTime !== undefined &&
    now - lastFetched.value > options.staleTime

  const { data, error, pending } = $useVFetch<R, E>(url, {
    key,
    immediate: !cached.data.value || isStale,
    ...options,
  })

  watch(data, (val) => {
    if (val !== undefined) {
      cached.data.value = val as R
      lastFetched.value = Date.now()
    }
  })

  return {
    data: cached,
    error,
    pending,
    refresh: () => refreshNuxtData(key),
  }
}

export function useVAsyncData<T>(
  key: (typeof apiKeys)[keyof typeof apiKeys],
  handler: () => Promise<T>,
  options: AsyncDataOptions<T> & {
    staleTime?: number // ms
  } = {
    staleTime: 1000 * 60 * 5,
  }
) {
  const lastFetched = useState<number>(`${key}:fetched`, () => 0)
  const now = Date.now()

  const isStale =
    options?.staleTime !== undefined &&
    now - lastFetched.value > options.staleTime

  // 👇 useAsyncData handles SSR, hydration, deduplication
  const asyncData = useAsyncData<T>(
    key,
    handler,
    {
      immediate: !lastFetched.value || isStale,
      ...options,
    }
  )

  watch(asyncData.data, (val) => {
    if (val !== undefined) {
      lastFetched.value = Date.now()
    }
  })

  return {
    ...asyncData,
    refresh: () => refreshNuxtData(key),
  }
}
