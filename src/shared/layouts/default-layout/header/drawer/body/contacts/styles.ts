import { cn } from '@/shared/lib'

export const styles = {
  title: cn(
    'font-playfair-display text-golden mt-30 mb-16 text-[17px] italic',
    'lg:text-[20px]',
  ),
  text: cn('text-[18px] font-light', 'lg:text-[20px]'),
  rowBetween: cn('flex-center justify-between gap-16'),
  row: cn('flex-center text-golden gap-16'),
  icon: cn('lg:h-42 lg:w-42'),
}
