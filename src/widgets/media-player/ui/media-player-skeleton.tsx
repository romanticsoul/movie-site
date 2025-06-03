import { Skeleton } from "@heroui/skeleton"

export function MediaPlayerSkeleton() {
  return (
    <section className="border-y">
      <div className="container grid grid-cols-3 gap-4 border-x bg-neutral-100 py-2 sm:grid-cols-4 md:grid-cols-5">
        <Skeleton className="col-span-1 h-10 rounded-large" />
      </div>
      <div className="border-t">
        <div className="container border-x bg-neutral-100 py-4">
          <Skeleton className="aspect-[3/2] w-full overflow-hidden rounded-large sm:aspect-[16/9] md:aspect-[21/9]" />
        </div>
      </div>
    </section>
  )
}
