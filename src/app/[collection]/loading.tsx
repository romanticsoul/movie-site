import { Skeleton } from "@heroui/skeleton"
import { MediaListSkeleton } from "@/entities/media"

export default function Loading() {
  return (
    <>
      <section className="container border-x bg-background py-16">
        <h1>
          <Skeleton className="h-9 w-1/3 rounded-large" />
        </h1>
        <div className="mt-4 grid w-2/3 gap-1">
          <Skeleton className="h-5 w-full rounded-large" />
          <Skeleton className="h-5 w-full rounded-large" />
          <Skeleton className="h-5 w-1/2 rounded-large" />
        </div>
      </section>
      <section className="border-y">
        <div className="container grid grid-cols-5 gap-4 border-x bg-background py-4">
          <Skeleton className="h-12 rounded-small" />
          <Skeleton className="h-12 rounded-small" />
          <span className="col-span-2" />
          <Skeleton className="h-12 rounded-small" />
        </div>
      </section>
      <MediaListSkeleton rowCount={4} />
      <section className="border-y">
        <div className="container border-x bg-background p-4">
          <Skeleton className="mx-auto h-10 w-1/3 rounded-medium" />
        </div>
      </section>
    </>
  )
}
