import { Fragment } from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MediaBreadcrumbs, MediaBreadcrumbsSchema } from "@/widgets/media-breadcrumbs"
import { MediaDetails } from "@/widgets/media-details"
import {
  MediaPlayer,
  MediaPlayerSkeleton,
  getKinoboxPlayers,
} from "@/widgets/media-player"
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
      <YandexMetadata media={media} />
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
  return <MediaList title="Смотрите также" response={similar} />
}

async function YandexMetadata({ media }: { media: MediaFull }) {
  const baseUrl = await getBaseUrl()
  const url = `${baseUrl}${createMediaSlug(media.id, media.title)}`
  const iframes = await getKinoboxPlayers({
    search: { kinopoisk: String(media.id) },
  })

  const mediaLength = (media.movie_length ?? media.series_length ?? 120) * 60
  const isAdult = (media.rating_age ?? 0) >= 18 ? true : false

  return (
    <>
      {/* OpenGraph */}
      <meta property="og:type" content="video.other" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={media.title + " смотреть онлайн"} />
      <meta property="og:description" content={cleanText(media.description)} />
      <meta property="og:site_name" content="LORDFILM" />
      <meta property="og:image" content={media.poster} />
      <meta property="video:duration" content={`${mediaLength}`} />

      {/* OpenGraph Video */}
      {iframes.map((iframe, idx) => (
        <Fragment key={idx}>
          <meta property="og:video" content={iframe.iframeUrl} />
          <meta property="og:video:type" content="text/html" />
          <meta property="og:video:width" content="1120" />
          <meta property="og:video:height" content="780" />
        </Fragment>
      ))}

      {/* Yandex Video Extensions */}
      <meta
        property="ya:ovs:upload_date"
        content={new Date(media.created_at).toISOString()}
      />
      <meta property="ya:ovs:adult" content={`${isAdult}`} />
      <meta property="ya:ovs:allow_embed" content="true" />
    </>
  )
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
