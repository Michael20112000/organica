'use client'

import { type FC, Fragment } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { getStyles } from './styles'

interface LangSwitcherProps {
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
  const pathname = usePathname()
  const currentLocale = useLocale()

  const styles = getStyles(props.styling)

  return (
    <div className={styles.langSwitcher}>
      {routing.locales.map((locale, index) => (
        <Fragment key={locale}>
          <Link
            locale={locale}
            href={pathname}
            className={styles.locale}
            data-active={locale === currentLocale}
          >
            {locale.toLocaleUpperCase()}
          </Link>
          {index !== routing.locales.length - 1 && <span>/</span>}
        </Fragment>
      ))}
    </div>
  )
}
