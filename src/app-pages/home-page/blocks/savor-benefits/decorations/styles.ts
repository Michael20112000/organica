import { cn } from '@/shared/lib'

export const styles = {
  decorations: cn('flex-center flex-col'),
  leafWrapper: cn(
    'border-golden/10 flex-center h-44 w-44 rounded-full border',
    'md:h-54 md:w-54',
  ),
  leaf: cn('md:h-28 md:w-23'),
  verticalLine: cn('bg-golden/10 h-58 w-1', 'md:h-70'),
}
