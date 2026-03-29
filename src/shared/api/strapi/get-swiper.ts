import { getLocale } from 'next-intl/server'
import { fetchServer } from '@/shared/api/fetch-server'
import type { Swiper } from '@/shared/types'

export const getSwiper = async () => {
  const locale = await getLocale()

  return fetchServer<Swiper>(
    `/swiper?populate[slide][populate]=image&locale=${locale}`,
  )
}
