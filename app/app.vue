<template>
  <Html lang="fa">
    <Head>
      <Title>و دوستان</Title>
      <!-- <Meta name="description" content="و دوستان" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Link rel="icon" href="/favicon.ico" />
      <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" /> -->
    </Head>
  </Html>
  <Body class="bg-bg-light">
    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--q-primary)" />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<script lang="ts" setup>
// const isDark = ref(false)
// onMounted(() => {
//   isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches
// })
// const $q = useQuasar()
// watch(isDark, (newVal) => {
//   $q.dark.set(newVal)
// })
</script>
