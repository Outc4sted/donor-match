import type { ComponentType, ReactNode } from 'react'
import type { FallbackProps } from 'react-error-boundary'

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from './ErrorFallback'

export interface Props {
  readonly children: ReactNode
  readonly Fallback?: ComponentType<FallbackProps>
}

export function BaseErrorBoundary({
  Fallback = ErrorFallback,
  children,
}: Props) {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  )
}
