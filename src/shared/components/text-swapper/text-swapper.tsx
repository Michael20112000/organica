import type { FC } from 'react'
import { getStyles } from './styles'

interface ITextSwapperProps {
  text: string
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const TextSwapper: FC<ITextSwapperProps> = props => {
  const styles = getStyles(props.styling)

  return (
    <div className={styles.textSwapper}>
      <div className={styles.firstText}>{props.text}</div>
      <div className={styles.secondText} aria-hidden='true'>
        {props.text}
      </div>
    </div>
  )
}
