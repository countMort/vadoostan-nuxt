<template>
  <NuxtLink
    :to="`/experiences/${experience.id}`"
    class="rounded-lg p-2 shadow-sm flex flex-row bg-white"
  >
    <div
      class="w-15 h-15 flex items-center justify-center rounded-lg shrink-0 font-extrabold"
      :style="{
        backgroundColor: experienceCategories[experience.category].color,
      }"
    >
      {{ experienceCategories[experience.category].label }}
    </div>
    <div class="flex flex-col mr-3.5 justify-center grow">
      <div class="font-black">{{ experience.title }}</div>
      <div class="flex w-full">
        <div class="text-xs mt-1.5 flex items-center">
          محله: {{ experience.address }}
          <DotSeperator />
          ساعت:
          {{
            new Date(experience.date).toLocaleTimeString("fa-IR", {
              hour: "numeric",
              minute: "numeric",
            })
          }}
        </div>
        <div
          class="text-primary bg-primary/20 text-xs font-bold mr-auto flex items-center rounded px-2 py-0.25"
        >
          {{ experience.price.toLocaleString("fa-IR") }} تومان
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { experienceCategories } from "~/constants/experiences.cons"
import type { Experience } from "~/types/experiences"

defineOptions({ name: "ExperienceCard" })
defineProps<{
  experience: Experience
}>()
</script>
