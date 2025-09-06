<template>
  <div class="relative">
    <AppHeader class="fixed top-0 left-3 right-3 xs:left-10 xs:right-10 z-10" />
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
    <div class="mt-5 px-3 xs:px-10 relative">
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
    <footer
      :class="`sticky bottom-0 left-0 right-0 bg-disabled h-20 rounded-t-lg border
      border-border flex items-center px-3 xs:px-10`"
    >
      <template
        v-if="
          experienceStore.tempRegisteredExperiences.find(
            (e) => e.experience.title === experience?.title
          )
        "
      >
        <QBtn class="!bg-[#79ACE1] text-white !w-full !rounded-lg">
          <QIcon name="receipt" size="1.75rem" class="ml-2"></QIcon>
          نمایش بلیت
        </QBtn>
      </template>
      <template v-else>
        <QSlideTransition>
          <div
            v-if="experienceStore.experienceSelection.isSelecting"
            class="absolute -top-3 -translate-y-full text-[#434343]"
          >
            <div
              class="flex items-center justify-center gap-x-3 bg-gray-200 text-lg font-semibold h-15 px-3 rounded-lg"
            >
              <QIcon
                name="add"
                size="1.5rem"
                @click="experienceStore.addCountToExperience"
              />
              <span class="min-w-3">
                {{
                  toPersianDigits(
                    experienceStore.experienceSelection.count + ""
                  )
                }}
              </span>
              <QIcon
                name="remove"
                size="1.5rem"
                @click="experienceStore.removeCountFromExperience"
              />
            </div>
          </div>
        </QSlideTransition>
        <QBtn
          v-if="!experienceStore.experienceSelection.isSelecting"
          class="flex items-center justify-center !rounded-lg"
          @click="experienceStore.selectExperience(experience!)"
        >
          <ShoppingBasketPlus :size="7" class="ml-1.5" color="currentColor" />
          شرکت در تجربه
        </QBtn>
        <QBtn
          v-else
          color="positive"
          text-color="white"
          class="!rounded-lg"
          @click="onSubmit"
        >
          <ShoppingBasketCheck :size="7" class="ml-1.5" color="currentColor" />
          تکمیل ثبت‌نام
        </QBtn>
        <div class="mr-1 flex-1 min-w-0 flex items-center justify-end">
          <span
            class="font-bold break-words leading-tight text-center"
            :class="[
            experience!.price > 1000000 && experience!.price % 1000000 !== 0
              ? 'text-sm'
              : 'text-lg',
          ]"
          >
            {{ toPersianDigits(formatTomanFull(experience!.price)) }}
          </span>
        </div>
      </template>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { baseUrl } from "~/constants/api.cons"
import ShoppingBasket from "~/components/icons/ShoppingBasket.vue"
import { useExperiencesApi } from "~/api/experiences"
import AppHeader from "~/components/layout/AppHeader.vue"
import ShoppingBasketPlus from "~/components/icons/ShoppingBasketPlus.vue"
import ShoppingBasketCheck from "~/components/icons/ShoppingBasketCheck.vue"
import { routes } from "~/constants/routes.cons"
defineOptions({ name: "ExperiencePage" })
definePageMeta({
  middleware: "authenticated",
  appHeader: { class: "fixed top-0 left-10 right-10 z-10" },
  layout: false,
})
const experienceStore = useExperiencesStore()
const params = useRoute().params
const { getExperience } = useExperiencesApi()
const {
  data: { value: { result: experience } = {} },
} = await getExperience({ experienceId: params.id as string })
const slide = ref(-1)
const onSubmit = () => {
  navigateTo(routes.placeOrder.index)
}

onMounted(() => {
  slide.value = 0
  experienceStore.unselectExperience()
})
</script>
