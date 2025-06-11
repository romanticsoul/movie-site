"use server"
import "server-only"
import { getMedia, type GetMediaParams } from "./getMedia"

type Props = {
  query: string
  params?: GetMediaParams
}

export async function getMediaByTitle(props: Props) {
  const params: GetMediaParams = {
    where: {
      title: {
        search: props.query
          .trim()
          .split(/\s+/)
          .map((word) => `${word}:*`)
          .join(" & "),
      },
    },
    orderBy: [{ votes_imdb: "desc" }, { votes_kp: "desc" }, { votes_tmdb: "desc" }],
  }

  return getMedia({
    ...params,
    ...props.params,
  })
}
