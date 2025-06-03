import { getKinoboxPlayers } from "../api/getKinoboxPlayers"
import { PlayerTabs } from "./player-tabs"

export type MediaPlayerProps = {
  kinopoiskId: number
}

export async function MediaPlayer({ kinopoiskId }: MediaPlayerProps) {
  const players = await getKinoboxPlayers({
    search: { kinopoisk: String(kinopoiskId) },
  })

  if (!players || !players.length) {
    return (
      <section className="border-y">
        <div className="container flex w-full flex-col items-center justify-center overflow-hidden rounded-large border-x bg-neutral-100 sm:aspect-[16/9] md:aspect-[21/9]">
          <h3 className="text-xl font-semibold text-default-foreground/50">
            К сожалению этот фильм еще нельзя посмотреть
          </h3>
        </div>
      </section>
    )
  }

  return <PlayerTabs players={players} />
}
