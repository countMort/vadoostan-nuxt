<template>
  <div class="flex flex-col gap-3 mt-10 px-3 md:px-8">
    <QCard>
      <QCardSection>
        <QInput v-model="email" label="ایمیل" />
        <QInput v-model="password" label="رمز عبور" type="password" />
        <QInput
          v-model="confirmPassword"
          label="تایید رمز عبور"
          type="password"
        />
        <QBtn label="ثبت نام" color="primary" @click="register" />
      </QCardSection>
    </QCard>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "RegisterPage" })
const email = ref("")
const password = ref("")
const confirmPassword = ref("")

const register = () => {
  console.log(email.value, password.value, confirmPassword.value)
}
</script>

<style scoped></style>
