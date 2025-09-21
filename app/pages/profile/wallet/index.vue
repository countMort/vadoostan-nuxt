<template>
  <header class="mt-7 px-10 flex justify-between items-center">
    <QIcon name="east" size="1.5rem" @click="router.back()" />
    <QIcon name="history" size="1.5rem" />
  </header>
  <main class="mt-18 flex flex-col items-center">
    <div class="text-lg">موجودی کیف‌پول</div>
    <div class="font-extrabold text-2xl mb-4.5">
      {{ (wallet?.balance || 0).toLocaleString("fa-IR") }} تومان
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
        @click="walletStore.showWithdrawDialog = true"
      >
        <QIcon name="south_west" size="1rem" class="ml-3" />
        برداشت
      </QBtn>
    </div>
  </main>
  <VDialog v-model="walletStore.showAddCreditDialog" title="افزایش موجودی">
    <QCardSection class="!px-8">
      <label
        for="creditAmount"
        class="text-[#4D4D4D] font-semibold mb-2 mt-12.5 block"
        >مبلغ اعتبار را وارد کنید</label
      >
      <VInput
        id="creditAmount"
        v-model="walletStore.addingCreditAmount"
        suffix="تومان"
        dir="ltr"
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
            walletStore.addingCreditAmount == option
              ? '!bg-[#E5E5E5]'
              : '!bg-[#F7F7F7]',
          ]"
          @click="walletStore.addingCreditAmount = option"
        >
          {{ Number(option).toLocaleString("fa-IR") }}
          <span class="text-[#B9B9B9] text-sm font-medium mr-1.5"> تومان </span>
        </QBtn>
      </div>
      <QBtn
        class="!bg-black !text-white !w-full !mt-16.5"
        :disable="Number(walletStore.addingCreditAmount) === 0"
        >پرداخت</QBtn
      >
    </QCardSection>
  </VDialog>
  <VDialog v-model="walletStore.showWithdrawDialog" title="برداشت پول">
    <QCardSection class="!px-8 flex relative">
      <div
        :class="{ invisible: walletStore.withrawState === 'result' }"
        class="grow"
      >
        <div class="text-[#747675] text-center mt-1">
          مبلغ مورد نظر و شماره کارت را وارد کنید.
          <br />شماره کارت باید به نام شماره همراه شما باشد.
        </div>
        <QForm @submit="submitWithdraw">
          <label for="withdrawAmount" class="font-bold mb-2 mt-6 block"
            >مبلغ برداشت</label
          >
          <VInput
            id="withdrawAmount"
            v-model="walletStore.withdrawAmount"
            suffix="تومان"
            dir="ltr"
            :standout="false"
            outlined
            rounded
            :lazy-rules="false"
          />
          <label for="cardNumber" class="font-bold mb-2 mt-6 block"
            >شماره کارت</label
          >
          <QInput
            id="cardNumber"
            v-model="walletStore.cardNumber"
            dir="ltr"
            type="text"
            :standout="false"
            outlined
            rounded
            mask="####-####-####-####"
            unmasked-value
          />
          <QBtn
            class="!bg-black !text-white !w-full !mt-14"
            :disable="
              Number(walletStore.withdrawAmount) === 0 ||
              walletStore.cardNumber.length < 16
            "
            :loading="walletStore.isWithrawing"
            type="submit"
            >برداشت پول</QBtn
          >
        </QForm>
      </div>
      <div
        v-if="walletStore.withrawState === 'result'"
        class="absolute top-1/2 left-0 w-full -translate-y-1/2 text-center"
      >
        <TransactionResult
          class="w-full"
          title="درخواست برداشت با موفقیت ثبت شد"
          subtitle="مبلغ حداکثر تا ۱۰ روز کاری به حسابت واریز خواهد شد."
          type="success"
          :code="walletStore.withrawTrackId"
        />
        <QBtn
          dense
          class="!mt-5 !py-2 !px-4 !text-base"
          @click="walletStore.withrawState = 'withraw'"
        >
          متوجه شدم</QBtn
        >
      </div>
    </QCardSection>
  </VDialog>
</template>

<script setup lang="ts">
import TransactionResult from "~/components/payments/TransactionResult.vue"
import { useUserApi } from "~/api/user"

defineOptions({ name: "WalletPage" })
definePageMeta({
  layout: false,
})
const { getWallet, withdraw } = useUserApi()
const {
  data: { value: { result: wallet } = {} },
} = await getWallet()
const router = useRouter()
const walletStore = useWalletStore()
const amountOptions = ["300000", "600000", "900000"]
const submitWithdraw = async () => {
  walletStore.isWithrawing = true
  try {
    const res = await withdraw({
      amount: Number(walletStore.withdrawAmount),
      cardNumber: walletStore.cardNumber,
    })
    walletStore.withrawState = "result"
    walletStore.withrawTrackId = res.result.trackId
  } catch (err) {
    console.log(err)
  } finally {
    walletStore.isWithrawing = false
  }
}
</script>
<style>
@import "tailwindcss";
.q-field__suffix {
  @apply mr-2;
}

.q-field__append {
  @apply !pl-0;
}
</style>
