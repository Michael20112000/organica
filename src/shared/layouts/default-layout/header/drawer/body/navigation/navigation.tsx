import { Link } from '@/i18n/navigation'
import { Caret } from '@/shared/assets/svg'
import { getNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const Navigation = async () => {
  const { navigationArray } = await getNavigation()

  return (
    <nav className={styles.navigation}>
      {navigationArray.map(item => (
        <Link key={item.text} href={item.href} className={styles.link}>
          {item.text} <Caret width={14} height={14} />
        </Link>
      ))}
    </nav>
  )
}
