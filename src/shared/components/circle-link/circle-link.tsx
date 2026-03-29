import type { ComponentProps, PropsWithChildren, FC } from 'react'
import { styles } from './styles'

type CircleLinkProps = ComponentProps<'a'> & PropsWithChildren

export const CircleLink: FC<CircleLinkProps> = props => {
  const { children, className, ...rest } = props

  return (
    <a className={styles.circleLink(className)} {...rest}>
      {children}
    </a>
  )
}
