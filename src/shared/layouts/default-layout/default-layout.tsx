import type { FC, PropsWithChildren } from 'react'
import { styles } from './styles'

export const DefaultLayout: FC<PropsWithChildren> = props => {
  return (
    <div className={styles.defaultLayout}>
      <header>header</header>
      <main>{props.children}</main>
      <footer>footer</footer>
    </div>
  )
}
