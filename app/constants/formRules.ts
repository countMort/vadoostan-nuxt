export const farsiRule = (message = "لطفاً فقط از حروف فارسی استفاده کنید") => {
  return (v: string) => {
    if (!v) {
      return true
    }

    const farsiRegex = /^[\u0600-\u06FF\s]+$/

    return farsiRegex.test(v) || message
  }
}
