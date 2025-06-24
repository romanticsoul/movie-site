import { ApiKeyRotator } from "./ApiKeyRotator"
import { getAllOpenMovieApiKeys } from "./getAllOpenMovieApiKeys"

const apiKeys = getAllOpenMovieApiKeys()
const apiKeyRotator = new ApiKeyRotator(apiKeys)

export const { v14: api } = apiKeyRotator.getClient()
