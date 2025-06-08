import { Link } from "@heroui/link"
import { Skeleton } from "@heroui/skeleton"
import type { Media } from "../model/types"
import { createMediaSlug } from "../lib/createMediaSlug"
import { MediaPoster, MediaPosterSkeleton } from "./media-poster"
import { MediaRatingChip } from "./media-rating-chip"

export type MediaCardProps = {
  media: Media
}

export function MediaCard({ media }: MediaCardProps) {
  const description = [media.year, ...media.genres.slice(0, 2)].join(", ")

  return (
    <Link
      href={createMediaSlug(media.id, media.title)}
      className="flex select-none flex-col items-start self-start rounded-large"
      title={media.title}
    >
      <MediaPoster src={media.images.poster} alt={media.title} />
      <MediaRatingChip
        size="sm"
        rating={media.rating.kp}
        className="absolute right-1 top-1 z-10"
      />
      <div className="grid w-full p-2">
        <h3 className="line-clamp-2 text-sm font-bold">{media.title}</h3>
        <small className="mt-1 text-xs font-medium text-foreground/60">
          {description}
        </small>
      </div>
    </Link>
  )
}

export function MediaCardSkeleton() {
  return (
    <div className="flex select-none flex-col items-start self-start rounded-large">
      <MediaPosterSkeleton />
      <div className="grid w-full p-2">
        <Skeleton className="h-5 w-3/4 rounded-large" />
        <Skeleton className="mt-1 h-4 w-1/2 rounded-large" />
      </div>
    </div>
  )
}
