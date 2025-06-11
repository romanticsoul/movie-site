import type { Metadata } from "next"
import { MainCarousel } from "@/widgets/main-carousel"
import { Link } from "@heroui/link"
import { collections, MediaCarousel } from "@/entities/media"
import { getBaseUrl } from "@/shared/utils/getBaseUrl"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "LORDFILM - смотрите фильмы и сериалы онлайн бесплатно в хорошем качестве",
    description:
      "Бесплатно смотрите тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до свежих новинок. Находите уникальные истории для любого настроения",
    alternates: {
      canonical: await getBaseUrl(),
    },
  }
}

export const revalidate = 86400

export default async function Home() {
  const mainCollections = await collections.filter((c) => !c.parentSlug)

  const itemsList = await Promise.all(
    mainCollections.map(async (coll) => {
      const data = await coll.getMedia()
      return data?.result || []
    }),
  )

  return (
    <>
      <MainCarousel />

      {mainCollections.map(async (collection, i) => (
        <MediaCarousel
          key={collection.slug}
          titleSlot={
            <h2>
              <Link
                href={`/${collection.slug}`}
                className="rounded-medium text-2xl font-medium"
              >
                {collection.chipTitle}
              </Link>
            </h2>
          }
          items={itemsList[i]}
        />
      ))}
    </>
  )
}
