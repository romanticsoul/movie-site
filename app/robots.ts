import type { MetadataRoute } from "next"
import { getBaseUrl } from "../src/6_shared/utils/getBaseUrl"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = await getBaseUrl()

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
