import type { ReactNode } from 'react'

import { Label } from '@/components/ui/label'

export interface Props {
  readonly label: string
  readonly labelFor: string
  readonly isOptional?: boolean | undefined
  readonly children: ReactNode
  readonly error?: { message: string } | undefined
}

export function FormFieldLayout({
  label,
  labelFor,
  isOptional,
  error,
  children,
}: Props) {
  return (
    <div className="flex flex-col gap-1 p-2">
      <Label
        htmlFor={labelFor}
        className={error ? 'text-red-600' : undefined}
      >
        {label}
        {isOptional ? (
          <span className="text-sm text-gray-500"> — (optional)</span>
        ) : null}
      </Label>

      {children}

      <p
        className={`
          min-h-4 text-xs
          ${error ? 'text-red-600' : 'invisible'}
        `}
      >
        {error?.message}
      </p>
    </div>
  )
}
