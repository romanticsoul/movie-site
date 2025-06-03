import { getKinoboxPlayers } from "../api/getKinoboxPlayers"
import { PlayerTabs } from "./player-tabs"

export type MediaPlayerProps = {
  kinopoiskId: number
}

export async function MediaPlayer({ kinopoiskId }: MediaPlayerProps) {
  const players = await getKinoboxPlayers({
    search: { kinopoisk: String(kinopoiskId) },
    players: {
      // videocdn: { enable: true, domain: "https://p.lumex.cloud/QAPRgy9NPBSF" },
    },
  })

  if (!players || !players.length) {
    return (
      <section className="border-y">
        <div className="container flex aspect-[21/9] flex-col items-center justify-center border-x bg-neutral-100">
          <h3 className="text-xl font-semibold text-default-foreground/50">
            К сожалению этот фильм еще нельзя посмотреть
          </h3>
        </div>
      </section>
    )
  }

  return <PlayerTabs players={players} />
}
