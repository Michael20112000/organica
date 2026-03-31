import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  section: cn('mt-80', 'md:mt-110 md:text-center', 'lg:mt-150'),
  textContent: cn('own-container mb-36', 'md:mb-50'),
  label: cn('text-golden text-[13px] uppercase', 'md:text-[18px]'),
  heading: cn('my-24', 'md:my-30'),
  text: cn('md:mx-auto md:max-w-610', '2xl:max-w-720'),
  swiper: cn('!px-16', 'md:!px-50', 'xl:!px-70'),
  image: cn('h-350', 'md:h-440', 'lg:h-550', '2xl:h-700'),
}
