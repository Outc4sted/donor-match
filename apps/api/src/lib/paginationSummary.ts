interface Props {
  page?: number
  limit?: number
  total: number
  name: string
  pluralName?: string
}

export default function paginationSummary({
  page = 1,
  limit,
  total,
  name,
  pluralName,
}: Props) {
  const pages = limit ? Math.ceil(total / limit) : 1
  const rangeStart = (page - 1) * (limit ?? 0) + 1
  const rangeEnd = limit ? Math.min((page - 1) * limit + limit, total) : total
  const label = total > 1 ? (pluralName ?? `${name}s`) : name
  const summary = `Showing ${rangeStart}-${rangeEnd} of ${total} ${label}`

  return {
    summary,
    total,
    pages,
    page,
    limit,
  }
}
