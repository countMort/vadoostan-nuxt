import type { DetailedExperience } from "~/types/experiences"

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
    city: null as string | null,
  })

  return {
    experienceSelection,
    selectExperience,
    unselectExperience,
    addCountToExperience,
    removeCountFromExperience,
    ShowCityFilter,
    filters,
  }
})
