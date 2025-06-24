import { MovieDocsResponseDtoV14, MovieDtoV14 } from "../lib/fetch-generated-client"
import { api } from "../lib"

export type OpenmovieFindManyParams = NonNullable<
  Parameters<typeof api.movieControllerFindManyByQueryV14>[0]
>

export type OpenmovieFindManyResponse = MovieDocsResponseDtoV14
export type OpenmovieMovie = MovieDtoV14
