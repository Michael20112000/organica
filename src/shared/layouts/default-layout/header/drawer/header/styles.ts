import { cn } from '@/shared/lib'

export const styles = {
  header: cn(
    'grid grid-cols-[1fr_auto_1fr] items-center gap-16 py-20',
    'md:py-30',
  ),
  langSwitcher: cn('text-[13px] font-light', '2xl:text-[15px]'),
}
