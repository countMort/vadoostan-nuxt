<template>
  <div class="flex flex-col gap-3">
    <nav>
      <QBtn
        dense
        class="!rounded-lg"
        :class="{
          '!bg-border !text-[#434343]': !experiencesStore.filters.city,
        }"
        @click="experiencesStore.ShowCityFilter = true"
      >
        <span class="text-sm font-semibold">{{
          experiencesStore.filters.city?.title || "شهر"
        }}</span>
        <QIcon name="expand_more" color="inherit" size="1.25rem" />
      </QBtn>
    </nav>
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
        :filled="experience.isFilled"
      />
    </template>
    <NotFound
      v-if="
        Object.keys(experiencesByDay || {}).length === 0 &&
        experiencesStore.filters.city
      "
      @another-city="experiencesStore.ShowCityFilter = true"
    />
  </div>
  <QDialog
    v-model="experiencesStore.ShowCityFilter"
    position="bottom"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <QCard class="!w-full !rounded-t-2xl">
      <div class="relative pt-5 flex justify-center">
        <QBtn
          v-close-popup
          flat
          icon="close"
          class="!text-black left-3 absolute"
          size="sm"
          dense
        />
        <span class="text-xl font-semibold">انتخاب شهر</span>
      </div>
      <QCardSection class="grid grid-cols-12 gap-2.5">
        <QBtn
          v-for="city in filterResponse.result.cities"
          :key="city.id"
          :label="city.title"
          dense
          :rounded="false"
          class="!rounded-lg col-span-6 !text-base !py-2.5"
          :class="{
            '!bg-disabled !text-[#434343]':
              experiencesStore.filters.city?.id !== city.id,
          }"
          @click="selectCity(city)"
        />
      </QCardSection>
    </QCard>
  </QDialog>
</template>

<script lang="ts" setup>
import ExperienceCard from "~/components/experiences/ExperienceCard.vue"
import type {
  Experience,
  GetExperienceFiltersResponse,
} from "~/types/experiences"
import { useExperiencesApi } from "~/api/experiences"
import NotFound from "~/components/experiences/404.vue"

const experiencesStore = useExperiencesStore()

defineOptions({
  name: "ExperiencesPage",
})

definePageMeta({
  appHeader: { title: "تجربه‌ها", backProps: { hide: true } },
})

const { getExperiences, getExperienceFilters } = useExperiencesApi()
const { data: experiences } = await getExperiences({
  params: {
    status: "published",
    cityId: computed(() => experiencesStore.filters.city?.id),
  },
})
const { data: filterResponse } = await getExperienceFilters({ lazy: true })

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

const selectCity = (
  city: GetExperienceFiltersResponse["result"]["cities"][number]
) => {
  if (experiencesStore.filters.city?.id === city.id) {
    experiencesStore.filters.city = null
  } else {
    experiencesStore.filters.city = city
  }
  experiencesStore.ShowCityFilter = false
}
</script>
