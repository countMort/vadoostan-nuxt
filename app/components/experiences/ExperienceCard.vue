<template>
  <NuxtLink
    :to="deactive ? undefined : to || routes.experiences.details(experience.id)"
    class="rounded-lg p-2 shadow-sm flex flex-row bg-white"
  >
    <div
      class="w-15 h-15 flex items-center justify-center rounded-lg shrink-0 font-extrabold"
      :style="{
        backgroundColor: deactive
          ? '#cecece'
          : experienceCategories[experience.category]?.color || '#000',
      }"
    >
      {{
        experienceCategories[experience.category]?.label || experience.category
      }}
    </div>
    <div class="flex flex-col mr-3.5 justify-center grow">
      <div class="font-black">{{ experience.title }}</div>
      <div class="flex w-full">
        <div class="text-xs mt-1.5 flex items-center ml-auto">
          محله: {{ experience.address }}
          <DotSeperator :color="deactive ? '#cecece' : undefined" />
          ساعت:
          {{
            new Date(experience.date).toLocaleTimeString("fa-IR", {
              hour: "numeric",
              minute: "numeric",
            })
          }}
        </div>
        <slot v-if="!deactive" name="actions"
          ><div
            class="text-primary bg-primary/20 text-xs font-bold flex items-center rounded px-2 py-0.25"
          >
            {{ experience.price.toLocaleString("fa-IR") }} تومان
          </div></slot
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { routes } from "~/constants/routes.cons"
import { experienceCategories } from "~/constants/experiences.cons"
import type { Experience } from "~/types/experiences"

defineOptions({ name: "ExperienceCard" })
const { experience } = defineProps<{
  experience: Experience
  deactive?: boolean
  to?: string
}>()
</script>
