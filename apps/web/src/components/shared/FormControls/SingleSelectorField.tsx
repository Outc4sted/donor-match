import { useFieldContext } from '@/lib/hooks/useFormContext'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { FormFieldLayout } from './FormFieldLayout'
import type { Option } from '@/components/ui/multiple-selector'

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
  const [error] = field.state.meta.errors

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
          className={`w-full ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
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
