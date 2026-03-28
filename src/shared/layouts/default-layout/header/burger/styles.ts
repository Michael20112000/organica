import { cn } from '@/shared/lib'

export const styles = {
  burger: cn('cursor-pointer'),
  cutlet: cn('bg-dark-brown h-2 w-32 rounded even:my-8'),
  eclipse: (isOpen: boolean) =>
    cn(
      'pointer-events-none fixed inset-0 transition-colors duration-800',
      isOpen && 'bg-dark-brown/60',
    ),
  drawerWrapper: (isOpen: boolean) =>
    cn(
      'fixed inset-0 translate-x-full transition-transform duration-800',
      isOpen && 'translate-x-0',
    ),
}
