import type { FC, PropsWithChildren } from 'react'
import { Header } from './header'
import { styles } from './styles'

export const DefaultLayout: FC<PropsWithChildren> = props => {
  return (
    <div className={styles.defaultLayout}>
      <Header />
      <main>{props.children}</main>
      <footer>footer</footer>
    </div>
  )
}
