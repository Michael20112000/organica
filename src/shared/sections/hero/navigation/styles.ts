import { cn } from '@/shared/lib'

const navButton = cn(
  'flex-center h-76 w-76 cursor-pointer rounded-full transition-colors duration-500',
  'hover:bg-golden text-beige bg-golden-light/10',
)

export const styles = {
  navigation: cn(
    'flex-center own-container absolute bottom-90 z-1 w-full gap-80',
    'xl:bottom-1/2 xl:translate-y-1/2 xl:justify-between',
  ),
  prev: cn(navButton, 'prev-el rotate-180'),
  next: cn(navButton, 'next-el'),
}
