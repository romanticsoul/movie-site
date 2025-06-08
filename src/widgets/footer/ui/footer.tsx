import { getBaseUrl } from "@/shared/utils/getBaseUrl"

export async function Footer() {
  const baseUrl = await getBaseUrl()

  return (
    <footer>
      <div className="container h-16 border-x bg-background">{baseUrl}</div>
    </footer>
  )
}
