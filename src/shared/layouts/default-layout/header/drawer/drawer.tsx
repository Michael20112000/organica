import { Header } from './header'
import { Body } from './body'
import { styles } from './styles'

export const Drawer = async () => {
  return (
    <div className={styles.drawer}>
      <Header />
      <Body />
    </div>
  )
}
