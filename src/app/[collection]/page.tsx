import { SearchParams } from "nuqs"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MediaCollectionChips } from "@/widgets/media-collection-chips"
import { MediaFilter } from "@/widgets/media-filter"
import { MediaPagination } from "@/widgets/media-pagination"
import { loadQueryParams, parseQueryToFetchParams } from "@/entities/query-params"
import { collections, MediaList } from "@/entities/media"

type Props = {
  params: Promise<{ collection: string }>
  searchParams: Promise<SearchParams>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const pageData = collections.find((c) => c.slug === params.collection)
  if (!pageData) notFound()

  return {
    title: pageData.title,
    description: pageData.description,
    category: pageData.type,
  }
}

export async function generateStaticParams() {
  return collections.map((c) => ({
    collection: c.slug,
  }))
}

export default async function CollectionPage(props: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 5000))

  const queryParams = await loadQueryParams(props.searchParams)
  const params = await props.params

  const collection = collections.find((c) => c.slug === params.collection)
  if (!collection) notFound()

  const filterParams = parseQueryToFetchParams(queryParams)
  const data = await collection.getMedia(filterParams)

  return (
    <>
      <section className="container border-x bg-background py-16">
        <h1 className="text-3xl font-black">{collection.title}</h1>
        <p className="mt-4 w-2/3 text-pretty text-medium text-foreground/60">
          {collection.description}
        </p>
      </section>
      <MediaFilter />
      <MediaCollectionChips type={collection.type} slug={params.collection} />
      <MediaList title="Наша коллекция" response={data} />
      {data && <MediaPagination page={data.page} total={data.totalPages} />}
    </>
  )
}
