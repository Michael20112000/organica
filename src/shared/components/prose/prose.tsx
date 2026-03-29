import type { PropsWithChildren, FC } from 'react'
import { styles } from './styles'

interface ProseProps extends PropsWithChildren {
  className?: string
}

export const Prose: FC<ProseProps> = props => {
  return <div className={styles.prose(props.className)}>{props.children}</div>
}
