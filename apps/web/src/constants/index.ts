import type { BloodType, OrganType } from '@repo/ts-rest'

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

export const organTypes: Record<OrganType, string> = {
  KIDNEY: 'Kidney',
  LIVER: 'Liver',
  LUNG: 'Lung',
  HEART: 'Heart',
  PANCREAS: 'Pancreas',
  INTESTINES: 'Intestines',
}
