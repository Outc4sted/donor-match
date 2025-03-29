import { AlertCircle, Info } from 'lucide-react'
import {
  Alert as ShadcnAlert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import type { ReactNode } from 'react'

export interface Props {
  readonly message: string
  readonly title?: string
  readonly variant?: 'default' | 'destructive'
  readonly children?: ReactNode
}

export default function Alert({
  message,
  title,
  variant = 'default',
  children,
}: Props) {
  return (
    <ShadcnAlert variant={variant}>
      {variant === 'destructive' && (
        <>
          <AlertCircle className="size-4" />
          <AlertTitle>{title ?? 'Error'}</AlertTitle>
        </>
      )}

      {variant === 'default' && (
        <>
          <Info className="size-4" />
          <AlertTitle>{title ?? 'Info'}</AlertTitle>
        </>
      )}

      <AlertDescription>{message}</AlertDescription>

      <div>{children}</div>
    </ShadcnAlert>
  )
}
