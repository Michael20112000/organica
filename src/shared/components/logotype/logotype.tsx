import type { ComponentProps, FC } from 'react'
import { getLocale } from 'next-intl/server'
import {
  LogotypeEn,
  LogotypeEnDark,
  LogotypeUk,
  LogotypeUkDark,
} from '@/shared/assets/svg'

interface LogotypeProps extends ComponentProps<'svg'> {
  darkMode?: boolean
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

  return <Logo {...rest} />
}
