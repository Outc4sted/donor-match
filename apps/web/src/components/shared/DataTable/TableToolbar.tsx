import type { ReactNode } from 'react'

export interface Props {
  readonly summary?: string
  readonly children?: ReactNode
}

export default function TableToolbar({ summary, children }: Props) {
  return (
    <div className="flex items-center gap-4 py-1">
      {summary ? <p className="mr-4 font-bold">{summary}</p> : null}

      <div className="flex items-center gap-2">{children}</div>
    </div>
  )
}
