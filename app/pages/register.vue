<template>
  <div class="flex flex-col gap-3 mt-10 px-3 md:px-8">
    <div class="flex gap-3">
      <QInput v-model="name" label="نام" class="min-w-40 grow" standout />
      <QInput
        v-model="surname"
        label="نام خانوادگی"
        type="password"
        standout
        class="min-w-40 grow"
      />
      <QInput
        v-model="phone"
        label="شماره تماس"
        mask="phone"
        dir="ltr"
        standout
        class="min-w-40 grow"
      />
      <QBtn
        label="ثبت نام"
        color="primary"
        class="!w-full md:!w-auto mx-auto"
        @click="register"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "RegisterPage" })
const name = ref("")
const surname = ref("")
const phone = ref("")

const register = () => {
  console.log(name.value, surname.value, phone.value)
}
</script>

<style scoped></style>
