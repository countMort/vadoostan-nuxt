<template>
  <QCard class="!rounded-lg p-2 shadow-1">
    <QCardSection horizontal>
      <div
        class="w-15 h-15 flex items-center justify-center !rounded-lg shrink-0 font-extrabold"
        :style="{
          backgroundColor: experienceCategories[experience.category].color,
        }"
      >
        {{ experienceCategories[experience.category].label }}
      </div>
      <div class="flex flex-col mr-3.5 justify-center w-full">
        <div class="font-black">{{ experience.title }}</div>
        <div class="flex w-full">
          <div class="text-xs mt-1.5 flex items-center">
            محله، {{ experience.address }}
            <div class="w-1.25 h-1.25 bg-1 rounded-full mx-1.5" />
            {{
              (() => {
                const date = new Date(experience.date)
                const dateStr = date.toLocaleDateString("fa-IR")
                const timeStr = date.toLocaleTimeString("fa-IR", {
                  hour: "numeric",
                  minute: "numeric",
                })
                return `${dateStr} - ${timeStr}`
              })()
            }}
          </div>
          <div
            class="text-1 bg-1/20 text-xs font-bold mr-auto flex items-center rounded px-2 py-0.25"
          >
            {{ experience.price.toLocaleString("fa-IR") }} تومان
          </div>
        </div>
      </div>
    </QCardSection>
  </QCard>
</template>

<script setup lang="ts">
import { experienceCategories } from "~/constants/experiences.cons"
import type { Experience } from "~/types/experiences"

defineOptions({ name: "ExperienceCard" })
defineProps<{
  experience: Experience
}>()
</script>
