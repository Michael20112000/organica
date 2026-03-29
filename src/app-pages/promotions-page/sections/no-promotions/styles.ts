import { cn } from '@/shared/lib'

export const styles = {
  section: cn(
    'font-playfair-display text-center',
    'own-container flex-center max-w-940 flex-col gap-32 py-60',
    'md:py-80',
    'lg:gap-42 lg:py-140',
  ),
  title: cn('text-[24px]', 'md:text-[28px]', 'lg:text-[44px]'),
  subtitle: cn('text-[18px]', 'lg:text-[22px]'),
  socials: cn('text-golden-light flex gap-14'),
}
