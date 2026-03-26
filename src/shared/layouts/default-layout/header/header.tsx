import { Link } from '@/i18n/navigation'
import { TextSwapper, Logotype, LangSwitcher } from '@/shared/components'
import {
  getHeaderNavigationLinks,
  type NavigationLink,
} from './get-header-navigation-links'
import { Burger } from './burger'
import { styles } from './styles'

export const Header = async () => {
  const { firstNavigationPart, secondNavigationBarPart } =
    await getHeaderNavigationLinks()

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
        <LangSwitcher styling={{ locale: styles.link }} />
        {renderNavigationLinks(firstNavigationPart)}
      </nav>

      <Link href='/'>
        <Logotype className={styles.logotype} />
      </Link>

      <nav className={styles.secondNavBarPart}>
        {renderNavigationLinks(secondNavigationBarPart)}
        <Burger />
      </nav>
    </header>
  )
}
