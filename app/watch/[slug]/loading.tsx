import { MediaListSkeleton } from "@entities/media"
import { MediaBreadcrumbsSkeleton } from "@widgets/media-breadcrumbs"
import { MediaDetailsSkeleton } from "@widgets/media-details"
import { MediaPlayerSkeleton } from "@widgets/media-player"

export default function Loading() {
  return (
    <>
      <MediaBreadcrumbsSkeleton />
      <MediaDetailsSkeleton />
      <MediaPlayerSkeleton />
      <MediaListSkeleton />
    </>
  )
}
