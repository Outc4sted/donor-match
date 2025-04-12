export const bloodTypeKeys = [
  'A_POS',
  'A_NEG',
  'B_POS',
  'B_NEG',
  'O_POS',
  'O_NEG',
  'AB_POS',
  'AB_NEG',
] as const

export type BloodType = (typeof bloodTypeKeys)[number]

export const bloodTypes: Record<BloodType, string> = {
  A_POS: 'A+',
  A_NEG: 'A-',
  B_POS: 'B+',
  B_NEG: 'B-',
  O_POS: 'O+',
  O_NEG: 'O-',
  AB_POS: 'AB+',
  AB_NEG: 'AB-',
}

export const organTypeKeys = [
  'KIDNEY',
  'LIVER',
  'LUNG',
  'HEART',
  'PANCREAS',
  'INTESTINES',
] as const

export type OrganType = (typeof organTypeKeys)[number]

export const organTypes: Record<OrganType, string> = {
  KIDNEY: 'Kidney',
  LIVER: 'Liver',
  LUNG: 'Lung',
  HEART: 'Heart',
  PANCREAS: 'Pancreas',
  INTESTINES: 'Intestines',
}
