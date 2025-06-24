import { Suspense } from "react"
import type { SearchParams } from "nuqs"
import type { Metadata } from "next"
import { getBaseUrl } from "@shared/utils/getBaseUrl"
import { MediaPagination } from "@features/media-pagination"
import { SearchWithFilter } from "@widgets/search-with-filter"
import { getMediaByTitle, MediaList, MediaListSkeleton } from "@entities/media"
import { mediaQueryParamsCache } from "@entities/media"

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl()

  return {
    title: "Найдите любимый фильмы и смотрите его онлайн бесплатно",
    description:
      "Бесплатно смотрите тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до свежих новинок. Находите уникальные истории для любого настроения",
    alternates: {
      canonical: `${baseUrl}/search`,
    },
  }
}

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function SearchPage(props: Props) {
  const queryParams = await mediaQueryParamsCache.parse(props.searchParams)

  return (
    <>
      <section className="container pb-8 pt-16">
        <h1 className="text-5xl font-black">Поиск по всей коллекции</h1>
        <p className="mt-4 text-pretty text-lg text-foreground/60 md:w-2/3">
          Исследуйте тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до свежих новинок.
          Находите уникальные истории для любого настроения.
        </p>
      </section>
      <SearchWithFilter />
      <Suspense key={queryParams.q} fallback={<MediaListSkeleton rowCount={4} />}>
        <SearchList />
      </Suspense>
    </>
  )
}

async function SearchList() {
  const text = await mediaQueryParamsCache.get("q")
  const response = await getMediaByTitle({ text })

  return (
    <>
      <MediaList title={text ? `Результаты по запросу «${text}»` : "Наша коллекция"} response={response} />
      {response && <MediaPagination page={response.page} totalPages={response.totalPages} />}
    </>
  )
}
