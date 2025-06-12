import type { MediaFull } from "@/entities/media"
import { BreadcrumbList } from "schema-dts"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"
import { createMediaSlug } from "@/entities/media"
import { TYPE_TITLE } from "./media-breadcrumbs"

export async function BreadcrumbsSchema({ media }: { media: MediaFull }) {
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
