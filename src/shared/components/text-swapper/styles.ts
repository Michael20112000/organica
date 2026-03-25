import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const transitionTransform = 'transition-transform duration-300'

const styles = {
  textSwapper: cn('group relative overflow-hidden'),
  firstText: cn(transitionTransform, 'group-hover:-translate-y-full'),
  secondText: cn(
    transitionTransform,
    'absolute bottom-0 translate-y-full',
    'group-hover:translate-y-0',
  ),
}
