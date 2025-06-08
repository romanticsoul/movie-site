import type { MetadataRoute } from "next"
import { createMediaSlug } from "@/entities/media"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"
import { prisma } from "@/shared/lib/prisma"

export async function generateSitemaps() {
  const mediaCount = await prisma.media.count()
  const numberOfChunks = Math.ceil(mediaCount / 50000)
  const chunks = Array.from({ length: numberOfChunks }, (_, i) => ({ id: i }))
  return chunks
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getBaseUrl()

  console.log(id)

  const mediaList = await prisma.media.findMany({
    skip: id * 50000,
    take: 50000,
    select: {
      id: true,
      title: true,
      poster: true,
      updated_at: true,
    },
  })

  return mediaList.map((media) => ({
    url: `${baseUrl}${createMediaSlug(media.id, media.title)}`,
    images: [media.poster],
    lastModified: media.updated_at,
  }))
}
