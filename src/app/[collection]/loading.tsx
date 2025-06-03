import { Skeleton } from "@heroui/skeleton"
import { MediaListSkeleton } from "@/entities/media"
import { MediaFilterSkeleton } from "@/widgets/media-filter"

export default function Loading() {
  return (
    <>
      <section className="container border-x bg-background py-16">
        <h1>
          <Skeleton className="h-9 w-2/3 rounded-large md:w-1/3" />
        </h1>
        <div className="mt-4 grid gap-1">
          <Skeleton className="h-5 w-full rounded-large" />
          <Skeleton className="h-5 w-full rounded-large" />
          <Skeleton className="h-5 w-1/2 rounded-large" />
        </div>
      </section>
      <MediaFilterSkeleton />
      <MediaListSkeleton rowCount={4} />
      <section className="border-y">
        <div className="container border-x bg-background p-4">
          <Skeleton className="mx-auto h-10 w-1/3 rounded-medium" />
        </div>
      </section>
    </>
  )
}
