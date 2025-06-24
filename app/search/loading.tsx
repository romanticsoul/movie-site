import { Skeleton } from "@heroui/skeleton"
import { Title, Paragraph } from "@shared/ui/typography"
import { MediaListSkeleton } from "@entities/media"

export default function Loading() {
  return (
    <>
      <section className="container pb-8 pt-16">
        <Title variant="h1">Поиск по всей коллекции</Title>
        <Paragraph size="lg" color="muted">
          Исследуйте тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до свежих новинок.
          Находите уникальные истории для любого настроения.
        </Paragraph>
      </section>
      <section className="container grid gap-4 py-2 md:grid-cols-4 lg:grid-cols-5">
        <Skeleton className="h-12 w-full rounded-medium md:col-span-2 lg:col-span-3" />
      </section>
      <section className="container grid gap-4 py-2 md:grid-cols-4 lg:grid-cols-5"></section>
      <MediaListSkeleton rowCount={4} />
      <section className="container p-4">
        <Skeleton className="mx-auto h-10 w-1/3 rounded-medium" />
      </section>
    </>
  )
}
