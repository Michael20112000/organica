import { cn } from '@/shared/lib'

export const styles = {
  dishes: cn(
    'mb-50 grid grid-cols-1 gap-y-50',
    'lg:mb-38 lg:grid-cols-2 lg:gap-x-20',
    'xl:mt-70 xl:mb-0 xl:grid-cols-1 xl:gap-y-230',
  ),
  imageWrapper: cn(
    'mb-18 h-270',
    'xs:h-330',
    'md:h-480',
    'lg:h-400',
    'xl:h-280',
    '2xl:h-330',
  ),
  link: cn('font-playfair-display text-[20px] italic'),
}
