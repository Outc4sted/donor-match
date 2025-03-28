import { Button } from '@/components/ui/button'

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  readonly error: Error
  readonly resetErrorBoundary: () => void
}) {
  return (
    <div
      role="alert"
      className="rounded-md border border-red-500 bg-red-50 p-4"
    >
      <p className="text-sm font-semibold text-red-700">
        Something went wrong:
      </p>
      <pre className="mt-2 whitespace-pre-wrap text-sm text-red-600">
        {error.message}
      </pre>
      <Button
        className="mt-4"
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </div>
  )
}
