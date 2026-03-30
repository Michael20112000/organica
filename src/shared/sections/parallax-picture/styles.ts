import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  section: cn('h-[50lvh] [clip-path:inset(0)]', 'md:h-900'),
  image: cn('fixed inset-0 h-full w-full'),
}
