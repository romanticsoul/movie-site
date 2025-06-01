import { Skeleton } from "@heroui/skeleton"

export function MediaPlayerSkeleton() {
  return (
    <section className="border-y">
      <div className="container grid grid-cols-5 gap-4 border-x bg-neutral-100 py-2">
        <Skeleton className="col-span-1 h-10 rounded-large" />
      </div>
      <div className="border-t">
        <div className="container border-x bg-neutral-100 py-4">
          <Skeleton className="aspect-[21/9] w-full overflow-hidden rounded-large" />
        </div>
      </div>
    </section>
  )
}
