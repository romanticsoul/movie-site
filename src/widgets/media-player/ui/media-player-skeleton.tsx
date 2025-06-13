import { Skeleton } from "@heroui/skeleton"

export function MediaPlayerSkeleton() {
  return (
    <section className="container">
      <Skeleton className="h-12 rounded-t-large" />
      <Skeleton className="aspect-[3/2] w-full overflow-hidden rounded-b-large p-2 sm:aspect-[16/9] md:aspect-[21/9]" />
    </section>
  )
}
