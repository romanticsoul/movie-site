import { Skeleton } from "@heroui/skeleton"

export function MediaPlayerSkeleton() {
  return (
    <section className="container">
      <Skeleton className="aspect-[3/2] rounded-t-large sm:aspect-[16/9] lg:aspect-[21/9]" />
    </section>
  )
}
