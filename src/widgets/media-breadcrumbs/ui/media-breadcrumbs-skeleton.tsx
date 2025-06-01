import { Skeleton } from "@heroui/skeleton"

export function MediaBreadcrumbsSkeleton() {
  return (
    <section className="border-b">
      <div className="container border-x bg-background py-4">
        <Skeleton className="h-5 w-2/6 rounded-large" />
      </div>
    </section>
  )
}
