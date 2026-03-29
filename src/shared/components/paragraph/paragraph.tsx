import type { ReactNode, FC } from 'react'
import { styles } from './styles'

interface ParagraphProps {
  text: ReactNode
  className?: string
}

export const Paragraph: FC<ParagraphProps> = props => {
  return <p className={styles.paragraph(props.className)}>{props.text}</p>
}
