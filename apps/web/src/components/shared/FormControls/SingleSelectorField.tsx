import type { Option } from '@/components/ui/multiple-selector'

import { useStore } from '@tanstack/react-form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFieldContext } from '@/lib/hooks/useFormContext'

import { FormFieldLayout } from './FormFieldLayout'

export interface Props {
  readonly label: string
  readonly isOptional?: boolean
  readonly placeholder?: string
  readonly options: Option[]
}

export function SingleSelectorField({
  label,
  isOptional,
  options,
  placeholder,
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
      <Select
        name={field.name}
        value={field.state.value}
        onValueChange={field.handleChange}
      >
        <SelectTrigger
          className={`
            w-full
            ${
              error
                ? `
                  border-red-500
                  focus:ring-red-500
                `
                : ''
            }
          `}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent side="bottom">
          {options.map(({ value, label }) => (
            <SelectItem
              key={value}
              value={value}
            >
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormFieldLayout>
  )
}
