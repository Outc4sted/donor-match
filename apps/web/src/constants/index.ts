export const bloodTypes = {
  A_POS: 'A+',
  A_NEG: 'A-',
  B_POS: 'B+',
  B_NEG: 'B-',
  O_POS: 'O+',
  O_NEG: 'O-',
  AB_POS: 'AB+',
  AB_NEG: 'AB-',
} as const

export type BloodType = keyof typeof bloodTypes

export const organTypes = {
  KIDNEY: 'Kidney',
  LIVER: 'Liver',
  LUNG: 'Lung',
  HEART: 'Heart',
  PANCREAS: 'Pancreas',
  INTESTINES: 'Intestines',
} as const

export type OrganType = keyof typeof organTypes
