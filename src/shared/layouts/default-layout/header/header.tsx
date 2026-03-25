import { Link } from '@/i18n/navigation'
import { Logotype } from '@/shared/components'
import {
  getHeaderNavigationLinks,
  type NavigationLink,
} from './get-header-navigation-links'
// import { Burger } from './burger'
import { styles } from './styles'

export const Header = async () => {
  const {
    firstNavigationPart,
    // secondNavigationBarPart
  } = await getHeaderNavigationLinks()

  const renderNavigationLinks = (links: NavigationLink[]) => {
    return links.map(link => (
      <Link key={link.href} className={styles.link} href={link.href}>
        {link.text}
      </Link>
    ))
  }

  return (
    <header className={styles.header}>
      <nav className={styles.firstNavBarPart}>
        <Link className={styles.link} href='/'>
          UA / EN
        </Link>
        {renderNavigationLinks(firstNavigationPart)}
      </nav>

      <Link href='/'>
        <Logotype className={styles.logotype} />
      </Link>

      {/*<nav className={styles.secondNavBarPart}>*/}
      {/*  {renderNavigationLinks(secondNavigationBarPart)}*/}
      {/*  <Burger />*/}
      {/*</nav>*/}
    </header>
  )
}
