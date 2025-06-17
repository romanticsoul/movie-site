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
    other: {
      "turbo-verification": "7647966b7343c29048673252e490f736",
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
                className="rounded-medium text-2xl font-bold text-inherit lg:text-3xl"
              >
                {collection.chipTitle}
              </Link>
            </h2>
          }
          items={itemsList[i]}
        />
      ))}

      <SEOSection />
    </>
  )
}

function SEOSection() {
  return (
    <section className="container">
      <h1 className="text-2xl font-black">
        LORDFILM — фильмы и сериалы онлайн в высоком качестве
      </h1>
      <p className="mt-4 text-pretty text-lg text-foreground/60">
        Добро пожаловать на LORDFILM — удобный онлайн-кинотеатр, где вы можете смотреть
        фильмы и сериалы бесплатно, без регистрации и смс. Мы ежедневно обновляем базу,
        добавляя новинки киноиндустрии и свежие эпизоды популярных сериалов. На сайте
        представлены фильмы разных жанров: боевики, драмы, комедии, фантастика, ужасы, а
        также мультфильмы и аниме.
      </p>
      <p className="mt-4 text-pretty text-lg text-foreground/60">
        Все видео доступны в хорошем качестве HD 720p и 1080p. Благодаря удобному
        интерфейсу и быстрой загрузке, вы можете наслаждаться просмотром с любого
        устройства — смартфона, планшета, компьютера или Smart TV. Наш сайт адаптирован
        под любые экраны и не требует установки приложений.
      </p>
      <p className="mt-4 text-pretty text-lg text-foreground/60">
        LORDFILM — это выбор для тех, кто ценит комфорт, скорость и качество. Смотрите
        онлайн бесплатно — дома, в дороге или на работе. Приятного просмотра!
      </p>
    </section>
  )
}
