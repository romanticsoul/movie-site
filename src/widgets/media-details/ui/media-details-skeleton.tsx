import { Skeleton } from "@heroui/skeleton"
import {
  MediaPosterSkeleton,
  MediaRatingChipSkeleton,
  MediaAgeChipSkeleton,
} from "@/entities/media"

export function MediaDetailsSkeleton() {
  return (
    <section className="container relative z-0 py-8 md:py-16">
      <div className="relative z-20 grid grid-cols-5 gap-4">
        <div className="col-span-full md:col-span-1">
          <MediaPosterSkeleton className="mx-auto w-3/5 sm:w-2/6 md:w-full" />
        </div>

        <div className="col-span-full md:col-span-4">
          <Skeleton as="h1" className="h-8 w-full rounded-large md:w-2/4" />
          <div className="my-4 flex items-end gap-2">
            <MediaAgeChipSkeleton />
            <MediaRatingChipSkeleton />
            <Skeleton className="h-5 w-1/4 rounded-large" />
          </div>

          <div className="my-8 grid gap-1">
            <Skeleton className="h-5 w-full rounded-large" />
            <Skeleton className="h-5 w-full rounded-large" />
            <Skeleton className="h-5 w-full rounded-large sm:hidden" />
            <Skeleton className="h-5 w-full rounded-large sm:hidden" />
            <Skeleton className="h-5 w-1/2 rounded-large" />
          </div>

          <MediaPersonSkeleton />
        </div>
      </div>
    </section>
  )
}

function MediaPersonSkeleton() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="flex items-center gap-2">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="flex flex-1 flex-col gap-1">
          <Skeleton className="h-4 w-3/4 rounded-large" />
          <Skeleton className="h-3 w-16 rounded-large" />
        </div>
      </div>
    </div>
  )
}
