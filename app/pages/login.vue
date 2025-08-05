<template>
  <div class="flex flex-col gap-3 mt-10 px-3 md:px-8">
    <QCard>
      <QCardSection>
        <QInput v-model="email" label="ایمیل" />
        <QInput v-model="password" label="رمز عبور" />
        <QBtn label="ورود" color="primary" />
      </QCardSection>
    </QCard>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "LoginPage" })
const email = ref("")
const password = ref("")
</script>
