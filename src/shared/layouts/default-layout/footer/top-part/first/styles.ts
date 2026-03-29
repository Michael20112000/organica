import { cn } from '@/shared/lib'

const text = cn('text-[18px] font-extralight', '2xl:text-[20px]')

export const styles = {
  first: cn('xl:[grid-area:first]'),
  label: cn(
    'font-playfair-display text-[22px]',
    'md:text-[24px]',
    '2xl:text-[28px]',
  ),
  text1: cn(text, 'mt-24 mb-12'),
  text2: cn(text),
  button: cn('mt-18 mb-50 w-full max-w-240'),
  socials: cn(
    'text-golden-light inline-grid grid-cols-3 gap-16',
    'md:grid-flow-col',
    'xl:grid-flow-row',
  ),
}
