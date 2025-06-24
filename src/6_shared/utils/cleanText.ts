export function cleanText(text: string): string {
  return text.replace(/\u00A0|&nbsp;/g, " ").trim()
}
