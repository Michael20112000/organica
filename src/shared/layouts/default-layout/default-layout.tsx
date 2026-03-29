import type { FC, PropsWithChildren } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { styles } from './styles'

export const DefaultLayout: FC<PropsWithChildren> = props => {
  return (
    <div className={styles.defaultLayout}>
      <Header />
      <main className={styles.pageContent}>{props.children}</main>
      <Footer />
    </div>
  )
}
