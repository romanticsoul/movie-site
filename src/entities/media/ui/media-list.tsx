import range from "lodash/range"
import { Skeleton } from "@heroui/skeleton"
import { GetMediaResponse } from "../api/getMedia"
import { MediaCard, MediaCardSkeleton } from "./media-card"

export type MediaListProps = {
  title: React.ReactNode
  response: GetMediaResponse
}

export function MediaList({ title, response }: MediaListProps) {
  return (
    <section className="container border-x bg-background py-8">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      {!response && <ServerError />}
      {response && !response.result.length && <EmptyList />}
      {response && response.result.length && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {response.result.map((media) => (
            <MediaCard key={media.id} media={media} />
          ))}
        </div>
      )}
    </section>
  )
}

type MediaListSkeletonProps = {
  rowCount?: number
}

export function MediaListSkeleton({ rowCount = 1 }: MediaListSkeletonProps) {
  const arr = range(0, 5 * rowCount)

  return (
    <section className="container border-x bg-background py-8">
      <h2 className="mb-6">
        <Skeleton className="h-8 w-1/4 rounded-large" />
      </h2>

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
  return (
    <section className="container border-x bg-background py-16">Ошибка сервера</section>
  )
}
function EmptyList() {
  return <section className="container border-x bg-background py-16">Не найдено</section>
}
