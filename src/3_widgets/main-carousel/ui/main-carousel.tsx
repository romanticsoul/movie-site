import { getPopularMedia } from "../api/getPopularMedia"
import { CarouselContainer } from "./carousel-container"

export async function MainCarousel() {
  const response = await getPopularMedia()
  if (!response || !response.items.length) return null
  return <CarouselContainer media={response.items} />
}
