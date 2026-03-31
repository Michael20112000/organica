import { cn } from '@/shared/lib'

export const styles = {
  block: cn(
    'pt-90 pb-40',
    'md:pt-120 md:pb-70',
    'lg:pt-80 lg:pb-44',
    'text-center xl:pt-130',
  ),
  image: cn(
    'mx-auto my-28 h-270 max-w-354',
    'md:my-34 md:h-440 md:max-w-620',
    'lg:h-330 lg:max-w-[520]',
    '2xl:my-40 2xl:h-430 2xl:max-w-[700]',
  ),
  label: cn(
    'font-playfair-display mx-auto max-w-720 leading-[1.3em] italic',
    'md:text-[20px]',
    '2xl:text-[24px]',
  ),
}
