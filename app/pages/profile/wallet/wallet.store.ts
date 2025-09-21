export const useWalletStore = defineStore("wallet", () => {
  const showAddCreditDialog = ref(false)
  const addingCreditAmount = ref<string>("")
  const showWithdrawDialog = ref(false)
  const withdrawAmount = ref<string>("")
  const cardNumber = ref<string>("")
  const withrawState = ref<"withraw" | "result">("withraw")
  const withrawTrackId = ref<string>("")
  const isWithrawing = ref<boolean>(false)
  return {
    addingCreditAmount,
    showAddCreditDialog,
    showWithdrawDialog,
    withdrawAmount,
    cardNumber,
    withrawState,
    withrawTrackId,
    isWithrawing,
  }
})
