<template>
  <QLayout view="lHh lpr lFf" container class="!h-screen">
    <QPageContainer>
      <QPage>
        <slot />
      </QPage>
    </QPageContainer>
    <QFooter v-if="!authStore.isAuthenticated" class="!bg-disabled h-15 flex">
      <QTabs
        class="grow text-black"
        stretch
        indicator-color="transparent"
        active-color="primary"
        active-bg-color="secondary"
      >
        <QRouteTab :to="routes.auth.login" exact>
          <span class="text-base font-bold">ورود</span>
        </QRouteTab>
        <QRouteTab :to="routes.auth.register" exact>
          <span class="text-base font-bold">ثبت نام</span>
        </QRouteTab>
      </QTabs>
    </QFooter>
  </QLayout>
</template>

<script setup lang="ts">
import { routes } from "~/constants/routes.cons"

defineOptions({ name: "DefaultLayout" })
const authStore = useAuthStore()
</script>
