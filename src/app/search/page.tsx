import type { SearchParams } from "nuqs"
import type { Metadata } from "next"
import { SearchWithFilter } from "@/widgets/search-with-filter"
import { searchMediaByTitle, MediaList } from "@/entities/media"
import { loadQueryParams, parseQueryToFetchParams } from "@/entities/query-params"

export const metadata: Metadata = {
  title: "Поиск по коллекции",
  description:
    "Бесплатно смотрите тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до свежих новинок. Находите уникальные истории для любого настроения",
}

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function SearchPage(props: Props) {
  const queryParams = await loadQueryParams(props.searchParams)

  const appliedParams = parseQueryToFetchParams(queryParams)

  const data = await searchMediaByTitle({
    query: queryParams.q,
    params: appliedParams,
  })

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
      <MediaList title="Результат поиска" response={data} />
    </>
  )
}
