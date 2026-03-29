import { Link } from '@/i18n/navigation'
import { TextSwapper } from '@/shared/components'
import { getNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const Navigation = async () => {
  const { coreNavigation } = await getNavigation()

  return (
    <nav className={styles.navigation}>
      {coreNavigation.map(({ href, text }) => (
        <Link key={href} href={href}>
          <TextSwapper text={text} />
        </Link>
      ))}
    </nav>
  )
}
