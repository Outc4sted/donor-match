import { Label } from '@/components/ui/label'
import type { ReactNode } from 'react'

export interface Props {
  readonly label: string
  readonly labelFor: string
  readonly isOptional?: boolean
  readonly children: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly error?: any
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

      <p className={`min-h-4 text-xs ${error ? 'text-red-600' : 'invisible'}`}>
        {error?.message}
      </p>
    </div>
  )
}
