export function toPersianDigits(input: string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  return input.replace(/\d/g, (d) => persianDigits[+d] || d)
}
