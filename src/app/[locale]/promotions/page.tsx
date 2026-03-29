import type { FC } from 'react'
import type { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { PromotionsPage } from '@/app-pages'

interface PromotionsProps {
  params: Promise<{ locale: Locale }>
}

const Promotions: FC<PromotionsProps> = async props => {
  const { locale } = await props.params
  setRequestLocale(locale)

  return <PromotionsPage />
}

export default Promotions
