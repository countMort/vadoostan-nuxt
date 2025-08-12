export const useRegisterStore = defineStore("register", () => {
  const formData = reactive({
    firstName: "",
    lastName: "",
    mobileNumber: "",
  })
  const plus18 = ref(false)
  const loading = ref(false)

  return { formData, plus18, loading }
})
