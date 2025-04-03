import { Button } from '@/components/ui/button'
import Alert from '@/components/shared/Alert'

export interface Props {
  readonly error: Error
  readonly resetErrorBoundary: () => void
}

export default function ErrorFallback({ error, resetErrorBoundary }: Props) {
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
