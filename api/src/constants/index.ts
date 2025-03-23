export const BloodTypeKeys = [
  'A_POS',
  'A_NEG',
  'B_POS',
  'B_NEG',
  'O_POS',
  'O_NEG',
  'AB_POS',
  'AB_NEG',
] as const

export type BloodType = (typeof BloodTypeKeys)[number]

export const OrganTypeKeys = [
  'KIDNEY',
  'LIVER',
  'LUNG',
  'HEART',
  'PANCREAS',
  'INTESTINES',
] as const

export type OrganType = (typeof OrganTypeKeys)[number]
