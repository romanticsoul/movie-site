"use server"
import "server-only"
import { cache } from "react"
import { headers } from "next/headers"

export const getBaseUrl = cache(async () => {
  const headersList = await headers()
  const host = headersList.get("host")
  const protocol = headersList.get("x-forwarded-proto") || "https"
  const baseUrl = `${protocol}://${host}`
  return baseUrl
})
