export function formatFilmLength(length: number) {
  const hours = Math.floor(length / 60)
  const minutes = length % 60
  return `${hours}ч ${minutes}м`
}
