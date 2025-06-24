import Image, { type ImageProps } from "next/image"
import { Link } from "@heroui/link"
import { Skeleton } from "@heroui/skeleton"
import type { Movie, TVSeries, WithContext } from "schema-dts"
import { getBaseUrl } from "@shared/utils/getBaseUrl"
import type { Media } from "../model/types"
import { createMediaSlug } from "../utils/createMediaSlug"
import { MediaRatingChip } from "./media-rating-chip"

export type MediaCardProps = {
  media: Media
  imageProps?: Omit<ImageProps, "src" | "alt">
}

export async function MediaCard({ media, imageProps }: MediaCardProps) {
  const titleId = `media-title-${media.id}`
  const genres = media.genres.slice(0, 2).join(", ")

  const itemType = ["animated-series", "tv-series"].includes(media.type)
    ? "https://schema.org/TVSeries"
    : "https://schema.org/Movie"

  return (
    <article itemScope itemType={itemType}>
      <MediaCardJSONLD media={media} />

      <Link
        href={createMediaSlug(media.id, media.year, media.title)}
        className={"flex select-none flex-col items-start self-start rounded-medium text-inherit"}
        aria-labelledby={titleId}
        title={media.title}
      >
        <figure className="relative aspect-[2/3] w-full overflow-hidden rounded-medium">
          <Image
            fill
            src={media.poster}
            alt={`Постер к «${media.title}»`}
            className="object-cover contrast-[1.15]"
            sizes="(max-width: 639px) 46vw, (max-width: 767px) 30vw, (max-width: 1023px) 23vw, 15vw"
            itemProp="image"
            {...imageProps}
          />
          <MediaRatingChip
            size="sm"
            radius="sm"
            media={media}
            className="absolute right-1 top-1 z-10"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          />
          <meta itemProp="ratingValue" content={String(media.rating_kp)} />
          <meta itemProp="ratingCount" content={String(media.votes_kp)} />
        </figure>

        <div className="flex flex-col p-2">
          <h3 id={titleId} itemProp="name" className="line-clamp-2 text-sm font-bold">
            {media.title}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-500">
            <meta itemProp="description" content={media.description} />
            <time itemProp="datePublished" dateTime={String(media.year)}>
              {media.year}
            </time>
            {", "}
            <span itemProp="genre">{genres}</span>
          </p>
        </div>
      </Link>
    </article>
  )
}

async function MediaCardJSONLD({ media }: { media: Media }) {
  const baseUrl = await getBaseUrl()
  const itemType = ["animated-series", "tv-series"].includes(media.type) ? "TVSeries" : "Movie"

  const jsonLd: WithContext<Movie | TVSeries> = {
    "@context": "https://schema.org",
    "@type": itemType,
    name: media.title,
    image: media.poster,
    datePublished: String(media.year),
    description: media.description,
    // TODO: Добавить директора и актёров
    genre: media.genres,
    url: baseUrl + createMediaSlug(media.id, media.year, media.title),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: media.rating_kp,
      bestRating: 10,
      worstRating: 0,
      ratingCount: media.votes_kp,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function MediaCardSkeleton() {
  return (
    <div className="flex select-none flex-col items-start self-start rounded-medium">
      <Skeleton className="aspect-[2/3] w-full rounded-medium" />
      <div className="grid w-full p-2">
        <Skeleton className="h-5 w-3/4 rounded-large" />
        <Skeleton className="mt-1 h-4 w-1/2 rounded-large" />
      </div>
    </div>
  )
}
