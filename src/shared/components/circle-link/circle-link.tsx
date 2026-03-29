import type { FC, ComponentProps } from 'react'
import { styles } from './styles'

export const CircleLink: FC<ComponentProps<'a'>> = props => {
  const { children, className, ...rest } = props

  return (
    <a className={styles.circleLink(className)} {...rest}>
      {children}
    </a>
  )
}
