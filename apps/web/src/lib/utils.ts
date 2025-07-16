import type { Option } from '@/components/ui/multiple-selector'
import type { ClassValue } from 'clsx'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function selectOptions(options: Record<string, string>): Option[] {
  return Object.entries(options).map(([value, label]) => ({
    value,
    label,
  }))
}
