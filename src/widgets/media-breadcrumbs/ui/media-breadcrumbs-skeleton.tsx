import { Skeleton } from "@heroui/skeleton"

export function MediaBreadcrumbsSkeleton() {
  return (
    <section className="container py-4">
      <Skeleton className="h-5 w-4/6 rounded-large md:w-2/6" />
    </section>
  )
}
