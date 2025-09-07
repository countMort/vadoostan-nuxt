<template>
  <QLayout view="lHh lpr lFf" container class="!h-screen">
    <QPageContainer class="px-3 max-w-lg mx-auto">
      <QPage>
        <AppHeader
          v-if="appHeader"
          :title="appHeader.title"
          :back-props="appHeader.backProps"
          :class="appHeader.class"
        />
        <slot />
      </QPage>
    </QPageContainer>
    <AppFooter />
  </QLayout>
</template>

<script setup lang="ts">
import AppFooter from "~/components/layout/AppFooter.vue"
import AppHeader from "~/components/layout/AppHeader.vue"
const route = useRoute()

const appHeader = computed<InstanceType<typeof AppHeader>["$props"] | null>(
  () => route.meta.appHeader || null
)

defineOptions({ name: "DefaultLayout" })
</script>
