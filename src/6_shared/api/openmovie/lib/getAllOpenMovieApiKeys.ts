export function getAllOpenMovieApiKeys() {
  const apiKeys = []
  let index = 1

  while (true) {
    const apiKey = process.env[`OPENMOVIE_API_KEY_${index}`]

    if (apiKey === undefined || apiKey === null || apiKey === "") {
      break
    }

    apiKeys.push(apiKey)
    index++
  }

  return apiKeys
}
