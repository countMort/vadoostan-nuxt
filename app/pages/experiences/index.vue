<template>
  <div class="flex flex-col gap-3 pt-10 px-3 md:px-8">
    <template
      v-for="(day, i) in Object.keys(experiencesByDay || {})"
      :key="day"
    >
      <div class="font-black text-lg" :class="i > 0 ? 'mt-3' : ''">
        {{ day }}
      </div>
      <ExperienceCard
        v-for="experience in experiencesByDay?.[day] || []"
        :key="experience.id"
        :experience="experience"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import ExperienceCard from "~/components/experiences/ExperienceCard.vue"
import type { ExperienceListResponse } from "~/types/api"
import { apiKeys } from "~/constants/api.cons"
import type { Experience } from "~/types/experiences"

defineOptions({ name: "ExperiencesPage" })

const { data: experiences } = await useAsyncData<ExperienceListResponse>(
  apiKeys.experiences,
  () =>
    $fetch("/api/user/experiences", {
      params: {
        status: "published",
      },
    })
)

const experiencesByDay = computed(() => {
  return experiences.value?.result.exps.reduce((acc, exp) => {
    const day = new Date(exp.date).toLocaleDateString("fa-IR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
    acc[day] = acc[day] || []
    acc[day].push(exp)
    return acc
  }, {} as Record<string, Experience[]>)
})
</script>
