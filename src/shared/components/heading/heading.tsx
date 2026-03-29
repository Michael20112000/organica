import type { HTMLAttributes, ReactNode, FC } from 'react'
import { styles } from './styles'

type Tag = 'h1' | 'h2' | 'h3' | 'h4'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text: ReactNode
  size?: 'extra-large'
  className?: string
  Tag?: Tag
}

export const Heading: FC<HeadingProps> = props => {
  const { text, className, size, Tag = 'h2', ...rest } = props

  return (
    <Tag className={styles.heading(size, className)} {...rest}>
      {text}
    </Tag>
  )
}
