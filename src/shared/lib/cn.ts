import { type ClassNameValue, twMerge } from 'tailwind-merge'

export const cn = (...input: ClassNameValue[]) => {
  return twMerge(input)
}
