import { cn } from '@/shared/lib'
import type { DefaultButtonProps } from './default-button'

export const styles = {
  button: (
    variant: DefaultButtonProps['variant'],
    iconPosition: DefaultButtonProps['iconPosition'],
    className: DefaultButtonProps['className'],
  ) =>
    cn(
      !variant && 'bg-beige text-dark-brown',
      variant === 'dark' && 'bg-olive text-beige',
      variant === 'transparent' && 'text-golden border-golden/10 border',
      iconPosition === 'start' && 'flex-row-reverse',
      'font-inter-tight text-[13px] font-light uppercase',
      'flex-center inline-flex cursor-pointer gap-8 rounded-full px-40 py-18',
      'md:text-[14px]',
      className,
    ),
  caret: cn('-rotate-90'),
}
