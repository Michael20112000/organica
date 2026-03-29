import { Link } from '@/i18n/navigation'
import { Logotype } from '@/shared/assets/svg'
import { TextSwapper, LangSwitcher } from '@/shared/components'
import { getNavigation, type NavigationLink } from '@/shared/hooks'
import { Burger } from './burger'
import { Drawer } from './drawer'
import { styles } from './styles'

export const Header = async () => {
  const { mainNavigation } = await getNavigation()

  const firstNavigationPart = mainNavigation.slice(0, 3)
  const secondNavigationBarPart = mainNavigation.slice(3)

  const renderNavigationLinks = (links: NavigationLink[]) => {
    return links.map(link => (
      <Link key={link.href} className={styles.link} href={link.href}>
        <TextSwapper text={link.text} />
      </Link>
    ))
  }

  return (
    <header className={styles.header}>
      <nav className={styles.firstNavBarPart}>
        <LangSwitcher styling={{ langSwitcher: styles.link }} />
        {renderNavigationLinks(firstNavigationPart)}
      </nav>

      <Link href='/'>
        <Logotype />
      </Link>

      <nav className={styles.secondNavBarPart}>
        {renderNavigationLinks(secondNavigationBarPart)}
        <Burger drawer={<Drawer />} />
      </nav>
    </header>
  )
}
