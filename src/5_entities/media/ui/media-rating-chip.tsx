import { Chip, type ChipProps } from "@heroui/chip"
import { Skeleton } from "@heroui/skeleton"
import { cn } from "@heroui/theme"
import { Media } from "../model/types"

export type MediaRatingChipProps = ChipProps & {
  media: Media
}

export function MediaRatingChip({ media, className, ...props }: MediaRatingChipProps) {
  const { rating_kp, votes_kp, rating_imdb, votes_imdb } = media
  const rating = (rating_kp * votes_kp + rating_imdb * votes_imdb) / (votes_kp + votes_imdb)

  return (
    <Chip
      radius="md"
      className={cn(
        {
          "bg-green-900 text-white": rating >= 6,
          "bg-green-800 text-white": rating >= 7,
          "bg-green-700 text-white": rating >= 8,
        },
        className,
      )}
      classNames={{ content: "font-semibold" }}
      {...props}
    >
      {rating.toFixed(1)}
    </Chip>
  )
}

export function MediaRatingChipSkeleton() {
  return <Skeleton className="h-7 w-11 rounded-large" />
}
