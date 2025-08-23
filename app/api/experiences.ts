import type { ApiResponse, ExperienceListResponse } from "~/types/api"
import type { UseFetchOptions } from "~/types/api/auth"
import type {
  DetailedExperience,
  GetUserExperiencesResponse,
} from "~/types/experiences"
import type { FetchError } from "ofetch"

export const useExperiencesApi = () => {
  const { $useVFetch } = useNuxtApp()

  const getUserExperiences = async (
    { userId }: { userId: string },
    options?: UseFetchOptions<GetUserExperiencesResponse, FetchError>
  ) => {
    const res = $useVFetch<GetUserExperiencesResponse>(
      `/api/users/${userId}/experiences`,
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

  const getExperiences = async (
    options?: UseFetchOptions<ExperienceListResponse, FetchError>
  ) => {
    const res = $useVFetch<ExperienceListResponse>(
      `/api/user/experiences`,
      options
    )
    return res
  }

  return {
    getUserExperiences,
    getExperience,
    getExperiences,
  }
}
