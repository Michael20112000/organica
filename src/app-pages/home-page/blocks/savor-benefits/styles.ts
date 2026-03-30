import { cn } from '@/shared/lib'

export const styles = {
  block: cn('own-container pt-90 pb-40 text-center', 'xl:pt-130'),
  image: cn(
    'mx-auto my-28 h-270 max-w-354',
    'md:my-34 md:h-440 md:max-w-620',
    'lg:h-330 lg:max-w-520',
    '2xl:my-40 2xl:h-430 2xl:max-w-700',
  ),
  label: cn(
    'font-playfair-display mt-18 font-medium italic',
    'md:mt-24 md:text-[20px]',
    '2xl:mt-40 2xl:text-[24px]',
  ),
}
