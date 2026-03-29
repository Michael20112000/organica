import type { FC } from 'react'
import type { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { PolicyPage } from '@/app-pages'

interface PolicyProps {
  params: Promise<{ locale: Locale }>
}

const Policy: FC<PolicyProps> = async props => {
  const { locale } = await props.params
  setRequestLocale(locale)

  return <PolicyPage />
}

export default Policy
