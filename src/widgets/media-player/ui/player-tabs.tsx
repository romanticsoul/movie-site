"use client"

import { Tabs, Tab } from "@heroui/tabs"
import { KinoboxPlayer } from "../api/getKinoboxPlayers"

type PlayerTabsProps = {
  players: KinoboxPlayer[]
}

export function PlayerTabs({ players }: PlayerTabsProps) {
  return (
    <section className="container">
      <Tabs
        size="lg"
        aria-label="Выбор плеера"
        defaultSelectedKey={players[0].source}
        color="primary"
        items={players}
        classNames={{
          tab: "h-10 px-4",
          cursor: "w-full",
          tabList:
            "grid w-full grid-cols-3 justify-start gap-4 rounded-b-none rounded-t-large bg-default-100 p-2 pb-0 sm:grid-cols-4 md:grid-cols-5",
          base: "flex",
          tabContent: "text-small text-default-foreground/60",
          panel: "rounded-b-large bg-default-100 p-2",
        }}
      >
        {(player) => (
          <Tab
            key={player.source}
            title={player.id === 1 ? "Смотреть онлайн" : `Плеер ${player.id}`}
            className="text-small"
          >
            <iframe
              title={`Плеер для просмотра ${player.source}`}
              tabIndex={0}
              src={player.iframeUrl}
              className="aspect-[3/2] w-full overflow-hidden rounded-medium sm:aspect-[16/9] md:aspect-[21/9]"
              allowFullScreen
            />
          </Tab>
        )}
      </Tabs>
    </section>
  )
}
