import { Skeleton } from "@heroui/skeleton"

export function MediaBreadcrumbsSkeleton() {
  return (
    <section className="border-b">
      <div className="container border-x bg-background py-4">
        <Skeleton className="h-5 w-4/6 rounded-large md:w-2/6" />
      </div>
    </section>
  )
}
