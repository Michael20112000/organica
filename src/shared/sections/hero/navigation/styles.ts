import { cn } from '@/shared/lib'

const navButton = cn(
  'absolute bottom-80 z-3',
  'flex-center h-76 w-76 cursor-pointer rounded-full transition-colors duration-500',
  'hover:bg-golden text-beige bg-golden-light/10',
  'xl:bottom-1/2 xl:m-0 xl:translate-y-1/2',
)

export const styles = {
  prev: cn(navButton, 'prev-el left-1/2 -ml-120 rotate-180', 'xl:left-70'),
  next: cn(navButton, 'next-el right-1/2 -mr-120', 'xl:right-70'),
}
