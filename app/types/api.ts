import type { Experience } from "./experiences"

export type ApiResponse<T> = {
  isSuccessful: boolean
  message: string
  result: T
  traceId: string
}

export type ExperienceListResponse = ApiResponse<{
  count: number
  exps: Experience[]
}>
