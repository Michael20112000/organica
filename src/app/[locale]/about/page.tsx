import type { FC } from 'react'
import type { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { AboutPage } from '@/app-pages'

interface AboutProps {
  params: Promise<{ locale: Locale }>
}

const About: FC<AboutProps> = async props => {
  const { locale } = await props.params
  setRequestLocale(locale)

  return <AboutPage />
}

export default About
