import { NextResponse } from "next/server"
import { getBaseUrl } from "@shared/utils/getBaseUrl"
import { getMedia } from "@entities/media"

async function generateMediaSitemaps() {
  const response = await getMedia({ limit: 250 })
  if (!response) return []

  const baseUrl = await getBaseUrl()
  return Array.from({ length: response.totalPages }, (_, index) => ({
    id: index,
    url: `${baseUrl}/watch/sitemap/${index}.xml`,
  }))
}

export async function GET() {
  const baseUrl = await getBaseUrl()
  const mediaSitemaps = await generateMediaSitemaps()

  const sitemaps = [`${baseUrl}/search/sitemap.xml`, ...mediaSitemaps.map((sitemap) => sitemap.url)]

  const sitemapIndexXML = await buildSitemapIndex(sitemaps)

  return new NextResponse(sitemapIndexXML, {
    headers: {
      "Content-Type": "text/xml; charset=UTF-8",
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
