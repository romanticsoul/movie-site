import type { SearchParams } from "nuqs"
import type { Metadata } from "next"
import { MediaPagination } from "@/widgets/media-pagination"
import { SearchWithFilter } from "@/widgets/search-with-filter"
import {
  getMediaByTitle,
  getMedia,
  MediaList,
  type GetMediaResponse,
} from "@/entities/media"
import { loadQueryParams, parseQueryToFetchParams } from "@/entities/query-params"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"

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
  const queryParams = await loadQueryParams(props.searchParams)

  const appliedParams = parseQueryToFetchParams(queryParams)

  let data: GetMediaResponse
  if (queryParams.q) {
    data = await getMediaByTitle({
      query: queryParams.q,
      params: appliedParams,
    })
  } else {
    data = await getMedia(appliedParams)
  }

  return (
    <>
      <section className="container border-x bg-background py-16">
        <h1 className="text-3xl font-black">Поиск по всей коллекции</h1>
        <p className="mt-4 w-2/3 text-pretty text-medium text-foreground/60">
          Исследуйте тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до
          свежих новинок. Находите уникальные истории для любого настроения
        </p>
      </section>
      <SearchWithFilter />
      <MediaList
        title={
          queryParams.q
            ? `Результат поиска по запросу «${queryParams.q}»`
            : "Наша коллекция"
        }
        response={data}
      />
      {data && <MediaPagination page={data.page} total={data.totalPages} />}
    </>
  )
}
