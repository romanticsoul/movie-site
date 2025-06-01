import type { Metadata } from "next"
import { MainCarousel } from "@/widgets/main-carousel"
import { Link } from "@heroui/link"
import { collections, MediaCarousel } from "@/entities/media"

export const metadata: Metadata = {
  title: "LORDFILM - смотрите фильмы и сериалы онлайн бесплатно в хорошем качестве",
  description:
    "Бесплатно смотрите тысячи фильмов, сериалов, мультфильмов и аниме: от культовых хитов до свежих новинок. Находите уникальные истории для любого настроения",
}

export default async function Home() {
  const mainCollections = await collections.filter((c) => !c.parentSlug)

  const getItems = async function (coll: (typeof mainCollections)[number]) {
    const data = await coll.getMedia()
    return data?.items || []
  }

  return (
    <>
      <MainCarousel />

      {mainCollections.map(async (collection) => (
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
          items={await getItems(collection)}
        />
      ))}
    </>
  )
}
