<template>
  <div class="flex items-center gap-x-3.5 pt-17">
    <span
      class="flex items-center justify-center rounded-full w-15 h-15 bg-disabled"
    >
      <ProfileIcon color="currentColor" :size="6.75" />
    </span>
    <div class="flex flex-col gap-y-1">
      <span class="text-2xl font-extrabold">{{
        authStore.user?.fullName
      }}</span>
      <span class="text-lg text-gray-500 text-end" dir="ltr">{{
        toPersianDigits(authStore.user?.mobileNumber || "")
      }}</span>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-6 mt-9 px-5">
    <ProfileLink
      v-for="link in links"
      :key="link.title"
      :title="link.title"
      :to="link.to"
      class="grow"
    >
      <component :is="link.icon" :size="12.5" />
    </ProfileLink>
  </div>
</template>

<script setup lang="ts">
import FavoriteAward from "~/components/icons/FavoriteAward.vue"
import CustomerSupport from "~/components/icons/CustomerSupport.vue"
import Wallet from "~/components/icons/Wallet.vue"
import ProfileIcon from "~/components/icons/Profile.vue"
import ProfileLink from "~/components/profile/ProfileLink.vue"
import { routes } from "~/constants/routes.cons"

defineOptions({ name: "ProfilePage" })
definePageMeta({ middleware: "authenticated" })

const authStore = useAuthStore()
const links = [
  {
    title: "تجربیات گذشته",
    to: routes.profile.pastExperiences,
    icon: FavoriteAward,
  },
  {
    title: "کیف پول",
    to: routes.profile.wallet,
    icon: Wallet,
  },
  {
    title: "پشتیبانی",
    to: "/support",
    icon: CustomerSupport,
  },
]
</script>
