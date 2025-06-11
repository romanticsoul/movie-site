"use server"
import "server-only"
import { cache } from "react"
import { unstable_cache } from "next/cache"
import { prisma } from "@/shared/lib/prisma"

async function getRandomData(count: number) {
  return prisma.media.findManyRandom(count, {
    select: {
      id: true,
      year: true,
      rating_kp: true,
      rating_age: true,
      title: true,
      description: true,
      poster: true,
      backdrop: true,
      Genre: true,
      Country: true,
    },
    where: {
      year: { gte: new Date().getFullYear() - 1 },
      rating_kp: { gte: 7 },
      NOT: [{ backdrop: null }, { Country: { some: { name: "Россия" } } }],
      OR: [{ type: "movie" }, { type: "tv_series" }],
    },
  })
}

export type RandomMedia = Awaited<ReturnType<typeof getRandomData>>[number]
export const getRandomMedia = cache(
  unstable_cache(getRandomData, [], {
    revalidate: 86000,
  }),
)
