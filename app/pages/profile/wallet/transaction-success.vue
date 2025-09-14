<template>
  <main class="h-screen relative flex">
    <TransactionResult
      class="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
      title="کیف پول با موفقیت شارژ شد"
      subtitle="میزان اعتبار جدیدت در بخش کیف پول قابل مشاهده است."
      code="12345678910"
    />
    <QBtn
      :to="routes.profile.wallet"
      class="mt-auto mb-10 !w-full mx-10"
      replace
      >بازگشت به مینی‌اَپ</QBtn
    >
  </main>
</template>

<script setup lang="ts">
import { routes } from "~/constants/routes.cons"
import TransactionResult from "~/components/payments/TransactionResult.vue"

defineOptions({ name: "WalletTransactionSuccessPage" })
definePageMeta({
  layout: false,
})
</script>
