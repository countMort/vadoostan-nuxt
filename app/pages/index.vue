<template>
  <div
    :class="`h-screen bg-brand flex flex-col items-center text-[24px] font-black text-white`"
  >
    <NuxtImg
      src="/images/logo.png"
      class="w-[121px] h-[228px] text-center mb-8 mt-auto"
    />
    تجربه‌های حال‌‌خوب‌کن
    <div class="mt-auto text-center rounded-t-2xl bg-white w-full">
      <div
        v-if="!authStore.isAuthenticated"
        class="flex justify-center mt-9 gap-x-3"
      >
        <QBtn
          label="ثبت نام"
          to="/auth/register"
          class="!w-40"
          text-color="white"
          color="brand"
        />
        <QBtn
          label="ورود"
          to="/auth/login"
          text-color="black"
          class="!bg-[#F5F7F6] !w-40"
        />
      </div>
      <br v-if="authStore.isAuthenticated" />
      <NuxtLink
        to="/experiences"
        class="text-black font-medium text-sm mt-6 mb-5.5 block"
      >
        لیست تجربه‌ها
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { routes } from "~/constants/routes.cons"

const authStore = useAuthStore()
defineOptions({ name: "HomePage" })
definePageMeta({
  layout: false,
})

onMounted(() => {
  if (authStore.isAuthenticated) {
    navigateTo(routes.experiences.index)
  }
})
</script>
