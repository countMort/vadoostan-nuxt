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
