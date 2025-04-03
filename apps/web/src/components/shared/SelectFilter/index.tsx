import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface Props {
  readonly placeholder: string
  readonly label: string
  readonly listItems: string[]
}

export default function SelectFilter({ placeholder, label, listItems }: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {listItems.map((item) => (
            <SelectItem
              key={item}
              value={item}
            >
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
