import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  section: cn('my-80', 'md:my-110', 'lg:my-140', '2xl:my-170'),
  textContent: cn(
    'own-container',
    'xl:mb-60 xl:flex xl:items-center xl:justify-between',
  ),
  text: cn('my-24 max-w-620', 'md:my-40', 'xl:my-0'),
  swiper: cn('!px-16', 'md:!px-50', 'xl!:px-70'),
  image: cn('h-340', 'lg:h-400', 'xl:h-350', '2xl:h-500'),
  slideText: cn('mt-20 max-w-380 font-light', '2xl:text-[18px]'),
}
