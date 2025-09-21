export function toPersianDigits(input: string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  return input.replace(/\d/g, (d) => persianDigits[+d] || d)
}

export function formatTomanFull(num: number): string {
  if (num < 1000) return num + " تومن"

  const parts: string[] = []

  const billion = Math.floor(num / 1_000_000_000)
  if (billion > 0) {
    parts.push(billion + " میلیارد")
    num %= 1_000_000_000
  }

  const million = Math.floor(num / 1_000_000)
  if (million > 0) {
    parts.push(million + " میلیون")
    num %= 1_000_000
  }

  const thousand = Math.floor(num / 1000)
  if (thousand > 0) {
    parts.push(thousand + " هزار")
    num %= 1000
  }

  if (num > 0) {
    parts.push(num.toString())
  }

  return parts.join(" و ") + " تومن"
}

export function parseFaNumber(str: string): number {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹"
  const arabicDigits = "٠١٢٣٤٥٦٧٨٩"

  const normalized = str
    // Convert Persian & Arabic digits → English
    .replace(/[۰-۹]/g, (d) => String(persianDigits.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(arabicDigits.indexOf(d)))
    // Remove both Persian and Western separators
    .replace(/[,٬]/g, "")

  return Number(normalized)
}
