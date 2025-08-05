<template>
  <QCarousel
    v-model="slide"
    animated
    swipeable
    infinite
    :autoplay="8000"
    class="!h-62"
    transition-prev="scale"
    transition-next="scale"
    navigation
  >
    <QCarouselSlide
      v-for="(photo, index) in experience?.expPhotos"
      :key="`experience-photo-${index}`"
      :name="index"
      class="flex justify-center items-center !p-0"
    >
      <NuxtImg
        :src="baseUrl + '/' + photo"
        :height="248"
        class="max-h-62 object-cover"
        placeholder
      />
    </QCarouselSlide>
    <QCarouselSlide
      v-if="experience?.expPhotos.length === 0"
      :name="0"
      class="flex justify-center items-center"
    >
      <div class="flex flex-col items-center">
        <QIcon name="image" size="3rem" />
        <p class="text-center">تصویری برای این تجربه موجود نیست</p>
      </div>
    </QCarouselSlide>

    <template #navigation-icon="{ active, onClick }">
      <QIcon
        name="horizontal_rule"
        :color="active ? 'primary' : 'grey-4'"
        size="3rem"
        class="mx-1"
        @click="onClick"
      />
    </template>
  </QCarousel>
  <div class="mt-5 px-10">
    <div class="font-black mb-2.5">
      {{ experience?.title }}
    </div>
    <div class="flex items-center text-sm">
      <div>
        {{
          new Date(experience?.date || "").toLocaleDateString("fa-IR", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        }}
      </div>
      <DotSeperator :size="2.5" class="mx-3.5" />
      <div>{{ experience?.address }}</div>
    </div>
    <QSeparator class="!mt-8 !mb-4" />
    <div class="font-black mb-2.5">توضیحات</div>
    <div class="text-sm">
      {{ experience?.description.main }}
    </div>
    <QSeparator class="!mt-8 !mb-4" />
    <div class="font-black mb-2.5">آنچه در تجربه ارائه می‌شود</div>
    <div class="flex flex-wrap justify-center gap-2.5">
      <div
        v-for="(inclusion, index) in experience?.inclusions"
        :key="`inclusion-${index}`"
        class="flex flex-col bg-gray-200 rounded-lg w-20 h-20 items-center justify-center text-sm text-center"
      >
        <ShoppingBasket class="mb-1.5" />
        {{ inclusion }}
      </div>
    </div>
    <QSeparator class="!my-3.5" />
    <div class="font-black mb-2.5">سوالات متداول</div>
    <div
      v-for="(faq, index) in experience?.faqs"
      :key="`faq-${index}`"
      class="mb-3.5"
    >
      <h4 class="mt-1.5 mb-0.5 !text-xs !font-semibold">
        {{ faq.question }}
      </h4>
      <p class="text-xs">
        {{ faq.answer }}
      </p>
    </div>
    <QSeparator class="!my-3.5" />
    <QCard
      v-for="(director, index) in experience?.directors"
      :key="`director-${index}`"
      class="!bg-bg-light mb-3.5"
      flat
    >
      <QItem class="!p-0">
        <QAvatar class="ml-2.5">
          <NuxtImg
            :src="baseUrl + director?.photoUrl"
            :height="48"
            :width="48"
          />
        </QAvatar>

        <QItemSection>
          <QItemLabel class="font-bold">{{ director?.name }}</QItemLabel>
          <QItemLabel caption> برگزار کننده </QItemLabel>
        </QItemSection>
      </QItem>
      <p class="text-xs !mt-2.5">
        {{ director?.bio }}
      </p>
    </QCard>
  </div>
</template>

<script setup lang="ts">
import { apiKeys, baseUrl } from "~/constants/api.cons"
import type { ExperienceResponse } from "~/types/api"
import ShoppingBasket from "~/components/icons/ShoppingBasket.vue"
defineOptions({ name: "ExperiencePage" })

const params = useRoute().params
const {
  data: { value: { result: experience } = {} },
} = await useAsyncData<ExperienceResponse>(apiKeys.experience, () =>
  $fetch(`/api/user/experiences/${params.id}`)
)
const slide = ref(-1)
onMounted(() => {
  slide.value = 0
})
</script>
