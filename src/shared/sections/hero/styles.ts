import { cn } from '@/shared/lib'

export const styles = {
  section: cn('h-dvh'),
  swiperCarousel: cn('h-full'),
  swiperSlide: cn('flex-center !flex'),
  image: cn('absolute inset-0 h-auto'),
  eclipse: cn('absolute inset-0 bg-[black]/40'),
  content: cn(
    'text-beige own-container flex-center relative -mt-90 flex-col text-center',
  ),
  supTitle: cn(
    'text-[12px] font-light uppercase',
    'lg:text-[15px]',
    '2xl:text-[17px]',
  ),
  title: cn(
    'font-playfair-display mt-10 mb-32 text-[52px] leading-[1em]',
    'md:text-[90px]',
    'lg:text-[110px]',
  ),
}
