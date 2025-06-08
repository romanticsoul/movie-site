import type { MetadataRoute } from "next"
import { collections } from "@/entities/media"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getBaseUrl()
  const sitemapChunks = await Promise.all(
    collections.map((c) => generateCollectionSitemap(c)),
  )

  const sitemaps = sitemapChunks.flat()

  return [
    {
      url: baseUrl,
      lastModified: `2025-06-08`,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: `2025-06-08`,
    },
    ...sitemaps,
  ]
}

async function generateCollectionSitemap(
  collection: (typeof collections)[number],
): Promise<MetadataRoute.Sitemap> {
  const data = await collection.getMedia({
    sortField: ["updatedAt"],
    sortType: ["-1"],
  })
  if (!data) return []
  const { items, totalPages } = data
  const baseUrl = await getBaseUrl()

  return Array.from({ length: totalPages }, (_, i) => ({
    url: `${baseUrl}/${collection.slug}?page=${i + 1}`,
    lastModified: items[0].updatedAt,
  }))
}
