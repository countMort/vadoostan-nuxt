export const usePlaceOrderStore = defineStore("placeOrder", () => {
  const paymentMethod = ref<string>("")
  const credit = ref<boolean>(false)

  return {
    paymentMethod,
    credit,
  }
})
