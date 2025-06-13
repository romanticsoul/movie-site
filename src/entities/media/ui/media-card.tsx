import { Link } from "@heroui/link"
import { Skeleton } from "@heroui/skeleton"
import type { MediaCompact } from "../model/types"
import { createMediaSlug } from "../lib/createMediaSlug"
import { MediaPoster, MediaPosterSkeleton } from "./media-poster"
import { MediaRatingChip } from "./media-rating-chip"

export type MediaCardProps = {
  media: MediaCompact
}

export function MediaCard({ media }: MediaCardProps) {
  const genres = media.Genre.map((g) => g.name).slice(0, 2)
  const description = [media.year, ...genres].join(", ")

  return (
    <Link
      href={createMediaSlug(media.id, media.title)}
      className="flex select-none flex-col items-start self-start rounded-large text-inherit"
      title={media.title}
    >
      <MediaPoster src={media.poster} alt={media.title} />
      <MediaRatingChip
        size="sm"
        radius="sm"
        rating={media.rating_kp}
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
