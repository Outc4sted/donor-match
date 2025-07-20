import type { ComponentType, ReactNode } from 'react'
import type { FallbackProps } from 'react-error-boundary'

import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from './ErrorFallback.tsx'

export interface Props {
  readonly children: ReactNode
  readonly Fallback?: ComponentType<FallbackProps>
}

export function QueryErrorBoundary({
  Fallback = ErrorFallback,
  children,
}: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ReactErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Fallback
              error={error as Error}
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
