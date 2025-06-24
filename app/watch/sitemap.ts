import type { MetadataRoute } from "next"
import { createMediaSlug, getMedia } from "@entities/media"
import { getBaseUrl } from "@shared/utils/getBaseUrl"
import { notFound } from "next/navigation"

export async function generateSitemaps() {
  const response = await getMedia({ limit: 250 })
  if (!response || !response.items.length) return
  return Array.from({ length: response.totalPages }, (_, i) => ({ id: i }))
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getBaseUrl()

  const response = await getMedia({
    page: ++id,
    limit: 250,
    sortField: ["year", "createdAt", "updatedAt"],
    sortType: ["-1", "-1", "-1"],
  })

  if (!response || !response.items.length) return notFound()

  return response.items.map((media) => ({
    url: `${baseUrl}${createMediaSlug(media.id, media.year, media.title)}`,
    images: [media.poster],
    lastModified: media.created_at || media.updated_at,
  }))
}
