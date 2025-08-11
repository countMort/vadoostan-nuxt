export const useRegisterStore = defineStore("register", () => {
  const formData = reactive({
    name: "",
    surname: "",
    phone: "",
  })
  const plus18 = ref(false)
  const loading = ref(false)

  return { formData, plus18, loading }
})
