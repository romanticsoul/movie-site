import { Suspense } from "react"
import { COLLECTIONS, getMedia, MediaList, MediaListSkeleton } from "@entities/media"

export async function CategoryButtons() {
  return (
    <>
      <Suspense fallback={<MediaListSkeleton />}>
        <MovieCollection />
      </Suspense>
      <Suspense fallback={<MediaListSkeleton />}>
        <SeriesCollection />
      </Suspense>
      <Suspense fallback={<MediaListSkeleton />}>
        <CartoonCollection />
      </Suspense>
      <Suspense fallback={<MediaListSkeleton />}>
        <AnimatedSeriesCollection />
      </Suspense>
      <Suspense fallback={<MediaListSkeleton />}>
        <AnimeCollection />
      </Suspense>
    </>
  )
}

async function MovieCollection() {
  const coll = COLLECTIONS.find((c) => c.slug === "movie")
  const response = await getMedia({
    limit: 5,
    ...coll?.params,
    "rating.imdb": ["7-10"],
    year: ["2025"],
    sortField: ["votes.kp"],
    sortType: ["-1"],
  })
  return <MediaList title="Фильмы" response={response} />
}

async function SeriesCollection() {
  const coll = COLLECTIONS.find((c) => c.slug === "tv-series")
  const response = await getMedia({
    limit: 5,
    ...coll?.params,
    "rating.imdb": ["7-10"],
    year: ["2025"],
    sortField: ["votes.kp"],
    sortType: ["-1"],
  })
  return <MediaList title="Сериалы" response={response} />
}

async function CartoonCollection() {
  const coll = COLLECTIONS.find((c) => c.slug === "cartoon")
  const response = await getMedia({
    limit: 5,
    ...coll?.params,
    "rating.imdb": ["7-10"],
    year: ["2024-2025"],
    sortField: ["votes.kp"],
    sortType: ["-1"],
  })
  return <MediaList title="Мультфильмы" response={response} />
}

async function AnimatedSeriesCollection() {
  const coll = COLLECTIONS.find((c) => c.slug === "animated-series")
  const response = await getMedia({
    limit: 5,
    ...coll?.params,
    "rating.imdb": ["7-10"],
    year: ["2024-2025"],
    sortField: ["votes.kp"],
    sortType: ["-1"],
  })
  return <MediaList title="Мультсериалы" response={response} />
}

async function AnimeCollection() {
  const coll = COLLECTIONS.find((c) => c.slug === "anime")
  const response = await getMedia({
    limit: 5,
    ...coll?.params,
    "rating.imdb": ["7-10"],
    year: ["2025"],
    sortField: ["votes.kp"],
    sortType: ["-1"],
  })
  return <MediaList title="Аниме" response={response} />
}
