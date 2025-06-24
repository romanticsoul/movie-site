import type { MetadataRoute } from "next"
import { COLLECTIONS } from "@entities/media"
import { getBaseUrl } from "@shared/utils/getBaseUrl"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getBaseUrl()

  const sitemaps = COLLECTIONS.map((collection) => ({
    url: `${baseUrl}/${collection.slug}`,
  }))

  return [{ url: baseUrl }, { url: `${baseUrl}/search` }, ...sitemaps]
}
