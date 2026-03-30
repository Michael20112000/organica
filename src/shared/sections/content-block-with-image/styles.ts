import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  section: cn('lg:grid lg:grid-cols-2'),
  image: cn('h-470', 'md:h-700', 'lg:h-auto'),
}
