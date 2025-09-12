import type { ApiResponse } from "./api/index"
import type { experienceCategories } from "~/constants/experiences.cons"

export interface Experience {
  address: string
  category: keyof typeof experienceCategories
  date: string
  id: string
  isFilled: boolean
  price: number
  status: ExperienceStatus
  title: string
}

export enum ExperienceStatus {
  PUBLISHED = "published",
  INACTIVE = "inactive",
  READY_TO_PUBLISH = "ready_to_publish",
  CANCELLED = "cancelled",
  RUNNING = "running",
}

export interface DetailedExperience {
  id: string
  address: string
  date: string
  description: {
    main: string
    extension: string
  }
  directors: Director[]
  expPhotos: string[]
  faqs: FAQ[]
  inclusions: string[]
  price: number
  title: string
  available: number
  isUserRegistered: boolean
}

export interface Director {
  bio: string
  name: string
  photoUrl: string
  userId: string
}

export interface FAQ {
  question: string
  answer: string
}

export type GetUserExperiencesResponse = ApiResponse<{
  count: number
  exps: Experience[]
}>

export type GetExperienceFiltersResponse = ApiResponse<{
  cities: {
    id: number
    title: string
  }[]
}>
