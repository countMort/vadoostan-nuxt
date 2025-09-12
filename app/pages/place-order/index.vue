<template>
  <div class="px-3 xs:px-10 h-screen flex flex-col">
    <AppHeader title="فاکتور" :back-props="{ back: true }" />
    <section class="flex flex-col gap-4.5">
      <div class="font-bold text-lg mt-14">روش پرداخت</div>
      <QRadio
        v-for="value in paymentMethods"
        :key="value.value"
        v-model="placeOrderStore.paymentMethod"
        :val="value.value"
        color="cyan"
      >
        <div>
          <div class="font-semibold text-base">{{ value.label }}</div>
          <div class="text-gray-500 mt-2">{{ value.description }}</div>
        </div>
      </QRadio>
    </section>
    <section class="flex flex-col gap-4.5">
      <div class="font-bold text-lg mt-14">اعتبار</div>
      <QRadio v-model="placeOrderStore.credit" :val="true" color="cyan">
        <div>
          <div class="font-semibold text-base">کیف‌پول</div>
          <div class="text-gray-500 mt-2">موجودی: ۰ تومان</div>
        </div>
      </QRadio>
    </section>
    <footer class="mt-auto text-base pb-5">
      <ul class="flex flex-col gap-2 text-gray-500 space-y-2">
        <li class="flex justify-between">
          <span class="font-semibold">مجموع هزینه تجربه</span>
          <span>{{ toPersianDigits(price.toLocaleString()) }} تومان</span>
        </li>
        <li class="flex justify-between">
          <span class="font-semibold">مالیات</span>
          <span>{{ toPersianDigits(tax.toLocaleString()) }} تومان</span>
        </li>
      </ul>
      <QBtn
        color="positive"
        text-color="white"
        class="!w-full !mt-3 !rounded-xl"
        :rounded="false"
        @click="register"
        >پرداخت
        <span class="text-base font-normal mr-1.5"
          >{{ toPersianDigits(total.toLocaleString()) }} تومان</span
        ></QBtn
      >
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/layout/AppHeader.vue"
import { routes } from "~/constants/routes.cons"

defineOptions({ name: "PlaceOrderPage" })
definePageMeta({
  layout: false,
})
const placeOrderStore = usePlaceOrderStore()
const experiencesStore = useExperiencesStore()
const paymentMethods = [
  {
    label: "پرداخت اینترنتی",
    description: "پرداخت آنلاین با تمامی کارت‌های بانکی",
    value: "online",
  },
]

const price = computed(() => {
  return (
    experiencesStore.experienceSelection.count *
    (experiencesStore.experienceSelection.experience?.price ?? 0)
  )
})

const tax = computed(() => {
  return price.value * 0.1
})

const total = computed(() => {
  return price.value + tax.value
})

const register = () => {
  if (!experiencesStore.experienceSelection.experience) return
  experiencesStore.tempRegisteredExperiences.push({
    experience: experiencesStore.experienceSelection.experience!,
    count: experiencesStore.experienceSelection.count,
  })
  navigateTo(
    routes.experiences.ticket(
      experiencesStore.experienceSelection.experience!.id
    )
  )
}
</script>

<style lang="scss">
.q-radio__bg {
  top: -2px;
}
</style>
