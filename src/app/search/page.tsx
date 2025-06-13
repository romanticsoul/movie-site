import { Suspense } from "react"
import type { SearchParams } from "nuqs"
import type { Metadata } from "next"
import { MediaPagination } from "@/widgets/media-pagination"
import { SearchWithFilter } from "@/widgets/search-with-filter"
import {
  getMediaByTitle,
  getMedia,
  MediaList,
  MediaListSkeleton,
  type GetMediaParams,
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

  return (
    <>
      <section className="container pb-8 pt-16">
        <h1 className="text-5xl font-black">Поиск по всей коллекции</h1>
        <p className="mt-4 text-pretty text-lg text-foreground/60 md:w-2/3">
          Исследуйте тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до
          свежих новинок. Находите уникальные истории для любого настроения.
        </p>
      </section>
      <SearchWithFilter />
      <Suspense key={queryParams.q} fallback={<MediaListSkeleton rowCount={4} />}>
        <SearchList params={appliedParams} text={queryParams.q} />
      </Suspense>
    </>
  )
}

async function SearchList({ params, text }: { params: GetMediaParams; text: string }) {
  let data: GetMediaResponse

  if (text) {
    data = await getMediaByTitle({
      query: text,
      params: params,
    })
  } else {
    data = await getMedia(params)
  }

  return (
    <>
      <MediaList
        title={text ? `Результаты по запросу «${text}»` : "Наша коллекция"}
        response={data}
      />
      {data && <MediaPagination page={data.page} total={data.totalPages} />}
    </>
  )
}
