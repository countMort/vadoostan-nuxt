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

export const filters = {
  city: {
    label: "شهر",
    options: [
      {
        label: "تهران",
        value: "tehran",
      },
      {
        label: "مشهد",
        value: "mashhad",
      },
      {
        label: "اصفهان",
        value: "esfahan",
      },
    ],
  },
} as const
