<template>
  <section class="flex gap-3 flex-col">
    <h2 class="!text-lg !font-black text-primary">تجربیات فعال</h2>
    <ExperienceCard
      v-for="experience in experiences"
      :key="experience.id"
      :experience="experience"
      :to="routes.experiences.ticket(experience.id)"
    >
      <template #actions>
        <div
          class="text-white bg-[#79ACE1] text-xs font-bold flex items-center rounded px-2.5 py-0.25"
        >
          نمایش بلیت
        </div>
      </template>
    </ExperienceCard>
  </section>
  <section class="mt-6 flex flex-col gap-3">
    <h2 class="!text-lg !font-black">تجربیات گذشته</h2>
    <ExperienceCard
      v-for="experience in experiences"
      :key="experience.id"
      :experience="experience"
      deactive
    />
  </section>
</template>
<script setup lang="ts">
import { routes } from "~/constants/routes.cons"
import ExperienceCard from "~/components/experiences/ExperienceCard.vue"
import { ExperienceStatus, type Experience } from "~/types/experiences"
import { useExperiencesApi } from "~/api/experiences"

defineOptions({ name: "PastExperiencesPage" })
definePageMeta({
  middleware: "authenticated",
  appHeader: {
    title: "تجربیات گذشته",
    class: "pb-7.5",
    backProps: {
      to: routes.profile.index,
    },
  },
})

const { getUserExperiences } = useExperiencesApi()
const { user } = useAuthStore()
const { data, error } = await getUserExperiences({
  userId: user!.userId,
})
console.log(data)

const experiences = ref<Experience[]>([
  {
    id: "01K1MZF304AHN57PQBX3HCH8PN",
    title: "گل‌آرایی، سبد گل",
    category: "movie",
    price: 700000,
    date: "2025-08-22T12:17:39.000Z",
    status: ExperienceStatus.PUBLISHED,
    address: "کریمخان",
    isFilled: false,
  },
  {
    id: "01K1RD6VRC5CVSRTF2PGE05QV9",
    title: "یک دو سه امتحان میکنیم",
    category: "music",
    price: 200000,
    date: "2025-08-22T20:00:00.000Z",
    status: ExperienceStatus.PUBLISHED,
    address: "کریمخان",
    isFilled: false,
  },
  {
    id: "01K2H705ZAYHAC6B7P4HFV0AWF",
    title: "نقاشی با رنگ و تکسچر",
    category: "movie",
    price: 700000,
    date: "2025-08-23T11:26:04.000Z",
    status: ExperienceStatus.PUBLISHED,
    address: "کریمخان",
    isFilled: false,
  },
])
</script>
