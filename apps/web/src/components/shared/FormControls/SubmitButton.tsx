import { Button } from '@/components/ui/button'
import { useFormContext } from '@/lib/hooks/useFormContext'

export interface Props {
  readonly label?: string
}

export function SubmitButton({ label = 'Submit' }: Props) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          className="rounded-lg bg-red-600 px-8 py-3 text-white hover:bg-red-700"
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  )
}
