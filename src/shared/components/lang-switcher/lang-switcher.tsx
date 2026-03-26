'use client'

import type { FC } from 'react'
import { usePathname, Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { getStyles } from './styles'

interface LangSwitcherProps {
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
  const pathname = usePathname()

  const styles = getStyles(props.styling)

  return (
    <div className={styles.localesWrapper}>
      {routing.locales.map(locale => (
        <Link
          key={locale}
          locale={locale}
          href={pathname}
          className={styles.locale}
        >
          {locale.toLocaleUpperCase()}
        </Link>
      ))}
    </div>
  )
}
