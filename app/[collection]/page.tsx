import { Suspense } from "react"
import { SearchParams } from "nuqs"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Title, Paragraph } from "@shared/ui/typography"
import { getBaseUrl } from "@shared/utils/getBaseUrl"
import {
  COLLECTIONS,
  MediaList,
  MediaListSkeleton,
  getMedia,
  mediaQueryParamsCache,
  parseQueryToGetMediaParams,
  type MediaCollection,
} from "@entities/media"
import { CollectionChips } from "@widgets/collection-chips"
import { CollectionFilter } from "@widgets/collection-filter"
import { MediaPagination } from "@features/media-pagination"

type Props = {
  params: Promise<{ collection: string }>
  searchParams: Promise<SearchParams>
}

export default async function CollectionPage(props: Props) {
  const queryParams = await mediaQueryParamsCache.parse(props.searchParams)
  const params = await props.params
  const collection = COLLECTIONS.find((c) => c.slug === params.collection)

  if (!collection) notFound()

  return (
    <>
      <section className="container pb-8 pt-16">
        <Title variant="h1">{collection.title}</Title>
        <Paragraph size="lg" color="muted">
          {collection.description}
        </Paragraph>
      </section>
      <CollectionFilter />
      <CollectionChips collection={collection} />
      <Suspense key={JSON.stringify(queryParams)} fallback={<MediaListSkeleton rowCount={4} />}>
        <CollectionList collection={collection} />
      </Suspense>
    </>
  )
}

async function CollectionList({ collection }: { collection: MediaCollection }) {
  const queryParams = await mediaQueryParamsCache.all()
  const params = await parseQueryToGetMediaParams(queryParams)
  const data = await getMedia({
    ...collection.params,
    ...params,
  })

  return (
    <>
      <MediaList title="Наша коллекция" response={data} />
      {data && <MediaPagination page={data.page} totalPages={data.totalPages} />}
    </>
  )
}

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ collection: c.slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const collection = COLLECTIONS.find((c) => c.slug === params.collection)

  if (!collection) notFound()
  const baseUrl = await getBaseUrl()

  return {
    title: collection.title,
    description: collection.description,
    alternates: {
      canonical: `${baseUrl}/${collection.slug}`,
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      title: collection.title,
      description: collection.description,
      siteName: "LORDFILM",
    },
  }
}
