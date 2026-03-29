import { cn } from '@/shared/lib'

export const styles = {
  map: (extra?: string) =>
    cn(
      'h-350 [&_.mapboxgl-canvas]:absolute',
      'md:h-430',
      'xl:[grid-area:map]',
      '2xl:h-500',
      extra,
    ),
}
