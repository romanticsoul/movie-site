import { NextResponse } from "next/server"
import { prisma } from "@/shared/lib/prisma"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"

async function generateMediaSitemaps() {
  const baseUrl = await getBaseUrl()
  const mediaCount = await prisma.media.count()
  const numberOfSitemaps = Math.ceil(mediaCount / 50000)
  return Array.from({ length: numberOfSitemaps }, (_, index) => ({
    id: index,
    url: `${baseUrl}/watch/sitemap/${index}.xml`,
  }))
}

export async function GET() {
  const baseUrl = await getBaseUrl()
  const mediaSitemaps = await generateMediaSitemaps()

  const sitemaps = [
    `${baseUrl}/search/sitemap.xml`,
    ...mediaSitemaps.map((sitemap) => sitemap.url),
  ]

  console.log("Generated sitemaps:", sitemaps)

  const sitemapIndexXML = await buildSitemapIndex(sitemaps)

  return new NextResponse(sitemapIndexXML, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

async function buildSitemapIndex(sitemaps: string[]) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>'
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  for (const sitemapURL of sitemaps) {
    xml += "<sitemap>"
    xml += `<loc>${sitemapURL}</loc>`
    xml += "</sitemap>"
  }

  xml += "</sitemapindex>"
  return xml
}
