import { cn } from '@/shared/lib'
import type { HeadingProps } from './heading'

export const styles = {
  heading: (size?: HeadingProps['size'], extra?: string) =>
    cn(
      'font-playfair-display leading-[1.2em] -tracking-[0.05em]',
      size ? sizeStyles[size] : defaultStyles,
      extra,
    ),
}

const defaultStyles = cn(
  'text-[36px]',
  'md:text-[44px]',
  'xl:text-[52px]',
  '2xl:text-[62px]',
)

const sizeStyles = {
  'extra-large': cn('text-[52px]', 'md:text-[90px]', 'lg:text-[110px]'),
}
