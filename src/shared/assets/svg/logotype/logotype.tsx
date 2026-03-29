import type { ComponentProps, FC } from 'react'
import { getLocale } from 'next-intl/server'
import { LogotypeEn } from './logotype-en'
import { LogotypeEnDark } from './logotype-en-dark'
import { LogotypeUk } from './logotype-uk'
import { LogotypeUkDark } from './logotype-uk-dark'
import { getStyles } from './styles'

interface LogotypeProps extends ComponentProps<'svg'> {
  darkMode?: boolean
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const Logotype: FC<LogotypeProps> = async props => {
  const { darkMode = false, ...rest } = props
  const locale = await getLocale()

  const logos = {
    en: {
      light: LogotypeEn,
      dark: LogotypeEnDark,
    },
    uk: {
      light: LogotypeUk,
      dark: LogotypeUkDark,
    },
  }

  const theme = darkMode ? 'dark' : 'light'
  const Logo = logos[locale][theme]

  const styles = getStyles(props.styling)

  return <Logo className={styles.logotype} {...rest} />
}
