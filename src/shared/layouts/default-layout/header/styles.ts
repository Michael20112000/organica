import { cn } from '@/shared/lib'

const navBarPart = cn('flex-center gap-10', 'xl:gap-42', '2xl:gap-52')

export const styles = {
  header: cn(
    'bg-beige-light border-beige own-container sticky top-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center gap-16 border-b py-20',
    'md:py-30',
  ),
  firstNavBarPart: cn(navBarPart, 'justify-start'),
  link: cn('hidden text-[13px] font-light', 'lg:flex', '2xl:text-[15px]'),
  secondNavBarPart: cn(navBarPart, 'justify-end'),
}
