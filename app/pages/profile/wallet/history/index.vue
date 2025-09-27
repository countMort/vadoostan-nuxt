<template>
  <div class="px-7">
    <header class="mt-7 flex">
      <QIcon
        name="east"
        size="1.5rem"
        @click="navigateTo(routes.profile.wallet, { replace: true })"
      />
    </header>
    <h1 class="!text-[26px] !font-extrabold !leading-none my-4.5">تراکنش‌ها</h1>
    <div class="flex flex-col gap-y-5.5">
      <div
        v-for="transaction in walletHistory?.transactions"
        :key="transaction.time"
        class="flex items-center gap-x-3 w-full"
      >
        <QIcon
          name="call_made"
          size="1.75rem"
          :class="[
            transaction.type === 'withdraw'
              ? 'text-[#EE3F56]'
              : 'text-[#25A858]',
          ]"
        ></QIcon>
        <div class="grow">
          <div class="font-medium text-base">{{ transaction.expTitle }}</div>
          <div class="text-[#434343] mt-2">
            {{ new Date(transaction.time).toLocaleString("fa-IR") }}
          </div>
        </div>
        <div class="text-base font-medium">
          {{ transaction.amount.toLocaleString("fa-IR") }}
        </div>
      </div>
      <div v-if="walletHistory?.transactions.length === 0">
        <div class="text-center font-medium text-[#434343]">
          تراکنشی ثبت نشده است
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserApi } from "~/api/user"
import { routes } from "~/constants/routes.cons"

defineOptions({ name: "WalletHistoryPage" })
definePageMeta({
  middleware: "authenticated",
})
const { getWalletHistory } = useUserApi()
const {
  data: { value: { result: walletHistory } = {} },
} = await getWalletHistory()
</script>
