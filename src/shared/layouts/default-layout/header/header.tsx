import { Link } from '@/i18n/navigation'
import { TextSwapper, Logotype, LangSwitcher } from '@/shared/components'
import { getNavigation, type NavigationLink } from '@/shared/hooks'
import { Burger } from './burger'
import { Drawer } from './drawer'
import { styles } from './styles'

export const Header = async () => {
  const { headerNavigation } = await getNavigation()

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
        {renderNavigationLinks(headerNavigation.firstNavigationPart)}
      </nav>

      <Link href='/'>
        <Logotype />
      </Link>

      <nav className={styles.secondNavBarPart}>
        {renderNavigationLinks(headerNavigation.secondNavigationBarPart)}
        <Burger drawer={<Drawer />} />
      </nav>
    </header>
  )
}
