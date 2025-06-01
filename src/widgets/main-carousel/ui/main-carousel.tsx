import { fetchMediaList, DEFAULT_PARAMS } from "@/entities/media"
import { CarouselContainer } from "./carousel-container"
import sampleSize from "lodash/sampleSize"

export async function MainCarousel() {
  DEFAULT_PARAMS.notNullFields?.push("backdrop.url")
  const data = await fetchMediaList({
    ...DEFAULT_PARAMS,
    limit: 50,
    year: ["2025"],
    sortField: ["votes.kp"],
    sortType: ["-1"],
    type: ["movie", "tv-series"],
    "countries.name": ["!Россия"],
    "rating.kp": ["6.5-10"],
  })
  if (!data || !data.items.length) return null

  return (
    <section className="border-b">
      <CarouselContainer items={sampleSize(data.items, 5)} />
    </section>
  )
}
