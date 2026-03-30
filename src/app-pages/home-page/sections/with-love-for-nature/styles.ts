import { mergeExtraStyles, cn } from '@/shared/lib'

export const getStyles = (extra?: Partial<typeof styles>) => {
  return mergeExtraStyles(styles, extra)
}

const styles = {
  section: cn(
    'own-container pt-90 pb-70',
    'md:pt-110 md:pb-80',
    'xl:grid xl:grid-cols-2 xl:items-center xl:pt-150 xl:pb-160',
  ),
  imageContainer: cn('hidden pr-100', 'xl:block'),
  image: cn('ml-auto h-580 max-w-700', '2xl:h-740'),
  content: cn(''),
  text: cn('my-30 max-w-600', 'lg:my-40', '2xl:my-50'),
}
