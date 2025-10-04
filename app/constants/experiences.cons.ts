import { ExperienceStatus } from "~/types/experiences"

export const experienceCategories = {
  music: {
    label: "موسیقی",
    color: "#DBB1FF",
  },
  movie: {
    label: "فیلم",
    color: "#F895A2",
  },
  science: {
    label: "علمی",
    color: "#AEFBDC",
  },
  game: {
    label: "بازی",
    color: "#FFD497",
  },
  handicraft: {
    label: "خلق",
    color: "#A1C8F6",
  },
  cooking: {
    label: "آشپزی",
    color: "#6DE69F",
  },
  talk: {
    label: "گفتگو",
    color: "#EF9CCA",
  },
  trip: {
    label: "کوله‌بار",
    color: "#9DF0F0",
  },
  performing_arts: {
    label: "هنرهای نمایشی",
    color: "#A1C8F6",
  },
  homa_and_hoom: {
    label: "هماوهوم",
    color: "#AEFBDC",
  },
  va_tan: {
    label: "و‌تن",
    color: "#EFEC9C ",
  },
  fantasy: {
    label: "فانتزی",
    color: "#A1C8F6",
  },
  nations: {
    label: "ملل",
    color: "#A1C8F6",
  },
  literature: {
    label: "ادبیات",
    color: "#A1C8F6",
  },
  language: {
    label: "زبان",
    color: "#A1C8F6",
  },
  beauty: {
    label: "زیبایی",
    color: "#EFEC9C",
  },
}

export const statusDic: Record<
  ExperienceStatus,
  { label: string; color: keyof typeof statusVariants }
> = {
  [ExperienceStatus.PUBLISHED]: {
    label: "منتشر شده",
    color: "green",
  },
  [ExperienceStatus.READY_TO_PUBLISH]: {
    label: "اماده انتشار",
    color: "blue",
  },
  [ExperienceStatus.CANCELLED]: {
    label: "کنسل شده",
    color: "pink",
  },
  [ExperienceStatus.INACTIVE]: {
    label: "انتظار تایید",
    color: "orange",
  },
  [ExperienceStatus.RUNNING]: {
    label: "در حال اجرا",
    color: "blue",
  },
}
export const statusVariants = {
  default: "bg-code-04 text-black",
  green: "bg-code-01 text-code-1",
  blue: "bg-code-02 text-code-2",
  orange: "bg-code-03 text-code-3",
  pink: "bg-code-05 text-code-5",
} as const

export const defaultExpFilters = {
  city: {
    title: "تهران",
    id: 1,
  },
}
