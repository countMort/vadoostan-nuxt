<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Background image -->
    <NuxtImg
      src="/images/splash.png"
      class="absolute top-0 left-0 w-full h-full object-cover"
    />

    <!-- White gradient overlay -->
    <!-- style="background: linear-gradient(to top, white 20%, transparent 80%)" -->

    <div
      class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white from-20% to-transparent"
    />

    <!-- Foreground content -->
    <div
      class="absolute bottom-7.5 left-0 w-full text-center font-bold text-xl z-10"
    >
      وَ دوستان
      <br />تجربه‌های حال‌‌خوب‌کن
      <div
        v-if="!authStore.isAuthenticated"
        class="flex justify-center mt-4.5 gap-x-3"
      >
        <QBtn label="ثبت نام" to="/auth/register" class="!w-40" />
        <QBtn
          label="ورود"
          to="/auth/login"
          text-color="black"
          class="!bg-disabled !w-40"
        />
      </div>
      <br v-if="authStore.isAuthenticated" />
      <NuxtLink
        to="/experiences"
        class="text-[#585858] font-medium text-sm mt-5"
      >
        لیست تجربه‌ها
      </NuxtLink>
    </div>
  </div>
  <!-- <QBtn label="تجربه ها" to="/experiences" /> -->
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
    navigateTo(routes.experiences.list)
  }
})
</script>
