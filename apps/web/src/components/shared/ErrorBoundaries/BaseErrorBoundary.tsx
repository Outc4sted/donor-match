import {
  ErrorBoundary as ReactErrorBoundary,
  type FallbackProps,
} from 'react-error-boundary'
import type { ComponentType, ReactNode } from 'react'
import ErrorFallback from './ErrorFallback'

export interface Props {
  readonly children: ReactNode
  readonly Fallback?: ComponentType<FallbackProps>
}

export default function BaseErrorBoundary({
  Fallback = ErrorFallback,
  children,
}: Props) {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  )
}
