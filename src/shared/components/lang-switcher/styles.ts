import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  localesWrapper: cn('flex gap-4'),
  locale: cn('data-[active=true]:text-golden data-[active=true]:underline'),
}
