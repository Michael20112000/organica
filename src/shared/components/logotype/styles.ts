import { cn, mergeExtraStyles } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  logotype: cn('lg:h-[46px] lg:w-[200px]'),
}
