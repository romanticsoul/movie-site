import { getKinoboxPlayers } from "../api/getKinoboxPlayers"
import { PlayerTabs } from "./player-tabs"

export type MediaPlayerProps = {
  kinopoiskId: number
}

export async function MediaPlayer({ kinopoiskId }: MediaPlayerProps) {
  const players = await getKinoboxPlayers({
    search: { kinopoisk: String(kinopoiskId) },
    players: {
      turbo: {
        position: 1,
        domain: "https://4b377be3.obrut.show/embed/yEjM",
      },
    },
  })

  // TODO: Последний плеер не работает
  const pl = players.slice(0, -1)

  if (!pl || !pl.length) {
    return (
      <section className="container">
        <div className="flex aspect-[3/2] w-full flex-col items-center justify-center overflow-hidden rounded-large bg-default-100 sm:aspect-[16/9] lg:aspect-[21/9]">
          <h3 className="text-xl font-semibold text-default-foreground/50">
            К сожалению этот фильм еще нельзя посмотреть
          </h3>
        </div>
      </section>
    )
  }

  return <PlayerTabs players={pl} />
}
