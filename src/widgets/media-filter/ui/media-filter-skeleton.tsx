import { Skeleton } from "@heroui/skeleton"

export function MediaFilterSkeleton() {
  return (
    <section className="border-y">
      <div className="container grid grid-cols-1 gap-4 border-x bg-background py-4 sm:grid-cols-3 lg:grid-cols-5">
        <Skeleton className="h-12 rounded-small" />
        <Skeleton className="h-12 rounded-small" />
        <span className="col-span-2 max-lg:hidden" />
        <Skeleton className="h-12 rounded-small" />
      </div>
    </section>
  )
}
