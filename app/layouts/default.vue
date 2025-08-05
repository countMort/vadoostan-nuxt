<template>
  <QLayout view="lHh lpr lFf" container class="!h-screen">
    <QPageContainer>
      <QPage>
        <slot />
      </QPage>
    </QPageContainer>
    <QFooter class="!bg-[#D9D9D9] h-15 flex">
      <QTabs
        class="grow text-black"
        stretch
        indicator-color="transparent"
        active-color="primary"
        active-bg-color="secondary"
      >
        <QRouteTab to="/login" exact label="ورود" />
        <QRouteTab to="/register" exact label="ثبت نام" />
      </QTabs>
    </QFooter>
  </QLayout>
</template>

<script setup lang="ts">
defineOptions({ name: "DefaultLayout" })
</script>
