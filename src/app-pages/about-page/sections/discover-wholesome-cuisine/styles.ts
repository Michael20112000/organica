import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  section: cn('mt-80', 'md:mt-110', 'lg:mt-125'),
  textContainer: cn(
    'own-container mb-36',
    'lg:mb-50',
    'xl:mb-90 xl:flex xl:justify-between xl:gap-75',
  ),
  heading: cn('xl:shrink-0'),
  text: cn('mt-28 max-w-580', 'md:mt-40', 'xl:mt-16'),
  image: cn(
    'object-cover duration-300',
    '[.swiper-slide-active_&]:translate-y-40',
    'xl:[.swiper-slide-active_&]:translate-y-0',
    'xl:[.swiper-slide-next_&]:translate-y-40',
  ),
}
