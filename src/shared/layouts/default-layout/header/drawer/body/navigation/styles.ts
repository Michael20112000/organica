import { cn } from '@/shared/lib'

export const styles = {
  navigation: cn('xl:grid xl:grid-cols-2 xl:gap-x-80'),
  link: cn(
    'border-beige flex-center justify-between border-t py-14 font-light last:border-b [&>svg]:-rotate-90',
    'xl:border-none xl:[&>svg]:hidden',
    '2xl:text-[18px]',
  ),
}
