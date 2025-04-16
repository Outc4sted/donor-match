import { Input } from '@/components/ui/input'
import { useFieldContext } from '@/lib/hooks/useFormContext'
import { FormFieldLayout } from './FormFieldLayout'

export interface Props {
  readonly label?: string
  readonly isOptional?: boolean
}

export function SSNField({ label = 'SSN', isOptional = false }: Props) {
  const field = useFieldContext<string>()
  const [error] = field.state.meta.errors

  const formatSSN = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 9)
    const parts = [
      digitsOnly.slice(0, 3),
      digitsOnly.slice(3, 5),
      digitsOnly.slice(5, 9),
    ]
    return parts.filter(Boolean).join('-')
  }

  return (
    <FormFieldLayout
      label={label}
      labelFor={field.name}
      isOptional={isOptional}
      error={error}
    >
      <Input
        name={field.name}
        value={field.state.value ?? ''}
        type="text"
        className={error ? 'border-red-500 focus:ring-red-500' : ''}
        onChange={({ target }) => {
          const formatted = formatSSN(target.value)
          field.handleChange(formatted)
        }}
      />
    </FormFieldLayout>
  )
}
