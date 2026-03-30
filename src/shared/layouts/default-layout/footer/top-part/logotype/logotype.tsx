import { Link } from '@/i18n/navigation'
import { Logotype as Logo } from '@/shared/assets/svg'
import { styles } from './styles'

export const Logotype = () => {
  return (
    <div className={styles.logotypeWrapper}>
      <Link href='/'>
        <Logo darkMode className={styles.logotype} />
      </Link>
    </div>
  )
}
