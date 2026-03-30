import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  section: cn('bg-green-dark own-container text-beige text-center'),
  content: cn(
    'border-golden/10 grid grid-cols-1 border-x pt-54 pb-100',
    'md:pt-70 md:pb-130',
    'xl:grid-cols-[1fr_3fr_1fr] xl:gap-x-25',
  ),
  mobileBottomPart: cn('px-16', 'xl:hidden'),
  mobileBottomText: cn('mx-auto mb-40 max-w-504 font-extralight'),
}
