import { getNavigation } from '@/shared/hooks'
import { NavigationLink } from './navigation-link'
import { styles } from './styles'

export const Navigation = async () => {
  const { drawerNavigation } = await getNavigation()

  return (
    <nav className={styles.navigation}>
      {drawerNavigation.map(item => (
        <NavigationLink key={item.href} {...item} />
      ))}
    </nav>
  )
}
