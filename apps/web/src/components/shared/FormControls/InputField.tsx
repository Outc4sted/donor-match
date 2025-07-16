import { useStore } from '@tanstack/react-form'

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
  const [error] = useStore(
    field.store,
    (state) => state.meta.errors as { message: string }[],
  )

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
        className={
          error
            ? `
              border-red-500
              focus:ring-red-500
            `
            : ''
        }
        onChange={({ target }) => {
          field.handleChange(target.value)
        }}
      />
    </FormFieldLayout>
  )
}
