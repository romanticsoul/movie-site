import { Skeleton } from "@heroui/skeleton"
import { MediaListSkeleton } from "@/entities/media"

export default function Loading() {
  return (
    <>
      <section className="container pb-8 pt-16">
        <h1 className="text-5xl font-black">Поиск по всей коллекции</h1>
        <p className="mt-4 text-pretty text-lg text-foreground/60 md:w-2/3">
          Исследуйте тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до
          свежих новинок. Находите уникальные истории для любого настроения.
        </p>
      </section>
      <section className="container grid gap-4 py-2 md:grid-cols-4 lg:grid-cols-5">
        <Skeleton className="h-12 w-full rounded-medium md:col-span-2 lg:col-span-3" />
        <span className="max-md:hidden" />
        <Skeleton className="h-12 w-full rounded-medium" />
      </section>
      <section className="container grid gap-4 py-2 md:grid-cols-4 lg:grid-cols-5"></section>
      <MediaListSkeleton rowCount={4} />
      <section className="container p-4">
        <Skeleton className="mx-auto h-10 w-1/3 rounded-medium" />
      </section>
    </>
  )
}
