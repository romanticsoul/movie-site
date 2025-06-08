import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MediaBreadcrumbs } from "@/widgets/media-breadcrumbs"
import { MediaDetails } from "@/widgets/media-details"
import { MediaPlayer, MediaPlayerSkeleton } from "@/widgets/media-player"
import {
  MediaList,
  type Media,
  getMediaById,
  createMediaSlug,
  getMediaSimilar,
  MediaListSkeleton,
} from "@/entities/media"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const baseUrl = await getBaseUrl()
  const params = await props.params
  const kinopoiskId = Number(params.slug.split("-")[0])
  const media = await getMediaById(kinopoiskId)
  if (!media) notFound()
  return {
    title: `${media.title} (${media.year}) смотреть онлайн бесплатно`,
    description: media.description,
    category: media.type,
    alternates: {
      canonical: `${baseUrl}${createMediaSlug(media.id, media.title)}`,
    },
  }
}

export default async function ContentPage(props: Props) {
  const params = await props.params
  const kinopoiskId = Number(params.slug.split("-")[0])
  const media = await getMediaById(kinopoiskId)
  if (!media) notFound()

  return (
    <>
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
  const similar = await getMediaSimilar({ media, count: 5 })
  return <MediaList title="Смотрите также" response={similar} />
}
