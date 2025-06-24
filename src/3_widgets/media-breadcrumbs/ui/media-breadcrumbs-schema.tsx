import { BreadcrumbList } from "schema-dts"
import type { Media } from "@entities/media"
import { getBaseUrl } from "@shared/utils/getBaseUrl"
import { createMediaSlug } from "@entities/media"

export const TYPE_TITLE: Record<Media["type"], string> = {
  movie: "Фильмы",
  "tv-series": "Сериалы",
  cartoon: "Мультфильмы",
  "animated-series": "Анимационные сериалы",
  anime: "Аниме",
}

export async function MediaBreadcrumbsSchema({ media }: { media: Media }) {
  const baseUrl = await getBaseUrl()

  const schema: BreadcrumbList = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        url: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: TYPE_TITLE[media.type],
        url: `${baseUrl}/${media.type}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: media.title,
        url: `${baseUrl}${createMediaSlug(media.id, media.year, media.title)}`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  )
}
