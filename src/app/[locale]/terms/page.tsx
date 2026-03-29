import type { FC } from 'react'
import type { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { TermsPage } from '@/app-pages'

interface TermsProps {
  params: Promise<{ locale: Locale }>
}

const Terms: FC<TermsProps> = async props => {
  const { locale } = await props.params
  setRequestLocale(locale)

  return <TermsPage />
}

export default Terms
