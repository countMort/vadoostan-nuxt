export const useWalletStore = defineStore("wallet", () => {
  const showAddCreditDialog = ref(false)
  const creditAmount = ref<number>(0)
  return { creditAmount, showAddCreditDialog }
})
