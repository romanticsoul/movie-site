import { Suspense } from "react"
import { SearchParams } from "nuqs"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MediaCollectionChips } from "@/widgets/media-collection-chips"
import { MediaFilter } from "@/widgets/media-filter"
import { MediaPagination } from "@/widgets/media-pagination"
import { loadQueryParams, parseQueryToFetchParams } from "@/entities/query-params"
import {
  collections,
  MediaList,
  MediaListSkeleton,
  type MediaCollection,
  type GetMediaParams,
} from "@/entities/media"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"

type Props = {
  params: Promise<{ collection: string }>
  searchParams: Promise<SearchParams>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const baseUrl = await getBaseUrl()
  const params = await props.params
  const queryParams = await loadQueryParams(props.searchParams)
  const collection = collections.find((c) => c.slug === params.collection)

  if (!collection) notFound()
  const { page } = parseQueryToFetchParams(queryParams)

  return {
    title: collection.title,
    description: collection.description,
    category: collection.type,
    alternates: {
      canonical: `${baseUrl}/${collection.slug}${page && page > 1 ? `?page=${page}` : ""}`,
    },
  }
}

export async function generateStaticParams() {
  return collections.map((c) => ({
    collection: c.slug,
  }))
}

export default async function CollectionPage(props: Props) {
  const queryParams = await loadQueryParams(props.searchParams)
  const params = await props.params

  const collection = collections.find((c) => c.slug === params.collection)
  if (!collection) notFound()
  const filterParams = parseQueryToFetchParams(queryParams)

  return (
    <>
      <section className="container pb-8 pt-16">
        <h1 className="text-5xl font-black">{collection.title}</h1>
        <p className="mt-4 text-pretty text-lg text-foreground/60 md:w-2/3">
          {collection.description}
        </p>
      </section>
      <MediaFilter mediaType={collection.type} />
      <MediaCollectionChips type={collection.type} slug={params.collection} />
      <Suspense
        key={JSON.stringify(queryParams)}
        fallback={<MediaListSkeleton rowCount={4} />}
      >
        <List collection={collection} params={filterParams} />
      </Suspense>
    </>
  )
}

type ListProps = {
  collection: MediaCollection
  params: GetMediaParams
}

async function List({ collection, params }: ListProps) {
  const data = await collection.getMedia(params)
  return (
    <>
      <MediaList title="Наша коллекция" response={data} />
      {data && <MediaPagination page={data.page} total={data.totalPages} />}
    </>
  )
}
