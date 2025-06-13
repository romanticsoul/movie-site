import { getRandomMedia } from "../api/getRandomMedia"
import { CarouselContainer } from "./carousel-container"

export async function MainCarousel() {
  const data = await getRandomMedia(10)

  return (
    <section>
      <CarouselContainer media={data} />
    </section>
  )
}
