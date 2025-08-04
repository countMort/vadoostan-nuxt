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
      v-for="(photo, index) in experience?.result.expPhotos"
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
      v-if="experience?.result.expPhotos.length === 0"
      :name="0"
      class="flex justify-center items-center"
    >
      <div class="flex flex-col items-center">
        <q-icon name="image" size="48px" />
        <p class="text-center">تصویری برای این تجربه موجود نیست</p>
      </div>
    </QCarouselSlide>

    <template #navigation-icon="{ active, onClick }">
      <q-icon
        name="horizontal_rule"
        :color="active ? 'primary' : 'grey-4'"
        size="48px"
        class="mx-1"
        @click="onClick"
      />
    </template>
  </QCarousel>
  <div class="mt-5 px-10">
    <div class="font-black mb-2.5">شبِ خلق: سفالگری با چرخ</div>
    <div class="flex items-center text-sm">
      <div>۱۲ بهمن، ساعت ۱۶:۰۰</div>
      <DotSeperator :size="0.625" class="mx-3.5" />
      <div>محله توحید</div>
    </div>
    <QSeparator class="!mt-8 !mb-4" />
    <div class="font-black mb-2.5">توضیحات</div>
    <div class="text-sm">
      در این بازی، شما مثل یک کارآگاه خصوصی با جمع‌آوری سرنخ‌ها؛ هویت قاتل، سلاح
      مورد استفاده و محل وقوع جرم رو کشف می‌کنید.
    </div>
    <QSeparator class="!mt-8 !mb-4" />
    <div class="font-black mb-2.5">آنچه در تجربه ارائه می‌شود</div>
    <div class="flex no-wrap">
      <ShoppingBasket />
    </div>
  </div>
</template>

<script setup lang="ts">
import { apiKeys, baseUrl } from "~/constants/api.cons"
import type { ExperienceResponse } from "~/types/api"
import ShoppingBasket from "~/components/icons/ShoppingBasket.svg"
defineOptions({ name: "ExperiencePage" })

const params = useRoute().params
const { data: experience } = await useAsyncData<ExperienceResponse>(
  apiKeys.experience,
  () => $fetch(`/api/user/experiences/${params.id}`)
)
const slide = ref(-1)
onMounted(() => {
  slide.value = 0
})
</script>
