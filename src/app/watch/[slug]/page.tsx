import { notFound } from "next/navigation"
import { MediaBreadcrumbs } from "@/widgets/media-breadcrumbs"
import { MediaDetails } from "@/widgets/media-details"
import { MediaPlayer } from "@/widgets/media-player"
import { getMediaById, getMediaSimilar, MediaList } from "@/entities/media"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const kinopoiskId = Number(params.slug.split("-")[0])
  const media = await getMediaById(kinopoiskId)
  if (!media) notFound()
  return {
    title: `${media.title} (${media.year}) смотреть онлайн бесплатно`,
    description: media.description,
    category: media.type,
  }
}

export default async function ContentPage(props: Props) {
  const params = await props.params
  const kinopoiskId = Number(params.slug.split("-")[0])
  const media = await getMediaById(kinopoiskId)
  if (!media) notFound()
  const similar = await getMediaSimilar({ media, count: 5 })

  return (
    <>
      <MediaBreadcrumbs media={media} />
      <MediaDetails media={media} />
      <MediaPlayer kinopoiskId={kinopoiskId} />
      <MediaList title="Смотрите также" response={similar} />
    </>
  )
}
