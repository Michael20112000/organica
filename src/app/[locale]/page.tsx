import type { FC } from 'react'
import type { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

interface HomeProps {
  params: Promise<{ locale: Locale }>
}

const Home: FC<HomeProps> = async props => {
  const { locale } = await props.params
  setRequestLocale(locale)

  return <>Home</>
}

export default Home
