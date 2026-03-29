import { cn } from '@/shared/lib'

export const styles = {
  progressWrapper: cn('flex-center absolute bottom-90 z-1 w-full'),
  progress: cn('h-[52px] w-[52px]'),
  circle: cn(
    'stroke-golden origin-center rotate-[-90deg] fill-none stroke-2 [--progress:0]',
    '[stroke-dasharray:125.6px] [stroke-dashoffset:calc(125.6px*(1-var(--progress)))]',
  ),
  secondCircle: cn('stroke-golden fill-none stroke-1 opacity-40'),
  icon: cn('absolute ml-2'),
  verticalLine: cn('bg-golden/40 absolute bottom-0 h-200 w-1 translate-y-full'),
}
