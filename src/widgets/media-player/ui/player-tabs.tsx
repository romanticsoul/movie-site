"use client"

import { Tabs, Tab } from "@heroui/tabs"
import { KinoboxPlayer } from "../api/getKinoboxPlayers"

type PlayerTabsProps = {
  players: KinoboxPlayer[]
}

export function PlayerTabs({ players }: PlayerTabsProps) {
  return (
    <section className="container">
      <div className="flex aspect-[3/2] flex-col overflow-hidden rounded-large bg-default-100 sm:aspect-[16/9] lg:aspect-[21/9]">
        <Tabs
          size="lg"
          aria-label="Выбор плеера"
          defaultSelectedKey={players[0].id}
          color="primary"
          items={players}
          classNames={{
            tab: "h-10 px-4",
            cursor: "w-full",
            tabList:
              "grid w-full grid-cols-3 justify-start gap-4 rounded-b-none rounded-t-large bg-default-100 p-2 pb-0 sm:grid-cols-4 md:grid-cols-5",
            base: "flex",
            tabContent: "text-small text-default-foreground/60",
            panel: "flex-1 p-2",
          }}
        >
          {(player) => (
            <Tab
              key={player.id}
              title={player.id === 1 ? "Смотреть онлайн" : `Плеер ${player.id}`}
              className="text-small"
            >
              <iframe
                title={`Плеер для просмотра ${player.name}`}
                tabIndex={0}
                src={player.url}
                className="size-full overflow-hidden rounded-medium"
                allowFullScreen
              />
            </Tab>
          )}
        </Tabs>
      </div>
    </section>
  )
}
