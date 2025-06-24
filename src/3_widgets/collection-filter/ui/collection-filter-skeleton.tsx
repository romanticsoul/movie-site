import { Skeleton } from "@heroui/skeleton"

export function CollectionFilterSkeleton() {
  return (
    <section className="container grid grid-cols-1 gap-4 bg-background py-4 sm:grid-cols-3 lg:grid-cols-5">
      <Skeleton className="h-14 rounded-medium" />
      <Skeleton className="h-14 rounded-medium" />
      <span className="col-span-2 max-lg:hidden" />
      <Skeleton className="h-14 rounded-medium" />
    </section>
  )
}
