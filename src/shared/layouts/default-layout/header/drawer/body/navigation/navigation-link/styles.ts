import { cn } from '@/shared/lib'

export const styles = {
  link: cn(
    'border-beige flex-center justify-between border-t py-14 font-light last:border-b [&>svg]:-rotate-90',
    'xl:border-none xl:[&>svg]:hidden',
    '2xl:text-[18px]',
  ),
}
