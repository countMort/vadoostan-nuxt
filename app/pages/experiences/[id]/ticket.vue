<template>
  <div class="flex flex-col items-center mb-10.5 font-black text-lg px-2">
    <NuxtImg src="/images/congrats.png" class="w-14 h-14 mb-5.5" />
    ثبت‌نام شما با موفقیت تکمیل شد!
  </div>
  <div class="flex flex-col gap-5.5 px-2">
    <ExperienceDetailSection title="تجربه" :description="experience?.title" />
    <ExperienceDetailSection title="مکان" :description="experience?.address" />
    <ExperienceDetailSection title="زمان" :description="dateTimeString" />
    <ExperienceDetailSection title="کد پیگیری" @click="copyCode">
      <p class="!m-0 flex">
        ۱۲۳۴۵۶۷۸۹۱۰ <QIcon name="content_copy" size="1rem" class="mr-2" />
      </p>
    </ExperienceDetailSection>
  </div>
  <div class="mt-12.5 flex flex-col gap-5 mb-20 px-2">
    <QBtn class="!w-full !text-vblue !bg-vblue/20" label="گروه تلگرام" />
    <QBtn class="!w-full" label="لوکیشن" @click="openLocation" />
    <QBtn
      class="!w-full !text-vpurple !bg-vpurple/20"
      label="اضافه‌کردن به تقویم"
      @click="addEventToCalendar"
    />
  </div>
</template>

<script setup lang="ts">
import { useExperiencesApi } from "~/api/experiences"
import ExperienceDetailSection from "~/components/experiences/ExperienceDetailSection.vue"

defineOptions({ name: "ExperienceTicketPage" })
definePageMeta({
  middleware: "authenticated",
  appHeader: {
    title: "بلیت",
    class: "pb-14",
    backProps: {
      back: true,
    },
  },
})

const $q = useQuasar()
const copyCode = () => {
  navigator.clipboard.writeText("12345678910")
  $q.notify({
    message: "کد پیگیری کپی شد",
  })
}

const params = useRoute().params
const { getExperience } = useExperiencesApi()
const {
  data: { value: { result: experience } = {} },
} = await getExperience({ experienceId: params.id as string })

const date = new Date(experience?.date || "")
const dateString = date.toLocaleDateString("fa-IR", {
  month: "long",
  day: "numeric",
})
const timeString = date.toLocaleTimeString("fa-IR", {
  hour: "numeric",
  minute: "numeric",
})
const dateTimeString = `${dateString}، ساعت ${timeString}`
const openLocation = () => {
  navigateTo(
    `https://www.google.com/maps/search/?api=1&query=${experience?.address}`,
    {
      external: true,
      open: {
        target: "_blank",
      },
    }
  )
}
const addEventToCalendar = () => {
  const dateStartString =
    date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  const dateEndString =
    new Date(date.getTime() + 1000 * 60 * 60)
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0] + "Z"
  navigateTo(
    `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      experience?.title || ""
    )}&dates=${dateStartString}/${dateEndString}&location=${encodeURIComponent(
      experience?.address || ""
    )}&details=${encodeURIComponent(
      experience?.description?.main || ""
    )}&location=${encodeURIComponent(experience?.address || "")}`,
    {
      external: true,
      open: {
        target: "_blank",
      },
    }
  )
}
</script>
