<template>
  <header class="mt-7 px-10 flex justify-between items-center">
    <QIcon name="east" size="1.5rem" @click="router.back()" />
    <QIcon name="history" size="1.5rem" />
  </header>
  <main class="mt-18 flex flex-col items-center">
    <div class="text-lg">موجودی کیف‌پول</div>
    <div class="font-extrabold text-2xl mb-4.5">
      {{ (1000000).toLocaleString("fa-IR") }} تومان
    </div>

    <div class="grid grid-cols-2 gap-x-3 w-full px-13.5">
      <QBtn
        class="col !bg-black !text-white !font-semibold !text-base !py-4"
        @click="walletStore.showAddCreditDialog = true"
      >
        <QIcon name="add" size="1rem" class="ml-3" />
        واریز
      </QBtn>
      <QBtn
        class="col !bg-[#E9EDEE] !text-black !font-semibold !text-base !py-4"
      >
        <QIcon name="south_west" size="1rem" class="ml-3" />
        برداشت
      </QBtn>
    </div>
  </main>
  <VDialog v-model="walletStore.showAddCreditDialog" title="افزایش موجودی">
    <QCardSection>
      <label
        for="creditAmount"
        class="text-[#4D4D4D] font-semibold mb-2 mt-12.5 block"
        >مبلغ اعتبار را وارد کنید</label
      >
      <QInput
        id="creditAmount"
        v-model="walletStore.creditAmount"
        suffix="تومان"
        dir="ltr"
        type="number"
        :standout="false"
        outlined
        rounded
      />
      <div class="flex gap-x-3.5 mt-3.5">
        <QBtn
          v-for="option in amountOptions"
          :key="option"
          dense
          class="!rounded-lg !text-black !font-bold grow"
          :class="[
            walletStore.creditAmount == option
              ? '!bg-[#E5E5E5]'
              : '!bg-[#F7F7F7]',
          ]"
          @click="walletStore.creditAmount = option"
        >
          {{ option.toLocaleString("fa-IR") }}
          <span class="text-[#B9B9B9] text-sm font-medium mr-1.5"> تومان </span>
        </QBtn>
      </div>
      <QBtn
        class="!bg-black !text-white !w-full !mt-16.5"
        :disable="walletStore.creditAmount == 0"
        >پرداخت</QBtn
      >
    </QCardSection>
  </VDialog>
</template>

<script setup lang="ts">
defineOptions({ name: "WalletPage" })
definePageMeta({
  layout: false,
})
const router = useRouter()
const walletStore = useWalletStore()
const amountOptions = [300000, 600000, 900000]
</script>
<style>
@import "tailwindcss";
.q-field__suffix {
  @apply mr-2;
}
</style>
