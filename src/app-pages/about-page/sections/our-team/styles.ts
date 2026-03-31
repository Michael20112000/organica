import { cn } from '@/shared/lib'

export const styles = {
  section: cn('own-container', 'md:px-0'),
  heading: cn('mb-26 text-center', 'md:hidden'),
  grid: cn('grid grid-cols-2 gap-5'),
  image: cn(
    'h-225 first:col-span-2',
    'md:not-first:hidden md:first:h-480 md:first:bg-[black]/30 md:first:[&>img]:-z-1',
    'xl:first:h-800',
    '2xl:first:h-900',
  ),
}
