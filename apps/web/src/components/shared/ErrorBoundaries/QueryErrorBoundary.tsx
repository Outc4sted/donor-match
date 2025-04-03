import {
  ErrorBoundary as ReactErrorBoundary,
  type FallbackProps,
} from 'react-error-boundary'
import type { ComponentType, ReactNode } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import ErrorFallback from './ErrorFallback'

export interface Props {
  readonly children: ReactNode
  readonly Fallback?: ComponentType<FallbackProps>
}

export default function QueryErrorBoundary({
  Fallback = ErrorFallback,
  children,
}: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ReactErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Fallback
              error={error}
              resetErrorBoundary={resetErrorBoundary}
            />
          )}
          onReset={reset}
        >
          {children}
        </ReactErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
