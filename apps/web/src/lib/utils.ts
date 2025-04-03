import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Option } from '@/components/ui/multiple-selector'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function multiSelectOptions(options: Record<string, string>): Option[] {
  return Object.entries(options).map(([value, label]) => ({
    value,
    label,
  }))
}
