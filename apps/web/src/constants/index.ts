import type { Option } from '@/components/ui/multiple-selector'

const bloodTypes = {
  'A+': 'A_POS',
  'A-': 'A_NEG',
  'B+': 'B_POS',
  'B-': 'B_NEG',
  'O+': 'O_POS',
  'O-': 'O_NEG',
  'AB+': 'AB_POS',
  'AB-': 'AB_NEG',
} as const

export type BloodType = (typeof bloodTypes)[keyof typeof bloodTypes]

export const bloodTypeMultiSelectOptions: Option[] = Object.entries(
  bloodTypes,
).map(([label, value]) => ({
  label,
  value,
}))

export const organTypes = {
  KIDNEY: 'Kidney',
  LIVER: 'Liver',
  LUNG: 'Lung',
  HEART: 'Heart',
  PANCREAS: 'Pancreas',
  INTESTINES: 'Intestines',
} as const

export type OrganType = (typeof organTypes)[keyof typeof organTypes]

export const organTypeMultiSelectOptions: Option[] = Object.entries(
  organTypes,
).map(([label, value]) => ({
  label,
  value,
}))
