const monthNamesDutch = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december'
]

export const usePrettyDate = (dateString?: string): string | undefined => {
  if (!dateString || dateString === '') return undefined

  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${day} ${monthNamesDutch[month]} ${year}`
}
