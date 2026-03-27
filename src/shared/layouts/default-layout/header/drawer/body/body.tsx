import { FillImage } from '@/shared/components'
import { Navigation } from './navigation'
import { Contacts } from './contacts'
import { styles } from './styles'

export const Body = async () => {
  return (
    <div className={styles.body}>
      <FillImage
        className={styles.image}
        src='/drawer.webp'
        alt='Drawer image'
      />
      <div className={styles.content}>
        <Navigation />
        <Contacts />
      </div>
    </div>
  )
}
