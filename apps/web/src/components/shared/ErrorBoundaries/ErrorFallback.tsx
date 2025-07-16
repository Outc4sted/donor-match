import { Alert } from '@/components/shared/Alert'
import { Button } from '@/components/ui/button'

export interface Props {
  readonly error: Error
  readonly resetErrorBoundary: () => void
}

export function ErrorFallback({ error, resetErrorBoundary }: Props) {
  return (
    <Alert
      variant="destructive"
      message={error.message}
    >
      <Button
        className="mt-4"
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </Alert>
  )
}
