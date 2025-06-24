import { nanoid } from "nanoid"
import range from "lodash/range"
import { Skeleton } from "@heroui/skeleton"
import { Title } from "@shared/ui/typography"
import type { GetMediaResponse } from "../api/types"
import type { Media } from "../model/types"
import { MediaCard, MediaCardSkeleton } from "./media-card"

type MediaListProps =
  | { title: React.ReactNode; response: GetMediaResponse; items?: never }
  | { title: React.ReactNode; items: Media[]; response?: never }

export async function MediaList({ title, response, items }: MediaListProps) {
  const media = response?.items ?? items

  if (!media) return <ServerError />
  if (media && !media.length) return <EmptyList />

  const id = nanoid()

  return (
    <section aria-labelledby={id} className="container py-8" role="region">
      <Title variant="h2" id={id}>
        {title}
      </Title>
      <ul role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {media.map((m, i) => (
          <li key={m.id}>
            <MediaCard media={m} imageProps={{ priority: i === 0 }} />
          </li>
        ))}
      </ul>
    </section>
  )
}

type MediaListSkeletonProps = {
  rowCount?: number
}

export function MediaListSkeleton({ rowCount = 1 }: MediaListSkeletonProps) {
  const arr = range(0, 5 * rowCount)

  return (
    <section className="container py-8">
      <Skeleton className="mb-6 h-8 w-1/6 rounded-large" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {arr.map((i) => (
          <MediaCardSkeleton key={i} />
        ))}
      </div>
    </section>
  )
}

// TODO: Разработать дизайн и перенести в отдельные компоненты
function ServerError() {
  return <section className="container border-x bg-background py-16">Ошибка сервера</section>
}
function EmptyList() {
  return <section className="container border-x bg-background py-16">Не найдено</section>
}
