import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MediaBreadcrumbs, MediaBreadcrumbsSchema } from "@/widgets/media-breadcrumbs"
import { MediaDetails } from "@/widgets/media-details"
import { MediaPlayer, MediaPlayerSkeleton } from "@/widgets/media-player"
import { MediaList, MediaListSkeleton } from "@/entities/media"
import type { MediaFull } from "@/entities/media"
import { getMediaById, createMediaSlug, getMediaSimilar } from "@/entities/media"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"
import { MEDIA_TYPE_LABELS } from "@/entities/media"

type Props = {
  params: Promise<{ slug: string }>
}

// METADATA
export async function generateMetadata(props: Props): Promise<Metadata> {
  const baseUrl = await getBaseUrl()
  const params = await props.params
  const kinopoiskId = Number(params.slug.split("-")[0])
  const media = await getMediaById(kinopoiskId)

  if (!media) notFound()

  const url = `${baseUrl}${createMediaSlug(media.id, media.title)}`
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

// PAGE
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
// COMPONENTS
async function SimilarList({ media }: { media: MediaFull }) {
  const similar = await getMediaSimilar({ media, count: 5 })
  return <MediaList title="Смотрите также" items={similar} />
}

// UTILS
function generateDescription(media: MediaFull) {
  const genres = media.Genre.map((g) => g.name).slice(0, 3)
  return cleanText(
    `Смотреть ${MEDIA_TYPE_LABELS[media.type]} ${media.title} (${media.year}) — ${genres.join(", ")}. ${media.description}`,
  )
}

function generateKeywords(media: MediaFull) {
  const genres = media.Genre.map((g) => g.name).slice(0, 3)
  const countries = media.Country.map((c) => c.name)
  return cleanText(
    [
      media.title,
      `${media.title} смотреть онлайн`,
      `${media.title} ${media.year}`,
      `${MEDIA_TYPE_LABELS[media.type]} ${media.title}`,
      `${MEDIA_TYPE_LABELS[media.type]} ${media.title} смотреть онлайн`,
      `${MEDIA_TYPE_LABELS[media.type]} ${media.title} ${media.year}`,
      `${MEDIA_TYPE_LABELS[media.type]} ${media.title} смотреть лордфильм`,
      `${media.title} ${media.year} в хорошем качестве`,
      `${media.title} HD 1080p`,
      genres.map((genre) => `${genre} фильмы`),
      genres.map((genre) => `лучшие ${genre.toLowerCase()} фильмы`),
      countries.map((country) => `${country} кино`),
      countries.map((country) => `фильмы из ${country}`),
      media.rating_kp >= 6.5
        ? `${MEDIA_TYPE_LABELS[media.type]} с высоким рейтингом`
        : null,
    ]
      .flat()
      .join(", "),
  )
}

function cleanText(text: string): string {
  return text.replace(/\u00A0|&nbsp;/g, " ").trim()
}
