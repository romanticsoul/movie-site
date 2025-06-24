import Image from "next/image"
import Link from "next/link"
import { Button } from "@heroui/button"
import { Title } from "@shared/ui/typography"

const STUDIOS = [
  {
    title: "NETFLIX",
    slug: "/netflix-series",
    lightSrc: "/studios/netflix.svg",
    darkSrc: "/studios/netflix.svg",
  },
  { title: "HBO", slug: "#", lightSrc: "/studios/hbo.svg", darkSrc: "/studios/hbo-dark.svg" },
  {
    title: "Prime Video",
    slug: "/prime-series",
    lightSrc: "/studios/prime.svg",
    darkSrc: "/studios/prime.svg",
  },
  {
    title: "AppleTV+",
    slug: "/apple-series",
    lightSrc: "/studios/appletv.svg",
    darkSrc: "/studios/appletv-dark.svg",
  },
  { title: "Disney+", slug: "#", lightSrc: "/studios/disney.svg", darkSrc: "/studios/disney.svg" },
  { title: "Hulu", slug: "#", lightSrc: "/studios/hulu.svg", darkSrc: "/studios/hulu.svg" },
]

export async function StudioButtons() {
  return (
    <section className="container py-8" aria-labelledby="studio-section">
      <Title id="studio-section" variant="h2">
        Популярные студии
      </Title>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {STUDIOS.map((studio) => (
          <li key={studio.title}>
            <Button
              as={Link}
              aria-label={studio.title}
              variant="light"
              href={studio.slug}
              className="group h-24 w-full p-0"
              size="lg"
            >
              <Image
                height={50}
                width={100}
                src={studio.lightSrc}
                alt={studio.title}
                className="size-full object-contain p-7 dark:hidden"
              />
              <Image
                height={50}
                width={100}
                src={studio.darkSrc}
                alt={studio.title}
                className="hidden size-full object-contain p-7 dark:block"
              />
            </Button>
          </li>
        ))}
      </ul>
    </section>
  )
}
