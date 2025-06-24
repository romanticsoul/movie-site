import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cleanText } from "@shared/utils/cleanText"
import { getBaseUrl } from "@shared/utils/getBaseUrl"
import { TYPE_LABEL } from "@entities/media"
import type { Media } from "@entities/media"
import { getMediaById, getMediaSimilar, createMediaSlug } from "@entities/media"
import { MediaList, MediaListSkeleton } from "@entities/media"
import { MediaBreadcrumbs, MediaBreadcrumbsSchema } from "@widgets/media-breadcrumbs"
import { MediaDetails } from "@widgets/media-details"
import { MediaPlayer, MediaPlayerSkeleton } from "@widgets/media-player"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ContentPage(props: Props) {
  const params = await props.params
  const kinopoiskId = Number(params.slug.split("-")[0])
  const media = await getMediaById(kinopoiskId)

  if (!media) notFound()

  return (
    <>
      <MediaBreadcrumbsSchema media={media} />
      <MediaBreadcrumbs media={media} />
      <MediaDetails media={media} />
      <Suspense fallback={<MediaPlayerSkeleton />}>
        <MediaPlayer kinopoiskId={kinopoiskId} />
      </Suspense>
      <Suspense fallback={<MediaListSkeleton />}>
        <SimilarList media={media} />
      </Suspense>
    </>
  )
}

async function SimilarList({ media }: { media: Media }) {
  const similar = await getMediaSimilar(media)
  return <MediaList title="Смотрите также" response={similar} />
}

// METADATA
export async function generateMetadata(props: Props): Promise<Metadata> {
  const baseUrl = await getBaseUrl()
  const params = await props.params
  const kinopoiskId = Number(params.slug.split("-")[0])
  const media = await getMediaById(kinopoiskId)

  if (!media) notFound()

  const url = `${baseUrl}${createMediaSlug(media.id, media.year, media.title)}`
  const title = `${media.title} (${media.year}) смотреть онлайн бесплатно`

  return {
    title: title,
    category: media.type,
    description: generateDescription(media),
    keywords: generateKeywords(media),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url: url,
      title: title,
      description: cleanText(media.description),
      siteName: "LORDFILM",
      images: [{ url: media.poster }],
    },
  }
}

// UTILS
function generateDescription(media: Media) {
  const genres = media.genres.slice(0, 3)
  return cleanText(
    `Смотреть ${TYPE_LABEL[media.type]} ${media.title} (${media.year}) — ${genres.join(", ")}. ${media.description}`,
  )
}

function generateKeywords(media: Media) {
  const genres = media.genres.slice(0, 3)
  const countries = media.countries
  return cleanText(
    [
      media.title,
      `${media.title} смотреть онлайн`,
      `${media.title} ${media.year}`,
      `${TYPE_LABEL[media.type]} ${media.title}`,
      `${TYPE_LABEL[media.type]} ${media.title} смотреть онлайн`,
      `${TYPE_LABEL[media.type]} ${media.title} ${media.year}`,
      `${TYPE_LABEL[media.type]} ${media.title} смотреть лордфильм`,
      `${media.title} ${media.year} в хорошем качестве`,
      `${media.title} HD 1080p`,
      genres.map((genre) => `${genre} фильмы`),
      genres.map((genre) => `лучшие ${genre.toLowerCase()} фильмы`),
      countries.map((country) => `${country} кино`),
      countries.map((country) => `фильмы из ${country}`),
      media.rating_kp >= 6.5 ? `${TYPE_LABEL[media.type]} с высоким рейтингом` : null,
    ]
      .flat()
      .join(", "),
  )
}
