import { Input } from '@/components/ui/input'
import { useFieldContext } from '@/lib/hooks/useFormContext'
import { FormFieldLayout } from './FormFieldLayout'

export interface Props {
  readonly label: string
  readonly isOptional?: boolean
  readonly type?: 'text' | 'number'
}

export function InputField({
  label,
  type = 'text',
  isOptional = false,
}: Props) {
  const field = useFieldContext<string>()
  const [error] = field.state.meta.errors

  return (
    <FormFieldLayout
      label={label}
      labelFor={field.name}
      isOptional={isOptional}
      error={error}
    >
      <Input
        name={field.name}
        value={field.state.value}
        type={type}
        onChange={(e) => field.handleChange(e.target.value)}
      />
    </FormFieldLayout>
  )
}
