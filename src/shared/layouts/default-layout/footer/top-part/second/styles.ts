import { cn } from '@/shared/lib'

export const styles = {
  second: cn('mt-50 mb-80', 'xl:m-0 xl:justify-self-end xl:[grid-area:second]'),
  label: cn(
    'font-playfair-display mb-24 text-[22px]',
    'md:text-[24px]',
    '2xl:text-[28px]',
  ),
  note: cn(
    'mb-20 text-[14px] font-extralight',
    'xl:text-[16px]',
    '2xl:text-[18px]',
  ),
  phone: cn('text-[18px] font-extralight', '2xl:text-[20px]'),
  messengers: cn(
    'text-golden-light flex-center mt-22 mb-38 gap-16',
    'xl:justify-start',
  ),
  leaveFeedbackButton: cn('xl:hidden'),
}
