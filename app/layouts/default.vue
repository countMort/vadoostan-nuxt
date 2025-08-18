<template>
  <QLayout view="lHh lpr lFf" container class="!h-screen">
    <QPageContainer class="px-6 max-w-lg mx-auto">
      <QPage>
        <AppHeader
          v-if="appHeader"
          :title="appHeader.title"
          :to="appHeader.to"
          :class="appHeader.class"
        />
        <slot />
      </QPage>
    </QPageContainer>
    <QFooter
      class="!bg-disabled h-20 flex rounded-t-lg overflow-hidden border border-border"
    >
      <QTabs class="grow text-black" stretch indicator-color="transparent">
        <template v-if="!authStore.isAuthenticated">
          <QRouteTab
            :to="routes.auth.login"
            exact
            active-class="text-primary bg-secondary"
          >
            <span class="text-base font-bold">ورود</span>
          </QRouteTab>
          <QRouteTab
            :to="routes.auth.register"
            exact
            active-class="text-primary bg-secondary"
          >
            <span class="text-base font-bold">ثبت نام</span>
          </QRouteTab>
        </template>
        <template v-else>
          <QRouteTab
            :to="routes.profile.index"
            exact
            active-class="text-primary bg-secondary"
          >
            <ProfileIcon color="currentColor" :size="6.75" />
            <span class="text-xs font-extrabold mt-1.5">پروفایل</span>
          </QRouteTab>
          <QRouteTab
            :to="routes.experiences.index"
            exact
            active-class="text-primary bg-secondary"
          >
            <ExperiencesIcon color="currentColor" :size="7.25" />
            <span class="text-xs font-extrabold mt-1">تجربه‌ها</span>
          </QRouteTab>
        </template>
      </QTabs>
    </QFooter>
  </QLayout>
</template>

<script setup lang="ts">
import ExperiencesIcon from "~/components/icons/Experiences.vue"
import ProfileIcon from "~/components/icons/Profile.vue"
import AppHeader from "~/components/layout/AppHeader.vue"
import { routes } from "~/constants/routes.cons"
const route = useRoute()

const appHeader = computed<InstanceType<typeof AppHeader>["$props"] | null>(
  () => route.meta.appHeader || null
)

defineOptions({ name: "DefaultLayout" })
const authStore = useAuthStore()
</script>
