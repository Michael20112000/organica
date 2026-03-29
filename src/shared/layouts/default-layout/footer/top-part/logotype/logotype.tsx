import { Logotype as Logo } from '@/shared/assets/svg'
import { styles } from './styles'

export const Logotype = () => {
  return (
    <div className={styles.logotypeWrapper}>
      <Logo darkMode className={styles.logotype} />
    </div>
  )
}
