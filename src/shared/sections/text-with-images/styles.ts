import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

export const styles = {
  section: cn(''),
  content: cn('own-container', 'lg:grid lg:grid-cols-2'),
  label: cn(
    'text-golden text-[13px]',
    'before:mr-6 before:content-["—"]',
    'md:text-[16px]',
    'lg:row-span-2',
  ),
  title: cn('mt-22 mb-28', 'md:mt-24 md:mb-40', 'lg:mt-0'),
  swiper: cn(
    'col-span-full mt-36 h-370 !px-16',
    'md:mt-50 md:h-500 md:!px-50',
    'xl:!px-70',
  ),
  image: cn('h-full'),
}
