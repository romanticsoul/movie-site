"use server"
import "server-only"
import { cache } from "react"
import { unstable_cache } from "next/cache"
import type { PaginationArgs, PaginationResult } from "prisma-paginate"
import { Prisma } from "@prisma/client"
import { prisma } from "@/shared/lib/prisma"
import type { MediaCompact } from "../model/types"

export type GetMediaParams = Omit<PaginationArgs, "limit"> &
  Partial<Pick<PaginationArgs, "limit">> &
  Omit<Prisma.MediaFindManyArgs, "select">
export type GetMediaResponse = PaginationResult<MediaCompact[]> | null

async function getData(params?: GetMediaParams): Promise<GetMediaResponse> {
  try {
    return prisma.media.paginate({
      page: 1,
      limit: 20,
      select: {
        id: true,
        title: true,
        rating_kp: true,
        poster: true,
        year: true,
        updated_at: true,
        Genre: true,
        Country: true,
      },
      orderBy: [{ year: "desc" }, { rating_imdb: "desc" }, { votes_kp: "desc" }],
      ...params,
    })
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getMedia = cache(unstable_cache(getData, [], { revalidate: 2580000 }))
