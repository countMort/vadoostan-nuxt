import { defaultExpFilters } from "~/constants/experiences.cons"
import type {
  DetailedExperience,
  GetExperienceFiltersResponse,
} from "~/types/experiences"

export const useExperiencesStore = defineStore("experiences", () => {
  const experienceSelection = reactive<{
    count: number
    experience: DetailedExperience | null
    isSelecting: boolean
  }>({
    count: 0,
    experience: null,
    isSelecting: false,
  })

  const selectExperience = (experience: DetailedExperience) => {
    experienceSelection.experience = experience
    experienceSelection.count = 1
    experienceSelection.isSelecting = true
  }

  const addCountToExperience = () => {
    experienceSelection.count++
  }

  const removeCountFromExperience = () => {
    experienceSelection.count--
    if (experienceSelection.count === 0) {
      unselectExperience()
    }
  }

  const unselectExperience = () => {
    experienceSelection.experience = null
    experienceSelection.count = 0
    experienceSelection.isSelecting = false
  }

  const ShowCityFilter = ref(false)
  const filters = reactive({
    city: defaultExpFilters.city as
      | GetExperienceFiltersResponse["result"]["cities"][number]
      | null,
  })

  const tempRegisteredExperiences = reactive<
    { experience: DetailedExperience; count: number }[]
  >([])

  return {
    experienceSelection,
    selectExperience,
    unselectExperience,
    addCountToExperience,
    removeCountFromExperience,
    ShowCityFilter,
    filters,
    tempRegisteredExperiences,
  }
})
