export const useOtpStore = defineStore("otp", () => {
  const timer = ref(120)
  const intervalId = ref<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    stopTimer()
    intervalId.value = setInterval(() => {
      timer.value -= 1
      if (timer.value <= 0) {
        stopTimer()
      }
    }, 1000)
  }

  const stopTimer = () => {
    if (intervalId.value) {
      clearInterval(intervalId.value)
      intervalId.value = null
      timer.value = 120
    }
  }
  const formattedTime = computed(() => {
    const minutes = Math.floor(timer.value / 60)
    const seconds = timer.value % 60
    return toPersianDigits(`${minutes}:${seconds.toString().padStart(2, "0")}`)
  })
  return { timer, startTimer, stopTimer, formattedTime, intervalId }
})
