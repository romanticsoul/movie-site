"use client"

import { Tabs, Tab } from "@heroui/tabs"
import { KinoboxPlayer } from "../api/getKinoboxPlayers"

type PlayerTabsProps = {
  players: KinoboxPlayer[]
}

export function PlayerTabs({ players }: PlayerTabsProps) {
  return (
    <div className="border-y">
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
            "container grid grid-cols-5 justify-start gap-4 rounded-none border-x bg-neutral-100 px-4 py-2",
          base: "flex border-b",
          tabContent: "text-small text-default-foreground/60",
          panel: "container border-x bg-neutral-100 p-4",
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
              className="aspect-[21/9] w-full overflow-hidden rounded-large"
              allowFullScreen
            />
          </Tab>
        )}
      </Tabs>
    </div>
  )
}
