import type { MediaFull } from "@/entities/media"
import { BreadcrumbList } from "schema-dts"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"
import { createMediaSlug } from "@/entities/media"

export const TYPE_TITLE: Record<MediaFull["type"], string> = {
  movie: "Фильмы",
  tv_series: "Сериалы",
  cartoon: "Мультфильмы",
  animated_series: "Анимационные сериалы",
  anime: "Аниме",
}

export async function MediaBreadcrumbsSchema({ media }: { media: MediaFull }) {
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
        url: `${baseUrl}${createMediaSlug(media.id, media.title)}`,
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
