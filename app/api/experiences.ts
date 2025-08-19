import type { ApiResponse } from "~/types/api"
import type { UseFetchOptions } from "~/types/api/auth"
import type { DetailedExperience, Experience } from "~/types/experiences"
import type { FetchError } from "ofetch"

export const useExperiencesApi = () => {
  const { $useVFetch } = useNuxtApp()

  const getUserExperiences = async (
    { userId }: { userId: string },
    options?: UseFetchOptions<ApiResponse<Experience[]>, FetchError>
  ) => {
    const res = $useVFetch<ApiResponse<Experience[]>>(
      `/api/user/${userId}/experiences`,
      options
    )
    return res
  }

  const getExperience = async (
    { experienceId }: { experienceId: string },
    options?: UseFetchOptions<ApiResponse<DetailedExperience>, FetchError>
  ) => {
    const res = $useVFetch<ApiResponse<DetailedExperience>>(
      `/api/user/experiences/${experienceId}`,
      options
    )
    return res
  }
  return {
    getUserExperiences,
    getExperience,
  }
}
